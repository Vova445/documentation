import React from 'react';

const ApacheModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#8b0000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Apache" : "Apache Official Page";

  const officialPageLink = (
    <a href="https://apache.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Apache - це відомий веб-сервер та програмне забезпечення для обробки запитів HTTP. Він використовується для розгортання веб-сайтів та забезпечення доступу до веб-ресурсів через Інтернет.
      </p>
      <p>
        <strong>Основні поняття Apache:</strong>
      </p>
      <ul>
        <li><strong>Веб-сервер:</strong> Програмне забезпечення, яке обробляє запити HTTP від клієнтів та відправляє їм відповіді.</li>
        <li><strong>Конфігураційні Файли:</strong> Файли, в яких налаштовуються параметри та поведінка Apache.</li>
        <li><strong>Модулі:</strong> Розширення, які можна включати або виключати для розширення функціональності веб-сервера.</li>
        <li><strong>Віртуальні Хости:</strong> Можливість налаштовувати декілька веб-сайтів на одному сервері.</li>
      </ul>
      <p>
        <strong>Основні переваги Apache:</strong>
      </p>
      <ul>
        <li><strong>Надійність та Стабільність:</strong> Довгий термін існування та використання спільнотою.</li>
        <li><strong>Гнучкість:</strong> Велика кількість модулів для розширення функціональності.</li>
        <li><strong>Висока Продуктивність:</strong> Здатність обслуговувати велику кількість одночасних запитів.</li>
      </ul>
      <p>
        <strong>Сторінка Apache:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Apache Web Server</h2>
      <p>
        Apache is a well-known web server and software for handling HTTP requests. It is used to deploy websites and provide access to web resources over the Internet.
      </p>
      <p>
        <strong>Key Concepts of Apache:</strong>
      </p>
      <ul>
        <li><strong>Web Server:</strong> Software that processes HTTP requests from clients and sends them responses.</li>
        <li><strong>Configuration Files:</strong> Files where parameters and behavior of Apache are configured.</li>
        <li><strong>Modules:</strong> Extensions that can be enabled or disabled to extend the functionality of the web server.</li>
        <li><strong>Virtual Hosts:</strong> Ability to configure multiple websites on one server.</li>
      </ul>
      <p>
        <strong>Main Advantages of Apache:</strong>
      </p>
      <ul>
        <li><strong>Reliability and Stability:</strong> Longevity and widespread use within the community.</li>
        <li><strong>Flexibility:</strong> A wide range of modules to extend functionality.</li>
        <li><strong>High Performance:</strong> Ability to handle a large number of simultaneous requests.</li>
      </ul>
      <p>
        <strong>Page Apache:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default ApacheModalContent;
