

import ContentBar from "@/components/home/ContentSection/ContentBar";
import Sidebar from "@/components/home/SideBar/SideBar";
import React from "react";


export default function Home() {


  return (
    <section className="flex h-full w-full">
      <Sidebar />
      <ContentBar/>
      
    </section>
  );
}
