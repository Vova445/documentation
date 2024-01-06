import React from 'react';

const BootstrapModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#7952B3",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Bootstrap - це потужний CSS-фреймворк, який дозволяє швидко та легко створювати стильні та адаптивні веб-сайти. Він містить набір готових компонентів, які можна використовувати для конструювання різноманітних інтерфейсів.
      </p>
      <p>
        <strong>Основні характеристики Bootstrap:</strong>
      </p>
      <ul>
        <li><strong>Адаптивний Дизайн:</strong> Забезпечує створення веб-сайтів, які добре виглядають на різних пристроях та екранах.</li>
        <li><strong>Готові Компоненти:</strong> Містить ряд готових компонентів, таких як навігація, кнопки, форми та інші.</li>
        <li><strong>Система Сітки:</strong> Використовує гнучку систему сітки для організації вмісту та розміщення компонентів.</li>
        <li><strong>Нестандартні Компоненти:</strong> Має набір нестандартних компонентів, які полегшують розробку складних інтерфейсів.</li>
      </ul>
      <p>
        <strong>Де Вчитися Bootstrap:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Bootstrap:</strong> <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Bootstrap Docs</a></li>
        <br></br>
        <li><strong>Bootstrap Expo:</strong> <a href="https://expo.getbootstrap.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Bootstrap Expo</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Bootstrap Framework</h2>
      <p>
        Bootstrap is a powerful CSS framework that allows for the quick and easy creation of stylish and responsive websites. It includes a set of ready-made components that can be used to construct various interfaces.
      </p>
      <p>
        <strong>Key Features of Bootstrap:</strong>
      </p>
      <ul>
        <li><strong>Responsive Design:</strong> Ensures the creation of websites that look good on various devices and screens.</li>
        <li><strong>Ready-Made Components:</strong> Contains a range of ready-made components such as navigation, buttons, forms, and more.</li>
        <li><strong>Grid System:</strong> Uses a flexible grid system to organize content and layout components.</li>
        <li><strong>Custom Components:</strong> Has a set of custom components that facilitate the development of complex interfaces.</li>
      </ul>
      <p>
        <strong>Where to Learn Bootstrap:</strong>
      </p>
      <ul>
        <li><strong>Official Bootstrap Documentation:</strong> <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Bootstrap Docs</a></li>
        <br></br>
        <li><strong>Bootstrap Expo:</strong> <a href="https://expo.getbootstrap.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Bootstrap Expo</a></li>
      </ul>
    </>
  );

  return content;
};

export default BootstrapModalContent;
