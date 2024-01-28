import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import {
  cardsAnimation,
  imageVariants,
  overlayVariants,
} from "../framer-motion/variants";

interface TCard {
  title: string;
  name: string;
  link: string;
  icon: string;
}

const Card: React.FC<{ data: TCard }> = ({ data }) => {
  return (
    <motion.div
      className="relative group  rounded-lg h-[23vmax] w-[23vmax] overflow-hidden shadow-lg"
      // variants={cardVariants}
      {...cardsAnimation}
    >
      {/* Default Image */}
      <motion.div
        className="w-full h-full cursor-pointer bg-cover bg-center relative overflow-hidden"
        variants={imageVariants}
        initial="normal"
        whileHover="zoomed"
      >
        <Image
          src={data.icon}
          placeholder="blur"
          alt={data.title}
          layout="fill"
          objectFit="cover"
          quality={90}
        />

        <motion.div
          className="absolute hidden top-0 left-0 w-full h-full bg-secondary  p-8 flex flex-col justify-end transition-opacity duration-300 group-hover:block"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          whileHover="visible"
        >
          {/* Project Details */}
          <motion.h2
            className="text-xl font-bold mb-2"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.title}
          </motion.h2>
          <motion.p
            className="text-lg mb-4"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {data.name}
          </motion.p>
          <motion.a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-10 w-10 absolute bottom-12 flex items-center  justify-center text-secondary bg-white p-2 rounded-full text-lg">
              <HiExternalLink />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
