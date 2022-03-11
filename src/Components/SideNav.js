import React, { useRef, useState, useEffect, useMemo } from "react";
import "./index.css";
import { MenuComponent_Active, MenuComponent_Deactive } from "./MenuComponent";


const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', handleResize)

  }, [])
  return size
}
const SideNav = () => {
  const sidebarRef = useRef(null);
  const [isMenuClick, setMenuClick] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    if (windowWidth > 500) {
      setMenuClick(false)

    }
  }, [windowWidth])
  return (
    (windowWidth > 500 || isMenuClick) ? <div
      ref={sidebarRef}
      id="mySidebar"
      className={`sidebar`}
      style={{ width: `${isMenuClick ? 600 : 500}` }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}


    >
      <div className="title-class"  >
        {isHovered ? (
          <h5 style={{ display: "flex", color: "#fff", margin: "auto" }}>
            Ruban Nadar
          </h5>
        ) : (
          <h1 style={{ color: "#fff" }} >RN</h1>
        )}
      </div>

      {isHovered ? <MenuComponent_Active /> : <MenuComponent_Deactive />}
    </div> : <div className="p-2"><a onClick={() => setMenuClick(true)}><img src={require('../assets/more.png')} style={{ height: 40, width: 40 }} /></a></div >


  );
};

export default SideNav;
