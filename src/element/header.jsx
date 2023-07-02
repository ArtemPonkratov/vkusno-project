import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../img1/logono.png";

function Header() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowMenu(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ContMenu = location.pathname === '/delivery' || location.pathname === '/contacts' ;

  return (
    <header className={`${showMenu && !ContMenu ? 'nav' : ''}`}>
      <div className="container">
        <div className="header_row">
          <div className="header_logo">
            <img src={logo} alt="Лого" style={{ width: 250, margin: 10 }} /> 
          </div>
          <div className="header_nav">
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/delivery">Доставка</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
