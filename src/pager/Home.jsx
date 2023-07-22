import React, { useState } from "react";
import { Link } from "react-router-dom";
import num1 from '../img1/num1.png';
import num2 from '../img1/num2.png';
import num3 from '../img1/num3.png';
import num4 from '../img1/num4.png';



function Home() {
  const [modalProductId, setModalProductId] = useState(null); // id выбранного товара для модального окна



  // Функция для открытия модального окна с определенным id товара
  const openModal = (productId) => {
    setModalProductId(productId);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalProductId(null);
  };

  const modal1Images = [
    "./img/keks.jpg",
    "./img/1keks.jpg",
    "./img/2keks.jpg",
    "./img/3keks.jpg"
  ];

  // Картинки для модального окна с id 2


  const [modalImageIndex, setModalImageIndex] = useState(0); // индекс текущей картинки в модальном окне

 
  

  return (
    <div className="container">
      <div className="cont">
        <div className="card">
          <img src="./img/keks.jpg" alt="Product" style={{ width: 400 }} />
          <div className="card-info">
            <h2>Капкейки</h2>
            <button onClick={() => openModal(1)} className="button">Подробности</button>
          </div>
        </div>
        <div className="card">
          <img src="./img/keks.jpg" alt="Product" style={{ width: 400 }} />
          <div className="card-info">
            <h2>Шу</h2>
            <button onClick={() => openModal(2)} className="button">Подробности</button>
          </div>
        </div>
        <div className="card">
          <img src="./img/keks.jpg" alt="Product" style={{ width: 400 }} />
          <div className="card-info">
            <h2>Шу</h2>
            <button onClick={() => openModal(2)} className="button">Подробности</button>
          </div>
        </div>
        <div className="card">
          <img src="./img/keks.jpg" alt="Product" style={{ width: 400 }} />
          <div className="card-info">
            <h2>Шу</h2>
            <button onClick={() => openModal(2)} className="button">Подробности</button>
          </div>
        </div>
      </div>

      {/* Модальное окно для товара с id 1 */}
      {modalProductId === 1 && (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-images">
            <img
              src={modal1Images[modalImageIndex] }
              alt="Product"
              className="modal-image"
              
            />
            {modal1Images.length > 1 && (
              <div className="modal-navigator">
                {modal1Images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`foto ${index}`}
                    className={`modal-navigator-image ${index === modalImageIndex ? 'active' : ''}`}
                    onClick={() => setModalImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="product-details">
              <h2 className="product-name">Капкейки</h2>
              <p className="product-price">Цена: 350p</p>
              <div className="product-filling">
                <p className='font'>1. Капкейк</p>
                <select className="filling-select">
                  <option className='select__head'>Выберите:</option>
                  <option>Ванильный</option>
                  <option>Шоколадный</option>
                </select>
                <p className='font'>2. Начинка</p>
                <select className="filling-select">
                  <option className='select__head'>Выберите:</option>
                  <option>Вишня</option>
                  <option>Соленая карамель</option>
                  <option>Без начинки</option>
                </select>
              </div>
              <div className="product-quantity">
                <p className='font'>3. Количество</p>
                <select className="filling-select">
                  <option>6</option>
                  <option>12</option>
                  <option>24</option>
                </select>
              </div>
              <Link to="/" className="order-button">Заказать</Link>
            </div>
            <button onClick={closeModal} className="close-button">Закрыть</button>
          </div>
        </div>
      )}

      

      {/* Модальное окно для товара с id 2 */}
      {modalProductId === 2 && (
        <div className="modal">
          <div className="modal-content">
            <img src="./img/keks.jpg" alt="Product" className="product-image" style={{ width: 400 }} />
            <div className="product-details">
              <h2 className="product-name">Пицца</h2>
              <p className="product-price">Цена: 500p</p>
              <div className="product-toppings">
                <p className='font'>1. Топпинги</p>
                <select className="topping-select">
                  <option className='select__head'>Выберите:</option>
                  <option>Грибы</option>
                  <option>Помидоры</option>
                  <option>Сыр</option>
                </select>
              </div>
              <div className="product-quantity">
                <p className='font'>2. Количество</p>
                <select className="filling-select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to="/" className="order-button">Заказать</Link>
            </div>
            <button onClick={closeModal} className="close-button">Закрыть</button>
          </div>
        </div>
      )}

<div className="how">
      <h2>Как мы работаем:</h2>
      <div className="work-steps">
        <div className="work-step">
          {/* Шаг 1: Заказ товаров */}
          <img src={num1} alt="1" style={{ width: 70 }} />
          <p className="step-title">Заказ товаров</p>
          <p className="step-description">Позвольте себе насладиться разнообразием доступных товаров. У нас есть капкейки, печенье и другие вкусные десерты, из которых вы можете выбрать и сделать заказ на нашем сайте.</p>
        </div>
        <div className="work-step">
          {/* Шаг 2: Подтверждение */}
          <img src={num2} alt="2" style={{ width: 70 }} />
          <p className="step-title">Подтверждение</p>
          <p className="step-description">После размещения заказа мы свяжемся с вами для подтверждения деталей заказа, включая количество товаров, адрес доставки и предпочтительное время доставки.</p>
        </div>
        <div className="work-step">
          {/* Шаг 3: Доставка */}
          <img src={num3} alt="3" style={{ width: 70 }} />
          <p className="step-title">Доставка</p>
          <p className="step-description">Мы предлагаем доставку или самовывоз. Выберите наиболее удобный вариант для вас.</p>
        </div>
        <div className="work-step">
          {/* Шаг 4: Оплата */}
          <img src={num4} alt="4" style={{ width: 70 }} />
          <p className="step-title">Оплата</p>
          <p className="step-description">На нашем сайте доступна полная оплата заказа. В случае предпочтения предоплаты, пожалуйста, свяжитесь с нами по телефону для уточнения деталей и согласования условий. Мы готовы принять различные способы оплаты, включая онлайн-платежи, наличные и другие варианты, чтобы обеспечить ваше удобство. </p>
        </div>
      </div>
    </div>
  </div>
    
    
  );
}

export default Home;
