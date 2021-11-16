import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import "../button.css";
import "./styles.css";

interface ButtonLinkProps extends LinkProps {
  children: ReactNode;
  otherLocation?: boolean;
}
export default function ButtonLink({
  children,
  className,
  otherLocation,
  ...rest
}: ButtonLinkProps) {
  if (otherLocation) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        className={`button buttonLink ${className ? className : ""}`}
        href={String(rest.to)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      className={`button buttonLink ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
