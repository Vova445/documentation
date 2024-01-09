import React from 'react';

const WordPressModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "gray",
    color: "#ffff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка WordPress
    </a>
  ) : (
    <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      WordPress Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        WordPress - це відкрита система управління веб-контентом (CMS), яка використовується для створення та управління різноманітними веб-сайтами, від блогів до електронних комерційних платформ.
      </p>
      <p>
        <strong>Основні функції WordPress:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Інтуїтивний і легкий у використанні інтерфейс для редагування та додавання контенту.</li>
        <li><strong>Розширюваність:</strong> Можливість встановлення різноманітних плагінів та тем для розширення функціоналу.</li>
        <li><strong>Спільнота:</strong> Велика та активна спільнота користувачів та розробників.</li>
        <li><strong>Гнучкість та Налаштування:</strong> Можливість налаштування великої кількості параметрів для відповідності конкретним потребам.</li>
      </ul>
      <p>
        <strong>Основні переваги WordPress:</strong>
      </p>
      <ul>
        <li><strong>Широкі Можливості Редагування Контенту:</strong> Просте та зручне редагування тексту, зображень та інших елементів.</li>
        <li><strong>Велика Кількість Доступних Розширень:</strong> Ринок плагінів та тем робить WordPress дуже гнучким.</li>
        <li><strong>Багата Ком’юніті та Підтримка:</strong> Активна спільнота користувачів та розробників.</li>
      </ul>
      <p><strong>Сторінка WordPress:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>WordPress CMS</h2>
      <p>
        WordPress is an open-source content management system (CMS) used for creating and managing various websites, from blogs to e-commerce platforms.
      </p>
      <p>
        <strong>Key Features of WordPress:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Intuitive and user-friendly interface for editing and adding content.</li>
        <li><strong>Extensibility:</strong> Ability to install various plugins and themes to extend functionality.</li>
        <li><strong>Community:</strong> Large and active community of users and developers.</li>
        <li><strong>Flexibility and Customization:</strong> Ability to configure a wide range of settings to meet specific needs.</li>
      </ul>
      <p>
        <strong>Main Advantages of WordPress:</strong>
      </p>
      <ul>
        <li><strong>Wide Content Editing Capabilities:</strong> Simple and convenient editing of text, images, and other elements.</li>
        <li><strong>Abundance of Available Extensions:</strong> The marketplace of plugins and themes makes WordPress highly flexible.</li>
        <li><strong>Rich Community and Support:</strong> Active community of users and developers.</li>
      </ul>
      <p><strong>WordPress Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default WordPressModalContent;
