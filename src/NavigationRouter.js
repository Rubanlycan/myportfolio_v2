import React, { useLayoutEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./Components/SideNav";
import ProjectScreen from "./Screens/ProjectScreen";
import HomeScreen from "./Screens/HomeScreen";
import SkillsScreen from "./Screens/SkillsScreen";
import Contact from "./Screens/ContactScreen";
import { ProjectViewScreen, ProjectViewScreenMobile } from "./Screens/ProjectViewScreen";
import NoMobileResponsiveComponent from "./Components/NoMobileResponsiveComponent";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const NavigationRouter = () => {
  const [width, height] = useWindowSize();
  console.log(width)
  return (

    <div className="">

      {width > 600 && <SideNav />}


      <Routes>
        <Route path="/" caseSensitive={true} element={width > 600 ? <HomeScreen /> : <NoMobileResponsiveComponent />} />
        <Route path="/skills" caseSensitive={true} element={<SkillsScreen />} />
        <Route path="/projects" caseSensitive={true} element={<ProjectScreen />} />
        <Route path="/contact" caseSensitive={true} element={<Contact />} />
        <Route path="/project_view" caseSensitive={true} element={<ProjectViewScreen />} />
        <Route path="/project_view_mobile" caseSensitive={true} element={<ProjectViewScreenMobile />} />
      </Routes>
    </div>

  );
};

export default NavigationRouter;
