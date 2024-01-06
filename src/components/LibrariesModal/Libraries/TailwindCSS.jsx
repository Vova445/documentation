import React from 'react';

const TailwindCSSModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#38B2AC",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Tailwind CSS - це високоефективний CSS-фреймворк, який дозволяє створювати стильні та сучасні дизайни веб-сайтів за допомогою класів. Відмінною рисою Tailwind CSS є його атомізований підхід до стилізації, де кожен клас представляє конкретний стиль.
      </p>
      <p>
        <strong>Основні характеристики Tailwind CSS:</strong>
      </p>
      <ul>
        <li><strong>Атомізований Підхід:</strong> Кожен клас представляє окремий стиль, що дозволяє швидко та чітко налаштовувати вигляд елементів.</li>
        <li><strong>Конфігуруютьність:</strong> Легко налаштовується за допомогою конфігураційного файлу, що дозволяє додавати власні класи та стилі.</li>
        <li><strong>Велика Кількість Утиліт:</strong> Надає широкий набір утилітних класів для різноманітних потреб дизайну.</li>
        <li><strong>Висока Продуктивність:</strong> Мінімізує кількість написаного CSS-коду та покращує продуктивність розробки.</li>
      </ul>
      <p>
        <strong>Де Вчитися Tailwind CSS:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Tailwind CSS:</strong> <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Tailwind Docs</a></li>
        <br></br>
        </ul>
    </>
  ) : (
    <>
      <h2>Tailwind CSS Framework</h2>
      <p>
        Tailwind CSS is a highly efficient CSS framework that allows you to create stylish and modern website designs using utility classes. A distinctive feature of Tailwind CSS is its atomic approach to styling, where each class represents a specific style.
      </p>
      <p>
        <strong>Key Features of Tailwind CSS:</strong>
      </p>
      <ul>
        <li><strong>Atomic Approach:</strong> Each class represents a separate style, enabling quick and precise customization of element appearance.</li>
        <li><strong>Configurability:</strong> Easily configurable through a configuration file, allowing the addition of custom classes and styles.</li>
        <li><strong>Wide Range of Utilities:</strong> Provides a broad set of utility classes for various design needs.</li>
        <li><strong>High Performance:</strong> Minimizes the amount of written CSS code and improves development productivity.</li>
      </ul>
      <p>
        <strong>Where to Learn Tailwind CSS:</strong>
      </p>
      <ul>
        <li><strong>Official Tailwind CSS Documentation:</strong> <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Tailwind Docs</a></li>
        <br></br>
        </ul>
    </>
  );

  return content;
};

export default TailwindCSSModalContent;
