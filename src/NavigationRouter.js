import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./Components/SideNav";
import AboutMe from "./Screens/AboutMe";
import HomeScreen from "./Screens/HomeScreen";
import SkillsScreen from "./Screens/SkillsScreen";
import Contact from "./Screens/Contact";
const NavigationRouter = () => {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" caseSensitive={true} element={<HomeScreen />} />
        <Route path="/skills" caseSensitive={true} element={<SkillsScreen />} />
        <Route path="/about" caseSensitive={true} element={<AboutMe />} />
        <Route path="/contact" caseSensitive={true} element={<Contact />} />
      </Routes>
    </>
  );
};

export default NavigationRouter;
