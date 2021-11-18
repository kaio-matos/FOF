import { BiSearch } from "react-icons/bi";
import "./styles.css";
import Button from "../Buttons/Button";
import CustomLink from "../CustomLink";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <Link to="/">
          <img src="/icons/extended_logo.svg" alt="" />
        </Link>
      </div>
      <nav className="header_menu text">
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About FOF</CustomLink>
          </li>
        </ul>
      </nav>
      <div className="header_search">
        <Button>
          <BiSearch fontSize="1.3rem" />
        </Button>
      </div>
    </header>
  );
}
