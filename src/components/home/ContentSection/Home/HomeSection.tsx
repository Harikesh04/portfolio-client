import { home_data } from "@/constant/content_static_data";
import SectionCardWrapper from "../SectionCardWrapper";
import Button from "@/components/ui/Button";
import { RiDashboardLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";

interface HomeSectionProps{
  innerRef:React.MutableRefObject<null>;

} 

const HomeSection = ({innerRef}:HomeSectionProps) => {

  const handleDownload=()=>{
    const cvFileUrl = `https://www.googleapis.com/drive/v3/files/${process.env.FILE_ID}?alt=media`;;
    const link = document.createElement('a');
    link.href = cvFileUrl;
    link.download = 'Harikesh_Singh.pdf';

    // Append the anchor to the document
    document.body.appendChild(link);

    // Trigger a click on the anchor to initiate the download
    link.click();

    // Remove the anchor from the document
    document.body.removeChild(link);

  }
  return (
    <SectionCardWrapper>
      <div id="home" ref={innerRef} className="h-[90vh]  flex  items-center p-12  text-white">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold mb-4">{home_data.title}</h1>
          <div className="bg-secondary mx-auto rounded-full h-2 w-20 mb-8"></div>
          <p className="text-lg mb-8">{home_data.discription}</p>
          <div className="flex justify-center gap-6">
            <Button onClick={handleDownload} >
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

export default HomeSection;
