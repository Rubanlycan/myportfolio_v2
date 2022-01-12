import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
const ICON_NAMES = {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
};
const FontIcons = ({ type, name, size, className }) => {
  const FontIcon = ICON_NAMES[type];
  return <FontIcon size={size} className={className} />;
};

export default FontIcons;
