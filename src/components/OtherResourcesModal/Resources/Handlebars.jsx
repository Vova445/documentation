import React from 'react';

const HandlebarsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#f0772f",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://handlebarsjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Handlebars
    </a>
  ) : (
    <a href="https://handlebarsjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Handlebars Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Handlebars - це простий у використанні шаблонний мовник для виводу даних у HTML-документах. Він дозволяє вбудовувати дані
        в розмітку та створювати динамічні HTML-сторінки.
      </p>
      <p>
        <strong>Основні функції Handlebars:</strong>
      </p>
      <ul>
        <li><strong>Шаблони:</strong> Визначте шаблони для вбудовування даних в HTML.</li>
        <li><strong>Вирази:</strong> Використовуйте вирази для обчислення та відображення значень.</li>
        <li><strong>Контекстні Дані:</strong> Робіть дані доступними в шаблоні через контекст.</li>
        <li><strong>Умовні Оператори:</strong> Використовуйте умови для управління виведенням контенту.</li>
      </ul>
      <p>
        <strong>Основні переваги Handlebars:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Легко вчитися та використовувати.</li>
        <li><strong>Чистий Синтаксис:</strong> Зрозумілий та лаконічний синтаксис шаблонів.</li>
        <li><strong>Динамічні HTML-Сторінки:</strong> Можливість створювати динамічний контент на сторінках.</li>
      </ul>
      <p>
        <strong>Сторінка Handlebars:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Handlebars</h2>
      <p>
        Handlebars is an easy-to-use templating language for rendering data in HTML documents. It allows embedding data into markup
        and creating dynamic HTML pages.
      </p>
      <p>
        <strong>Key Features of Handlebars:</strong>
      </p>
      <ul>
        <li><strong>Templates:</strong> Define templates to embed data into HTML.</li>
        <li><strong>Expressions:</strong> Use expressions to compute and display values.</li>
        <li><strong>Contextual Data:</strong> Make data available in the template through context.</li>
        <li><strong>Conditional Operators:</strong> Use conditionals to control content output.</li>
      </ul>
      <p>
        <strong>Main Advantages of Handlebars:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Easy to learn and use.</li>
        <li><strong>Clean Syntax:</strong> Understandable and concise template syntax.</li>
        <li><strong>Dynamic HTML Pages:</strong> Ability to create dynamic content on pages.</li>
      </ul>
      <p>
        <strong>Handlebars Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default HandlebarsModalContent;
