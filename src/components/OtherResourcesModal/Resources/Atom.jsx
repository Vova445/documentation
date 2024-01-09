import React from 'react';

const AtomModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#66595C",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Atom" : "Atom Official Page";

  const officialPageLink = (
    <a href="https://atom-editor.cc/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Atom - це відкрите та розширюване середовище для розробки програмного забезпечення. Він створений за допомогою веб-технологій, включаючи HTML, JavaScript та CSS, і побудований на платформі Electron. Atom надає широкі можливості налаштувань та розширень, що робить його популярним серед розробників.
      </p>
      <p>
        <strong>Основні поняття Atom:</strong>
      </p>
      <ul>
        <li><strong>Пакети (Packages):</strong> Розширення та додатки, які розширюють функціональність Atom.</li>
        <li><strong>Теми (Themes):</strong> Налаштування зовнішнього вигляду редактора, включаючи колірні схеми.</li>
        <li><strong>GitHub Integration:</strong> Вбудована підтримка для інтеграції з GitHub для зручного ведення проектів.</li>
        <li><strong>Snippets:</strong> Можливість створювати короткі фрагменти коду для швидкого введення.</li>
      </ul>
      <p>
        <strong>Основні переваги Atom:</strong>
      </p>
      <ul>
        <li><strong>Відкритість та Розширюваність:</strong> Атом є відкритим програмним забезпеченням та надає багато можливостей для розширень.</li>
        <li><strong>Підтримка GitHub:</strong> Інтеграція з GitHub для зручності роботи з репозиторіями.</li>
        <li><strong>Спільнота:</strong> Активна спільнота користувачів та розробників.</li>
      </ul>
      <p>
        <strong>Сторінка Atom:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Atom Editor</h2>
      <p>
        Atom is an open and extensible development environment for building software. It is created using web technologies, including HTML, JavaScript, and CSS, and built on the Electron platform. Atom provides extensive customization and extension capabilities, making it popular among developers.
      </p>
      <p>
        <strong>Key Concepts of Atom:</strong>
      </p>
      <ul>
        <li><strong>Packages:</strong> Extensions and add-ons that extend Atom's functionality.</li>
        <li><strong>Themes:</strong> Customizations for the editor's appearance, including color schemes.</li>
        <li><strong>GitHub Integration:</strong> Built-in support for GitHub integration for convenient project management.</li>
        <li><strong>Snippets:</strong> Ability to create short code snippets for quick input.</li>
      </ul>
      <p>
        <strong>Main Advantages of Atom:</strong>
      </p>
      <ul>
        <li><strong>Openness and Extensibility:</strong> Atom is open-source and provides many opportunities for extensions.</li>
        <li><strong>GitHub Support:</strong> Integration with GitHub for convenient repository management.</li>
        <li><strong>Community:</strong> Active community of users and developers.</li>
      </ul>
      <p>
        <strong>Page Atom:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default AtomModalContent;
