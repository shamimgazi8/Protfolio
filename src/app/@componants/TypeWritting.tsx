import RotatingText from "@/component/RotatingText";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
const TypeWritting = () => {
  const [text, count] = useTypewriter({
    words: [
      "Full Stack web developer.",
      "Front-end developer",
      "Next.js Developer",
      "TypeScript Enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" text-cyan-400 font-[600] sm:text-[20px] ">
      <span className="text-[#f4fdff]"> Im a </span>
      {text}
      {/* <TypeErittingUpdat /> */}
    </div>
  );
};
export default TypeWritting;
