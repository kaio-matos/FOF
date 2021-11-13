import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header_logo"></div>
      <div className="header_menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About FOF</Link>
          </li>
        </ul>
      </div>
      <div className="header_search"></div>
    </header>
  );
}
