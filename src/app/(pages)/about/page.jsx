import AboutHero from "@/app/components/about/AboutHero";
import Commitment from "@/app/components/about/Commitment";
import Leaders from "@/app/components/about/Leaders";
import Values from "@/app/components/about/Values";
import Events from "@/app/components/home/Events";
import React from "react";

const page = () => {
  return (
    <>
      <AboutHero />
      <Values />
      <Commitment />
      <Leaders />
      <Events />
    </>
  );
};

export default page;
