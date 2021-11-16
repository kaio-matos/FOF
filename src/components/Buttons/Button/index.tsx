import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import "../button.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={`button ${className ? className : ""}`} {...rest}>
      {children}
    </button>
  );
}
