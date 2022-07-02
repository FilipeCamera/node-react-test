import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: (event: any) => void;
}

export function Button({ title, onClick, ...rest }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick} {...rest}>
      {title}
    </ButtonContainer>
  );
}
