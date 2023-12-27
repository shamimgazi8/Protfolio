"use client";
import Image from "next/image";

import { FaCss3Alt, FaFigma, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiVite } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <div className=" h-[100%] relative z-50">
      <div className=" w-full flex items-center justify-center">
        <div className="content2 text-[50px] sm:text-[70px] font-bold relative">
          <h2 className=" absolute"> Expertise Showcase</h2>
          <h2>Expertise Showcase</h2>
        </div>
      </div>
      <div className="   w-full   " data-aos="zoom-out-down ">
        <div className="sm:w-full w-[100%] mt-10 flex sm:flex-col justify-center  flex-row  gap-8">
          <div className=" flex sm:flex-row flex-col ml-5 sm:mr-0  sm:justify-center justify-start sm:items-center items-start gap-8">
            <div
              data-aos="zoom-out-right"
              className="  cursor-pointer h-[280px] w-[120px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] items-center relative  "
            >
              <div className="w-full h-full ">
                <FaHtml5 className=" text-[100px] text-orange-600  w-full" />
              </div>
              <div className=" bg-white h-full w-full text-black">
                <p className=" font-bold text-center mt-2">HTML</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  HTML is the standard markup language for Web pages.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-left"
              className="cursor-pointer h-[280px] w-[110px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] "
            >
              <div>
                {" "}
                <FaCss3Alt className=" text-[100px] text-[#264de4] w-full" />
              </div>
              <div className=" bg-white text-black">
                <p className=" font-bold text-center mt-2">CSS</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  CSS is the language we use to style a Web page.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-right"
              className="cursor-pointer h-[280px] w-[110px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] "
            >
              <div>
                <SiJavascript className=" text-[100px] text-[#fce33f] w-full p-2" />
              </div>
              <div className=" bg-white text-black">
                <p className=" font-bold text-center mt-2">JavaScript</p>
                <p className=" font-semibold text-[13px] text-center mt-2 ">
                  is a programming language and core technology of the World
                  Wide Web
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-left"
              className="cursor-pointer h-[280px] w-[110px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] "
            >
              <div>
                <RiReactjsFill className=" text-[100px] text-[#61dbfb] w-full" />
              </div>
              <div className=" bg-white text-black">
                <p className=" font-bold text-center mt-2">React</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  is the library for web and native user interfaces.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-right"
              className="cursor-pointer h-[280px] w-[110px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] "
            >
              <div>
                <svg
                  className="p-2 w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  height="100px"
                  viewBox="0 0 256 257"
                  version="1.1"
                  preserveAspectRatio="xMidYMid"
                >
                  <defs>
                    <linearGradient
                      x1="-0.828097821%"
                      y1="7.6518539%"
                      x2="57.6359644%"
                      y2="78.4107719%"
                      id="linearGradient-1"
                    >
                      <stop stop-color="#41D1FF" offset="0%" />
                      <stop stop-color="#BD34FE" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="43.3760053%"
                      y1="2.24179788%"
                      x2="50.3158848%"
                      y2="89.0299051%"
                      id="linearGradient-2"
                    >
                      <stop stop-color="#FFEA83" offset="0%" />
                      <stop stop-color="#FFDD35" offset="8.33333%" />
                      <stop stop-color="#FFA800" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g>
                    <path
                      d="M255.152904,37.937763 L134.896865,252.97646 C132.413943,257.416178 126.035075,257.442321 123.5149,253.02417 L0.87443175,37.9584812 C-1.87111536,33.1438084 2.24595371,27.3119153 7.70191187,28.2871109 L128.086639,49.8052023 C128.854587,49.9424525 129.640835,49.9411454 130.408783,49.8012155 L248.276014,28.3179595 C253.713738,27.3268821 257.850198,33.1136134 255.152904,37.937763 Z"
                      fill="url(#linearGradient-1)"
                    />
                    <path
                      d="M185.432401,0.0631038902 L96.4393502,17.500942 C94.9766549,17.7875335 93.8936852,19.0270992 93.8054529,20.5146956 L88.3311293,112.971419 C88.2023755,115.149123 90.2023075,116.839261 92.3277254,116.349082 L117.10466,110.630976 C119.422882,110.096354 121.517582,112.138114 121.041128,114.469407 L113.67994,150.515893 C113.184532,152.941955 115.462232,155.016394 117.831433,154.29681 L133.134834,149.647295 C135.507302,148.927059 137.786963,151.00738 137.285019,153.435402 L125.586724,210.056351 C124.854723,213.598061 129.565674,215.529368 131.530313,212.49287 L132.842687,210.464834 L205.359174,65.745575 C206.573511,63.3224548 204.479465,60.5594769 201.818118,61.0730542 L176.31441,65.9952397 C173.91776,66.4573155 171.878614,64.2253653 172.555061,61.8805431 L189.2009,4.17570253 C189.878001,1.82692623 187.831665,-0.406957894 185.432401,0.0631038902 Z"
                      fill="url(#linearGradient-2)"
                    />
                  </g>
                </svg>
              </div>
              <div className=" bg-white text-black  overflow-hidden">
                <p className=" font-bold text-center mt-2">Vite</p>
                <p className=" font-semibold text-[15px]  text-center mt-2 ">
                  is a build tool that aims to provide a faster and leaner
                  development experience for modern web projects.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-left"
              className="cursor-pointer h-[280px] w-[110px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] "
            >
              <div>
                <TbBrandNextjs className=" text-[100px] text-white w-full" />
              </div>
              <div className=" bg-white text-black">
                <p className=" font-bold text-center mt-2">NEXTJS</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  The library for web and native user interfaces.
                </p>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col ml-5 sm:mr-0  sm:justify-center justify-start sm:items-center items-start gap-8">
            <div
              data-aos="zoom-out-right"
              className="  cursor-pointer h-[280px] w-[120px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] items-center relative  "
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  height={100}
                  width={100}
                  alt=" figma"
                  className=" p-2"
                  src={"/npm.png"}
                />
              </div>
              <div className=" bg-white h-full w-full text-black">
                <p className=" font-bold text-center mt-2">NPM</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  The World&apos Largest Software Registry (Library)
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-left"
              className="cursor-pointer h-[280px] w-[110px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] "
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  height={100}
                  width={100}
                  alt=" figma"
                  className=" p-2"
                  src={"/redux.png"}
                />
              </div>
              <div className=" bg-white text-black">
                <p className=" font-bold text-center mt-2">Redux</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  Redux helps you write applications that behave consistently,
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-right"
              className="cursor-pointer h-[280px] w-[110px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] "
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  height={100}
                  width={100}
                  alt=" figma"
                  className=" p-2"
                  src={"/ps.png"}
                />
              </div>
              <div className=" bg-white text-black">
                <p className=" font-bold text-center mt-2">PhotoShop</p>
                <p className=" font-semibold text-[15px] text-center mt-2 ">
                  is an image creation, graphic design and photo editing
                  software
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-left"
              className="cursor-pointer h-[280px] w-[110px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] "
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  height={100}
                  width={100}
                  alt=" figma"
                  className=" p-2 m-4"
                  src={"/tailwind.png"}
                />
              </div>
              <div className=" bg-white text-black overflow-hidden">
                <p className=" font-bold text-center mt-2">Tailwind</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  you style elements by applying pre-existing classes directly
                  in your HTML.
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-out-left"
              className="cursor-pointer h-[280px] w-[110px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] "
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  height={75}
                  width={100}
                  alt=" figma"
                  className=" p-2 m-1"
                  src={"/gitlab.png"}
                />
              </div>
              <div className=" bg-white text-black overflow-hidden">
                <p className=" font-bold text-center mt-2">GitLab</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  Automate software delivery, boost productivity, and secure
                  your end-to-end software supply chain.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-right"
              className="  cursor-pointer h-[280px] w-[120px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] items-center relative  "
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  height={75}
                  width={100}
                  alt=" figma"
                  className=" p-2"
                  src={"/git.png"}
                />
              </div>
              <div className=" bg-white h-full w-full text-black overflow-hidden">
                <p className=" font-bold text-center mt-2">GitHub</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  is where over 100 million developers shape the future of
                  software, together
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-right"
              className="  cursor-pointer h-[280px] w-[120px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] items-center relative  "
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  height={75}
                  width={100}
                  alt="ts"
                  className=" p-2"
                  src={"/ts.png"}
                />
              </div>
              <div className=" bg-white h-full w-full text-black overflow-hidden">
                <p className=" font-bold text-center mt-2">TypeScript</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  is a strongly typed programming language that builds on
                  JavaScript.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-out-right"
              className="  cursor-pointer h-[280px] w-[120px] border-[2px] border-white rounded grid grid-rows-[1fr,2fr] items-center relative  "
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  height={75}
                  width={100}
                  alt=" figma"
                  src={"/figma.png"}
                />
              </div>
              <div className=" bg-white h-full w-full text-black  overflow-hidden">
                <p className=" font-bold text-center mt-2">Figma</p>
                <p className=" font-semibold text-[15px] text-center mt-4 ">
                  Figma is the leading collaborative design tool for building
                  meaningful products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
