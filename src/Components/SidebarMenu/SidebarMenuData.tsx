import { RiGithubFill, RiLinkedinFill, RiMailLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

import profilePic from "/profilePic.webp";

export const data = {
  devName: "Amandeep Singh",
  profilePic: profilePic,
  socialLinks: [
    {
      platform: "Mail",
      href: "mailto:amandeep.singh.fsd@gmail.com",
      title: "Send Mail",
      icon: <RiMailLine />,
      key: uuidv4(),
    },
    {
      platform: "Github",
      href: "https://github.com/singhAmandeep007",
      title: "Github Profile",
      icon: <RiGithubFill />,
      key: uuidv4(),
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/singhamandeep007/",
      title: "LinkedIn Profile",
      icon: <RiLinkedinFill />,
      key: uuidv4(),
    },
  ],
  menuLinks: [
    {
      id: uuidv4(),
      title: "Home",
      path: "/",
    },
    {
      id: uuidv4(),
      title: "Projects",
      path: "/projects",
    },
    {
      id: uuidv4(),
      title: "Posts",
      path: "/posts",
    },
    {
      id: uuidv4(),
      title: "About",
      path: "/about",
    },
  ],
};
