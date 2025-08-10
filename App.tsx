import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';

// Fix for TypeScript error: "Property 'elevenlabs-convai' does not exist on type 'JSX.IntrinsicElements'".
// The type declaration for this custom element is placed here to ensure it's recognized by the TypeScript compiler,
// as the original custom.d.ts file may not be included in the build scope.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
      };
    }
  }
}

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
      <elevenlabs-convai agent-id="agent_8901k17b9zxvfp3rey53t7bfg67w"></elevenlabs-convai>
    </div>
  );
};

export default App;
