import React from 'react';

const PostmanModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FF6C37",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Postman
    </a>
  ) : (
    <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Postman Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Postman - це інструмент для тестування API, який надає зручний інтерфейс для створення, надсилання та отримання HTTP-запитів.
      </p>
      <p>
        <strong>Основні функції Postman:</strong>
      </p>
      <ul>
        <li><strong>Створення Запитів:</strong> Можливість легко створювати HTTP-запити для тестування API.</li>
        <li><strong>Організація Запитів:</strong> Групування та організація запитів для зручного управління.</li>
        <li><strong>Автоматизація Тестів:</strong> Можливість автоматизувати тестування API за допомогою скриптів JavaScript.</li>
        <li><strong>Моніторинг Колекцій:</strong> Відстеження та моніторинг API-колекцій для виявлення змін.</li>
      </ul>
      <p>
        <strong>Основні переваги Postman:</strong>
      </p>
      <ul>
        <li><strong>Простий Інтерфейс:</strong> Легкий у використанні інтерфейс для швидкого створення та тестування API-запитів.</li>
        <li><strong>Автоматизація Тестів:</strong> Можливість автоматизованого тестування API за допомогою сценаріїв JavaScript.</li>
        <li><strong>Синхронізація та Обмін Колекціями:</strong> Можливість обміну та синхронізації API-колекцій.</li>
      </ul>
      <p><strong>Сторінка Postman:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Postman - API Testing Tool</h2>
      <p>
        Postman is a tool for testing APIs that provides a convenient interface for creating, sending, and receiving HTTP requests.
      </p>
      <p>
        <strong>Key Features of Postman:</strong>
      </p>
      <ul>
        <li><strong>Create Requests:</strong> Easily create HTTP requests for API testing.</li>
        <li><strong>Request Organization:</strong> Group and organize requests for convenient management.</li>
        <li><strong>Test Automation:</strong> Ability to automate API testing using JavaScript scripts.</li>
        <li><strong>Collection Monitoring:</strong> Track and monitor API collections to detect changes.</li>
      </ul>
      <p>
        <strong>Main Advantages of Postman:</strong>
      </p>
      <ul>
        <li><strong>Simple Interface:</strong> Easy-to-use interface for quickly creating and testing API requests.</li>
        <li><strong>Test Automation:</strong> Ability to automate API testing using JavaScript scripts.</li>
        <li><strong>Collection Sync and Sharing:</strong> Ability to share and sync API collections.</li>
      </ul>
      <p><strong>Postman Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default PostmanModalContent;
