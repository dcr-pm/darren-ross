

import React, { useState, useEffect, useCallback } from 'react';
import { Player, Category, Question, GameScreen, Prize, SessionStats } from './types';
import { CATEGORIES, INITIAL_LEADERBOARD, PRIZES, TIMER_DURATION, QUESTIONS_PER_ROUND, EINSTEIN_CHALLENGE_QUESTIONS } from './constants';
import { ALL_QUESTIONS } from './questions';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import PlayerNameModal from './components/PlayerNameModal';
import CategorySelectionScreen from './components/CategorySelectionScreen';
import QuestionScreen from './components/QuestionScreen';
import Leaderboard from './components/Leaderboard';
import PrizeAlert from './components/PrizeAlert';
import FeedbackModal from './components/FeedbackModal';
import ScoreScreen from './components/ScoreScreen';

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const App: React.FC = () => {
  const [screen, setScreen] = useState<GameScreen>('welcome');
  const [player, setPlayer] = useState<Player | null>(null);
  
  const [leaderboard, setLeaderboard] = useState<Player[]>(() => {
    try {
      const savedLeaderboard = localStorage.getItem('marketingCloudQuizzerLeaderboard');
      return savedLeaderboard ? JSON.parse(savedLeaderboard) : INITIAL_LEADERBOARD;
    } catch (error) {
      console.error("Could not load leaderboard from localStorage", error);
      return INITIAL_LEADERBOARD;
    }
  });

  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [questionQueue, setQuestionQueue] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  const [unlockedPrizes, setUnlockedPrizes] = useState<Prize[]>([]);
  const [prizeAlert, setPrizeAlert] = useState<Prize | null>(null);
  
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackQuestion, setFeedbackQuestion] = useState<Question | null>(null);
  const [sessionStats, setSessionStats] = useState<SessionStats | null>(null);
  const [sessionPoints, setSessionPoints] = useState(0);
  const [sessionCorrectAnswers, setSessionCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questionQueue[currentQuestionIndex];

  useEffect(() => {
    try {
      localStorage.setItem('marketingCloudQuizzerLeaderboard', JSON.stringify(leaderboard));
    } catch (error) {
      console.error("Could not save leaderboard to localStorage", error);
    }
  }, [leaderboard]);
  
  const updateLeaderboard = useCallback((currentPlayer: Player) => {
    const otherPlayers = leaderboard.filter(p => p.name !== currentPlayer.name);
    const newLeaderboard = [...otherPlayers, currentPlayer];
    
    newLeaderboard.sort((a, b) => b.points - a.points);
    
    setLeaderboard(newLeaderboard);
  }, [leaderboard]);

  useEffect(() => {
    if (player) {
      const newLevel = Math.floor(player.points / 100) + 1;
      if (newLevel !== player.level) {
        setPlayer(p => p ? { ...p, level: newLevel } : null);
      }
      
      const newPrizes = PRIZES.filter(prize => player.points >= prize.points);
      const alreadyUnlockedNames = unlockedPrizes.map(p => p.name);
      const newlyUnlocked = newPrizes.filter(np => !alreadyUnlockedNames.includes(np.name));

      if (newlyUnlocked.length > 0) {
        setUnlockedPrizes(prev => [...prev, ...newlyUnlocked]);
        setPrizeAlert(newlyUnlocked[0]);
      }
      
      updateLeaderboard(player);
    }
  }, [player, unlockedPrizes, updateLeaderboard]);

  const handleStartGame = () => setScreen('name_entry');

  const handleNameSubmit = (name: string) => {
    setPlayer({ name, points: 0, level: 1 });
    setScreen('category_selection');
  };
  
  const handleSelectCategory = (categoryId: string) => {
    let categoryInfo: Omit<Category, 'questions'> | undefined;
    let questions: Question[] = [];
    let numQuestions = QUESTIONS_PER_ROUND;

    if (categoryId === 'random') {
      categoryInfo = { id: 'random', name: 'Random', description: '', icon: 'fa-shuffle', color: '#777', gradient: 'from-gray-500 to-gray-700' };
      questions = shuffleArray(ALL_QUESTIONS).slice(0, numQuestions);
    } else if (categoryId === 'einstein_challenge') {
      const baseCatInfo = CATEGORIES.find(c => c.id === 'einstein');
      numQuestions = EINSTEIN_CHALLENGE_QUESTIONS;
       if (baseCatInfo) {
        categoryInfo = {...baseCatInfo, name: 'Einstein Challenge' };
        const einsteinQuestions = ALL_QUESTIONS.filter(q => q.categoryId === 'einstein');
        questions = shuffleArray(einsteinQuestions).slice(0, numQuestions);
       }
    } else {
      categoryInfo = CATEGORIES.find(c => c.id === categoryId);
      if (categoryInfo) {
        const categoryQuestions = ALL_QUESTIONS.filter(q => q.categoryId === categoryId);
        questions = shuffleArray(categoryQuestions).slice(0, numQuestions);
      }
    }

    if (categoryInfo && questions.length > 0) {
        setSessionPoints(0);
        setSessionCorrectAnswers(0);
        setCurrentCategory({ ...categoryInfo, questions });
        setQuestionQueue(questions);
        setCurrentQuestionIndex(0);
        setIsAnswered(false);
        setScreen('playing');
    } else {
      alert(`Oops! There are no questions available for this category yet. Please try another one.`);
      setScreen('category_selection');
    }
  };

  const handleAnswer = (isCorrect: boolean, timeLeft: number) => {
    if (!player) return;
    setIsAnswered(true);

    if (isCorrect) {
      const basePoints = 10;
      const timeBonus = Math.floor(timeLeft / 3);
      let totalPoints = basePoints + timeBonus;

      if (currentCategory?.id === 'einstein' || currentCategory?.id === 'einstein_challenge') {
        totalPoints = Math.round(totalPoints * 1.5);
      }
      
      setPlayer(p => p ? { ...p, points: p.points + totalPoints } : null);
      setSessionPoints(s => s + totalPoints);
      setSessionCorrectAnswers(c => c + 1);
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  };
  
  const handleEndQuiz = () => {
    if (!currentCategory) return;
    
    const questionsAttempted = isAnswered ? currentQuestionIndex + 1 : currentQuestionIndex;
    
    setSessionStats({
      categoryName: currentCategory.name,
      pointsEarned: sessionPoints,
      correctAnswers: sessionCorrectAnswers,
      totalQuestions: questionsAttempted
    });
    
    setScreen('score');
    
    setCurrentCategory(null);
    setQuestionQueue([]);
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionQueue.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
      setIsAnswered(false);
    } else {
      handleEndQuiz();
    }
  };

  const handleShowLeaderboard = () => setScreen('leaderboard');
  const handleBackToCategories = () => setScreen('category_selection');
  
  const handleNavigateToCategories = () => {
    if (screen === 'playing') {
      if (window.confirm('Are you sure you want to return to the categories page? Your current quiz progress will be lost.')) {
        setScreen('category_selection');
      }
    } else {
      setScreen('category_selection');
    }
  };

  const handleOpenFeedback = (question: Question) => {
    setFeedbackQuestion(question);
    setFeedbackModalOpen(true);
  };
  
  const handleCloseFeedback = () => {
    setFeedbackModalOpen(false);
    setFeedbackQuestion(null);
  };
  
  const handlePlayAgain = () => {
      if (sessionStats?.categoryName) {
         const categoryId = sessionStats.categoryName === 'Einstein Challenge'
          ? 'einstein_challenge'
          : CATEGORIES.find(c => c.name === sessionStats.categoryName)?.id || 'random';
         handleSelectCategory(categoryId);
      } else {
          setScreen('category_selection');
      }
  };

  const renderScreen = () => {
    switch (screen) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStartGame} />;
      case 'name_entry':
        return <PlayerNameModal onNameSubmit={handleNameSubmit} />;
      case 'category_selection':
        return <CategorySelectionScreen onSelectCategory={handleSelectCategory} onShowLeaderboard={handleShowLeaderboard} />;
      case 'playing':
        if (currentCategory && currentQuestion) {
          return <QuestionScreen 
            category={currentCategory} 
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questionQueue.length}
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
            onExit={handleEndQuiz}
            onOpenFeedback={handleOpenFeedback}
            />;
        }
        return null;
      case 'leaderboard':
        return <Leaderboard players={leaderboard.slice(0,10)} currentPlayerName={player?.name || null} onBack={handleBackToCategories} />;
      case 'score':
        if (sessionStats) {
           return <ScoreScreen stats={sessionStats} player={player} onPlayAgain={handlePlayAgain} onNewCategory={handleBackToCategories} onShowLeaderboard={handleShowLeaderboard} />;
        }
        return null;
      default:
        return <WelcomeScreen onStart={handleStartGame} />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen bg-cover bg-fixed" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}>
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-fall { animation: fall linear 1 forwards; }

        @keyframes bounce-in {
          0% { transform: scale(0.5) translateX(100%); opacity: 0; }
          60% { transform: scale(1.1) translateX(0); opacity: 1; }
          80% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out forwards; }

         @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
        
        @keyframes pulse-light {
           0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.4); }
           50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
        }
        .animate-pulse-light { animation: pulse-light 2.5s infinite ease-in-out; }

        @keyframes float {
          0% { transform: translateY(20px); opacity: 0; }
          50% { opacity: 0.15; }
          100% { transform: translateY(-20px); opacity: 0; }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
      `}</style>
      <Header player={player} onNavigateToCategories={handleNavigateToCategories} screen={screen} />
      <main className="container mx-auto flex-grow flex flex-col justify-center">
        {renderScreen()}
        {prizeAlert && (
           <PrizeAlert key={prizeAlert.name} prize={prizeAlert} onClose={() => setPrizeAlert(null)} />
        )}
         <FeedbackModal isOpen={isFeedbackModalOpen} onClose={handleCloseFeedback} question={feedbackQuestion} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
