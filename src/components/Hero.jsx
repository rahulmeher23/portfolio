import { styles } from "../global";
import { motion } from "framer-motion";
import { linkedin, githubs, hashnode, instagram } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[50px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center justify-center gap-5 `}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Rahul Meher</span>
          </h1>

          <h1
            className={`font-black text-white lg:text-[60px] xs:text-[50px] text-[20px] lg:leading-[80px]`}
          >
            Software Engineer
          </h1>

          <p className="md:w-1/2 mt-2 text-center text-xs md:text-sm lg:text-md xl:text-base">
            {/* A passionate frontend focused web developer specializes in creating 
            the visual elements of websites, ensuring an intuitive and engaging
            user experience. */}
            I am a passionate software engineer with a strong background working
            at a product-based company specializing in building SaaS software,
            in developing innovative solutions that drive efficiency and enhance
            user experiences. With a passion for modern web technologies, I
            thrive on the challenge of building scalable, high-performance
            applications.
          </p>

          <div className={`flex my-6 items-center gap-8`}>
            {/* <a
              href="https://robinmahto.hashnode.dev/"
              target="blank"
              title="hashnode"
              className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary p-2 rounded-full"
            >
              <img src={hashnode} alt="hashnode" />
            </a> */}
            <a
              href="https://www.linkedin.com/in/rahul--meher"
              target="blank"
              title="linkedin"
              className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary p-2 rounded-full"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="cursor-pointer text-white"
              />
            </a>
            <a
              href="https://github.com/rahulmeher23"
              target="blank"
              title="github"
              className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary  p-2 rounded-full"
            >
              <img src={githubs} alt="githubs" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-16  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
