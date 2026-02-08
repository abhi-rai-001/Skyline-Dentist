import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Skyline Dental Logo" className="h-10 w-10 object-contain" />
            <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white">Skyline Dental</h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-semibold text-text-main/80 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" to="/">Home</Link>
            <Link className="text-sm font-semibold text-text-main/80 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" to="/services">Services</Link>
            <a className="text-sm font-semibold text-text-main/80 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" href="/#about">About Us</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link className="hidden sm:flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-hover hover:scale-105 active:scale-95" to="/booking">
              Book Appointment
            </Link>
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-white"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (Added Logic) */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-background-light p-4">
           <nav className="flex flex-col gap-4">
            <a className="text-sm font-semibold text-text-main/80" href="#">Home</a>
            <a className="text-sm font-semibold text-text-main/80" href="/services">Services</a>
            <a className="text-sm font-semibold text-text-main/80" href="/#about">About Us</a>
            <a className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg" href="#">
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
