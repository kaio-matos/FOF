import "./styles.css";
import CustomLink from "../CustomLink";
import { Link } from "react-router-dom";
import Search from "../Search";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Buttons/Button";
import FOF_extended from "../../assets/extended_logo.svg";

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    if (window.innerWidth <= 660) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [width]);

  if (!mobile) {
    return (
      <header className="header">
        <div className="header_logo">
          <Link to="/FOF/">
            <img src={FOF_extended} alt="Foundation of Foundations | FOF" />
          </Link>
        </div>
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
      </header>
    );
  }

  return (
    <header className="header">
      <div className="header_logo">
        <Link to="/FOF/">
          <img src={FOF_extended} alt="Foundation of Foundations | FOF" />
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
        </div>
      </div>
    </header>
  );
}
