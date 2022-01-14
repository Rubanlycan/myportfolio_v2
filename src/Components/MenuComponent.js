import React from "react";
import { FiUser } from "react-icons/fi";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";
import { GoFileCode } from "react-icons/go";
export const MenuComponent_Active = () => {
  return (
    <div className="menu-list  ">
      <div className="d-flex flex-column w-100 align-items-center">
        <a
          href="/"
          className={`menu-items w-100  d-flex flex-row justify-content-center pt-3 pb-3 `}
        >
          <VscHome style={{ color: "#fff" }} size={25} className={`me-2 `} />
          <p style={{ color: "#fff" }}>Home</p>{" "}
        </a>
        <a
          href="/skills"
          className={`menu-items w-100  d-flex flex-row justify-content-center pt-3 pb-3`}
        >
          <FiUser style={{ color: "#fff" }} size={25} className="me-2" />
          <p style={{ color: "#fff" }}>Skills</p>
        </a>

        <a
          href="/projects"
          className={`menu-items w-100  d-flex flex-row justify-content-center pt-3 pb-3`}
        >
          <GoFileCode style={{ color: "#fff" }} size={25} className="me-2" />
          <p style={{ color: "#fff" }}>Projects</p>
        </a>
        <a
          href="/contact"
          className={`menu-items  w-100 d-flex flex-row justify-content-center pt-3 pb-3`}
        >
          <BsTelephone style={{ color: "#fff" }} size={25} className="me-2" />
          <p style={{ color: "#fff" }}>Contact</p>
        </a>
      </div>
    </div>
  );
};

export const MenuComponent_Deactive = () => {
  return (
    <div className="menu-list  ">
      <div className="d-flex flex-column w-100 align-items-center">
        <a
          href="/"
          className={`menu-items w-100  d-flex flex-row justify-content-center pt-3 pb-3 `}
        >
          <VscHome style={{ color: "#fff" }} size={25} className={`me-2 `} />
        </a>
        <a
          href="/skills"
          className={`menu-items w-100  d-flex flex-row justify-content-center pt-3 pb-3`}
        >
          <FiUser style={{ color: "#fff" }} size={25} className="me-2" />
        </a>

        <a
          href="/projects"
          className={`menu-items w-100  d-flex flex-row justify-content-center pt-3 pb-3`}
        >
          <GoFileCode style={{ color: "#fff" }} size={25} className="me-2" />
        </a>
        <a
          href="/contact"
          className={`menu-items  w-100 d-flex flex-row justify-content-center pt-3 pb-3`}
        >
          <BsTelephone style={{ color: "#fff" }} size={25} className="me-2" />
        </a>
      </div>
    </div>
  );
};
