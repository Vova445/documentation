import React from 'react';

const PhalconModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#7E62A1",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Phalcon - це високопродуктивний PHP-фреймворк, який надає розробникам швидкий та ефективний інструмент для створення веб-додатків. Особливість Phalcon полягає в тому, що він реалізований як PHP-розширення, що забезпечує велику швидкодію через прямий доступ до низькорівневих функцій PHP.
      </p>
      <p>
        <strong>Основні характеристики Phalcon:</strong>
      </p>
      <ul>
        <li><strong>Швидкодія:</strong> Реалізація Phalcon як розширення PHP забезпечує високу швидкодію завдяки прямому доступу до ядра PHP.</li>
        <li><strong>Модульність та Відокремленість Компонентів:</strong> Phalcon розділений на низку модулів, які можна використовувати окремо або в сукупності для зручної розробки.</li>
        <li><strong>Мікро-фреймворк:</strong> Є можливість використання Phalcon у ролі мікро-фреймворку для легших проектів.</li>
        <li><strong>Обробка Запитів та Маршрутизація:</strong> Забезпечує вбудовані засоби для обробки запитів та визначення маршрутів.</li>
      </ul>
      <p>
        <strong>Застосування Phalcon:</strong>
      </p>
      <ul>
        <li><strong>Великі та Високозавантажені Проекти:</strong> Phalcon часто використовується для великих проектів з високим навантаженням.</li>
        <li><strong>Веб-додатки різного роду:</strong> Підходить для розробки різноманітних веб-додатків, від блогів до електронних торгових платформ.</li>
        <li><strong>Проекти, які вимагають Швидкодії:</strong> Деякі проекти вибирають Phalcon через його високу швидкодію та ефективність.</li>
      </ul>
      <p>
        <strong>Де Вчитися Phalcon:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Phalcon:</strong> <a href="https://docs.phalcon.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Phalcon Documentation</a></li>
        <br></br>
        <li><strong>Приклади та Прикладні Матеріали:</strong> <a href="https://github.com/phalcon/invo" target="_blank" rel="noopener noreferrer" style={linkStyles}>Phalcon Examples</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Phalcon PHP Framework</h2>
      <p>
        Phalcon is a high-performance PHP framework that provides developers with a fast and efficient tool for creating web applications. The distinctive feature of Phalcon is that it is implemented as a PHP extension, ensuring high performance through direct access to low-level PHP functions.
      </p>
      <p>
        <strong>Key Features of Phalcon:</strong>
      </p>
      <ul>
        <li><strong>High Performance:</strong> Phalcon's implementation as a PHP extension ensures high performance through direct access to the PHP core.</li>
        <li><strong>Modularity and Component Separation:</strong> Phalcon is divided into a series of modules that can be used individually or together for convenient development.</li>
        <li><strong>Micro-Framework Capabilities:</strong> Phalcon can be used as a micro-framework for lighter projects.</li>
        <li><strong>Request Handling and Routing:</strong> Provides built-in tools for request handling and route definition.</li>
      </ul>
      <p>
        <strong>Applications of Phalcon:</strong>
      </p>
      <ul>
        <li><strong>Large and High-Traffic Projects:</strong> Phalcon is often used for large projects with high traffic.</li>
        <li><strong>Various Web Applications:</strong> Suitable for developing various web applications, from blogs to e-commerce platforms.</li>
        <li><strong>Projects Requiring High Performance:</strong> Some projects choose Phalcon for its high speed and efficiency.</li>
      </ul>
      <p>
        <strong>Where to Learn Phalcon:</strong>
      </p>
      <ul>
        <li><strong>Official Phalcon Documentation:</strong> <a href="https://docs.phalcon.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Phalcon Documentation</a></li>
        <br></br>
        <li><strong>Examples and Practical Materials:</strong> <a href="https://github.com/phalcon/invo" target="_blank" rel="noopener noreferrer" style={linkStyles}>Phalcon Examples</a></li>
      </ul>
    </>
  );

  return content;
};

export default PhalconModalContent;
