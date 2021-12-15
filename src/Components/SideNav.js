import React, { useRef, useState, useEffect } from "react";
import "./index.css";

import { FiUser } from "react-icons/fi";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { GoFileCode } from "react-icons/go";

const SideNav = () => {
  const sidebarRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    toggleSidebar();
  }, [isHovered]);
  const toggleSidebar = () => {
    if (isHovered) {
      sidebarRef.current.style.width = "200px";
    } else sidebarRef.current.style.width = "85px";
  };
  return (
    <div
      ref={sidebarRef}
      id="mySidebar"
      className="sidebar "
      onMouseOver={() => setIsHovered(!isHovered)}
      onMouseOut={() => setIsHovered(!isHovered)}
    >
      <div className="d-flex h-25 justify-content-center align-items-start ">
        {!isHovered ? (
          <h1 style={{ color: "#fff" }}>RN</h1>
        ) : (
          <h5 style={{ color: "#fff" }}>Ruban Nadar</h5>
        )}
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column ">
          <div className=" d-flex flex-row mt-3 mb-3">
            <VscHome style={{ color: "#fff" }} size={25} className="me-2" />
            {isHovered && <p style={{ color: "#fff" }}>Home</p>}
          </div>
          <div className="d-flex flex-row  mt-3 mb-3">
            <FiUser style={{ color: "#fff" }} size={25} className="me-2" />
            {isHovered && <p style={{ color: "#fff" }}>About Me</p>}
          </div>
          <div className="d-flex flex-row  mt-3 mb-3">
            <GoFileCode style={{ color: "#fff" }} size={25} className="me-2" />
            {isHovered && <p style={{ color: "#fff" }}>Skills</p>}
          </div>
          <div className="d-flex flex-row mt-3 mb-3">
            <IoAlbumsOutline
              style={{ color: "#fff" }}
              size={25}
              className="me-2"
            />
            {isHovered && <p style={{ color: "#fff" }}>Projects</p>}
          </div>
          <div className="d-flex flex-row  mt-3 mb-3">
            <BsTelephone style={{ color: "#fff" }} size={25} className="me-2" />
            {isHovered && <p style={{ color: "#fff" }}>Contact</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
