import React from "react";
import { Link } from "react-router-dom"; // Импортируем компонент Link


function Home() {

  return (
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
      <div className="card">
        <img src="./img/keks.jpg" alt="Product" style={{ width: 300 }} />
        <div className="card-info">
          <h2>Название продукта</h2>
          <Link to="/" className="button">Подробности</Link> {/* Заменяем <button> на <Link> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
