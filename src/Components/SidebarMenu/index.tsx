import React from "react";
import FocusLock from "react-focus-lock";

import { Burger } from "./Burger";
import { Sidebar } from "./Sidebar";

type TSidebarMenuProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
};

export const SidebarMenu = React.forwardRef<HTMLElement, TSidebarMenuProps>((props, ref) => {
  const menuId = "main-menu";
  const { isSidebarOpen, setIsSidebarOpen } = props;

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
        />
      </FocusLock>
    </aside>
  );
});

SidebarMenu.displayName = "SidebarMenu";
