import Image from "next/image";
import BlackWhole from "./@componants/BlackWhole";
import HomeContent from "./@componants/HomeContent";
import Hireme from "./@componants/Hireme";
import About from "./@componants/About";
import Skills from "./@componants/Skills";
import Exprience from "./@componants/Exprience";
import Education from "./@componants/Education";
import Project from "./@componants/Projects";
import Footer from "./@componants/GetConnects";

export default function App() {
  return (
    <div className=" w-full">
      <HomeContent />
      <About />
      <Skills />
      <Exprience />
      <Education />
      <Project />
      <Footer
        upworkUrl="https://www.upwork.com/fl/~0133a89c7b4188053f?mp_source=share"
        email="shamim.g47@gmail.com"
        fiverrUrl="https://www.fiverr.com/shamimgazi290?public_mode=true"
      />
    </div>
  );
}
