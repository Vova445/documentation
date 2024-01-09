import React from 'react';

const BulmaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#00d1b2",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Bulma" : "Bulma Official Page";

  const officialPageLink = (
    <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Bulma - це сучасний CSS фреймворк, який дозволяє легко створювати стильні та адаптивні веб-інтерфейси. Він базується на Flexbox, що робить його потужним та дружелюбним для розробників. Bulma надає широкий набір компонентів та стилів для швидкої розробки сучасних веб-сайтів.
      </p>
      <p>
        <strong>Основні поняття Bulma:</strong>
      </p>
      <ul>
        <li><strong>Flexbox-Based:</strong> Базується на Flexbox для легкого та ефективного розміщення елементів.</li>
        <li><strong>Компоненти:</strong> Включає широкий набір готових компонентів для розробки інтерфейсу.</li>
        <li><strong>Модульність:</strong> Легко комбінувати та розширювати за допомогою класів.</li>
        <li><strong>Адаптивність:</strong> Забезпечує адаптивний дизайн для різних екранів та пристроїв.</li>
      </ul>
      <p>
        <strong>Основні переваги Bulma:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Чистий та зрозумілий синтаксис для швидкої розробки.</li>
        <li><strong>Стильні Компоненти:</strong> Готові компоненти для різноманітних елементів інтерфейсу.</li>
        <li><strong>Flexbox Power:</strong> Використання Flexbox для ефективного розміщення елементів.</li>
      </ul>
      <p>
        <strong>Сторінка Bulma:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Bulma CSS Framework</h2>
      <p>
        Bulma is a modern CSS framework that allows for easy creation of stylish and responsive web interfaces. It is based on Flexbox, making it powerful and developer-friendly. Bulma provides a wide range of components and styles for the rapid development of modern websites.
      </p>
      <p>
        <strong>Key Concepts of Bulma:</strong>
      </p>
      <ul>
        <li><strong>Flexbox-Based:</strong> Based on Flexbox for easy and efficient element placement.</li>
        <li><strong>Components:</strong> Includes a wide range of ready-to-use components for interface development.</li>
        <li><strong>Modularity:</strong> Easily combinable and extendable using classes.</li>
        <li><strong>Adaptability:</strong> Provides adaptive design for various screens and devices.</li>
      </ul>
      <p>
        <strong>Main Advantages of Bulma:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Clean and understandable syntax for quick development.</li>
        <li><strong>Stylish Components:</strong> Ready-made components for various interface elements.</li>
        <li><strong>Flexbox Power:</strong> Utilizes Flexbox for efficient element placement.</li>
      </ul>
      <p>
        <strong>Page Bulma:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default BulmaModalContent;
