import React from 'react';

const NextJSModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Next.js - це реактивний фреймворк для розробки веб-додатків на основі React, який надає велику функціональність для
        серверного рендерингу та статичного веб-генерації.
      </p>
      <p>
        <strong>Основні принципи Next.js:</strong>
      </p>
      <ul>
        <li><strong>Реактивність:</strong> Забезпечує побудову додатків за допомогою компонентів React та реактивної
          архітектури.</li>
        <li><strong>Серверний Рендеринг:</strong> Має підтримку серверного рендерингу для отримання високої продуктивності та
          SEO.</li>
        <li><strong>Статична Генерація:</strong> Надає можливість статичної генерації сайтів для ефективного розгортання та
          швидкості завантаження.</li>
      </ul>
      <p>
        <strong>Основні концепції Next.js:</strong>
      </p>
      <ul>
        <li><strong>Сторінки:</strong> Кожна компонента в папці "pages" автоматично стає сторінкою додатка.</li>
        <li><strong>SSR та SSG:</strong> Підтримка серверного рендерингу та статичної генерації.</li>
        <li><strong>API Routes:</strong> Можливість створювати API-шляхи без необхідності налаштування сервера.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Next.js є відмінним вибором для розробки реактивних веб-додатків з використанням різних підходів до рендерингу та
        генерації контенту.
      </p>
      <p>
        <strong>Де вчитися Next.js:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Next.js:</strong> <a href="https://nextjs.org/docs"
            target="_blank" rel="noopener noreferrer" style={linkStyles}>Next.js</a></li>
        <br></br>
        <li><strong>Повний курс Next.js на YouTube:</strong> <a href="https://www.youtube.com/watch?v=mTz0GXj8NN0"
            target="_blank" rel="noopener noreferrer" style={linkStyles}>Next.js Crash Course</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Next.js Framework</h2>
      <p>
        Next.js is a reactive framework for building web applications based on React, providing powerful features for
        server-side rendering and static web generation.
      </p>
      <p>
        <strong>Key Principles of Next.js:</strong>
      </p>
      <ul>
        <li><strong>Reactivity:</strong> Enables building applications using React components and a reactive architecture.</li>
        <li><strong>Server-Side Rendering:</strong> Supports server-side rendering for high performance and SEO.</li>
        <li><strong>Static Generation:</strong> Provides static site generation for efficient deployment and fast loading.</li>
      </ul>
      <p>
        <strong>Core Concepts of Next.js:</strong>
      </p>
      <ul>
        <li><strong>Pages:</strong> Each component in the "pages" folder automatically becomes a page of the application.</li>
        <li><strong>SSR and SSG:</strong> Supports server-side rendering and static site generation.</li>
        <li><strong>API Routes:</strong> Ability to create API routes without the need for server configuration.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Next.js is an excellent choice for developing reactive web applications using various approaches to rendering and
        content generation.
      </p>
      <p>
        <strong>Where to Learn Next.js:</strong>
      </p>
      <ul>
        <li><strong>Official Next.js Documentation:</strong> <a href="https://nextjs.org/docs"
            target="_blank" rel="noopener noreferrer" style={linkStyles}>Next.js</a></li>
        <br></br>
        <li><strong>Full Next.js Course on YouTube:</strong> <a href="https://www.youtube.com/watch?v=mTz0GXj8NN0"
            target="_blank" rel="noopener noreferrer" style={linkStyles}>Next.js Crash Course</a></li>
      </ul>
    </>
  );

  return content;
};

export default NextJSModalContent;
