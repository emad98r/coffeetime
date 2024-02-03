import "./header.scss";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaUser,
} from "react-icons/fa6";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/images/logo.svg";
import { MdCancel } from "react-icons/md";

function Header() {
  function x() {
    {
      const nav = document.querySelector("nav .container");
      const listBtn = document.querySelector(".burger-list");
      const cancelBtn = document.querySelector(".cancel-btn");

      listBtn.addEventListener("click", () => {
        nav.style.display = "flex";
        listBtn.style.display = "none";
        cancelBtn.style.display = "block";
      });
      cancelBtn.addEventListener("click", () => {
        nav.style.display = "none";
        listBtn.style.display = "block";
        cancelBtn.style.display = "none";
      });
    }
  }

  return (
    <header>
      <div className="container">
        <div className="follow-us">
          <p>follow us</p>
          <ul className="s-m-icons">
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
        <img className="logo" src={logo} alt="logo" />

        <GiHamburgerMenu className="burger-list" onClick={x} />
        <MdCancel className="cancel-btn" />

        <ul className="user-action">
          <li>
            <FaUser />
          </li>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            <FaSearch />
          </li>
        </ul>
      </div>

      {/* ----------------------------- */}

      <nav>
        <div className="container">
          <ul className="active">
            Home
            <span> &#10148; </span>
            <div className="wrapper">
              <li>Natural Coffee</li>
              <li>coffee House</li>
              <li>Parallax Page</li>
              <li>Coffee Shop</li>
              <li>Craft Coffee</li>
              <li>Narutal Coffee RTL</li>
            </div>
          </ul>
          <ul>
            About us
            <span> &#10148; </span>
            <div className="wrapper">
              <li>Testimonials</li>
              <li>FAQ</li>
              <li>Gallery</li>
              <li>404 Page</li>
            </div>
          </ul>
          <ul>
            Products
            <span> &#10148; </span>
            <div className="wrapper">
              <li>Shop</li>
              <li>Cart</li>
              <li>Checkout</li>
              <li>My account</li>
            </div>
          </ul>
          <ul>
            Blog
            <span> &#10148; </span>
            <div className="wrapper">
              <li>Blog with Sidebar</li>
              <li>Blog without Sidebar</li>
            </div>
          </ul>
          <ul>contacts</ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
