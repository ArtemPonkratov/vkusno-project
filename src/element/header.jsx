import { Link } from 'react-router-dom';
import logo from "../img1/logo.png";


function Header() {
  return (
    <header className="nav">
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