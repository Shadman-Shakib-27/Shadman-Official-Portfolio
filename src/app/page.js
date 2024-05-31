/* eslint-disable react/no-unescaped-entities */
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { ImDownload } from "react-icons/im";

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Start */}
          <div className="text-center order-2 xl:order-none xl:text-left">
            <span>Frontend Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Shadman Shakib</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              ipsum dolor ex corporis. Minima perferendis non consequatur magni
              beatae ab possimus veniam, voluptate incidunt facilis.
            </p>
            {/* Button & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <ImDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo Start */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* Stats */}
      <Stats />
    </section>
  );
};

export default HomePage;
