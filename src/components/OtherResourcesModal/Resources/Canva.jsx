import React from 'react';

const CanvaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#00c4cc",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Canva" : "Canva Official Page";

  const officialPageLink = (
    <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Canva - це веб-платформа для дизайну та створення графіки, яка надає широкий спектр інструментів для розробки креативних проектів. З Canva можна створювати презентації, соціальні медіа-пости, логотипи, флаєри та інші дизайнерські матеріали.
      </p>
      <p>
        <strong>Основні можливості Canva:</strong>
      </p>
      <ul>
        <li><strong>Інтерфейс для Дизайну:</strong> Зручний інтерфейс для створення різних видів графічних проектів.</li>
        <li><strong>Шаблони та Елементи Дизайну:</strong> Велика кількість шаблонів та готових елементів для використання.</li>
        <li><strong>Спільна Робота:</strong> Можливість спільно працювати над проектами та відгуки в реальному часі.</li>
        <li><strong>Експорт та Друк:</strong> Зручні інструменти для експорту та друку готових дизайнів.</li>
      </ul>
      <p>
        <strong>Основні переваги Canva:</strong>
      </p>
      <ul>
        <li><strong>Доступність:</strong> Використання безкоштовних можливостей та доступ до розширених функцій за плату.</li>
        <li><strong>Простота Використання:</strong> Інтуїтивний інтерфейс, що дозволяє швидко освоювати платформу.</li>
        <li><strong>Різноманіття Інструментів:</strong> Широкий вибір інструментів для створення різних типів дизайну.</li>
      </ul>
      <p>
        <strong>Сторінка Canva:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Canva Design Platform</h2>
      <p>
        Canva is a web platform for design and graphics creation that provides a wide range of tools for developing creative projects. With Canva, you can create presentations, social media posts, logos, flyers, and other design materials.
      </p>
      <p>
        <strong>Key Features of Canva:</strong>
      </p>
      <ul>
        <li><strong>Design Interface:</strong> Convenient interface for creating various types of graphic projects.</li>
        <li><strong>Design Templates and Elements:</strong> A large variety of templates and ready-made elements for use.</li>
        <li><strong>Collaboration:</strong> Ability to collaborate on projects and receive real-time feedback.</li>
        <li><strong>Export and Print:</strong> Convenient tools for exporting and printing finished designs.</li>
      </ul>
      <p>
        <strong>Main Advantages of Canva:</strong>
      </p>
      <ul>
        <li><strong>Accessibility:</strong> Use of free features and access to advanced functions for a fee.</li>
        <li><strong>User-Friendly:</strong> Intuitive interface that allows for quick platform mastery.</li>
        <li><strong>Variety of Tools:</strong> Wide selection of tools for creating different types of designs.</li>
      </ul>
      <p>
        <strong>Page Canva:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default CanvaModalContent;
