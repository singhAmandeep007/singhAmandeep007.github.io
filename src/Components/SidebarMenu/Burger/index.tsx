import { BurgerContainer } from "./BurgerElements";

type TBurgerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Burger = ({ open, setOpen, ...props }: TBurgerProps) => {
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
