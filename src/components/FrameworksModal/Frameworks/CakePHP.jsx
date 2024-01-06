import React from 'react';

const CakePHPModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#D33C43",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        CakePHP - це відкритий веб-фреймворк для швидкої розробки веб-додатків на мові PHP.
      </p>
      <p>
        <strong>Основні принципи CakePHP:</strong>
      </p>
      <ul>
        <li><strong>Конвенція перед конфігурацією:</strong> CakePHP використовує конвенції для швидкого розгортання проектів без багатого конфігурування.</li>
        <li><strong>Моделювання даних:</strong> Вбудована система моделювання даних забезпечує легку роботу з базами даних.</li>
        <li><strong>Контролери та Види:</strong> Використання контролерів і видів для реалізації логіки та відображення інформації.</li>
      </ul>
      <p>
        <strong>Основні концепції CakePHP:</strong>
      </p>
      <ul>
        <li><strong>ORM:</strong> Об'єктно-реляційне відображення спрощує взаємодію з базою даних і робить код більш зрозумілим.</li>
        <li><strong>Рейтинги та Рекомендації:</strong> Засноване на спільноті, що допомагає розробникам знаходити найкращі практики та ідеї для розробки.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        CakePHP підходить для швидкої розробки веб-додатків з використанням кращих практик та стандартів.
      </p>
      <p>
        <strong>Де вчитися CakePHP:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація CakePHP:</strong> <a href="https://cakephp.org/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>CakePHP</a></li>
        <br></br>
        <li><strong>Курси та Матеріали:</strong> <a href="https://book.cakephp.org/4/en/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Основи CakePHP</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>CakePHP Web Framework</h2>
      <p>
        CakePHP is an open-source web framework for rapid web application development in PHP.
      </p>
      <p>
        <strong>Key Principles of CakePHP:</strong>
      </p>
      <ul>
        <li><strong>Convention over Configuration:</strong> CakePHP uses conventions for quick project deployment without extensive configuration.</li>
        <li><strong>Data Modeling:</strong> Built-in data modeling system facilitates easy interaction with databases.</li>
        <li><strong>Controllers and Views:</strong> Utilizes controllers and views to implement logic and display information.</li>
      </ul>
      <p>
        <strong>Core Concepts of CakePHP:</strong>
      </p>
      <ul>
        <li><strong>ORM:</strong> Object-Relational Mapping simplifies interaction with the database and makes the code more understandable.</li>
        <li><strong>Ratings and Recommendations:</strong> Community-driven, helping developers find best practices and ideas for development.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        CakePHP is suitable for rapid web application development using best practices and standards.
      </p>
      <p>
        <strong>Where to Learn CakePHP:</strong>
      </p>
      <ul>
        <li><strong>Official CakePHP Documentation:</strong> <a href="https://cakephp.org/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>CakePHP</a></li>
        <br></br>
        <li><strong>Courses and Resources:</strong> <a href="https://book.cakephp.org/4/en/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>CakePHP Basics</a></li>
      </ul>
    </>
  );

  return content;
};

export default CakePHPModalContent;
