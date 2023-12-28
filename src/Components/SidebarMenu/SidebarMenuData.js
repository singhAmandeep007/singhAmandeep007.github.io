import { v4 as uuidv4 } from 'uuid';
import { RiGithubFill, RiLinkedinFill, RiMailLine } from 'react-icons/ri';
import profilePic from './../../Assets/profilePic.png';

const data = {
  devName: 'Amandeep Singh',
  profilePic: profilePic,
  socialLinks: [
    {
      platform: 'Mail',
      href: 'mailto:amandeep.singh.fsd@gmail.com',
      title: 'Send Mail',
      icon: <RiMailLine />,
      key: uuidv4(),
    },
    {
      platform: 'Github',
      href: 'https://github.com/singhAmandeep007',
      title: 'Github Profile',
      icon: <RiGithubFill />,
      key: uuidv4(),
    },
    {
      platform: 'LinkedIn',
      href: 'https://www.linkedin.com/in/singhamandeep007/',
      title: 'LinkedIn Profile',
      icon: <RiLinkedinFill />,
      key: uuidv4(),
    },
  ],
  menuLinks: [
    {
      id: uuidv4(),
      title: 'Home',
      path: '/',
    },
    {
      id: uuidv4(),
      title: 'Projects',
      path: '/projects',
    },
    {
      id: uuidv4(),
      title: 'About',
      path: '/about',
    },
  ],
};
export default data;
