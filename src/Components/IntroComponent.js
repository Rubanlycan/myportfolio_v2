import React from "react";
import { Link } from "react-router-dom";
import FontIcons from "../Common/FontIcons";

const IntroComponent = React.forwardRef(
  ({ pro_img, about, title, subtitle1, subtitle2, showResume }, ref) => {
    return (
      <>
        <div className="w-50 d-flex justify-content-end align-items-center mx-5">
          <img
            src={pro_img}
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
            <h5>{title}</h5>
            <div className="d-flex flex-row mt-2">
              <h1 style={{ color: "#8443df" }}>
                {subtitle1} <span style={{ color: "#000" }}>{subtitle2}</span>
              </h1>
            </div>
            <h5 className="mt-2 " style={{ fontSize: 18, whiteSpace: "pre-wrap" }}>
              {about}
            </h5>
            {showResume && (
              <div className="d-flex flex-row mt-4 justify-content-between mobileSocial">
                <span style={{ fontSize: 20, fontWeight: 'bold' }}>Connect</span>
                {/* <a href={"../Common/ruban_resume.pdf"} className="resume-button" download>
                  <span style={{ fontSize: 20 }}>Resume</span>
                </a> */}
                <div className="d-flex align-items-center ">
                  <a
                    ref={ref}
                    href="https://github.com/Rubanlycan"
                    target={"_blank"}
                    className="icons-style d-flex align-items-center justify-content-center mx-4"
                    style={{ backgroundColor: "#fff", height: 40, width: 40 }}
                  >
                    <FontIcons
                      type={"AiFillGithub"}
                      size={28}
                      className="social-icons"
                    />
                  </a>
                  <a
                    ref={ref}
                    href="https://www.instagram.com/ruban_devware/"
                    target={"_blank"}
                    className="icons-style d-flex align-items-center justify-content-center mx-4"
                    style={{ backgroundColor: "#fff", height: 40, width: 40 }}
                  >
                    <FontIcons
                      type={"AiFillInstagram"}
                      size={28}
                      className="social-icons"
                    />
                  </a>
                  <a
                    ref={ref}
                    href="https://www.linkedin.com/in/ruban-dharmaraj-661b4619a/"
                    target={"_blank"}
                    className="icons-style d-flex align-items-center justify-content-center mx-4 "
                    style={{ backgroundColor: "#fff", height: 40, width: 40 }}
                  >
                    <FontIcons
                      type={"AiFillLinkedin"}
                      size={28}
                      className="social-icons"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
);

export default IntroComponent;
