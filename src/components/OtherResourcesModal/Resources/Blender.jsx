import React from 'react';

const BlenderModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#f5792a",
    color: "#000",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Blender" : "Blender Official Page";

  const officialPageLink = (
    <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Blender - це вільний та відкритий пакет для моделювання, анімації, рендерингу, композитингу та вивчення 3D-графіки. Завдяки своїм різноманітним інструментам, Blender став популярним серед художників, дизайнерів, аніматорів та гравців.
      </p>
      <p>
        <strong>Основні поняття Blender:</strong>
      </p>
      <ul>
        <li><strong>Моделювання:</strong> Створення 3D-моделей об'єктів та сцен.</li>
        <li><strong>Анімація:</strong> Створення рухів та анімацій об'єктів.</li>
        <li><strong>Рендеринг:</strong> Генерація зображень або відео з 3D-сцени.</li>
        <li><strong>Композитинг:</strong> Об'єднання та обробка різних елементів в одному зображенні.</li>
      </ul>
      <p>
        <strong>Основні переваги Blender:</strong>
      </p>
      <ul>
        <li><strong>Відкритий Код:</strong> Blender є вільним програмним забезпеченням з відкритим кодом.</li>
        <li><strong>Розширюваність:</strong> Можливість розширення функціоналу за допомогою додаткових модулів та плагінів.</li>
        <li><strong>Спільнота Користувачів:</strong> Активна спільнота користувачів та ресурсів для навчання.</li>
      </ul>
      <p>
        <strong>Сторінка Blender:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Blender 3D Software</h2>
      <p>
        Blender is a free and open-source package for modeling, animation, rendering, compositing, and exploring 3D graphics. With its diverse set of tools, Blender has become popular among artists, designers, animators, and gamers.
      </p>
      <p>
        <strong>Key Concepts of Blender:</strong>
      </p>
      <ul>
        <li><strong>Modeling:</strong> Creating 3D models of objects and scenes.</li>
        <li><strong>Animation:</strong> Creating movements and animations of objects.</li>
        <li><strong>Rendering:</strong> Generating images or videos from a 3D scene.</li>
        <li><strong>Compositing:</strong> Combining and processing different elements in a single image.</li>
      </ul>
      <p>
        <strong>Main Advantages of Blender:</strong>
      </p>
      <ul>
        <li><strong>Open Source:</strong> Blender is free and open-source software.</li>
        <li><strong>Extensibility:</strong> Ability to extend functionality through additional modules and plugins.</li>
        <li><strong>User Community:</strong> Active user community and learning resources.</li>
      </ul>
      <p>
        <strong>Page Blender:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default BlenderModalContent;
