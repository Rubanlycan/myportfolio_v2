import React from "react";
import ProjectCard from "../Components/ProjectCard";
import SkillCards from "../Components/SkillCards";

const SkillsScreen = () => {
  return (
    <div className="home">
      <div className="d-flex w-25"></div>
      <SkillCards />
      <ProjectCard />
    </div>
  );
};

export default SkillsScreen;
