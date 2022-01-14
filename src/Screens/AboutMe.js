import React, { useRef } from "react";
import IntroComponent from "../Components/IntroComponent";

const AboutMe = () => {
  const socialRef = useRef(null);
  return (
    <div className="home">
      <IntroComponent
        ref={socialRef}
        pro_img={require("../assets/cover2.jpeg")}
        title={"About"}
        subtitle1={"Ruban"}
        subtitle2={"Nadar"}
        showResume={false}
        about={`I'm from computer science background MERN Stack developer\nhaving 4+ years experience in Hybrid mobile Apps and Web Apps\ndevelopment worked in different types of projects seeking forward to\nenhance my skills and desire to develope mermizing applications`}
      />
    </div>
  );
};

export default AboutMe;
