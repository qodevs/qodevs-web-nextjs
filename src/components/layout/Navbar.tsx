"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navbar({ lang, dict }: { lang: string, dict: any }) {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial theme from html class
    setIsDark(document.documentElement.classList.contains('dark'));
    
    // Check scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${isScrolled ? 'bg-background/85 backdrop-blur-xl border-b border-black/5 dark:border-white/5' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center">
          <Image 
            src="/logo-final.png" 
            alt="QODEVS" 
            width={140} 
            height={30} 
            className="h-12 w-auto object-contain" 
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] text-muted-foreground">
          <Link href={`/${lang}`} className="hover:text-foreground transition-colors">{dict.home}</Link>
          <Link href={`/${lang}/about`} className="hover:text-foreground transition-colors">{dict.about}</Link>
          <Link href={`/${lang}/services`} className="hover:text-foreground transition-colors">{dict.services}</Link>
          <Link href={`/${lang}/contact`} className="hover:text-foreground transition-colors">{dict.contact}</Link>
        </div>

        <div className="flex items-center gap-4">
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 mr-2">
            <Link href="/en" className={`text-xs font-bold ${lang === 'en' ? 'text-primary' : 'text-muted-foreground'}`}>EN</Link>
            <span className="text-muted-foreground/30">|</span>
            <Link href="/de" className={`text-xs font-bold ${lang === 'de' ? 'text-primary' : 'text-muted-foreground'}`}>DE</Link>
          </div>

          <button 
            onClick={toggleTheme}
            className="hidden md:flex p-2.5 rounded-full bg-card border border-border text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link href={`/${lang}/contact`} className="hidden md:flex px-6 py-2.5 rounded-full bg-primary text-white hover:opacity-90 text-[13px] font-medium transition-opacity">
            Contact
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg py-6 px-6 flex flex-col gap-6">
          <Link href={`/${lang}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground">{dict.home}</Link>
          <Link href={`/${lang}/about`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground">{dict.about}</Link>
          <Link href={`/${lang}/services`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground">{dict.services}</Link>
          <Link href={`/${lang}/contact`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground">{dict.contact}</Link>
          
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground">Theme</span>
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-card border border-border text-foreground hover:bg-muted transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
