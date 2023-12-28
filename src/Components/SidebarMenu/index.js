import React from 'react';
import FocusLock from 'react-focus-lock';

import Burger from './Burger';
import Sidebar from './Sidebar';

const SidebarMenu = React.forwardRef((props, ref) => {
  const menuId = 'main-menu';
  const { isSidebarOpen, setIsSidebarOpen } = props;

  return (
    <aside ref={ref}>
      <FocusLock disabled={!isSidebarOpen}>
        <Burger
          open={isSidebarOpen}
          setOpen={setIsSidebarOpen}
          aria-controls={menuId}
        />
        <Sidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} id={menuId} />
      </FocusLock>
    </aside>
  );
});

export default SidebarMenu;
