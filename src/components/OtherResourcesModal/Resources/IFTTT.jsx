import React from 'react';

const IFTTTModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#33cc33",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://ifttt.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка IFTTT
    </a>
  ) : (
    <a href="https://ifttt.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      IFTTT Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        IFTTT (If This Then That) - це веб-сервіс та мобільний додаток, який надає можливість автоматизації різних завдань
        та взаємодії між різними онлайн-сервісами та пристроями за принципом "якщо відбувається це, то виконай це".
      </p>
      <p>
        <strong>Основні функції IFTTT:</strong>
      </p>
      <ul>
        <li><strong>Завдання (Applets):</strong> Налаштування правил для виконання певних дій при виникненні певних подій.</li>
        <li><strong>Канали:</strong> Підтримка великої кількості популярних сервісів та пристроїв.</li>
        <li><strong>Взаємодія Сервісів:</strong> Створення умов для виконання завдань між різними онлайн-сервісами.</li>
        <li><strong>Персоналізація:</strong> Можливість створювати власні сценарії автоматизації.</li>
      </ul>
      <p>
        <strong>Основні переваги IFTTT:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Легка настройка і використання завдяки інтуїтивному інтерфейсу.</li>
        <li><strong>Широкі Можливості:</strong> Велика кількість підтримуваних сервісів та пристроїв.</li>
        <li><strong>Автоматизація Задач:</strong> Забезпечення автоматизації рутинних завдань і взаємодії між платформами.</li>
      </ul>
      <p>
        <strong>Сторінка IFTTT:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>IFTTT (If This Then That)</h2>
      <p>
        IFTTT is a web service and mobile app that allows users to automate various tasks and interactions between different
        online services and devices using the "if this, then that" principle.
      </p>
      <p>
        <strong>Key Features of IFTTT:</strong>
      </p>
      <ul>
        <li><strong>Applets:</strong> Setting up rules to perform specific actions when certain events occur.</li>
        <li><strong>Channels:</strong> Support for a wide variety of popular services and devices.</li>
        <li><strong>Service Interaction:</strong> Creating conditions for task execution between different online services.</li>
        <li><strong>Personalization:</strong> Ability to create custom automation scenarios.</li>
      </ul>
      <p>
        <strong>Main Advantages of IFTTT:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Easy setup and usage with an intuitive interface.</li>
        <li><strong>Wide Range of Possibilities:</strong> Support for a large number of services and devices.</li>
        <li><strong>Task Automation:</strong> Providing automation of routine tasks and cross-platform interactions.</li>
      </ul>
      <p>
        <strong>IFTTT Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default IFTTTModalContent;
