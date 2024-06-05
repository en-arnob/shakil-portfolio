import React from "react";
import { FaAndroid, FaDatabase } from "react-icons/fa";
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
      skillName: "Flutter",
      skillIcon: (
        <SiFlutter className="text-4xl mx-auto inline-block text-blue-600" />
      ),
    },
    {
      skillName: "Firebase",
      skillIcon: (
        <SiFirebase className="text-4xl mx-auto inline-block text-orange-500" />
      ),
    },
    {
      skillName: "SQL",
      skillIcon: (
        <FaDatabase className="text-4xl mx-auto inline-block text-gray-800" />
      ),
    },
  ],
  experiences: [
    {
      id: 1,
      title: "Premier Cement Mills PLC",
      description: "Junior Software Engineer(Android)",
      dates: "Jan 2024 - Present",
    },

    {
      id: 2,
      title: "EWN Bangladesh Limited",
      description: "Junior Software Engineer(Android)",
      dates: "Jan 2023 - Dec 2023",
    },
  ],
  projects: [
    {
      title: "Truck Bidder",
      description:
        "🚚 Mobile application aimed at optimizing truck procurement processes for cement delivery, with a core focus on reducing company expenditures on truck rentals.",
      tags: ["Kotlin", "AndroidX", "HILT", "REST API"],
      link: "#",
    },
    {
      title: "Premier Sales App",
      description:
        "📝 A core application managing sales, marketing, goal setting, cash deposits, attendance, and leave tracking  for Premier Cement Mills PLC.",
      tags: ["Kotlin", "Java", "Dagger", "AndroidX", "REST API"],
      link: "#",
    },
    {
      title: "SCAI",
      description:
        "🏢 An office management application, handling features such as attendance tracking, punch in/out, catering management, chats, and more.",
      tags: ["Java", "Firebase", "AndroidX", "HILT"],
      link: "#",
    },
    {
      title: "PetPat",
      description:
        "🐶 Online multi-vendor ecommerce application exclusively for pet-related services and products.",
      tags: ["Kotlin", "REST API", "AndroidX", "HILT"],
      link: "#",
    },
  ],
};
export default data;
