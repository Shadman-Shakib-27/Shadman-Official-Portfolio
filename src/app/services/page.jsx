"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Frontend development focuses on creating user interfaces, enhancing user experiences, ensuring responsiveness, optimizing performance, and implementing modern web technologies.",
  },
  {
    num: "02",
    title: "Responsive UI",
    description:
      "Responsive UI design ensures websites adapt to various screen sizes, providing an optimal viewing experience on all devices.",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "UI/UX Design involves crafting visually appealing interfaces, improving usability, enhancing user satisfaction, and ensuring intuitive, seamless user experiences.",
  },
  {
    num: "04",
    title: "Backend Integration",
    description:
      "Backend integration with frontend ensures seamless data exchange, enabling dynamic functionality and enhancing user experience through robust API connections.",
  },
];

const ServicePage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                className="flex flex-1 flex-col justify-center gap-6 group"
                key={index}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href="/services"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="xl:text-[42px] text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;
