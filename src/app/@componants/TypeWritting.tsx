import { useTypewriter } from "react-simple-typewriter";
const TypeWritting = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack web developer.",
      "Front-end developer",
      "Next.js Developer",
      "TypeScript Enthusiast",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className=" text-violet-400 font-[600] sm:text-[20px] h-[25px] ">
      <span className="text-[#f4fdff]"> </span>
      {text}
    </div>
  );
};
export default TypeWritting;
