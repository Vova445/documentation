import React from 'react';

const ArduinoModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#00979c",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Arduino" : "Arduino Official Page";

  const officialPageLink = (
    <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Arduino - це відкрита платформа для створення простих електронних пристроїв на базі мікроконтролерів. Вона використовує простий у використанні мову програмування та інтегровану середовище розробки, що робить її доступною для початківців та досвідчених розробників.
      </p>
      <p>
        <strong>Основні поняття Arduino:</strong>
      </p>
      <ul>
        <li><strong>Мікроконтролери:</strong> Компактні обчислювальні пристрої, які керують електронними компонентами пристрою.</li>
        <li><strong>Шини та Піни:</strong> Засоби зв'язку між мікроконтролером та іншими електронними компонентами.</li>
        <li><strong>Скетчі (Sketches):</strong> Програми, написані на мові Arduino, які виконуються на мікроконтролері.</li>
        <li><strong>Бібліотеки:</strong> Збірки попередньо написаних функцій для спрощення програмування.</li>
      </ul>
      <p>
        <strong>Основні переваги Arduino:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Легка установка та програмування для розробки пристроїв.</li>
        <li><strong>Велика Спільнота:</strong> Активна громадськість та обмін досвідом.</li>
        <li><strong>Розширюваність:</strong> Можливість додавати різні модулі та компоненти.</li>
      </ul>
      <p>
        <strong>Сторінка Arduino:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Arduino Platform</h2>
      <p>
        Arduino is an open platform for creating simple electronic devices based on microcontrollers. It uses an easy-to-use programming language and an integrated development environment, making it accessible for both beginners and experienced developers.
      </p>
      <p>
        <strong>Key Concepts of Arduino:</strong>
      </p>
      <ul>
        <li><strong>Microcontrollers:</strong> Compact computing devices that control electronic components of the device.</li>
        <li><strong>Bus and Pins:</strong> Communication interfaces between the microcontroller and other electronic components.</li>
        <li><strong>Sketches:</strong> Programs written in the Arduino language that run on the microcontroller.</li>
        <li><strong>Libraries:</strong> Collections of pre-written functions to simplify programming.</li>
      </ul>
      <p>
        <strong>Main Advantages of Arduino:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Easy setup and programming for device development.</li>
        <li><strong>Large Community:</strong> Active community and knowledge-sharing.</li>
        <li><strong>Expandability:</strong> Ability to add various modules and components.</li>
      </ul>
      <p>
        <strong>Page Arduino:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default ArduinoModalContent;
