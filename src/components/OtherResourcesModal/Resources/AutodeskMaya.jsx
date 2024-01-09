import React from 'react';

const AutodeskMayaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#1ff042",
    color: "#333",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.autodesk.com/products/maya/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Autodesk Maya
    </a>
  ) : (
    <a href="https://www.autodesk.com/products/maya/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Autodesk Maya Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Autodesk Maya - це потужний програмний продукт для 3D-моделювання, анімації, візуалізації та рендерингу.
      </p>
      <p>
        <strong>Основні функції Autodesk Maya:</strong>
      </p>
      <ul>
        <li><strong>Моделювання:</strong> Створення складних 3D-моделей для використання у ваших проектах.</li>
        <li><strong>Анімація:</strong> Реалізація вражаючих анімацій для фільмів, ігор та інших візуальних проектів.</li>
        <li><strong>Рендеринг:</strong> Створення високоякісних зображень та анімацій за допомогою потужних рендерерів.</li>
        <li><strong>Візуалізація:</strong> Перегляд та взаємодія з 3D-сценами в реальному часі.</li>
      </ul>
      <p>
        <strong>Основні переваги Autodesk Maya:</strong>
      </p>
      <ul>
        <li><strong>Широкі Можливості:</strong> Великий набір інструментів для різних аспектів 3D-продукції.</li>
        <li><strong>Продуктивність:</strong> Висока продуктивність та ефективність роботи з великими проектами.</li>
        <li><strong>Інтеграція з Іншими Інструментами:</strong> Можливість взаємодії з іншими програмами для створення комплексних проектів.</li>
      </ul>
      <p><strong>Сторінка Autodesk Maya:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Autodesk Maya</h2>
      <p>
        Autodesk Maya is a powerful software for 3D modeling, animation, visualization, and rendering.
      </p>
      <p>
        <strong>Key Features of Autodesk Maya:</strong>
      </p>
      <ul>
        <li><strong>Modeling:</strong> Creating complex 3D models for use in your projects.</li>
        <li><strong>Animation:</strong> Implementing impressive animations for films, games, and other visual projects.</li>
        <li><strong>Rendering:</strong> Generating high-quality images and animations using powerful renderers.</li>
        <li><strong>Visualization:</strong> Viewing and interacting with 3D scenes in real-time.</li>
      </ul>
      <p>
        <strong>Main Advantages of Autodesk Maya:</strong>
      </p>
      <ul>
        <li><strong>Wide Range of Features:</strong> Extensive set of tools for various aspects of 3D production.</li>
        <li><strong>Productivity:</strong> High productivity and efficiency when working on large projects.</li>
        <li><strong>Integration with Other Tools:</strong> Ability to interact with other programs to create complex projects.</li>
      </ul>
      <p><strong>Autodesk Maya Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default AutodeskMayaModalContent;
