import {
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaRegBuilding,
} from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TbBrandJavascript, TbCertificate } from "react-icons/tb";
import { SiRedux, SiTypescript } from "react-icons/si";

export const dashboardcarddata = [
  { name: "Project", count: 60, icon: <FaCode /> },
  { name: "Company", count: 2, icon: <FaRegBuilding /> },
  {
    name: "Experience",
    count: 3,
    icon: <AiOutlineSafetyCertificate />,
  },
  {
    name: "Certificate",
    count: 3,
    icon: <TbCertificate />,
  },
];

export const skillcarddata = [
  { name: "React", count: 80, icon: <FaReact /> },
  { name: "Javascript", count: 2, icon: <TbBrandJavascript /> },
  { name: "Scss", count: 2, icon: <FaCss3Alt /> },
  { name: "Typescript", count: 2, icon: <SiTypescript /> },
  { name: "HTML5", count: 2, icon: <FaHtml5 /> },
  { name: "Redux", count: 2, icon: <SiRedux /> },
];

export const memberlist = [
  { fullname: "Diksha Verma", name: "Diksha", designation: "HR" },
  { fullname: "Ankit Singh", name: "Ankit", designation: "Backend Developer" },
  {
    fullname: "Chetan Sharma",
    name: "Chetan",
    designation: "Backend Developer",
  },
  { fullname: "Shadab Shah", name: "Shadab", designation: "UI Designer" },
  {
    fullname: "Bhavesh Bairagi",
    name: "Bhavesh",
    designation: "React Native Developer",
  },
];
