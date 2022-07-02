import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (value: any) => void;
}

export function Input({ value, onChange, ...rest }: InputProps) {
  return <InputContainer value={value} onChange={onChange} {...rest} />;
}
