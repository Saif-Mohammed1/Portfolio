import React from "react";
import Header from "../header/header.component";
import About from "../about/about.component";
import Skills from "../skills/skills.component";
import Projects from "../projects/projects.component";
import Contact from "../contact/contact.component";
import Footer from "../footer/footer.component";
import Services from "../service/service.component";
import NewSkills from "../newSkills/newSkills.component";

const Collection = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <NewSkills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Collection;
