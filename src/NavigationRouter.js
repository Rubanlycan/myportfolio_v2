import React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./Components/SideNav";
import HomeScreen from "./Screens/HomeScreen";
const NavigationRouter = () => {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" caseSensitive={true} element={<HomeScreen />} />
      </Routes>
    </>
  );
};

export default NavigationRouter;
