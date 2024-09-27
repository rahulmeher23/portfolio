import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../global";
import {
  phone,
  location,
  email,
  linkedin,
  githubs,
  hashnode,
  instagram,
} from "../assets";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-5 mb-3" id="contact">
        <div className="bg-[#915EFF] w-1/3 h-1 hidden xs:block"></div>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Contact Me.
          </h2>
        </motion.div>
        <div className="bg-[#915EFF] w-1/3 h-1 hidden xs:block"></div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-4">
        <div className="bg-tertiary p-3 flex items-center gap-4 rounded">
          <img src={email} alt="email" />
          <p>rahulmeher100@gmail.com</p>
        </div>
        <div className="bg-tertiary p-3 flex items-center gap-4 rounded">
          <img src={phone} alt="phone" />
          <p>+91 8308006565</p>
        </div>
        <div className="bg-tertiary p-3 flex items-center gap-4 rounded">
          <img src={location} alt="location" />
          <p>Mumbai, Maharashtra</p>
        </div>
      </div>

      <div className={`flex my-6 items-center justify-center gap-8`}>
        <a
          href="https://www.linkedin.com/in/rahul--meher/"
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
    </>
  );
};

export default Contact;
