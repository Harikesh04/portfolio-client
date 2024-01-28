export const buttonVariants = {
  hidden: {
    scale: 1, 
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  whileTap: {
    scale: 0.95,
  },
};

export const dashboardVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 110,
    },
  },
  whileTap: {
    scale: 0.95,
  },
};

export const textVariants = {
  initial: {
    y: "80%",
    opacity: 0, // Start with opacity 0 for a fade-in effect
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeInUpAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const cardsAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8, // Initial scale adjusted for a more subtle effect
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 0.5, ease: "easeOut" },
      scale: { duration: 0.4, ease: "easeOut" },
    },
  },
};

export const overlayVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 0.9, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const imageVariants = {
  normal: { scale: 1 },
  zoomed: {
    scale: 1.1, // Adjusted for a more noticeable zoom effect
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
