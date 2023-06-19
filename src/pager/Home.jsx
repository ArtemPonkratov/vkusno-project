import React from "react";

function Home() {
  return (
    <div className="cont">
      <div className="card">
        <img src="./img/keks.jpg" alt="Product" style={{width:300}}/>
        <div className="card-info">
          <h2>Капкейки</h2>
          <button>Подробности</button>
        </div>
      </div>
      <div className="card">
        <img src="./img/keks.jpg" alt="Product" style={{width:300}}/>
        <div className="card-info">
          <h2>Пицца</h2>
          <button>Подробности</button>
        </div>
      </div>
      <div className="card">
        <img src="./img/keks.jpg" alt="Product" style={{width:300}}/>
        <div className="card-info">
          <h2>Название продукта</h2>
          <button>Подробности</button>
        </div>
      </div>
      <div className="card">
        <img src="./img/keks.jpg" alt="Product" style={{width:300}} />
        <div className="card-info">
          <h2>Название продукта</h2>
          <button>Подробности</button>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
