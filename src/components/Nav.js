import React from "react";
import { BiUser, BiHomeAlt } from "react-icons/bi";
import { BsChatSquare, BsClipboardData, BsBriefcase } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex  justify-between items-center text-2xl text-white/50">
          <Link
            smooth={true}
            spy={true}
            activeClass="active"
            to="home"
            offset={-200}
            className="flex  items-center justify-center w-[60px] h-[60px] cursor-pointer"
          >
            <BiHomeAlt />
          </Link>
          <Link
            smooth={true}
            spy={true}
            activeClass="active"
            to="about"
            className="flex  items-center justify-center w-[60px] h-[60px] cursor-pointer"
          >
            <BiUser />
          </Link>
          <Link
            smooth={true}
            spy={true}
            activeClass="active"
            to="services"
            className="flex  items-center justify-center w-[60px] h-[60px] cursor-pointer"
          >
            <BsClipboardData />
          </Link>
          <Link
            smooth={true}
            spy={true}
            activeClass="active"
            to="work"
            className="flex  items-center justify-center w-[60px] h-[60px] cursor-pointer"
          >
            <BsBriefcase />
          </Link>
          <Link
            smooth={true}
            spy={true}
            activeClass="active"
            to="contact"
            className="flex  items-center justify-center w-[60px] h-[60px] cursor-pointer"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
