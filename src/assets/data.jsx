import React from "react";
import { FaAndroid } from "react-icons/fa";
import { SiKotlin, SiFlutter, SiFirebase } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";

const data = {
  name: "Shakil Ahmed",
  title: "Android Application Developer",
  social: {
    github: "https://github.com/shak0x90",
    dribbble: "https://www.linkedin.com/in/shakil-ahmed-10101",
    twitter: "https://x.com/shakil0x",
    email: "hridoyhussainshakil@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "Hello there! I'm Shakil Ahmed, from Dhaka, Bangladesh. I hold a bachelor degree in Computer Science & Engineering from Daffodil International University, where I delved into the realms of programming and software engineering. As an Android Application Developer, I'm fueled by my passion for crafting immersive mobile experiences. With a knack for problem-solving, I thrive in the dynamic world of app development, leveraging my expertise to build robust, user-centric applications. I'm constantly on the lookout for new technologies and methodologies to enhance my skills. Whether it's diving into the latest SDKs or mastering cutting-edge frameworks, I'm always up for the challenge. Beyond coding, I find solace in exploring new destinations, indulging in captivating movies and TV series, ensuring a well-rounded approach to life. Let's connect and embark on a journey to create innovative Android solutions together!",
  },
  skills: [
    {
      skillName: "Android",
      skillIcon: (
        <FaAndroid className="text-4xl mx-auto inline-block text-green-600" />
      ),
    },
    {
      skillName: "Kotlin",
      skillIcon: (
        <SiKotlin className="text-4xl mx-auto inline-block text-purple-600" />
      ),
    },
    {
      skillName: "Java",
      skillIcon: (
        <RiJavaLine className="text-4xl mx-auto inline-block text-red-700" />
      ),
    },
    {
      skillName: "Dart",
      skillIcon: (
        <SiFlutter className="text-4xl mx-auto inline-block text-blue-500" />
      ),
    },
    {
      skillName: "Firebase",
      skillIcon: (
        <SiFirebase className="text-4xl mx-auto inline-block text-orange-500" />
      ),
    },
  ],
  projects: [
    {
      title: "React tailwind portfolio",
      description:
        "👨‍🎨 An open-source portfolio template built with React and Tailwind.",
      tags: ["template", "portfolio", "reactjs", "tailwindcss"],
      link: "https://github.com/braydentw/react-tailwind-portfolio",
    },
    {
      title: "My personal website",
      description: "⚡ My portfolio built with NextJS and TailwindCSS.",
      tags: ["website", "portfolio", "nextjs", "tailwindcss"],
      link: "https://github.com/braydentW/braydentw",
    },
  ],
};
export default data;
