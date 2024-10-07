import Image from "next/image";
import projects from "./../../../data/projects";
import { FaGithub } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { Fragment } from "react";
const Project = () => {
  return (
    <div className=" h-[100%] w-[80%] mt-[100px] mx-auto relative z-50 ">
      <div className=" w-full flex items-center justify-center">
        <div className="content2 text-[50px] sm:text-[70px] font-bold relative">
          <h2 className=" absolute font-mono"> Projects</h2>
          <h2 className=" font-mono mb-10">Projects</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {projects?.map((item: any, i: any) => {
          function checkSize(count: any) {
            const pattern = count % 3;

            if (pattern === 0 || pattern === 3) {
              return "large";
            } else {
              return "small";
            }
          }
          return (
            <Fragment key={i}>
              {checkSize(i) === "large" ? (
                <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                  className="w-full borderCurved p-8 col-span-2  border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px]  border-white mt-5 rounded-2xl shadow-gray-600 grid sm:grid-cols-[1fr,2fr]"
                >
                  <div className=" flex items-center overflow-hidden rounded-3xl h-[300px]  sm:mb-0 mb-5">
                    <div className=" rounded-[20px] overflow-hidden ">
                      <Image
                        height={100}
                        width={500}
                        alt="cover"
                        src={item?.image}
                        className=" cursor-pointer hover:scale-105 duration-300 border-3xl"
                      />
                    </div>
                  </div>
                  <div className=" pl-10">
                    <h1 className=" sm:text-[50px] text-[30px] text-white font-semibold cursor-pointer ">
                      {item?.title}
                    </h1>
                    <p className=" sm:text-[20px] text-[15px] text-white font-semibold ">
                      {item?.description}
                    </p>
                    <div className=" flex gap-8 mt-5">
                      <FaGithub className=" text-white text-[40px] cursor-pointer" />

                      <Popover>
                        <PopoverTrigger>
                          <div>
                            <button className="bg-white text-black font-bold p-2 rounded hover:text-white hover:bg-[#3B3C36] duration-300">
                              Visit Project
                            </button>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className=" flex gap-5 ">
                            <Link href={item?.github} target="blank">
                              <button className="bg-black text-white font-bold p-2 rounded hover:text-black hover:bg-[#c5c2c2] duration-300">
                                Code
                              </button>
                            </Link>
                            <Link href={`/preview/${item?.slug}`}>
                              <button className=" bg-black text-white font-bold p-2 rounded hover:text-black hover:bg-[#c5c2c2] duration-300">
                                Preview
                              </button>
                            </Link>
                            <Link href={item?.live} target="blank">
                              <button className=" bg-black text-white font-bold p-2 rounded hover:text-black hover:bg-[#c5c2c2] duration-300">
                                Live
                              </button>
                            </Link>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                  key={i}
                  className=" borderCurved  p-8  border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px]  border-white  rounded-2xl shadow-gray-600 grid items-center"
                >
                  <div className=" flex items-center justify-center rounded-[20px] h-auto sm:mb-0 mb-5">
                    <div className="h-[250px] rounded-[20px] overflow-hidden ">
                      <Image
                        height={100}
                        width={500}
                        alt="cover"
                        src={item?.image}
                        className=" cursor-pointer hover:scale-105 duration-300 rounded-[20px]"
                      />
                    </div>
                  </div>
                  <div className=" pl-5">
                    <h1 className=" sm:text-[30px] text-[20px] text-white font-semibold cursor-pointer mt-3">
                      {item?.title}
                    </h1>
                    <p className=" sm:text-[15px] text-[10px] text-white font-semibold ">
                      {item?.description}
                    </p>
                    <div className=" flex gap-8 mt-5 justify-between items-center">
                      <FaGithub className=" text-white text-[30px] cursor-pointer" />
                      <Popover>
                        <PopoverTrigger>
                          <div>
                            <button className="bg-white text-black font-bold p-2 rounded hover:text-white hover:bg-[#3B3C36] duration-300">
                              Visit Project
                            </button>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className=" flex gap-5 ">
                            <Link href={item?.github} target="blank">
                              <button className="bg-black text-white font-bold p-2 rounded hover:text-black hover:bg-[#c5c2c2] duration-300">
                                Code
                              </button>
                            </Link>
                            <Link href={`/preview/${item?.slug}`}>
                              <button className=" bg-black text-white font-bold p-2 rounded hover:text-black hover:bg-[#c5c2c2] duration-300">
                                Preview
                              </button>
                            </Link>
                            <Link href={item?.live} target="blank">
                              <button className=" bg-black text-white font-bold p-2 rounded hover:text-black hover:bg-[#c5c2c2] duration-300">
                                Live
                              </button>
                            </Link>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default Project;
