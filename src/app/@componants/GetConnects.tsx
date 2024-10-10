import React from "react";

interface GetConnectedProps {
  upworkUrl: string;
  fiverrUrl: string;
  email: string;
}

const GetConnects: React.FC<GetConnectedProps> = ({
  upworkUrl,
  fiverrUrl,
  email,
}) => {
  const mailtoLink = `mailto:${email}`;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg shadow-lg mt-10 z-[100] mb-[50px] text-center gap-2">
      <h2 className="text-2xl font-bold text-white">Get Connected</h2>
      <p className="text-white">
        Reach me on Upwork, Fiverr, or send an email!
      </p>

      <div className="flex  lg:flex-row flex-col gap-5 items-center justify-center z-50">
        {/* Upwork Button */}
        <a
          href={upworkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" cursor-pointer px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors duration-300"
        >
          Connect on Upwork
        </a>

        {/* Fiverr Button */}
        <a
          href={fiverrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" cursor-pointer px-6 py-2 bg-green-400 text-white rounded-lg shadow hover:bg-green-500 transition-colors duration-300"
        >
          Connect on Fiverr
        </a>

        {/* Mail Button */}
        <a
          href={mailtoLink}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
        >
          Send an Email
        </a>
      </div>
    </div>
  );
};

export default GetConnects;
