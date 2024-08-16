import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-12 lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 className="text-[55px] leading-[0.8] font-bold lg:text-[110px] ">
              Ben
              <span> AYDEN</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                className="text-accent"
              />
            </div>

            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              dolores dolore consequatur animi neque sapiente distinctio ratione
              sint odit cum.
            </p>

            <div className="flex max-w-max gap-x-6 items-center mx-auto mb-16 lg:mx-0">
              <button className="capitalize btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </div>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto">
              <a href="">
                <FaYoutube />
              </a>
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaDribbble />
              </a>
            </div>
          </div>
          <div>
            <img src={Image} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
