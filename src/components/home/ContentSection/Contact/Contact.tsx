import React from "react";
import SectionCardWrapper from "../SectionCardWrapper";

const Contact = () => {
  return (
    <SectionCardWrapper altered={true}>
      <div id='contact' className="h-[90vh]  flex  p-12  text-black">
        <div>
          <p className="text-3xl font-bold mb-2">Get in touch</p>
          <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
        </div>
      </div>
    </SectionCardWrapper>
  );
};

export default Contact;
