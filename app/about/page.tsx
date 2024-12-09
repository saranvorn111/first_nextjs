import AboutUs from "@/components/AboutUs";
import Image from "next/image";
import React from "react";
import cover from "@/public/images/cm3.jpg"

function About() {
  return (
    <div>
      <AboutUs></AboutUs>
      <Image
        src={cover}
        alt="Beautiful scenery"
        layout="responsive" 
        width={1200} 
        objectFit="cover" 
        className="w-full mt-10"
        quality={100}
      />
    </div>
  );
}

export default About;
