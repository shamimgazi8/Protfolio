import React from "react";

interface FooterProps {
  upworkUrl: string;
  fiverrUrl: string;
  email: string;
}

const Footer: React.FC<FooterProps> = ({ upworkUrl, fiverrUrl, email }) => {
  const mailtoLink = `mailto:${email}`;

  return (
    <footer className="relative bg-[#010423] text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-10">
        {/* Expertise Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Expertise</h3>
          <p className="text-gray-300 mb-6">
            I specialize in building fast, scalable, and user-friendly web
            applications.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "REST APIs",
              "CI/CD",
              "Cloudinary",
            ].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-800 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Get Connected Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Get Connected</h2>
          <p className="text-gray-300 mb-4">
            Reach me on Upwork, Fiverr, or send an email!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2  z-50  bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300"
            >
              Connect on Upwork
            </a>
            <a
              href={fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6  z-50 py-2 bg-green-400 text-white rounded-lg shadow hover:bg-green-500 transition duration-300"
            >
              Connect on Fiverr
            </a>
            <a
              href={mailtoLink}
              className="px-6 py-2  z-50 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Send an Email
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 pt-6 border-t border-gray-700">
          © {new Date().getFullYear()} Shamim Gazi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
