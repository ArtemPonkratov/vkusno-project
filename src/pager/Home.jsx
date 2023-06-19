import React from "react";

function Home() {
  return (
    <div className="cont">
      <div className="card">
        <img src="keks.jpg" alt="Product" />
        <div className="card-info">
          <h2>Кексы</h2>
          <button>Подробности</button>
        </div>
      </div>
      <div className="card">
        <img src="" alt="Product" />
        <div className="card-info">
          <h2>Пицца</h2>
          <button>Подробности</button>
        </div>
      </div>
      <div className="card">
        <img src="" alt="Product" />
        <div className="card-info">
          <h2>Название продукта</h2>
          <button>Подробности</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
