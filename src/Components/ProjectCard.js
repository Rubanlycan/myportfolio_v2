import React, { useRef } from "react";

const SKILLS = [
  {
    skill_name: "React-Native",
    skill_rate: "70%",
  },
  {
    skill_name: "Reactjs",
    skill_rate: "70%",
  },
  {
    skill_name: "Javascript/Es6",
    skill_rate: "60%",
  },
  {
    skill_name: "Nodejs",
    skill_rate: "60%",
  },
  {
    skill_name: "Native Android ",
    skill_rate: "40%",
  },
  {
    skill_name: "Java",
    skill_rate: "40%",
  },
];
const ProjectCard = () => {
  const progressAnimate = useRef(null);
  React.useEffect(() => {
    console.log(progressAnimate);
  }, []);

  return (
    <div className="w-100 d-flex ">
      <div
        className="card-style px-3 "
        style={{
          justifyContent: "space-evenly",
          height: 420,
          width: 380,
        }}
      >
        <div className="project-list card-style">
          <p className="project-language">Native Android Apps</p>
        </div>
        <div className="project-list card-style">
          <p className="project-language">React Native Apps</p>
        </div>
        <div className="project-list card-style">
          <p className="project-language">Web Apps</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
