import { BurgerContainer } from "./BurgerElements";

type TBurgerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Burger = ({ open, setOpen, ...props }: TBurgerProps) => {
  return (
    <BurgerContainer
      aria-label="Toggle sidebar"
      aria-expanded={open}
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
