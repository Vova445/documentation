import React from 'react';

const BabelModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#F5DA55",
    color: "#000",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Babel" : "Babel Official Page";

  const officialPageLink = (
    <a href="https://babel.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Babel - це транспілятор JavaScript, який перетворює код, написаний за допомогою сучасного стандарту ECMAScript, в код, який може виконуватися на старших версіях JavaScript. Він дозволяє розробникам використовувати нові функції мови на етапі розробки, навіть якщо браузери чи середовища виконання JavaScript ще не підтримують ці функції.
      </p>
      <p>
        <strong>Основні поняття Babel:</strong>
      </p>
      <ul>
        <li><strong>Транспіляція:</strong> Процес перетворення коду з одного стандарту JavaScript в інший.</li>
        <li><strong>Плагіни та Пресети:</strong> Розширення для Babel для включення конкретних функціональностей або набору функціональностей.</li>
        <li><strong>ECMAScript:</strong> Стандарт JavaScript, визначений Ecma International.</li>
        <li><strong>Исходный Код:</strong> Код, написаний розробником на сучасному стандарті ECMAScript.</li>
      </ul>
      <p>
        <strong>Основні переваги Babel:</strong>
      </p>
      <ul>
        <li><strong>Підтримка Нових Функцій:</strong> Можливість використовувати нові функції JavaScript навіть в старших браузерах.</li>
        <li><strong>Розширюваність:</strong> Гнучка система плагінів та пресетів для налаштування транспіляції.</li>
        <li><strong>Активна Спільнота:</strong> Широка спільнота розробників та підтримка великої кількості проектів.</li>
      </ul>
      <p>
        <strong>Сторінка Babel:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Babel JavaScript Transpiler</h2>
      <p>
        Babel is a JavaScript transpiler that converts code written in modern ECMAScript standards to code that can run on older versions of JavaScript. It allows developers to use new language features during development, even if browsers or JavaScript runtime environments do not yet support these features.
      </p>
      <p>
        <strong>Key Concepts of Babel:</strong>
      </p>
      <ul>
        <li><strong>Transpilation:</strong> The process of transforming code from one JavaScript standard to another.</li>
        <li><strong>Plugins and Presets:</strong> Extensions for Babel to include specific functionalities or sets of functionalities.</li>
        <li><strong>ECMAScript:</strong> The JavaScript standard defined by Ecma International.</li>
        <li><strong>Source Code:</strong> Code written by the developer in the modern ECMAScript standard.</li>
      </ul>
      <p>
        <strong>Main Advantages of Babel:</strong>
      </p>
      <ul>
        <li><strong>Support for New Features:</strong> Ability to use new JavaScript features even in older browsers.</li>
        <li><strong>Extensibility:</strong> Flexible system of plugins and presets for customizing transpilation.</li>
        <li><strong>Active Community:</strong> Wide community of developers and support for many projects.</li>
      </ul>
      <p>
        <strong>Page Babel:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default BabelModalContent;
