import React from 'react';

const ElectronModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#47848F",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Electron - це фреймворк для розробки крос-платформених настільних додатків за допомогою веб-технологій, таких як HTML, CSS та JavaScript. Він дозволяє створювати стільницеві додатки, які можуть працювати на операційних системах Windows, macOS та Linux.
      </p>
      <p>
        <strong>Основні характеристики Electron:</strong>
      </p>
      <ul>
        <li><strong>Крос-Платформеність:</strong> Додатки, розроблені з використанням Electron, можуть бути запущені на різних операційних системах.</li>
        <li><strong>Використання Веб-Технологій:</strong> Розробка ведеться за допомогою звичайних веб-технологій, що полегшує процес для веб-розробників.</li>
        <li><strong>Можливості Нативного Доступу:</strong> Electron надає можливості для взаємодії з операційною системою та отримання доступу до нативних API.</li>
        <li><strong>Спільнота та Плагіни:</strong> Широка спільнота та наявність плагінів роблять Electron потужним інструментом для розробки настільних додатків.</li>
      </ul>
      <p>
        <strong>Застосування Electron:</strong>
      </p>
      <ul>
        <li><strong>Редактори Тексту та IDE:</strong> Відомі редактори, такі як Visual Studio Code, розроблені з використанням Electron.</li>
        <li><strong>Месенджери:</strong> Деякі популярні месенджери, наприклад, Slack та Discord, також використовують Electron.</li>
        <li><strong>Медіаплеєри:</strong> Деякі медіаплеєри, наприклад, Spotify, використовують Electron для своїх настільних додатків.</li>
        <li><strong>Додатки для Розробки:</strong> Electron є популярним вибором для розробки різноманітних інструментів для програмістів.</li>
      </ul>
      <p>
        <strong>Де Вчитися Electron:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Electron:</strong> <a href="https://www.electronjs.org/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Electron Docs</a></li>
        <li><strong>Приклади та Демо-Проекти:</strong> <a href="https://github.com/electron/electron-api-demos" target="_blank" rel="noopener noreferrer" style={linkStyles}>Electron API Demos</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Electron Framework</h2>
      <p>
        Electron is a framework for developing cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript. It allows the creation of desktop applications that can run on Windows, macOS, and Linux operating systems.
      </p>
      <p>
        <strong>Key Features of Electron:</strong>
      </p>
      <ul>
        <li><strong>Cross-Platform:</strong> Applications developed with Electron can be launched on different operating systems.</li>
        <li><strong>Use of Web Technologies:</strong> Development is done using standard web technologies, making the process easier for web developers.</li>
        <li><strong>Native Access Capabilities:</strong> Electron provides capabilities to interact with the operating system and access native APIs.</li>
        <li><strong>Community and Plugins:</strong> A broad community and the availability of plugins make Electron a powerful tool for desktop application development.</li>
      </ul>
      <p>
        <strong>Applications of Electron:</strong>
      </p>
      <ul>
        <li><strong>Text Editors and IDEs:</strong> Well-known editors, such as Visual Studio Code, are developed using Electron.</li>
        <li><strong>Messengers:</strong> Some popular messengers, like Slack and Discord, also utilize Electron.</li>
        <li><strong>Media Players:</strong> Some media players, like Spotify, use Electron for their desktop applications.</li>
        <li><strong>Development Tools:</strong> Electron is a popular choice for developing various tools for programmers.</li>
      </ul>
      <p>
        <strong>Where to Learn Electron:</strong>
      </p>
      <ul>
        <li><strong>Official Electron Documentation:</strong> <a href="https://www.electronjs.org/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Electron Docs</a></li>
        <li><strong>Examples and Demo Projects:</strong> <a href="https://github.com/electron/electron-api-demos" target="_blank" rel="noopener noreferrer" style={linkStyles}>Electron API Demos</a></li>
      </ul>
    </>
  );

  return content;
};

export default ElectronModalContent;
