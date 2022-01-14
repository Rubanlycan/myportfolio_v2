import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./Components/SideNav";
import ProjectScreen from "./Screens/ProjectScreen";
import HomeScreen from "./Screens/HomeScreen";
import SkillsScreen from "./Screens/SkillsScreen";
import Contact from "./Screens/ContactScreen";
const NavigationRouter = () => {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" caseSensitive={true} element={<HomeScreen />} />
        <Route path="/skills" caseSensitive={true} element={<SkillsScreen />} />
        <Route path="/projects" caseSensitive={true} element={<ProjectScreen />} />
        <Route path="/contact" caseSensitive={true} element={<Contact />} />
      </Routes>
    </>
  );
};

export default NavigationRouter;
