import React from "react";
import { Link } from "react-router-dom"; // Импортируем компонент Link
import num1 from "../img1/num1.png";
import num2 from "../img1/num2.png";
import num3 from "../img1/num3.png";
import num4 from "../img1/num4.png";


function Home() {

  return (
  <div className="containr">
    <div className="cont">
      <div className="card">
        <img src="./img/keks.jpg" alt="Product" style={{ width: 300 }} />
        <div className="card-info">
          <h2>Капкейки</h2>
          <Link to="./Cake" className="button">Подробности</Link> {/* Заменяем <button> на <Link> */}
        </div>
      </div>
      <div className="card">
        <img src="./img/keks.jpg" alt="Product" style={{ width: 300 }} />
        <div className="card-info">
          <h2>Пицца</h2>
          <Link to="/Cakee" className="button">Подробности</Link> {/* Заменяем <button> на <Link> */}
        </div>
      </div>
      <div className="card">
        <img src="./img/keks.jpg" alt="Product" style={{ width: 300 }} />
        <div className="card-info">
          <h2>Название продукта</h2>
          <Link to="/" className="button">Подробности</Link> {/* Заменяем <button> на <Link> */}
        </div>
      </div>
      <div className="card">
        <img src="./img/keks.jpg" alt="Product" style={{ width: 300 }} />
        <div className="card-info">
          <h2>Название продукта</h2>
          <Link to="/" className="button">Подробности</Link> {/* Заменяем <button> на <Link> */}
        </div>
      </div>
    </div>  
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
