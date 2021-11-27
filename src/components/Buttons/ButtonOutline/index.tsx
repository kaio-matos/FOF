import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import "./styles.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

export default function ButtonOutline({
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`button_outline ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
