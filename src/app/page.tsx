import ContentBar from "@/components/home/ContentSection/ContentBar";
import SidbeBar from "@/components/home/SideBar/SideBar";


export default function Home() {
  return (
   <section className="flex h-full w-full ">
    <SidbeBar/>
    <ContentBar/>
   
   </section>
  );
}
