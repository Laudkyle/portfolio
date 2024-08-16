import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top"
          ></motion.div>
           <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
          
          className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-6">
              I am a Freelance Full Stack Developer with 5+ years experience
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              recusandae placeat, omnis cumque natus cum beatae. Qui nulla
              maxime libero est, dolore quia, debitis quis iure repellat sit nam
              reiciendis.
            </p>
            <div className="flex gap-x-6 md:gap-x-10 mb-12">
              <div className="">
                <div className="font-tertiary text-[40px] text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div className="">
                <div className="font-tertiary text-[40px] text-gradient mb-2">
                  {inView ? <CountUp start={0} end={16} duration={2} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px] capitalize">
                  projects <br />
                  completed
                </div>
              </div>
              <div className="">
                <div className="font-tertiary text-[40px] text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] capitalize">
                  satisfied
                  <br />
                  clients
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-8">
              <button className="capitalize btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
