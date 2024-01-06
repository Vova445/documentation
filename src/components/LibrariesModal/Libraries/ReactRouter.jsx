import React from 'react';

const ReactRouterModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#61dafb",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        React Router - це бібліотека для навігації між різними сторінками (компонентами) в React-додатках. Вона дозволяє створювати односторінкові додатки зі зручною навігацією та управлінням станом URL.
      </p>
      <p>
        <strong>Основні можливості React Router:</strong>
      </p>
      <ul>
        <li><strong>Декларативна Навігація:</strong> Використання компонентів для опису структури маршрутів та навігації.</li>
        <li><strong>Вбудовані Компоненти:</strong> Компоненти, такі як `BrowserRouter`, `Route`, і `Link`, для зручного створення маршрутів та посилань.</li>
        <li><strong>Динамічні Маршрути:</strong> Можливість використовувати параметри та вкладені маршрути для більш гнучкої навігації.</li>
        <li><strong>Управління Історією:</strong> Інтеграція з історією браузера для зміни URL без перезавантаження сторінки.</li>
      </ul>
      <p>
        <strong>Де Вчитися React Router:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація React Router:</strong> <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>React Router Docs</a></li>
        <br></br>
        </ul>
    </>
  ) : (
    <>
      <h2>React Router Library</h2>
      <p>
        React Router is a library for navigating between different pages (components) in React applications. It allows you to create single-page applications with convenient navigation and URL state management.
      </p>
      <p>
        <strong>Key Features of React Router:</strong>
      </p>
      <ul>
        <li><strong>Declarative Navigation:</strong> Use components to describe the structure of routes and navigation.</li>
        <li><strong>Built-in Components:</strong> Components like `BrowserRouter`, `Route`, and `Link` for easily creating routes and links.</li>
        <li><strong>Dynamic Routes:</strong> Ability to use parameters and nested routes for more flexible navigation.</li>
        <li><strong>History Management:</strong> Integration with the browser's history to change the URL without page reload.</li>
      </ul>
      <p>
        <strong>Where to Learn React Router:</strong>
      </p>
      <ul>
        <li><strong>Official React Router Documentation:</strong> <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>React Router Docs</a></li>
        <br></br>
       </ul>
    </>
  );

  return content;
};

export default ReactRouterModalContent;
