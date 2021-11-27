import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import CustomLink from "../CustomLink";
import Search from "../Search";
import Button from "../Buttons/Button";
import FOF_extended from "../../assets/extended_logo.svg";
import useWindowSize from "../../hooks/useWindowSize";
import "./styles.css";

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    if (width <= 660) setMobile(true);
    else setMobile(false);
  }, [width]);

  function toggleMobileMenu() {
    setOpenMobileMenu(!openMobileMenu);
  }

  function HeaderLogo() {
    return (
      <div className="header_logo">
        <Link to="/FOF/">
          <img src={FOF_extended} alt="Foundation of Foundations | FOF" />
        </Link>
      </div>
    );
  }

  function HeaderButtons() {
    return (
      <>
        <nav className="header_menu text">
          <ul>
            <li>
              <CustomLink to="/FOF/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/FOF/about">About FOF</CustomLink>
            </li>
          </ul>
        </nav>
        <div className="header_search">
          <Search />
        </div>
      </>
    );
  }

  if (!mobile) {
    return (
      <header className="header">
        <HeaderLogo />
        <HeaderButtons />
      </header>
    );
  }

  return (
    <header className="header">
      <HeaderLogo />

      <Button onClick={toggleMobileMenu}>
        <AiOutlineMenu />
      </Button>

      <div className="mobile_header_menu_container">
        <div className={`mobile_header_menu ${openMobileMenu ? "open" : ""}`}>
          <HeaderButtons />
        </div>
      </div>
    </header>
  );
}
