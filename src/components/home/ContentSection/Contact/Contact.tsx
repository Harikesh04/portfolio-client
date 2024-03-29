import React from "react";
import SectionCardWrapper from "../SectionCardWrapper";
import { contact_data } from "@/constant/content_static_data";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { fadeInUpAnimation } from "@/components/framer-motion/variants";

interface ContactSectionProps {
  innerRef: React.MutableRefObject<null>;
}

const Contact = ({ innerRef }: ContactSectionProps) => {
  return (
    <SectionCardWrapper altered={true}>
      <div
        id="contact"
        ref={innerRef}
        className="min-h-[90vh] flex flex-col w-full items-start p-8 md:p-12 text-white"
      >
        <div>
          <p className="text-xl md:text-3xl font-bold mb-2">{contact_data.title}</p>
          <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
        </div>
        <motion.div {...fadeInUpAnimation} className="text-base md:text-xl font-bold">
          {contact_data.description}
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-start w-full justify-between mt-10">
          <div className="w-full md:w-1/2 flex flex-col">
            {contact_data.contact_info.map((item, index) => (
              <motion.div {...fadeInUpAnimation} key={index} className="flex gap-5 py-3 items-center">
                <div className="text-white p-3 rounded-full text-xl bg-secondary">
                  <item.icon />
                </div>
                <div className="">
                  <p className="font-bold">{item.title}</p>
                  <p>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUpAnimation} className="w-full md:w-1/2 h-full">
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </SectionCardWrapper>
  );
};

export default Contact;
