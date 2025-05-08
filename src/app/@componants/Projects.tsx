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
    <div className=" w-[70%] m-auto  mt-[100px] mx-auto relative z-50 ">
      <div className=" w-full flex items-center justify-center">
        <div className="content2 text-[50px] sm:text-[70px] font-bold relative">
          <h2 className=" absolute font-mono"> Projects</h2>
          <h2 className=" font-mono mb-10">Projects</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
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
                  className="w-full borderCurved p-5 sm:p-8 col-span-2 border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px] border-white mt-5 rounded-2xl shadow-gray-600 grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-6"
                >
                  {/* IMAGE SECTION */}
                  <div className="w-full rounded-3xl overflow-hidden aspect-[16/10]">
                    <div className="relative w-full h-full">
                      <Image
                        src={item?.image}
                        alt="cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 700px"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* CONTENT SECTION */}
                  <div className="flex flex-col justify-center lg:pl-10 pl-5">
                    <h1 className="text-[30px] sm:text-[40px] lg:text-[50px] text-white font-semibold mb-4 cursor-pointer">
                      {item?.title}
                    </h1>
                    <p className="text-[15px] sm:text-[12px] lg:text-[18px] text-white font-semibold mb-5">
                      {item?.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <FaGithub className="text-white text-[36px] sm:text-[40px] cursor-pointer" />

                      <Popover>
                        <PopoverTrigger>
                          <button className="bg-white text-black font-bold px-4 py-2 rounded hover:text-white hover:bg-[#3B3C36] duration-300">
                            Visit Project
                          </button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="flex flex-col sm:flex-row gap-3 p-2">
                            <Link href={item?.github} target="_blank">
                              <button className="bg-black text-white font-bold px-4 py-2 rounded hover:text-black hover:bg-[#c5c2c2] duration-300">
                                Code
                              </button>
                            </Link>
                            <Link href={`/preview/${item?.slug}`}>
                              <button className="bg-black text-white font-bold px-4 py-2 rounded hover:text-black hover:bg-[#c5c2c2] duration-300">
                                Preview
                              </button>
                            </Link>
                            <Link href={item?.live} target="_blank">
                              <button className="bg-black text-white font-bold px-4 py-2 rounded hover:text-black hover:bg-[#c5c2c2] duration-300">
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
                  className=" borderCurved  p-8 lg:col-span-1 col-span-2  border-r-[15px] border-b-[15px] border-t-[2px] border-l-[2px]  border-white  rounded-2xl shadow-gray-600 grid items-center"
                >
                  <div className="flex items-center justify-center rounded-[20px] h-auto sm:mb-0 mb-5">
                    <div className="w-full lg:h-[350px] h-[250px] rounded-[20px] overflow-hidden relative">
                      <Image
                        src={item?.image}
                        alt="cover"
                        fill
                        className="object-cover cursor-pointer hover:scale-105 duration-300 rounded-[20px]"
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
