import { Link } from "react-router-dom";
import whatsappIcon from "../img/whatsapp.png";
import telegramIcon from "../img/Telegram.png";

function Contact() {
  return (
    <div className="contact-info">
      <div className="contact-info-top">
        <h2>Контактная информация</h2>
        <p>Телефон: -</p>
        <p>Email: -----</p>
        <p>Адрес: - , Город -</p>
      <div className="info-icons">
      <Link to="whatsapp://send?phone=79969593305" className="whatsapp">  
            <img src={whatsappIcon} alt="WhatsApp Icon" style={{width: 250, margin:10}}/>
          </Link>
          <Link to="https://telegram.me/логинкомпании" className="whatsapp">  
            <img src={telegramIcon} alt="WhatsApp Icon" style={{width: 250, margin:10}}/>
          </Link>
      </div>
      </div>
      <div className="contact-info-bottom">
        <h2>Обратная связь</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон:</label>
            <input type="tel" id="phone" defaultValue="+7" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Сообщение:</label>
            <textarea id="message" rows="5" />
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
