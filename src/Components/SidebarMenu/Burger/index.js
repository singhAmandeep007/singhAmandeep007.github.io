import React from 'react';
import { BurgerContainer } from './BurgerElements';

const Burger = ({ open, setOpen, ...props }) => {
   const isExpanded = open ? true : false;

   return (
      <BurgerContainer
         aria-label="Toggle sidebar"
         aria-expanded={isExpanded}
         $open={open}
         onClick={() => setOpen(!open)}
         {...props}
      >
         <span />
         <span />
         <span />
      </BurgerContainer>
   );
};

export default Burger;
