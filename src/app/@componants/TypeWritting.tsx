import { useTypewriter } from "react-simple-typewriter";
const TypeWritting = () => {
  const [text, count] = useTypewriter({
    words: [
      "Front end Developer",
      "Programmer",
      "Web Developer ",
      "JavaScript Developer",
      "React Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" text-cyan-400 font-[600] sm:text-[20px] ">
      <span className="text-[#f4fdff]"> Im a </span>
      {text}
    </div>
  );
};
export default TypeWritting;
