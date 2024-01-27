export const buttonVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
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
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  }

  export const fadeInUpAnimation ={
    initial:{
      opacity:0,
      y:50,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition:{
        staggerChildren:0.3,
        duration:0.3,
      }
    },
  }