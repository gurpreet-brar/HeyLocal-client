import "./Footer.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/icons/Facebook.svg";
import instagram from "../../assets/icons/Instagram.svg";
import twitter from "../../assets/icons/X_twitter.svg";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__logo">HeyLocal</h3>

      <div className="footer__content">
        <div className="footer__links">
          <h3 className="footer__title">HeyLocal</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="footer__item">
              <a href="mailto:support@heylocal.com">Contact</a>
            </li>
            <li className="footer__item">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <h3 className="footer__subtitle">Follow Us</h3>
          <div className="footer__social-icons">
            <a
              className="social-icons__link"
              href="https://instagram.com"
              target="_blank"
            >
              <img src={instagram} alt="Instagram Icon" />
            </a>
            <a
              className="social-icons__link"
              href="https://twitter.com"
              target="_blank"
            >
              <img src={twitter} alt="Twitter Icon" />
            </a>
            <a
              className="social-icons__link"
              href="https://facebook.com"
              target="_blank"
            >
              <img src={facebook} alt="Facebook Icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 HeyLocal. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
