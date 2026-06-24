'use client';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ArrowUp } from 'lucide-react';
import { RootState } from '@/lib/store/store';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const isOpen = useSelector((state: RootState) => state.chatbot.isOpen);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showButton = isVisible && !isOpen;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-30 p-3 rounded-full glass-strong transition-all duration-300 hover:scale-110 ${
        showButton ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-foreground" />
    </button>
  );
}