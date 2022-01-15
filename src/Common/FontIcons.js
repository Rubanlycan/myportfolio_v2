import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { GoLocation, } from "react-icons/go";
import { FiPhone, } from "react-icons/fi";
import { CgChevronRightO, CgChevronLeftO } from "react-icons/cg";
const ICON_NAMES = {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  GoLocation,
  FiPhone,
  CgChevronRightO,
  CgChevronLeftO
};
const FontIcons = ({ type, name, size, className, color }) => {
  const FontIcon = ICON_NAMES[type];
  return <FontIcon color={color} size={size} className={className} />;
};

export default FontIcons;
