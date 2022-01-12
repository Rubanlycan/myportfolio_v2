import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import "./home.css";

import IntroComponent from "../Components/IntroComponent";

const HomeScreen = () => {
  const socialRef = useRef(null);

  return (
    <>
      <div className="home">
        <IntroComponent
          ref={socialRef}
          pro_img={require("../assets/cover2.jpeg")}
          title={"Hi THERE! I'M"}
          subtitle1={"Ruban"}
          subtitle2={"Nadar"}
          showResume={true}
          about={
            "A Full-Stack Developer passionate about \ncreating interractive mobile applications and experience \nin web."
          }
        />
      </div>
    </>
  );
};

export default HomeScreen;
