import { CSSProperties } from "react";
import ButtonLink from "../Buttons/ButtonLink";
import "./styles.css";

interface HeroProps {
  title: string;
  paragraph: string;
  link: { url: string; otherLocation?: boolean; text: string };
  image: string;
  style?: CSSProperties;
  className?: string;
}

export default function Hero({
  title,
  paragraph,
  link,
  image,
  style,
  className,
}: HeroProps) {
  return (
    <div
      style={{ backgroundImage: `url(${image})`, ...style }}
      className={`hero ${className ? className : ""}`}
    >
      <div>
        <h1>{title}</h1>
        <p>{paragraph}</p>

        <ButtonLink otherLocation={link.otherLocation} to={link.url}>
          {link.text}
        </ButtonLink>
      </div>
    </div>
  );
}
