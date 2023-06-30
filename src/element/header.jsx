import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../img1/logo.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false); // Изначально показываем меню

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowMenu(scrollY > 0); // Показываем меню, если произошел скролл вниз
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`nav ${showMenu ? '' : 'hide-menu'}`}>
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <img src={logo} alt="Лого" /> 
          </div>
          <div className="header_nav">
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/Delivery">Доставка</Link>
              </li>
              <li>
                <Link to="/Contacts">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
