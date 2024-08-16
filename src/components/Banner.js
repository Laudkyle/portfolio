import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          <h1>
            Ben 
            <span> AYDEN</span>
          </h1>
          <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className="mr-4 text-white">I am a </span>
            <TypeAnimation
              sequence={["Developer", 2000, "Designer", 2000, "Youtuber", 2000]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              className="text-accent"
            />
          </div>
          <p>
          </p>
        </div>
        <div>
          <img src={Image} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
