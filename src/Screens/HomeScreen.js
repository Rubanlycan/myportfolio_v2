import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { profile_cover } from "../Services/Images";
import "./home.css";

import IntroComponent from "../Components/IntroComponent";

const HomeScreen = () => {
  const socialRef = useRef(null);

  return (
    <>
      <div className="home">
        <IntroComponent
          ref={socialRef}
          pro_img={profile_cover}
          title={"Hi THERE! I'M"}
          subtitle1={"Ruban"}
          subtitle2={"Nadar"}
          showResume={true}
          about={
            "A Full-Stack Developer(MERN) from mumbai, India \nI'm quietly confident, naturally curious and passionate \nabout creating interractive mobile and web applications."
          }
        />
      </div>
    </>
  );
};

export default HomeScreen;
