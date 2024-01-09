import React from 'react';

const DrupalModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#0077c0",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.drupal.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Drupal
    </a>
  ) : (
    <a href="https://www.drupal.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Drupal Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Drupal - це відкрита система управління контентом (CMS), яка дозволяє легко створювати та управляти різноманітними веб-сайтами, починаючи від блогів до корпоративних порталів.
      </p>
      <p>
        <strong>Основні поняття Drupal:</strong>
      </p>
      <ul>
        <li><strong>Контентний Тип:</strong> Структура даних, що визначає тип вмісту на сайті (наприклад, статті, фотографії, відео).</li>
        <li><strong>Модулі:</strong> Розширення Drupal, які додають функціонал та можливості до сайту.</li>
        <li><strong>Теми:</strong> Визначення вигляду та оформлення веб-сайту через зміну дизайну.</li>
        <li><strong>Блоки:</strong> Малинки частини веб-сторінки, які можна розміщувати на різних частинах сайту.</li>
      </ul>
      <p>
        <strong>Основні переваги Drupal:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість та Розширюваність:</strong> Велика кількість модулів та тем для налаштування функціоналу та вигляду.</li>
        <li><strong>Спільнота:</strong> Активна глобальна спільнота розробників та користувачів.</li>
        <li><strong>Модульність:</strong> Здатність додавати та відключати різні функціональність за потребою.</li>
      </ul>
      <p>
        <strong>Сторінка Drupal:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Drupal Content Management System</h2>
      <p>
        Drupal is an open-source content management system (CMS) that enables easy creation and management of various websites, ranging from blogs to corporate portals.
      </p>
      <p>
        <strong>Key Concepts of Drupal:</strong>
      </p>
      <ul>
        <li><strong>Content Type:</strong> Data structure defining the type of content on the site (e.g., articles, photos, videos).</li>
        <li><strong>Modules:</strong> Drupal extensions that add functionality and features to the site.</li>
        <li><strong>Themes:</strong> Definition of the look and feel of the website through design changes.</li>
        <li><strong>Blocks:</strong> Small sections of a web page that can be placed in various parts of the site.</li>
      </ul>
      <p>
        <strong>Main Advantages of Drupal:</strong>
      </p>
      <ul>
        <li><strong>Flexibility and Extensibility:</strong> Large number of modules and themes for customizing functionality and appearance.</li>
        <li><strong>Community:</strong> Active global community of developers and users.</li>
        <li><strong>Modularity:</strong> Ability to add and disable different functionalities as needed.</li>
      </ul>
      <p>
        <strong>Drupal Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default DrupalModalContent;
