import Image from "next/image";
import BlackWhole from "./@componants/BlackWhole";
import HomeContent from "./@componants/HomeContent";
import Hireme from "./@componants/Hireme";
import About from "./@componants/About";
import Skills from "./@componants/Skills";
import Exprience from "./@componants/Exprience";
import Education from "./@componants/Education";
import Project from "./@componants/Projects";

export default function App() {
  return (
    <div className=" w-full">
      <HomeContent />
      <About />
      <Skills />
      <Exprience />
      <Education />
      <Project />
    </div>
  );
}
