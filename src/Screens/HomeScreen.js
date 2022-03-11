import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { profile_cover } from "../Services/Images";

import "./home.css";

import IntroComponent from "../Components/IntroComponent";

const HomeScreen = () => {
  const socialRef = useRef(null);

  return (
    <>
      <div className={`home `}>
        <IntroComponent
          ref={socialRef}
          pro_img={profile_cover}
          title={"Hi THERE! I'M"}
          subtitle1={"Ruban"}
          subtitle2={"Nadar"}
          showResume={true}
          about={
            "A Full-Stack Developer(MERN) from mumbai, India. I've done \nremote work for agencies, consulted for startups and colloborated \nwith talented people's. I'm quietly confident, naturally curious and \npassionate about creating interractive mobile and web applications."
          }
        />
        {/* <div className="d-flex justify-content-center align-self-center bot-bg" >
          <div className="d-flex justify-content-center align-self-center" style={{ position: 'relative', bottom: 0, right: -2, width: 15, height: 20, backgroundColor: "#fff", borderRadius: 10 }}>
            <div className="d-flex justify-content-center align-self-center bot" >
              <div className="d-flex justify-content-center align-self-center" style={{ position: 'relative', bottom: 0, right: 5, width: 6, height: 6, backgroundColor: "#000", borderRadius: 3 }}>

              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-self-center" style={{ position: 'relative', bottom: 0, left: 8, right: 0, width: 15, height: 20, backgroundColor: "#fff", borderRadius: 10 }}>
            <div className="d-flex justify-content-center align-self-center bot" >
              <div className="d-flex justify-content-center align-self-center" style={{ position: 'relative', bottom: 0, right: 5, width: 6, height: 6, backgroundColor: "#000", borderRadius: 3 }}>

              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-self-center" style={{ position: 'relative', bottom: -18, right: 15, width: 10, height: 4, backgroundColor: "pink", borderRadius: 10 }}>

          </div>
        </div> */}
      </div>
    </>
  );
};

export default HomeScreen;
