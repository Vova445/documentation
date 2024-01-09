import React from 'react';

const IonicModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#2669c7",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://ionicframework.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Ionic
    </a>
  ) : (
    <a href="https://ionicframework.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Ionic Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Ionic - це вільний та відкритий фреймворк для розробки кросплатформених мобільних додатків з використанням веб-технологій
        таких як HTML, CSS та JavaScript. Ionic дозволяє створювати додатки, які працюють як на iOS, так і на Android.
      </p>
      <p>
        <strong>Основні функції Ionic:</strong>
      </p>
      <ul>
        <li><strong>Кросплатформеність:</strong> Розробка для iOS та Android з використанням єдиної кодової бази.</li>
        <li><strong>Використання Веб-Технологій:</strong> Використання HTML, CSS та JavaScript для створення інтерфейсу та логіки додатку.</li>
        <li><strong>Компоненти та Шаблони:</strong> Велика бібліотека готових компонентів та шаблонів для швидкої розробки.</li>
        <li><strong>Підтримка Angular та React:</strong> Можливість використовувати Ionic разом з Angular або React.</li>
      </ul>
      <p>
        <strong>Основні переваги Ionic:</strong>
      </p>
      <ul>
        <li><strong>Кросплатформеність:</strong> Розробка для обох основних мобільних платформ з однією кодовою базою.</li>
        <li><strong>Широка Бібліотека Компонентів:</strong> Великий вибір готових компонентів для швидкої розробки інтерфейсу.</li>
        <li><strong>Легкість Використання:</strong> Використання веб-технологій для зручної розробки та підтримка популярних фреймворків.</li>
      </ul>
      <p>
        <strong>Сторінка Ionic:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Ionic Framework</h2>
      <p>
        Ionic is a free and open-source framework for developing cross-platform mobile applications using web technologies such
        as HTML, CSS, and JavaScript. Ionic allows the creation of apps that work on both iOS and Android platforms.
      </p>
      <p>
        <strong>Key Features of Ionic:</strong>
      </p>
      <ul>
        <li><strong>Cross-Platform:</strong> Develop for iOS and Android with a single codebase.</li>
        <li><strong>Web Technology Usage:</strong> Utilize HTML, CSS, and JavaScript for building the app's interface and logic.</li>
        <li><strong>Components and Templates:</strong> A large library of ready-made components and templates for rapid development.</li>
        <li><strong>Support for Angular and React:</strong> Capability to use Ionic with Angular or React.</li>
      </ul>
      <p>
        <strong>Main Advantages of Ionic:</strong>
      </p>
      <ul>
        <li><strong>Cross-Platform:</strong> Develop for both major mobile platforms with a single codebase.</li>
        <li><strong>Extensive Component Library:</strong> A wide selection of ready-made components for rapid interface development.</li>
        <li><strong>Ease of Use:</strong> Utilization of web technologies for convenient development and support for popular frameworks.</li>
      </ul>
      <p>
        <strong>Ionic Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default IonicModalContent;
