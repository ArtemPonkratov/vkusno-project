import { useLocation } from 'react-router-dom';
import './FadeImage.css';



function Fadelmage () {
  const location = useLocation();
   const isHomePage = location.pathname === '/';
   
  return (
    <div>
    {isHomePage && (
      <div className="Bg">
        <div className="conta">
        <h1>Добро пожаловать в "Вкусно 39"</h1>
        <p>Попробуйте наши вкусные домашние кондитерские изделия!</p>
        <div className="icon"></div>
        </div>
      </div>
    )}
  </div>
  ) 
}
export default Fadelmage;