import React from "react";
import { motion } from "framer-motion";

import { styles } from "../global";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { about_avatar } from "../assets";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <img src={about_avatar} alt="about_avatar" className="w-96 h-96" />
      </div>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I’m a Software Engineer with practical experience in developing scalable, real-world solutions. Over the past 6 months, I’ve worked on impactful projects, gaining the hands-on experience and technical skills necessary to deliver high-quality software. I’m always focused on solving problems efficiently, learning quickly, and contributing to teams that drive innovation. Whether building a cutting-edge dashboard or integrating complex systems, I bring the expertise needed to succeed in fast-paced, dynamic environments.
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
