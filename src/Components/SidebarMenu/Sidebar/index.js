import React from 'react';
import {
   SidebarContainer,
   SidebarLink,
   SidebarAvatar,
   SidebarSocial,
   SidebarLinkContainer,
} from './SidebarElements';
import ToggleTheme from './../ToggleTheme';
import data from './../SidebarMenuData';

const Sidebar = ({ open, setOpen, ...props }) => {
   const isHidden = open ? true : false;
   const tabIndex = isHidden ? 0 : -1;

   return (
      <SidebarContainer $open={open} aria-hidden={isHidden} {...props}>
         <SidebarAvatar>
            <img
               src={data.profilePic}
               alt="profilePic"
               width="100%"
               height="100%"
            />
            <figcaption>{data.devName}</figcaption>
         </SidebarAvatar>
         <SidebarSocial>
            {data.socialLinks.map((item) => {
               return (
                  <a
                     key={item.key}
                     href={item.href}
                     target="_blank"
                     rel="noreferrer"
                     aria-label={item.title}
                     title={item.title}
                  >
                     {item.icon}
                  </a>
               );
            })}
         </SidebarSocial>
         <SidebarLinkContainer>
            {data.menuLinks.map(({ id, title, path }) => {
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
