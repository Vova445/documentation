import React from 'react';

const GimpModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#5C508E",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.gimp.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка GIMP
    </a>
  ) : (
    <a href="https://www.gimp.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      GIMP Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        GIMP (GNU Image Manipulation Program) - це вільний та відкритий графічний редактор, який надає широкі можливості для редагування та обробки зображень.
      </p>
      <p>
        <strong>Основні функції GIMP:</strong>
      </p>
      <ul>
        <li><strong>Редагування Зображень:</strong> Інструменти для корекції кольору, ретуші, обрізання та інші для творчого редагування.</li>
        <li><strong>Створення Графіки:</strong> Можливості для малювання, створення ілюстрацій та дизайну.</li>
        <li><strong>Підтримка Різних Форматів:</strong> Здатність відкривати та зберігати зображення у різних форматах.</li>
        <li><strong>Розширені Функції:</strong> Плагіни та розширення для розширення функціоналу.</li>
      </ul>
      <p>
        <strong>Основні переваги GIMP:</strong>
      </p>
      <ul>
        <li><strong>Безкоштовність:</strong> Повноцінний графічний редактор без оплати.</li>
        <li><strong>Розширюваність:</strong> Велика кількість плагінів та розширень.</li>
        <li><strong>Спільнота Користувачів:</strong> Активна спільнота для підтримки та обміну досвідом.</li>
      </ul>
      <p>
        <strong>Сторінка GIMP:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>GIMP - GNU Image Manipulation Program</h2>
      <p>
        GIMP is a free and open-source graphic editor that provides extensive features for editing and processing images.
      </p>
      <p>
        <strong>Main Features of GIMP:</strong>
      </p>
      <ul>
        <li><strong>Image Editing:</strong> Tools for color correction, retouching, cropping, and more for creative editing.</li>
        <li><strong>Graphic Creation:</strong> Capabilities for drawing, creating illustrations, and design.</li>
        <li><strong>Support for Various Formats:</strong> Ability to open and save images in various formats.</li>
        <li><strong>Advanced Features:</strong> Plugins and extensions to expand functionality.</li>
      </ul>
      <p>
        <strong>Main Advantages of GIMP:</strong>
      </p>
      <ul>
        <li><strong>Free of Charge:</strong> A full-featured graphic editor without cost.</li>
        <li><strong>Extensibility:</strong> A wide range of plugins and extensions.</li>
        <li><strong>User Community:</strong> Active community for support and knowledge exchange.</li>
        <li><strong>GIMP Page:</strong> {officialPageLink}</li>
      </ul>
    </>
  );

  return content;
};

export default GimpModalContent;
