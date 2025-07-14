// File: src/components/Header.jsx
import logo from "../assets/logo.png";
import { FaBars } from 'react-icons/fa';
import '../Styles/Header.css'

export default function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Portyours"className="logo" />
        <div className="hamburger">
              <FaBars />
        </div>
    </header>
  );
}