import React from "react";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      icon: <FaGithub size={30} />,
      url: "https://github.com/Sidd444",
      label: "GitHub",
    },
    {
      icon: <SiLeetcode size={30} />,
      url: "https://leetcode.com/u/Edens_Exile/",
      label: "LeetCode",
    },
    {
      icon: <FaHackerrank size={30} />,
      url: "https://www.hackerrank.com/profile/siddharthabhara1",
      label: "HackerRank",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center gap-6 mt-36">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-400 hover:text-gray-100 transition duration-200"
        >
          {link.icon}
          <span className="text-sm mt-2">{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
