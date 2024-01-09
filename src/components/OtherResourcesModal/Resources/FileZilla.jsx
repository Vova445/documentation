import React from 'react';

const FileZillaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "red",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://filezilla-project.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка FileZilla
    </a>
  ) : (
    <a href="https://filezilla-project.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      FileZilla Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        FileZilla - це вільний та відкритий FTP-клієнт для передачі файлів між комп'ютером та сервером. Він підтримує FTP, FTPS та SFTP.
      </p>
      <p>
        <strong>Основні функції FileZilla:</strong>
      </p>
      <ul>
        <li><strong>FTP, FTPS, та SFTP Підтримка:</strong> Підтримка різних протоколів для передачі файлів.</li>
        <li><strong>Розділення Вікна:</strong> Можливість працювати з кількома з'єднаннями одночасно.</li>
        <li><strong>Керування Завданнями:</strong> Зберігання та керування конфігураціями передачі файлів.</li>
        <li><strong>Перетягування та Капітуляція:</strong> Перетягування файлів для передачі та капітуляція.</li>
      </ul>
      <p>
        <strong>Основні переваги FileZilla:</strong>
      </p>
      <ul>
        <li><strong>Безкоштовний та Відкритий:</strong> FileZilla доступний для використання безкоштовно та з відкритим вихідним кодом.</li>
        <li><strong>Простий та Інтуїтивний Інтерфейс:</strong> Легкий у використанні і має зрозумілий інтерфейс.</li>
        <li><strong>Кросплатформений:</strong> Доступний для Windows, Linux та macOS.</li>
      </ul>
      <p>
        <strong>Сторінка FileZilla:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>FileZilla</h2>
      <p>
        FileZilla is a free and open-source FTP client for transferring files between a computer and a server. It supports FTP, FTPS, and SFTP.
      </p>
      <p>
        <strong>Key Features of FileZilla:</strong>
      </p>
      <ul>
        <li><strong>FTP, FTPS, and SFTP Support:</strong> Support for various protocols for file transfer.</li>
        <li><strong>Tabbed Interface:</strong> Ability to work with multiple connections simultaneously.</li>
        <li><strong>Task Management:</strong> Saving and managing file transfer configurations.</li>
        <li><strong>Drag and Drop:</strong> Dragging files for transfer and drag-and-drop support.</li>
      </ul>
      <p>
        <strong>Main Advantages of FileZilla:</strong>
      </p>
      <ul>
        <li><strong>Free and Open Source:</strong> FileZilla is available for free with open-source code.</li>
        <li><strong>Simple and Intuitive Interface:</strong> Easy to use with a user-friendly interface.</li>
        <li><strong>Cross-Platform:</strong> Available for Windows, Linux, and macOS.</li>
      </ul>
      <p>
        <strong>FileZilla Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default FileZillaModalContent;
