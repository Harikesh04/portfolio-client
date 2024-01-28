import { home_data } from "@/constant/content_static_data";
import SectionCardWrapper from "../SectionCardWrapper";
import Button from "@/components/ui/Button";
import { RiDashboardLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { handleCollaborate, handleDownload } from "@/helper/contactHandler";
import { motion } from "framer-motion";
import { fadeInUpAnimation, textVariants } from "@/components/framer-motion/variants";

interface HomeSectionProps {
  innerRef: React.MutableRefObject<null>;
}

const HomeSection = ({ innerRef }: HomeSectionProps) => {
  return (
    <SectionCardWrapper>
      <div
        id="home"
        ref={innerRef}
        className="min-h-[90vh] flex justify-center items-center p-8 md:p-12 text-white"
      >
        <div className="max-w-4xl text-center">
          <motion.h1 {...textVariants} className="text-3xl md:text-5xl font-extrabold mb-4">
            {home_data.title}
          </motion.h1>
          <motion.div {...fadeInUpAnimation} className="bg-secondary mx-auto rounded-full h-2 w-16 md:w-20 mb-8"></motion.div>
          <motion.div {...fadeInUpAnimation} className="text-base md:text-lg mb-8">
            {home_data.discription}
          </motion.div>
          <motion.div {...fadeInUpAnimation} className="flex flex-col md:flex-row justify-center gap-6">
            <Button onClick={handleDownload}>
              <RiDashboardLine size={24} />
              Download CV
            </Button>
            <Button btnType={"secondary"} onClick={handleCollaborate}>
              <MdMailOutline size={24} />
              Collaborate
            </Button>
          </motion.div>
        </div>
      </div>
    </SectionCardWrapper>
  );
};

export default HomeSection;
