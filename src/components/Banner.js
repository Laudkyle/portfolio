import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>text</div>
        <div>
          <img src={Image} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
