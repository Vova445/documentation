import React from 'react';

const TrelloModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#0079BF",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://trello.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Trello
    </a>
  ) : (
    <a href="https://trello.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Trello Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Trello - це інструмент для управління завданнями та проектами, який використовує дошки, списки та картки для організації роботи.
      </p>
      <p>
        <strong>Основні функції Trello:</strong>
      </p>
      <ul>
        <li><strong>Дошки та Списки:</strong> Створення проектів за допомогою дошок та списків.</li>
        <li><strong>Картки:</strong> Додавання завдань та інформації на картки в межах проекту.</li>
        <li><strong>Організація Завдань:</strong> Переміщення карток між списками для організації робочого процесу.</li>
        <li><strong>Комунікація в Картках:</strong> Обговорення та коментування завдань в межах кожної картки.</li>
      </ul>
      <p>
        <strong>Основні переваги Trello:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Легка конфігурація та робота з інтерфейсом.</li>
        <li><strong>Візуальна Організація:</strong> Зручне візуальне відображення завдань та проектів.</li>
        <li><strong>Гнучкість Системи:</strong> Можливість адаптації до різних методів роботи.</li>
      </ul>
      <p><strong>Сторінка Trello:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Trello - Task and Project Management</h2>
      <p>
        Trello is a task and project management tool that uses boards, lists, and cards to organize work.
      </p>
      <p>
        <strong>Key Features of Trello:</strong>
      </p>
      <ul>
        <li><strong>Boards and Lists:</strong> Creating projects using boards and lists.</li>
        <li><strong>Cards:</strong> Adding tasks and information on cards within a project.</li>
        <li><strong>Task Organization:</strong> Moving cards between lists to organize the workflow.</li>
        <li><strong>Communication in Cards:</strong> Discussing and commenting on tasks within each card.</li>
      </ul>
      <p>
        <strong>Main Advantages of Trello:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Easy configuration and working with the interface.</li>
        <li><strong>Visual Organization:</strong> Convenient visual representation of tasks and projects.</li>
        <li><strong>System Flexibility:</strong> Adaptability to different working methods.</li>
      </ul>
      <p><strong>Trello Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default TrelloModalContent;
