import React from 'react';

const NanoModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#009688",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.nano-editor.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Nano
    </a>
  ) : (
    <a href="https://www.nano-editor.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Nano Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Nano - це легкий та простий у використанні текстовий редактор для командного рядка, який надає базовий набір функцій для редагування текстових файлів.
      </p>
      <p>
        <strong>Основні функції Nano:</strong>
      </p>
      <ul>
        <li><strong>Простий Інтерфейс:</strong> Легкий та зрозумілий інтерфейс для швидкого редагування файлів.</li>
        <li><strong>Основні Команди:</strong> Базовий набір команд для вставки, видалення та збереження файлів.</li>
        <li><strong>Підтримка Кольорів:</strong> Виділення синтаксису та підсвічування колірною кодуванням.</li>
        <li><strong>Керування Файлами:</strong> Можливість копіювання, вставки та збереження файлів.</li>
      </ul>
      <p>
        <strong>Основні переваги Nano:</strong>
      </p>
      <ul>
        <li><strong>Легкість Використання:</strong> Простий та інтуїтивно зрозумілий інтерфейс.</li>
        <li><strong>Швидкість Роботи:</strong> Швидке відкриття та редагування текстових файлів.</li>
        <li><strong>Мінімалізм:</strong> Мінімальна кількість функцій для швидкого використання.</li>
      </ul>
      <p><strong>Сторінка Nano:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Nano Text Editor</h2>
      <p>
        Nano is a lightweight and easy-to-use command-line text editor that provides a basic set of features for editing text files.
      </p>
      <p>
        <strong>Key Features of Nano:</strong>
      </p>
      <ul>
        <li><strong>Simple Interface:</strong> Lightweight and understandable interface for quick file editing.</li>
        <li><strong>Basic Commands:</strong> Basic set of commands for insertion, deletion, and file saving.</li>
        <li><strong>Color Support:</strong> Syntax highlighting and color-coded highlighting.</li>
        <li><strong>File Management:</strong> Ability to copy, paste, and save files.</li>
      </ul>
      <p>
        <strong>Main Advantages of Nano:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Simple and intuitive interface.</li>
        <li><strong>Speed:</strong> Fast opening and editing of text files.</li>
        <li><strong>Minimalism:</strong> Minimum set of features for quick use.</li>
      </ul>
      <p><strong>Nano Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default NanoModalContent;
