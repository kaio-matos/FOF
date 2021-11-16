import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import "../button.css";
import "./styles.css";

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
}
export default function ButtonLink({
  children,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={`button buttonLink ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
