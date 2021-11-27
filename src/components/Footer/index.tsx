import { Link } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import CustomLink from "../CustomLink";
import ButtonOutline from "../Buttons/ButtonOutline";
import "./styles.css";

export default function Footer() {
  const aboutLinks = [
    { text: "About the Foundation", to: "FOF/about" },
    { text: "About Fred", to: "FOF" },
    { text: "Brian Doolan, CEO", to: "FOF" },
    { text: "Gabi Hollows, Fouding Director", to: "FOF" },
    { text: "Board of Directors", to: "FOF" },
    { text: "Corporate Partners", to: "FOF" },
  ];

  const resourceLinks = [
    { text: "Eye Health", to: "FOF" },
    { text: "Media", to: "FOF" },
    { text: "FAQs", to: "FOF" },
  ];

  const joinusLinks = [
    { text: "Contact Us", to: "FOF" },
    { text: "Carrers", to: "FOF" },
    { text: "The Fred Hollows Humanity Award", to: "FOF" },
    { text: "Volunteer", to: "FOF" },
    { text: "Make a tax deductible donation", to: "FOF" },
    { text: "Colatrek", to: "FOF" },
  ];

  return (
    <footer>
      <section className="footer_information">
        <div className="footer_col">
          <p className="title footer_title">About Us</p>
          {aboutLinks.map((link) => {
            return (
              <CustomLink key={link.text} className="footer_link" to={link.to}>
                {link.text}
              </CustomLink>
            );
          })}
        </div>
        <div className="footer_col">
          <p className="title footer_title">Resources</p>
          {resourceLinks.map((link) => {
            return (
              <CustomLink key={link.text} className="footer_link" to={link.to}>
                {link.text}
              </CustomLink>
            );
          })}
        </div>
        <div className="footer_col">
          <p className="title footer_title">Join Us</p>
          {joinusLinks.map((link) => {
            return (
              <CustomLink key={link.text} className="footer_link" to={link.to}>
                {link.text}
              </CustomLink>
            );
          })}
        </div>
        <div className="footer_col">
          <div className="footer_contact_row">
            <sub className="text ">Donate by phone</sub>
            <p className="title">1800 352 352</p>
          </div>
          <div className="footer_contact_row">
            <sub className="text">Join our comunnity</sub>
            <div>
              <Link to="FOF">
                <FaFacebookF />
              </Link>
              <Link to="FOF">
                <AiOutlineTwitter />
              </Link>
              <Link to="FOF">
                <BsYoutube />
              </Link>
              <Link to="FOF">
                <ImInstagram />
              </Link>
            </div>
          </div>
          <div className="footer_contact_row">
            <sub className="text">Stay up to Date</sub>
            <ButtonOutline className="footer_subscribe_button">
              SUBSCRIBE
            </ButtonOutline>
          </div>
        </div>
      </section>
      <hr />
      <section className="footer_additional_information">
        <div className="text">
          <Link to="FOF">Terms & Conditions</Link> |{" "}
          <Link to="FOF">Privacy & Security</Link> |{" "}
          <Link to="FOF">Sitemap</Link>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquid illum quo officia dignissimos, velit aut debitis nisi earum
            ipsum magnam voluptates nesciunt facere adipisci. Fuga voluptate
            praesentium nostrum eaque odit incidunt suscipit minima! Quas error
            temporibus cupiditate libero culpa rerum rem quia odit.
            Perspiciatis?
          </p>
        </div>
      </section>
    </footer>
  );
}
