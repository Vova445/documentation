import React from 'react';

const GatsbyModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#663399",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Gatsby
    </a>
  ) : (
    <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Gatsby Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Gatsby - це вільний та відкритий фреймворк для розробки веб-сайтів та додатків на React. Він дозволяє створювати швидкі та безпечні сайти з використанням сучасних веб-технологій.
      </p>
      <p>
        <strong>Основні функції Gatsby:</strong>
      </p>
      <ul>
        <li><strong>Реактивний Дизайн:</strong> Використання React для побудови інтерфейсів та сторінок.</li>
        <li><strong>Генерація Статичних Сайтів:</strong> Сайти генеруються під час збірки та можуть легко розгортатися на будь-якому хостингу.</li>
        <li><strong>Висока Продуктивність:</strong> Оптимізація завантаження сторінок та ресурсів для швидкої роботи.</li>
        <li><strong>Розширені Плагіни:</strong> Можливість використання різноманітних плагінів для розширення функціональності.</li>
      </ul>
      <p>
        <strong>Основні переваги Gatsby:</strong>
      </p>
      <ul>
        <li><strong>Швидкодія:</strong> Сайти побудовані за принципом "зразок-все попереду" для максимальної продуктивності.</li>
        <li><strong>Легка Розгортання:</strong> Створені статичні файли можна легко розгортати на різних хостингах.</li>
        <li><strong>Екосистема React:</strong> Використання React для побудови компонентів та інтерфейсу.</li>
      </ul>
      <p><strong>Сторінка Gatsby:</strong> {officialPageLink}</p>
    </>
  ) : (
    <>
      <h2>Gatsby Web Framework</h2>
      <p>
        Gatsby is a free and open-source framework for developing websites and applications with React. It allows creating fast and secure sites using modern web technologies.
      </p>
      <p>
        <strong>Key Features of Gatsby:</strong>
      </p>
      <ul>
        <li><strong>React-Powered:</strong> Utilizes React to build interfaces and pages.</li>
        <li><strong>Static Site Generation:</strong> Sites are generated during build time and can easily be deployed to any hosting service.</li>
        <li><strong>High Performance:</strong> Optimizes page and resource loading for quick performance.</li>
        <li><strong>Extensive Plugins:</strong> Ability to use various plugins to extend functionality.</li>
      </ul>
      <p>
        <strong>Main Advantages of Gatsby:</strong>
      </p>
      <ul>
        <li><strong>Speed:</strong> Sites are built with a "everything up front" approach for maximum productivity.</li>
        <li><strong>Easy Deployment:</strong> Created static files can be easily deployed to various hosting services.</li>
        <li><strong>React Ecosystem:</strong> Utilizes React for building components and interfaces.</li>
        <li><strong>Gatsby Page:</strong> {officialPageLink}</li>
      </ul>
    </>
  );

  return content;
};

export default GatsbyModalContent;
