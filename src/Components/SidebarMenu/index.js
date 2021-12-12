import React from 'react';
import Burger from './Burger';
import Sidebar from './Sidebar';
import FocusLock from 'react-focus-lock';

const SidebarMenu = React.forwardRef((props, ref) => {
   const menuId = 'main-menu';
   const { isSidebarOpen, setIsSidebarOpen, isChecked, themeToggler } = props;

   return (
      <aside ref={ref}>
         <FocusLock disabled={!isSidebarOpen}>
            <Burger
               open={isSidebarOpen}
               setOpen={setIsSidebarOpen}
               aria-controls={menuId}
            />
            <Sidebar
               open={isSidebarOpen}
               setOpen={setIsSidebarOpen}
               id={menuId}
               isChecked={isChecked}
               themeToggler={themeToggler}
            />
         </FocusLock>
      </aside>
   );
});

export default SidebarMenu;
