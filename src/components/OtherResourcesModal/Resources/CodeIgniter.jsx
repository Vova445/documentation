import React from 'react';

const CodeIgniterModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#ee4323",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка CodeIgniter" : "CodeIgniter Official Page";

  const officialPageLink = (
    <a href="https://codeigniter.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        CodeIgniter - це легкий PHP-фреймворк для швидкої розробки веб-додатків. Він надає простий та елегантний спосіб створення веб-сайтів, використовуючи мову програмування PHP.
      </p>
      <p>
        <strong>Основні можливості CodeIgniter:</strong>
      </p>
      <ul>
        <li><strong>Легкість Використання:</strong> Простий для вивчення та використання, ідеально підходить для початківців.</li>
        <li><strong>Висока Швидкість Виконання:</strong> Швидкий та ефективний фреймворк для веб-розробки.</li>
        <li><strong>Малий Розмір Ядра:</strong> Компактне ядро фреймворка, що дозволяє додавати та використовувати лише те, що потрібно.</li>
        <li><strong>Активна Спільнота:</strong> Велика та активна спільнота розробників, готових допомогти.</li>
      </ul>
      <p>
        <strong>Основні переваги CodeIgniter:</strong>
      </p>
      <ul>
        <li><strong>Легкість та Швидкість:</strong> Відмінна комбінація легкості використання та високої швидкості виконання.</li>
        <li><strong>Модульність:</strong> Можливість додавати лише ті компоненти, які необхідні для конкретного проекту.</li>
        <li><strong>Безпека:</strong> Вбудовані засоби для забезпечення безпеки веб-додатків.</li>
      </ul>
      <p>
        <strong>Сторінка CodeIgniter:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>CodeIgniter PHP Framework</h2>
      <p>
        CodeIgniter is a lightweight PHP framework for rapid web development. It provides a simple and elegant way to create websites using the PHP programming language.
      </p>
      <p>
        <strong>Key Features of CodeIgniter:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Easy to learn and use, ideal for beginners.</li>
        <li><strong>High Performance:</strong> Fast and efficient framework for web development.</li>
        <li><strong>Small Core Size:</strong> Compact framework core, allowing you to add and use only what is needed.</li>
        <li><strong>Active Community:</strong> Large and active community of developers ready to help.</li>
      </ul>
      <p>
        <strong>Main Advantages of CodeIgniter:</strong>
      </p>
      <ul>
        <li><strong>Ease and Speed:</strong> Excellent combination of ease of use and high performance.</li>
        <li><strong>Modularity:</strong> Ability to add only the components needed for a specific project.</li>
        <li><strong>Security:</strong> Built-in features to ensure the security of web applications.</li>
      </ul>
      <p>
        <strong>Page CodeIgniter:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default CodeIgniterModalContent;
