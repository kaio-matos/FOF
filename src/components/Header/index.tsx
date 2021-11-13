import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <h1>Logo</h1>
      </div>
      <nav className="header_menu text">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About FOF</Link>
          </li>
        </ul>
      </nav>
      <div className="header_search">
        <button>
          <BiSearch fontSize="1.3rem" />
        </button>
      </div>
    </header>
  );
}
