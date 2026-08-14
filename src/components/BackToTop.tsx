import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer animate-fadeIn"
      aria-label="Back to top"
      id="floating-back-to-top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
