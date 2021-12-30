import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import "./home.css";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const HomeScreen = () => {
  const socialRef = useRef(null);

  return (
    <>
      <div className="home">
        <div className="w-50 d-flex justify-content-end align-items-center mx-5">
          <img
            src={require("../assets/cover2.jpeg")}
            alt="new"
            style={{
              width: 300,
              height: 300,
              borderRadius: 150,
              borderRightWidth: 10,
              borderRightStyle: "solid",
              borderRightColor: "#d9c9f1",
            }}
          />
        </div>
        <div className="w-50 d-flex justify-content-start align-items-center mx-5">
          <div>
            <h5>Hi THERE! I'M</h5>
            <div className="d-flex flex-row mt-2">
              <h1 style={{ color: "#8443df" }}>
                Ruban <span style={{ color: "#000" }}>Nadar</span>
              </h1>
            </div>
            <h5 className="mt-2 " style={{ whiteSpace: "pre-wrap" }}>
              {
                "A Full-Stack Developer passionate about \ncreating interractive mobile applications and experience \nin web."
              }
            </h5>
            <div className="d-flex flex-row mt-4 justify-content-between">
              <a href="" className="resume-button">
                <span style={{ fontSize: 20 }}>Resume</span>
              </a>
              <div className="d-flex align-items-center ">
                <a
                  ref={socialRef}
                  className="icons-style d-flex align-items-center justify-content-center mx-4"
                  style={{ backgroundColor: "#fff", height: 40, width: 40 }}
                >
                  <AiFillGithub size={28} className="social-icons" />
                </a>
                <a
                  ref={socialRef}
                  className="icons-style d-flex align-items-center justify-content-center mx-4"
                  style={{ backgroundColor: "#fff", height: 40, width: 40 }}
                >
                  <AiFillInstagram size={28} className="social-icons" />
                </a>
                <a
                  ref={socialRef}
                  className="icons-style d-flex align-items-center justify-content-center mx-4 "
                  style={{ backgroundColor: "#fff", height: 40, width: 40 }}
                >
                  <AiFillLinkedin size={28} className="social-icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
