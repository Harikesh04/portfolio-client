import { home_data } from "@/constant/content_static_data";
import SectionCardWrapper from "../SectionCardWrapper";
import Button from "@/components/ui/Button";
import { RiDashboardLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";

const Home = () => {
  return (
    <SectionCardWrapper>
      <div className="h-[90vh]  flex justify-center items-center p-6  text-white">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold mb-4">{home_data.title}</h1>
          <div className="bg-secondary mx-auto rounded-full h-2 w-20 mb-8"></div>
          <p className="text-lg mb-8">{home_data.discription}</p>
          <div className="flex justify-center gap-6">
            <Button >
              <RiDashboardLine size={24} />
              Download CV
            </Button>
            <Button btnType={'secondary'} >
              <MdMailOutline size={24} />
              Collaborate
            </Button>
          </div>
        </div>
      </div>
    </SectionCardWrapper>
  );
};

export default Home;
