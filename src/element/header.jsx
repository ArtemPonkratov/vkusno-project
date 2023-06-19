import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="nav">
      <div className="container">
        <div className="header_row">
          <div className="header_logo"></div>
          <div className="header_nav">
            <ul>
              <li>
                <Link to="/">Главная</Link>
                <Link to="/Delivery">Доставка</Link>
                <Link to="/Contacts">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;