// Framer Motion Variants for OneCoreX
import { Variants } from 'framer-motion';

// Fade In Up
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Fade In Scale
export const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// Slide In From Left
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

// Slide In From Right
export const slideInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
};

// Stagger Container
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger Item
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Hero Text Animation
export const heroText: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Card Hover
export const cardHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Image Reveal
export const imageReveal: Variants = {
  initial: { scale: 1.2, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Page Transition
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Nav Link Underline
export const navLinkUnderline: Variants = {
  initial: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Letter Animation (for text reveals)
export const letterAnimation: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.03,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

// Parallax Y
export const parallaxY = (y: number): Variants => ({
  initial: { y: 0 },
  animate: {
    y,
    transition: {
      duration: 0,
    },
  },
});

// Default transition settings
export const defaultTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

export const smoothTransition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
};

export const springTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};
