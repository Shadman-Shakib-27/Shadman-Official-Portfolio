"use client";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsBrowserChrome, BsGithub, BsServer } from "react-icons/bs";
import Mobile_Mania from "../../assets/works/Mobile_Mania.png";
import Disaster_Relief from "../../assets/works/Disaster_Relief.png";
import Convention_Center from "../../assets/works/Convention_Center.png";
import Expanse_Calc from "../../assets/works/Shadman_Expanses.png";
import Red_Onion from "../../assets/works/Red_Onion.png";
import Phone_Hunter from "../../assets/works/Phone_Hunter.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";

const projects = [
  {
    num: "01",
    category: "Mobile Mania",
    title: "Frontend Stack",
    description:
      "Mobile Mania is a comprehensive online store for mobile devices, offering a wide range of the latest smartphones from top brands like Apple, Samsung, Xiaomi, and Realme. The site features exclusive flash sales and trending products at discounted prices, making cutting-edge technology accessible to all. With a focus on exceptional service, Mobile Mania aims to enhance your mobile experience, catering to both tech enthusiasts and casual users alike. ",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Typescript",
      },
      {
        name: "Next Js",
      },
      {
        name: "Redux",
      },
      {
        name: "Daisy UI",
      },
      {
        name: "Swiper Js",
      },
      {
        name: "Sooner",
      },
      {
        name: "Redux Persist",
      },
    ],
    image: "/assets/works/Mobile_Mania.png",
    live: "https://mobile-mania-client-shadman.vercel.app/",
    github_client:
      "https://github.com/Shadman-Shakib-27/Mobile-Mania-Client-Shadman",
    github_server: "",
  },
  {
    num: "02",
    category: "Disaster Relief",
    title: "MERN Stack",
    description:
      "Disaster Relief is an online platform dedicated to providing aid and resources during emergencies. The site connects users with essential services, donations, and volunteer opportunities to support disaster-stricken areas. It emphasizes rapid response and efficient distribution of resources to those in need. The platform is designed to facilitate community support and collaboration in times of crisis, ensuring timely and effective relief efforts.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Typescript",
      },
      {
        name: "React",
      },
      {
        name: "Redux",
      },
      {
        name: "Shadcn UI",
      },
      {
        name: "Sooner",
      },
      {
        name: "Rtk Query",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/src/assets/works/thumb2.png",
    live: "https://disaster-relief-client-shadman.vercel.app/",
    github_client:
      "https://github.com/Shadman-Shakib-27/Disaster-Relief-Client-Shadman",
    github_server:
      "https://github.com/Shadman-Shakib-27/Disaster-Relief-Server-Shadman",
  },
  {
    num: "03",
    category: "Convention Center",
    title: "Frontend",
    description:
      "Shadman Convention Center project is a web-based platform designed for managing events and conventions. Built using HTML and CSS, this site offers functionalities for organizing and displaying event details, schedules, and attendee information. It aims to streamline event management processes and enhance the experience for both organizers and participants.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Toaster",
      },
    ],
    image: "/src/assets/works/thumb3.png",
    live: "https://shadman-convention-center.netlify.app/",
    github_client: "https://github.com/Shadman-Shakib-27/convention-center",
    github_server: "",
  },
  {
    num: "04",
    category: "Authentication",
    title: "Firebase",
    description:
      "The Red Onion website by Shadman is an online platform showcasing a restaurant menu. The site features a variety of food categories, including breakfast, lunch, and dinner options, along with detailed descriptions and images of each dish. Users can browse through different meal options, view prices, and explore the diverse offerings. The interface is user-friendly and visually appealing, aimed at providing an easy and enjoyable browsing experience for potential customers.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Javascript",
      },
      {
        name: "React",
      },
      {
        name: "Firebase",
      },
      {
        name: "React-Firebase-Hooks",
      },
    ],
    image: "/src/assets/works/thumb3.png",
    live: "https://red-onion-shadman.vercel.app/",
    github_client: "https://github.com/Shadman-Shakib-27/red-onion-by-shadman",
    github_server: "",
  },
  {
    num: "05",
    category: "Expanse Calculator",
    title: "Frontend",
    description:
      "Shadman's Expanse Calculator is a web application designed to help users manage their monthly income and expenses. Users can input their income and various expenses such as food, rent, and clothing. The app then calculates the total expenses, balance, savings percentage, savings amount, and remaining balance. It provides a clear and straightforward interface for effective personal financial management.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Javascript",
      },
      {
        name: "Font Awesome",
      },
    ],
    image: "/src/assets/works/thumb3.png",
    live: "https://expanse-calculator-shadman.vercel.app/",
    github_client: "https://github.com/Shadman-Shakib-27/Shadman-Expenses",
    github_server: "",
  },
  {
    num: "06",
    category: "Phone Hunter Shop",
    title: "API Integration",
    description:
      "Shadman's Phone Store website is an online platform for purchasing mobile phones. The site features a wide range of phone models from various brands, each listed with detailed specifications, prices, and high-quality images. The interface is designed for easy navigation, allowing users to search for specific phones, compare features, and make informed purchasing decisions. The site aims to provide a seamless and efficient shopping experience for customers looking to buy new smartphones.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Javascript",
      },
      {
        name: "FontAwesome",
      },
      {
        name: "API Integration",
      },
    ],
    image: "/src/assets/works/thumb3.png",
    live: "https://shadman-phone-store.netlify.app/",
    github_client: "https://github.com/Shadman-Shakib-27/phone-hunter",
    github_server: "",
  },
];

const WorksPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[10px] h-[50%]">
              {/* Outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.category}
              </h2>
              <h4 className="text-[24px] font-bold text-accent">
                Stack: {project.title}
              </h4>
              {/* Project Description  */}
              <p>{project.description}</p>
              {/* Stacks */}
              <h2 className="h3 mt-4">Technology Used:</h2>
              <div className="border border-white/20"></div>
              <ul className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsBrowserChrome className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github_client} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo (Client)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github_server} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsServer className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo (Server)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              <SwiperSlide className="w-full">
                <div className="xl:h-[460px] relative group flex justify-center rounded-md items-center">
                  {/* Overlay */}
                  {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={Mobile_Mania}
                      alt="Project Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div className="xl:h-[460px] relative group flex justify-center rounded-md items-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={Disaster_Relief}
                      alt="Project Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div className="xl:h-[460px] relative group flex justify-center rounded-md items-center">
                  {/* Overlay */}
                  {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={Convention_Center}
                      alt="Project Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div className="xl:h-[460px] relative group flex justify-center rounded-md items-center">
                  {/* Overlay */}
                  {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={Red_Onion}
                      alt="Project Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div className="xl:h-[460px] relative group flex justify-center rounded-md items-center">
                  {/* Overlay */}
                  {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={Expanse_Calc}
                      alt="Project Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div className="xl:h-[460px] relative group flex justify-center rounded-md items-center">
                  {/* Overlay */}
                  {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div> */}
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={Phone_Hunter}
                      alt="Project Image"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
              {/* Slider Buttons */}
              <WorkSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]  z-20 w-full justify-between xl:bottom-[calc(60%_-_22px)]"
                btnStyles="bg-accent font-extrabold text-primary text-[22px] w-[15px] h-[40px] rounded-sm flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorksPage;
