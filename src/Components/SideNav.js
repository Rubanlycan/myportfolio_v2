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

  return (
    <div
      ref={sidebarRef}
      id="mySidebar"
      className="sidebar "
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="title-class  ">
        {isHovered ? (
          <h5 style={{ display: "flex", color: "#fff", margin: "auto" }}>
            Ruban Nadar
          </h5>
        ) : (
          <h1 style={{ color: "#fff" }}>RN</h1>
        )}
      </div>
      <div className="menu-list  ">
        <div className="d-flex flex-column w-100 align-items-center">
          <a
            href="/"
            className={`menu-items w-100  d-flex flex-row justify-content-center pt-3 pb-3 `}
          >
            <VscHome style={{ color: "#fff" }} size={25} className={`me-2 `} />
            {isHovered && <p style={{ color: "#fff" }}>Home</p>}{" "}
          </a>
          <a
            href="/about"
            className={`menu-items w-100  d-flex flex-row justify-content-center pt-3 pb-3`}
          >
            <FiUser style={{ color: "#fff" }} size={25} className="me-2" />
            {isHovered && <p style={{ color: "#fff" }}>About Me</p>}
          </a>

          <a
            href="/skills"
            className={`menu-items w-100  d-flex flex-row justify-content-center pt-3 pb-3`}
          >
            <GoFileCode style={{ color: "#fff" }} size={25} className="me-2" />
            {isHovered && <p style={{ color: "#fff" }}>Projects</p>}
          </a>
          <a
            href="/contact"
            className={`menu-items  w-100 d-flex flex-row justify-content-center pt-3 pb-3`}
          >
            <BsTelephone style={{ color: "#fff" }} size={25} className="me-2" />
            {isHovered && <p style={{ color: "#fff" }}>Contact</p>}{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
