import "./styles.css";
import CustomLink from "../CustomLink";
import { Link } from "react-router-dom";
import Search from "../Search";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Buttons/Button";

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    if (width <= 660) {
      setMobile(true);
    }
  }, [width]);

  if (!mobile) {
    return (
      <header className="header">
        <div className="header_logo">
          <Link to="/">
            <img
              src="/icons/extended_logo.svg"
              alt="Foundation of Foundations | FOF"
            />
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
          <Search />
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="header_logo">
        <Link to="/">
          <img
            src="/icons/extended_logo.svg"
            alt="Foundation of Foundations | FOF"
          />
        </Link>
      </div>
      <Button
        onClick={() => {
          setOpenMobileMenu(!openMobileMenu);
        }}
      >
        <AiOutlineMenu />
      </Button>
      <div className="mobile_menu_container">
        <div className={`mobile_menu ${openMobileMenu ? "open" : ""}`}>
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
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}
