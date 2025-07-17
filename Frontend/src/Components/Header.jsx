// File: src/components/Header.jsx
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/Header.css'
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
        <img src={logo} alt="Portyours"className="logo" />
        <FaBars className='menu-icon' onClick={() => setMenuOpen(true)}/>
        

     {/* Sidebar Menu */}
            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
            <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
            <ul className="menu-items">
              <li>Home</li>
              <li>Create </li>
              <li>Favorites</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            </div>
    </header>
  );
}