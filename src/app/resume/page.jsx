"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// About Data
const abouts = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shadman Shakib",
    },
    {
      fieldName: "Phone",
      fieldValue: "+8801767407207",
    },
    {
      fieldName: "Email",
      fieldValue: "s.s.a.27.8.1999@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Spanish",
    },
  ],
};
// Experience Data
const experience = {
  icon: "/src/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet?",
  items: [
    {
      company: "Abc Solution Inc.",
      position: "Frontend Developer",
      duration: "2022-Present",
    },
    {
      company: "Def Solution Inc.",
      position: "Frontend Developer",
      duration: "Summer 2021",
    },
    {
      company: "Ghi Solution Inc.",
      position: "Frontend Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Jkl Solution Inc.",
      position: "Frontend Developer",
      duration: "2019 - 2020",
    },
  ],
};

// Education Data
const education = {
  icon: "/src/assets/resume/badge.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet?",
  items: [
    {
      institution: "Govt. Fulbaria Model Pilot High School",
      degree: "S.S.C",
      duration: "2016",
    },
    {
      institution: "Agricultural University College",
      degree: "H.S.C",
      duration: "2018",
    },
    {
      institution: "Islamic University, Kushtia-7003",
      degree: "B.Sc (Engg.) in ICT",
      duration: "2020 - Present",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, amet?",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js.",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, eas: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about me">About Me</TabsTrigger>
          </TabsList>
          {/* Contents */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-pink-50/10 h-[184px] xl:border xl:border-accent p-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-pink-50/10 h-[184px] xl:border xl:border-accent p-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span>
                            <span className="text-accent">Passing Year: </span>
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            <span className="text-accent">Degree: </span>
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* <span className="w-[6px] h-[6px] rounded-full xl:hidden bg-accent"></span> */}
                            <p className="text-white/60">
                              <span className="text-accent">Institution: </span>
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-pink-50/10 rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-bold">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about me"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{abouts.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {abouts.description}
                </p>
                <ul className="grid grid-cols-1 gap-y-6 max-w-[680px] mx-auto xl:mx-0">
                  {abouts.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
