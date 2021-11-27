import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import CustomLink from "../CustomLink";
import Search from "../Search";
import Button from "../Buttons/Button";
import FOF_extended from "../../assets/extended_logo.svg";
import "./styles.css";

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [background, setBackground] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    function checkSize() {
      if (window.innerWidth <= 660) setMobile(true);
      else setMobile(false);
    }
    window.addEventListener("resize", checkSize);
    checkSize();
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    function backgroundHeader() {
      if (window.scrollY >= window.innerHeight / 1.5) setBackground(true);
      else setBackground(false);
    }

    window.addEventListener("scroll", backgroundHeader);
    return () => window.removeEventListener("scroll", backgroundHeader);
  }, []);

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
      <header className={`header ${background ? "background" : ""}`}>
        <HeaderLogo />
        <HeaderButtons />
      </header>
    );
  }

  return (
    <header className={`header ${background ? "background" : ""}`}>
      <HeaderLogo />

      <div className="mobile_header_menu_container">
        <Button onClick={toggleMobileMenu}>
          <AiOutlineMenu />
        </Button>

        <div className={`mobile_header_menu ${openMobileMenu ? "open" : ""}`}>
          <HeaderButtons />
        </div>
      </div>
    </header>
  );
}
