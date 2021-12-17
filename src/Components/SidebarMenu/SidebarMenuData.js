import { v4 as uuidv4 } from 'uuid';
import { RiGithubFill, RiLinkedinFill, RiMailLine } from 'react-icons/ri';
import profilePic from './../../Common/profilePic.jpg';

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
         href: 'https://github.com/amandeepmicro',
         title: 'Github Profile',
         icon: <RiGithubFill />,
         key: uuidv4(),
      },
      {
         platform: 'LinkedIn',
         href: 'https://www.linkedin.com/in/amandeep-singh-0803/',
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
         title: 'About',
         path: '/about',
      },
      {
         id: uuidv4(),
         title: 'Portfolio',
         path: '/portfolio',
      },
      {
         id: uuidv4(),
         title: 'Articles',
         path: '/articles',
      },
   ],
};
export default data;
