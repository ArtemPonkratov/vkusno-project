function Contact() {
  return (
    <div className="contact-info">
      <div className="contact-info-top">
        <h2>Контактная информация</h2>
        <p>Телефон: -</p>
        <p>Email: -----</p>
        <p>Адрес: - , Город -</p>
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
