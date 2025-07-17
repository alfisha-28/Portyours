import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

import '../Styles/Footer.css';
import appStore from '../assets/appstore.png';
import playStore from '../assets/playstore.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-text">
          Made with <span className="heart">❤️</span> by Portyours ©
        </div>

        <div className="language-select">
          <span>🌐</span> English ▼
        </div>

        <div className="social-icons">
          <FaXTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>

        <div className="app-buttons">
          <img src={appStore} alt="App Store" />
          <img src={playStore} alt="Google Play" />
        </div>
      </div>
    </footer>
  );
}
