import React from 'react';

const DjangoRestModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Django REST Framework - це потужна та гнучка бібліотека для створення веб-сервісів API з використанням фреймворку Django на мові програмування Python.
      </p>
      <p>
        <strong>Основні принципи Django REST Framework:</strong>
      </p>
      <ul>
        <li><strong>Серіалізація:</strong> Забезпечення простого перетворення об'єктів Python у формати даних JSON.</li>
        <li><strong>Автентифікація та Авторизація:</strong> Вбудована система для захисту API за допомогою різноманітних методів автентифікації та авторизації.</li>
        <li><strong>Види та Класи Виглядів:</strong> Використання різноманітних видів та класів для реалізації логіки API.</li>
      </ul>
      <p>
        <strong>Основні концепції Django REST Framework:</strong>
      </p>
      <ul>
        <li><strong>DRF ViewSets:</strong> Використання ViewSets для визначення логіки обробки різних операцій API.</li>
        <li><strong>Роутинг:</strong> Автоматичне визначення URL для ресурсів API на основі конфігурації ViewSets.</li>
        <li><strong>Автоматична документація:</strong> Генерація автоматичної документації API за допомогою DRF.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Django REST Framework відмінно підходить для розробки сучасних веб-сервісів API на мові програмування Python з використанням фреймворку Django.
      </p>
      <p>
        <strong>Де вчитися Django REST Framework:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація DRF:</strong> <a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Django REST Framework</a></li>
        </ul>
    </>
  ) : (
    <>
      <h2>Django REST Framework</h2>
      <p>
        Django REST Framework is a powerful and flexible library for building API web services using the Django framework in the Python programming language.
      </p>
      <p>
        <strong>Key Principles of Django REST Framework:</strong>
      </p>
      <ul>
        <li><strong>Serialization:</strong> Providing simple transformation of Python objects into JSON data formats.</li>
        <li><strong>Authentication and Authorization:</strong> Built-in system for protecting the API using various authentication and authorization methods.</li>
        <li><strong>Views and View Classes:</strong> Using various views and classes to implement API logic.</li>
      </ul>
      <p>
        <strong>Core Concepts of Django REST Framework:</strong>
      </p>
      <ul>
        <li><strong>DRF ViewSets:</strong> Using ViewSets to define the logic for handling different API operations.</li>
        <li><strong>Routing:</strong> Automatic URL determination for API resources based on ViewSets configuration.</li>
        <li><strong>Automatic Documentation:</strong> Generation of automatic API documentation using DRF.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Django REST Framework is well-suited for developing modern API web services in the Python programming language using the Django framework.
      </p>
      <p>
        <strong>Where to Learn Django REST Framework:</strong>
      </p>
      <ul>
        <li><strong>Official DRF Documentation:</strong> <a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Django REST Framework</a></li>
        </ul>
    </>
  );

  return content;
};

export default DjangoRestModalContent;
