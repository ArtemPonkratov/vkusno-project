
import { Link } from 'react-router-dom';
import './googs.css';

function Cake() {


  return (
    <div className="containera">
      <div className="carda">
        <div className="card-content">
          <img src="./img/test1.jpg" alt="Product" className="product-image" style={{ width: 400 }} />
          <div className="product-details">
            <h2 className="product-name">Капкейки</h2>
            <p className="product-price">Цена: 350p</p>
            <div className="product-filling">
            <p>1. Капкейк</p>
              <select className="filling-select">
                <option className='select__head'>Выберите:</option>
                <option>Ванильный</option>
                <option>Шоколадный</option>
              </select>
              <p>2. Начинка</p>
              <select className="filling-select">
                <option>Вишня</option>
                <option>Соленая карамель</option>
                <option>Без начинки</option>
              </select>
            </div>
            <div className="product-quantity">
              <p>3. Количество</p>
              <select className="filling-select">
                <option>6</option>
                <option>12</option>
                <option>24</option>
              </select>
            </div>
            <Link to="/" className="order-button">Заказать</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cake;
