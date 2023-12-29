import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const Project = () => {
  return (
    <div className=" h-[100%] w-full mt-[100px] relative z-50 ">
      <div className=" w-full flex items-center justify-center">
        <div className="content2 text-[50px] sm:text-[70px] font-bold relative">
          <h2 className=" absolute font-mono"> Projects</h2>
          <h2 className=" font-mono mb-10">Projects</h2>
        </div>
      </div>
      <div className="w-[90%] m-auto flex items-center flex-col">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="w-full project p-8  border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px]  border-white m-5 rounded-2xl shadow-gray-600 grid sm:grid-cols-[1fr,2fr]"
        >
          <div className=" flex items-center overflow-hidden rounded-3xl h-[190px] mt-5 sm:mb-0 mb-5">
            <div className="h-auto rounded-[20px] overflow-hidden ">
              <Image
                height={100}
                width={500}
                alt="cover"
                src={"/project/map.png"}
                className=" cursor-pointer hover:scale-105 duration-300 border-3xl"
              />
            </div>
          </div>
          <div className=" pl-10">
            <h1 className=" sm:text-[50px] text-[30px] text-white font-semibold cursor-pointer ">
              Mapty Project
            </h1>
            <p className=" sm:text-[20px] text-[15px] text-white font-semibold ">
              Mapty is a workout tracker application that helps users log
              various workouts and visualize them on an interactive map,
              providing an intuitive way to monitor fitness activities.
            </p>
            <div className=" flex gap-8 mt-5">
              <FaGithub className=" text-white text-[40px] cursor-pointer" />
              <button className="bg-white text-black font-bold p-2 rounded hover:text-white hover:bg-[#3B3C36] duration-300">
                {" "}
                Visit Project
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
          className=" flex justify-center items-center sm:flex-row flex-col  "
        >
          <div className="sm:w-[45%] w-[100%] project p-8  border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px]  border-white m-5 rounded-2xl shadow-gray-600 grid items-center">
            <div className=" flex items-center justify-center rounded-[20px] h-auto sm:mb-0 mb-5">
              <div className="h-auto rounded-[20px] overflow-hidden ">
                <Image
                  height={100}
                  width={500}
                  alt="cover"
                  src={"/project/cine.png"}
                  className=" cursor-pointer hover:scale-105 duration-300 rounded-[20px]"
                />
              </div>
            </div>
            <div className=" pl-5">
              <h1 className=" sm:text-[30px] text-[20px] text-white font-semibold cursor-pointer mt-3">
                CinemaBar
              </h1>
              <p className=" sm:text-[15px] text-[10px] text-white font-semibold ">
                CinemaBar is a Rating Application , where you can rate or
                bookmark Your favourte movies and make a watched list all of
                your watches movies
              </p>
              <div className=" flex gap-8 mt-5 justify-between items-center">
                <FaGithub className=" text-white text-[30px] cursor-pointer" />
                <button className="bg-white text-black text-[10px] font-bold p-2 rounded hover:text-white hover:bg-[#3B3C36] duration-300">
                  {" "}
                  Visit Project
                </button>
              </div>
            </div>
          </div>
          <div className="sm:w-[45%] w-[100%] project p-8  border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px]  border-white m-5 rounded-2xl shadow-gray-600 grid">
            <div className=" flex items-center justify-center  rounded-[20px] h-auto sm:mb-0 mb-5">
              <div className="h-auto rounded-[20px] overflow-hidden ">
                <Image
                  height={100}
                  width={500}
                  alt="cover"
                  src={"/project/map.png"}
                  className=" cursor-pointer hover:scale-105 duration-300 rounded-[20px]"
                />
              </div>
            </div>
            <div className=" pl-5">
              <h1 className=" sm:text-[30px] text-[20px] text-white font-semibold cursor-pointer ">
                Mapty Project
              </h1>
              <p className=" sm:text-[15px] text-[10px] text-white font-semibold ">
                Mapty is a workout tracker application that helps users log
                various workouts and visualize them on an interactive map,
                providing an intuitive way to monitor fitness activities.
              </p>
              <div className=" flex gap-8 mt-5 justify-between items-center">
                <FaGithub className=" text-white text-[30px] cursor-pointer" />
                <button className="bg-white text-black text-[10px] font-bold p-2 rounded hover:text-white hover:bg-[#3B3C36] duration-300">
                  {" "}
                  Visit Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="w-full project p-8  border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px]  border-white m-5 rounded-2xl shadow-gray-600 grid sm:grid-cols-[1fr,2fr]"
        >
          <div className=" flex items-center overflow-hidden rounded-3xl h-[190px] mt-5 sm:mb-0 mb-5">
            <div className="h-auto rounded-[20px] overflow-hidden ">
              <Image
                height={100}
                width={500}
                alt="cover"
                src={"/project/rec.png"}
                className=" cursor-pointer hover:scale-105 duration-300 border-3xl"
              />
            </div>
          </div>
          <div className=" pl-5">
            <h1 className=" sm:text-[50px] text-[30px] text-white font-semibold cursor-pointer ">
              EasyRecipe App
            </h1>
            <p className=" sm:text-[20px] text-[15px] text-white font-semibold ">
              Enjoy cooking different cuisines! But if you are new to cooking,
              don’t worry; we’ve got you covered. Whether you are a noob or a
              professional cook searching for the right recipe on the Internet
              may take a lot of time. Along with it is the issue of saving it or
              putting it down in a new place.
            </p>
            <div className=" flex gap-8 mt-5">
              <FaGithub className=" text-white text-[40px] cursor-pointer" />
              <button className="bg-white text-black font-bold p-2 rounded hover:text-white hover:bg-[#3B3C36] duration-300">
                {" "}
                Visit Project
              </button>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center sm:flex-row flex-col  ">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="sm:w-[45%] w-[100%] project p-8  border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px]  border-white m-5 rounded-2xl shadow-gray-600 grid "
          >
            <div className=" flex items-center justify-center rounded-[20px] h-auto sm:mb-0 mb-5">
              <div className="h-auto rounded-[20px] overflow-hidden ">
                <Image
                  height={100}
                  width={500}
                  alt="cover"
                  src={"/project/shr.png"}
                  className=" cursor-pointer hover:scale-105 duration-300 rounded-[20px]"
                />
              </div>
            </div>
            <div className=" pl-5">
              <h1 className=" sm:text-[30px] text-[20px] text-white font-semibold cursor-pointer ">
                Sharmin Furninture
              </h1>
              <p className=" sm:text-[15px] text-[10px] text-white font-semibold ">
                Furniture that Everyone Loves . Sharmin Furniture downloaded or
                otherwise used for any purpose without the prior written consent
                of owners
              </p>
              <div className=" flex gap-8 mt-5 justify-between items-center">
                <FaGithub className=" text-white text-[30px] cursor-pointer" />
                <button className="bg-white text-black text-[10px] font-bold p-2 rounded hover:text-white hover:bg-[#242422] duration-300">
                  {" "}
                  Visit Project
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="sm:w-[45%] w-[100%] project p-8  border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px]  border-white m-5 rounded-2xl shadow-gray-600 grid "
          >
            <div className=" flex items-center justify-center  rounded-[20px] h-auto sm:mb-0 mb-5">
              <div className="h-auto rounded-[20px] overflow-hidden ">
                <Image
                  height={100}
                  width={500}
                  alt="cover"
                  src={"/project/cou.png"}
                  className=" cursor-pointer hover:scale-105 duration-300 rounded-[20px]"
                />
              </div>
            </div>
            <div className=" pl-5">
              <h1 className=" sm:text-[30px] text-[20px] text-white font-semibold cursor-pointer ">
                Country Information
              </h1>
              <p className=" sm:text-[15px] text-[10px] text-white font-semibold ">
                The World Factbook provides basic intelligence on the history,
                people, government, economy, energy, geography, environment,
                communications, transportation, military, terrorism, and
                transnational issues for 266 world entities.
              </p>
              <div className=" flex gap-8 mt-5 justify-between items-center">
                <FaGithub className=" text-white text-[30px] cursor-pointer" />
                <button className="bg-white text-black text-[10px] font-bold p-2 rounded hover:text-white hover:bg-[#3B3C36] duration-300">
                  {" "}
                  Visit Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
