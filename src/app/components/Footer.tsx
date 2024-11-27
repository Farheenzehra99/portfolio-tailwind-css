import React from "react";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaFacebook,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-blue-900 py-2 px-5 mt-2">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-4">
          <a
            href="https://github.com/Farheenzehra99"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-black p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:farheen11099@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-blue-800 p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/farheen11099/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 p-2 hover:text-pink-700 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/syeda-farheen-zehra-648459268/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-blue-700 p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://discord.com/channels/790484092772548613/1190584161359122552"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-blue-700 p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaDiscord />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61552506270420"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-blue-700 p-2 rounded-full text-white"
            style={{ fontSize: "2rem" }}
          >
            <FaFacebook />
          </a>
        </div>
        {/* Rights Reserved */}
        <p className="text-sm md:text-lg mt-5 text-black font-semibold text-center">
          &copy; {new Date().getFullYear()} Syeda Farheen Zehra | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
