import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Agents from './components/Agents';
import Speaking from './components/Speaking';

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

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <ScrollToTop />
      <Header />
      <main className="flex-grow w-full max-w-page mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
