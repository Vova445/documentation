import React from 'react';

const ActionScriptModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        ActionScript - це об'єктно-орієнтована мова програмування, яка використовується для розробки Rich Internet Applications (RIAs) та взаємодії з Flash-додатками. Ця мова володіє потужними можливостями створення анімації, інтерактивних інтерфейсів та інших мультимедійних додатків.
      </p>
      <p>
        <strong>Застосування ActionScript:</strong>
      </p>
      <ul>
        <li><strong>Розробка Flash-додатків:</strong> ActionScript використовується для створення динамічних та інтерактивних Flash-додатків.</li>
        <li><strong>Створення ігор:</strong> Мова використовується для розробки веб-ігор та ігор для платформи Flash.</li>
        <li><strong>Розробка веб-сайтів із мультимедіа:</strong> ActionScript дозволяє створювати вражаючі веб-сайти з анімацією та мультимедіа.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        ActionScript є важливою мовою для розробки багатьох візуально привабливих інтерфейсів та анімацій, особливо у веб-розробці, пов'язаній із технологією Flash.
      </p>
      <p>
        <strong>Де Вчити ActionScript:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Adobe ActionScript:</strong> <a href="https://www.adobe.com/support/documentation/en/flash/" target="_blank" rel="noopener noreferrer" style={{ color: 'silver' }}>Adobe Flash Documentation</a></li>
      </ul>
      <p>
        <strong>Особливості ActionScript:</strong>
      </p>
      <ul>
        <li><strong>Об'єктно-орієнтована природа:</strong> ActionScript базується на об'єктно-орієнтованому підході до програмування.</li>
        <li><strong>Інтеграція з Flash-технологією:</strong> Мова найчастіше використовується для роботи в середовищі Flash.</li>
        <li><strong>Підтримка мультимедіа:</strong> ActionScript має багатий функціонал для роботи із зображеннями, аудіо та відео.</li>
      </ul>
      <p>
        ActionScript залишається важливим інструментом для створення вражаючих веб-додатків та ігор.
      </p>
    </>
  ) : (
    <>
      <p>
        ActionScript is an object-oriented programming language used for developing Rich Internet Applications (RIAs) and interacting with Flash applications. This language possesses powerful capabilities for creating animations, interactive interfaces, and other multimedia applications.
      </p>
      <p>
        <strong>Applications of ActionScript:</strong>
      </p>
      <ul>
        <li><strong>Flash Application Development:</strong> ActionScript is used to create dynamic and interactive Flash applications.</li>
        <li><strong>Game Development:</strong> The language is employed for developing web games and games for the Flash platform.</li>
        <li><strong>Development of Multimedia Websites:</strong> ActionScript allows creating impressive websites with animation and multimedia.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        ActionScript is a crucial language for developing visually appealing interfaces and animations, especially in Flash-related web development.
      </p>
      <p>
        <strong>Where to Learn ActionScript:</strong>
      </p>
      <ul>
        <li><strong>Official Adobe ActionScript Documentation:</strong> <a href="https://www.adobe.com/support/documentation/en/flash/" target="_blank" rel="noopener noreferrer" style={{ color: 'silver' }}>Adobe Flash Documentation</a></li>
      </ul>
      <p>
        <strong>Features of ActionScript:</strong>
      </p>
      <ul>
        <li><strong>Object-Oriented Nature:</strong> ActionScript is based on an object-oriented approach to programming.</li>
        <li><strong>Integration with Flash Technology:</strong> The language is most commonly used to work within the Flash environment.</li>
        <li><strong>Support for Multimedia:</strong> ActionScript has rich functionality for working with images, audio, and video.</li>
      </ul>
      <p>
        ActionScript remains a significant tool for creating impressive web applications and games.
      </p>
    </>
  );

  return content;
};

export default ActionScriptModalContent;
