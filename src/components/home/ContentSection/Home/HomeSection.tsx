import { home_data } from "@/constant/content_static_data";
import SectionCardWrapper from "../SectionCardWrapper";
import Button from "@/components/ui/Button";
import { RiDashboardLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { handleCollaborate, handleDownload } from "@/helper/contactHandler";

interface HomeSectionProps {
  innerRef: React.MutableRefObject<null>;
}

const HomeSection = ({ innerRef }: HomeSectionProps) => {
  return (
    <SectionCardWrapper>
      <div
        id="home"
        ref={innerRef}
        className="h-[90vh]  w-full   my-auto flex justify-center items-center p-12  text-white"
      >
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold mb-4">{home_data.title}</h1>
          <div className="bg-secondary mx-auto rounded-full h-2 w-20 mb-8"></div>
          <p className="text-lg  mb-8">{home_data.discription}</p>
          <div className="flex justify-center gap-6">
            <Button onClick={handleDownload}>
              <RiDashboardLine size={24} />
              Download CV
            </Button>
            <Button btnType={"secondary"} onClick={handleCollaborate}>
              <MdMailOutline size={24} />
              Collaborate
            </Button>
          </div>
        </div>
      </div>
    </SectionCardWrapper>
  );
};

export default HomeSection;
