import React from 'react';

const BrowserStackModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#ffa500",
    color: "#000",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка BrowserStack" : "BrowserStack Official Page";

  const officialPageLink = (
    <a href="https://www.browserstack.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        BrowserStack - це хмарна платформа для тестування веб-сайтів та веб-додатків на різних пристроях і браузерах. Завдяки BrowserStack, розробники можуть перевіряти сумісність своїх продуктів на широкому спектрі конфігурацій та впевнитися, що їх веб-застосунки вірно відображаються для всіх користувачів.
      </p>
      <p>
        <strong>Основні поняття BrowserStack:</strong>
      </p>
      <ul>
        <li><strong>Хмарне Тестування:</strong> Можливість тестувати веб-додатки на різних пристроях та браузерах в хмарному середовищі.</li>
        <li><strong>Сумісність Браузера:</strong> Перевірка, як веб-сайти виглядають та працюють в різних браузерах.</li>
        <li><strong>Автоматизація Тестів:</strong> Можливість автоматизації тестів для прискорення процесу тестування.</li>
        <li><strong>Віддалений Доступ:</strong> Тестування на реальних пристроях, які розташовані в хмарі.</li>
      </ul>
      <p>
        <strong>Основні переваги BrowserStack:</strong>
      </p>
      <ul>
        <li><strong>Широкий Вибір Пристроїв:</strong> Велика кількість пристроїв та браузерів для тестування.</li>
        <li><strong>Хмарне Тестування:</strong> Зручне та швидке тестування в хмарному середовищі.</li>
        <li><strong>Реальні Пристрої:</strong> Можливість тестувати на реальних пристроях, а не емуляторах.</li>
      </ul>
      <p>
        <strong>Сторінка BrowserStack:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>BrowserStack Testing Platform</h2>
      <p>
        BrowserStack is a cloud platform for testing websites and web applications on various devices and browsers. With BrowserStack, developers can ensure the compatibility of their products across a wide range of configurations, making sure their web applications render correctly for all users.
      </p>
      <p>
        <strong>Key Concepts of BrowserStack:</strong>
      </p>
      <ul>
        <li><strong>Cloud Testing:</strong> Ability to test web applications on different devices and browsers in a cloud environment.</li>
        <li><strong>Browser Compatibility:</strong> Checking how websites look and function in different browsers.</li>
        <li><strong>Test Automation:</strong> Ability to automate tests to speed up the testing process.</li>
        <li><strong>Remote Access:</strong> Testing on real devices located in the cloud.</li>
      </ul>
      <p>
        <strong>Main Advantages of BrowserStack:</strong>
      </p>
      <ul>
        <li><strong>Wide Device Selection:</strong> A large number of devices and browsers for testing.</li>
        <li><strong>Cloud Testing:</strong> Convenient and fast testing in a cloud environment.</li>
        <li><strong>Real Devices:</strong> Testing on real devices rather than emulators.</li>
      </ul>
      <p>
        <strong>Page BrowserStack:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default BrowserStackModalContent;
