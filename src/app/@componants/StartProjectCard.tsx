"use client";

import { FaHandshake } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const StartProjectCard = () => {
  return (
    <div className="bg-[#090914] border border-white/10 rounded-2xl p-10 sm:p-12 text-white max-w-4xl mx-auto shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 flex items-center gap-2">
            Want to start a project? <FaHandshake className="text-yellow-400" />
          </h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Every client is unique. I tailor my process to achieve your specific
            goals — from initial idea to finished product. Let’s work together
            to make your vision a reality.
          </p>
        </div>

        <div className="w-full sm:w-auto">
          {/* <button className="mt-4 sm:mt-0 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
            Let’s Build Together!
            <IoMdSend size={0} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default StartProjectCard;
