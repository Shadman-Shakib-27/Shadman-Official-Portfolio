"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
  FaNpm,
} from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";

import {
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiReacthookform,
  SiReactrouter,
  SiShadcnui,
  SiMui,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiVercel,
} from "react-icons/si";

// About Data
const abouts = {
  title: "About Me",
  description:
    "I am a dedicated and passionate individual driven by a thirst for knowledge and a commitment to personal growth.",
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
    "A wonderful, enlightening journey filled with unexpected challenges and immense growth.",
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
    "Throughout my educational journey, I've pursued a path of continuous learning and academic excellence",
  items: [
    {
      institution: "Islamic University, Kushtia-7003",
      degree: "B.Sc.(Engg.) in ICT",
      group: "Engineering",
      duration: "2020 - Present",
    },
    {
      institution: "Agricultural University College",
      degree: "Higher Secondary Certificate",
      group: "Science",
      duration: "2018",
    },
    {
      institution: "Govt. Fulbaria Model Pilot High School",
      degree: "Higher Secondary Certificate",
      group: "Science",
      duration: "2016",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description:
    "Aspiring to excel as a Frontend and Next.js developer, I possess a robust skill set tailored for modern web development.Leveraging frameworks like React.js and Next.js. Some of them are given below:",
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
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiVite />,
      name: "Vite",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    {
      icon: <TbBrandRedux />,
      name: "Redux",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js.",
    },
    {
      icon: <SiReacthookform />,
      name: "React Hook Form",
    },
    {
      icon: <SiReactrouter />,
      name: "React Router",
    },
    {
      icon: <SiShadcnui />,
      name: "Shadcn UI",
    },
    {
      icon: <SiMui />,
      name: "Material UI",
    },
    {
      icon: <SiDaisyui />,
      name: "Daisy UI",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <IoLogoFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNpm />,
      name: "NPM",
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js",
    },
    {
      icon: <SiExpress />,
      name: "Express Js",
    },

    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMongoose />,
      name: "Mongoose",
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
                  <ul className="grid w-full grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-pink-50/10 h-[220px] lg:h-[184px] xl:border xl:border-accent p-6 rounded-xl flex flex-col justify-center items-start lg:items-start gap-1"
                        >
                          <h3 className="text-left">
                            <span className="text-accent">Degree: </span>
                            {item.degree}
                          </h3>
                          <p className="text-left text-white/60">
                            <span className="text-accent">Faculty: </span>
                            {item.group}
                          </p>
                          <p className="text-left text-white/60">
                            <span className="text-accent">Institution: </span>
                            {item.institution}
                          </p>
                          <span className="text-left">
                            <span className="text-accent">Passing Year: </span>
                            {item.duration}
                          </span>
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
                        <span className="font-bold text-white/60">
                          {item.fieldName}:
                        </span>
                        <span className="text-[14px]">{item.fieldValue}</span>
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
