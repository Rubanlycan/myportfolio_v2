import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import { MenuComponent_Active, MenuComponent_Deactive } from "./MenuComponent";

const SideNav = () => {
  const sidebarRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={sidebarRef}
      id="mySidebar"
      className="sidebar "
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="title-class "  >
        {isHovered ? (
          <h5 style={{ display: "flex", color: "#fff", margin: "auto" }}>
            Ruban Nadar
          </h5>
        ) : (
          <h1 style={{ color: "#fff" }} >RN</h1>
        )}
      </div>

      {isHovered ? <MenuComponent_Active /> : <MenuComponent_Deactive />}
    </div>
  );
};

export default SideNav;
