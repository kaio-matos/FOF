import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import "./style.css";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
}

export default function CustomLink({
  children,
  className,
  ...rest
}: CustomLinkProps) {
  return (
    <Link className={`customLink ${className ? className : ""}`} {...rest}>
      {children}
    </Link>
  );
}
