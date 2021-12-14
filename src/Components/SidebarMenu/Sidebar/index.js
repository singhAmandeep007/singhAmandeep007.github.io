import React from 'react';
import {
   SidebarContainer,
   SidebarLink,
   SidebarAvatar,
   SidebarSocial,
   SidebarLinkContainer,
} from './SidebarElements';
import { SidebarData } from './SidebarData';
import ToggleTheme from './../ToggleTheme';
import { RiGithubFill, RiLinkedinFill, RiMailLine } from 'react-icons/ri';

import profilePic from './profilePic.jpg';

const Sidebar = ({ open, setOpen, ...props }) => {
   const isHidden = open ? true : false;
   const tabIndex = isHidden ? 0 : -1;

   return (
      <SidebarContainer $open={open} aria-hidden={isHidden} {...props}>
         <SidebarAvatar>
            <img src={profilePic} alt="profilePic" width="100%" height="100%" />
            <figcaption>Amandeep Singh</figcaption>
         </SidebarAvatar>
         <SidebarSocial>
            <a
               href="mailto:amandeep.singh.fsd@gmail.com"
               target="_blank"
               rel="noreferrer"
               aria-label="mail"
               title="Send Mail"
            >
               <RiMailLine />
            </a>
            <a
               href="https://github.com/amandeepmicro"
               target="_blank"
               rel="noreferrer"
               aria-label="Github"
               title="Github Profile"
            >
               <RiGithubFill />
            </a>
            <a
               href="https://www.linkedin.com/in/amandeep-singh-0803/"
               target="_blank"
               rel="noreferrer"
               aria-label="LinkedIn"
               title="LinkedIn Profile"
            >
               <RiLinkedinFill />
            </a>
         </SidebarSocial>
         <SidebarLinkContainer>
            {SidebarData.map(({ id, title, path }) => {
               return (
                  <SidebarLink
                     key={id}
                     to={path}
                     tabIndex={tabIndex}
                     onClick={() => setOpen(!open)}
                     exact={true}
                  >
                     {title}
                  </SidebarLink>
               );
            })}
         </SidebarLinkContainer>

         <ToggleTheme
            isChecked={props.isChecked}
            themeToggler={props.themeToggler}
         />
      </SidebarContainer>
   );
};

export default Sidebar;
