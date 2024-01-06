import React from 'react';

const AxiosModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#00a2ed",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Axios - це бібліотека для здійснення HTTP-запитів в середовищі браузера та на стороні сервера за допомогою мови програмування JavaScript. Вона надає простий і зручний інтерфейс для використання у сучасних веб-додатках.
      </p>
      <p>
        <strong>Основні можливості Axios:</strong>
      </p>
      <ul>
        <li><strong>Використання Обіцянок:</strong> Axios використовує обіцянки для зручного обробки асинхронних запитів.</li>
        <li><strong>Підтримка Об'єктів Запиту та Відповіді:</strong> Легко взаємодіяти з об'єктами запиту та відповіді.</li>
        <li><strong>Перехоплення та Обробка Помилок:</strong> Зручні інструменти для перехоплення та обробки помилок під час виконання запитів.</li>
        <li><strong>Відмінна Підтримка JSON:</strong> Axios автоматично перетворює відповіді у формат JSON.</li>
      </ul>
      <p>
        <strong>Застосування Axios:</strong>
      </p>
      <p>
        Axios використовується для здійснення HTTP-запитів для отримання та відправлення даних на сервер, інтеграції з API та інших сценаріїв взаємодії з веб-ресурсами.
      </p>
      <p>
        <strong>Де Вчитися Axios:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Axios:</strong> <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener noreferrer" style={linkStyles}>Axios Docs</a></li>
        <br></br>
         </ul>
    </>
  ) : (
    <>
      <h2>Axios Library</h2>
      <p>
        Axios is a library for making HTTP requests in both the browser and on the server-side using the JavaScript programming language. It provides a simple and convenient interface for use in modern web applications.
      </p>
      <p>
        <strong>Key Features of Axios:</strong>
      </p>
      <ul>
        <li><strong>Promise-Based:</strong> Axios uses promises for convenient handling of asynchronous requests.</li>
        <li><strong>Request and Response Object Support:</strong> Easily interact with request and response objects.</li>
        <li><strong>Error Interception and Handling:</strong> Convenient tools for intercepting and handling errors during request execution.</li>
        <li><strong>Excellent JSON Support:</strong> Axios automatically transforms responses into JSON format.</li>
      </ul>
      <p>
        <strong>Applications of Axios:</strong>
      </p>
      <p>
        Axios is used for making HTTP requests to retrieve and send data to the server, integrating with APIs, and other scenarios involving interaction with web resources.
      </p>
      <p>
        <strong>Where to Learn Axios:</strong>
      </p>
      <ul>
        <li><strong>Official Axios Documentation:</strong> <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener noreferrer" style={linkStyles}>Axios Docs</a></li>
        <br></br>
        </ul>
    </>
  );

  return content;
};

export default AxiosModalContent;
