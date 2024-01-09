import React from 'react';

const InkscapeModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://inkscape.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Inkscape
    </a>
  ) : (
    <a href="https://inkscape.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Inkscape Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Inkscape - це вільний та відкритий векторний графічний редактор, який надає розширені можливості створення та редагування
        векторної графіки для різних типів проектів.
      </p>
      <p>
        <strong>Основні функції Inkscape:</strong>
      </p>
      <ul>
        <li><strong>Векторна Графіка:</strong> Створення та редагування векторних зображень.</li>
        <li><strong>Експорт та Імпорт:</strong> Підтримка різних форматів файлів для експорту та імпорту графіки.</li>
        <li><strong>Редагування Шляхів:</strong> Детальне редагування шляхів об'єктів.</li>
        <li><strong>Розширені Інструменти:</strong> Широкий спектр інструментів для роботи з об'єктами та текстом.</li>
      </ul>
      <p>
        <strong>Основні переваги Inkscape:</strong>
      </p>
      <ul>
        <li><strong>Безкоштовність та Відкритий Код:</strong> Інструмент доступний безкоштовно та має відкритий вихідний код.</li>
        <li><strong>Розширені Можливості Редагування:</strong> Зручні інструменти для редагування векторної графіки.</li>
        <li><strong>Спільнота Користувачів:</strong> Активна спільнота та підтримка користувачів.</li>
      </ul>
      <p>
        <strong>Сторінка Inkscape:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Inkscape Vector Graphics Editor</h2>
      <p>
        Inkscape is a free and open-source vector graphics editor that provides advanced capabilities for creating and editing
        vector graphics for various types of projects.
      </p>
      <p>
        <strong>Key Features of Inkscape:</strong>
      </p>
      <ul>
        <li><strong>Vector Graphics:</strong> Creating and editing vector images.</li>
        <li><strong>Export and Import:</strong> Support for various file formats for graphics export and import.</li>
        <li><strong>Path Editing:</strong> Detailed editing of paths of objects.</li>
        <li><strong>Advanced Tools:</strong> A wide range of tools for working with objects and text.</li>
      </ul>
      <p>
        <strong>Main Advantages of Inkscape:</strong>
      </p>
      <ul>
        <li><strong>Free and Open Source:</strong> The tool is available for free and has open-source code.</li>
        <li><strong>Advanced Editing Capabilities:</strong> Convenient tools for editing vector graphics.</li>
        <li><strong>User Community:</strong> Active user community and support.</li>
      </ul>
      <p>
        <strong>Inkscape Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default InkscapeModalContent;
