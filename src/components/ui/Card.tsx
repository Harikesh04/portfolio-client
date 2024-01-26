import React from "react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

interface TCard {
  title: string;
  name: string;
  link: string;
  icon: string;
}

const Card: React.FC<{ data: TCard }> = ({ data }) => {

  const cardVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 0.85, y: 0 },
  };

  const imageVariants = {
    normal: { scale: 1 },
    zoomed: { scale: 1.05 },
  };

  return (
    <motion.div
      className="relative group  rounded-lg h-[20vmax] w-[20vmax] overflow-hidden shadow-lg"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {/* Default Image */}
      <motion.div
        className="w-full h-full cursor-pointer bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url(${data.icon})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        variants={imageVariants}
        initial="normal"
        whileHover="zoomed"
      >
        {/* Overlay with Project Details */}
        <motion.div
          className="absolute hidden top-0 left-0 w-full h-full bg-secondary  p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:block"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          whileHover="visible"
        >
          {/* Project Details */}
          <motion.h2 className="text-xl font-bold mb-2" animate={{ y: 0, opacity: 1 }} initial={{ y: 20, opacity: 0 }} transition={{ duration: 0.5 }}>
            {data.title}
          </motion.h2>
          <motion.p className="text-lg mb-4" animate={{ y: 0, opacity: 1 }} initial={{ y: 20, opacity: 0 }} transition={{ duration: 0.5 }}>
          {data.name}
          </motion.p>
          <motion.a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
           
            animate={{ y: 0, opacity: 1 }} initial={{ y: 20, opacity: 0 }} transition={{ duration: 0.5 }}
          >
            <div  className="h-10 w-10 flex items-center  justify-center text-secondary bg-white p-2 rounded-full text-lg">

            <HiExternalLink/>
            </div>
            
            
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
