import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Button = ({ children, variant = 'primary', onClick, href, to, className = '' }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg hover:shadow-primary/50 hover:-translate-y-1",
    secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
    white: "bg-white text-primary shadow-md hover:shadow-lg hover:-translate-y-1"
  };

  if (to) {
    const MotionLink = motion(Link);
    return (
      <MotionLink
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </MotionLink>
    );
  }

  const Component = href ? motion.a : motion.button;
  
  return (
    <Component 
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Component>
  );
};
