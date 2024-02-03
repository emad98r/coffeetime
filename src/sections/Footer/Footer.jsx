import "./footer.scss";
import logo from "../../assets/images/logo.svg";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { MdAddLocation } from "react-icons/md";
import { MdPhone } from "react-icons/md";

import { SubBtn } from "../../component/Buttons/Buttons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="info">
          <img src={logo} alt="logo" />
          <p>
            Etiam consequat sem ullamcorper, euismod metus sit amet, tristique
            justo. Vestibulum mattis, nisi ut.
          </p>
          <ul>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h2 className="title">Contact Info</h2>
          <div className="data">
            <section>
              <h4>
                <MdAddLocation /> our location:
              </h4>
              <p>Rio de Janeiro, RJ Brazil, 04103 Route</p>
            </section>
            <section>
              <h4>
                <MdPhone /> phones:
              </h4>
              <p>
                +49078-039-23-11 <br /> +49078-028-55-60
              </p>
            </section>
          </div>
        </div>
        <div className="subscribe">
          <h2 className="title">Subscribe</h2>
          <form action="">
            <input
              type="email"
              name="email"
              id="emial"
              placeholder="Your Email"
            />
            <SubBtn name="subscribe" />
          </form>
          <label htmlFor="checkBox">
            <input type="checkbox" name="checkBox" id="checkBox" />I have read
            and agree to the terms & conditions
          </label>
        </div>
      </div>
      <div className="copy-right">
        ©2024 EMAD RASHAD
        <a href="https://emadrashad.com/" target="_block">
          MY WEBSITE
        </a>
      </div>
    </footer>
  );
}
