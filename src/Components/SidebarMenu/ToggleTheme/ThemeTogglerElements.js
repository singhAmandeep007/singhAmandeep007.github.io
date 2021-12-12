import styled from 'styled-components';

export const ThemeTogglerContainer = styled.div`
   padding: 1.3rem 0;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.5rem;
`;

export const TogglerInput = styled.input`
   display: none;
   &:checked ~ label::after {
      left: 2.4rem;
   }

   .hidden {
      display: none;
   }
`;
export const TogglerLabel = styled.label`
   position: relative;
   display: block;
   height: 1.8rem;
   width: 4rem;
   background: var(--color-primary-light);
   border-radius: 100px;
   cursor: pointer;
   transition: all 0.3s ease;

   margin: 0 1.5rem;

   &::after {
      position: absolute;
      left: -0.6rem;
      top: -0.26rem;
      display: block;
      width: 2.3rem;
      height: 2.3rem;
      border-radius: 100px;
      background: var(--color-primary);

      content: '';
      transition: all 0.3s ease;
   }
   &:active::after {
      transform: scale(1.15, 0.85);
   }
`;
