import React from 'react';

const MoodleModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FF8C00",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://moodle.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Moodle
    </a>
  ) : (
    <a href="https://moodle.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Moodle Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Moodle - це безкоштовна система управління навчанням (LMS), яка дозволяє створювати онлайн-курси та навчальні платформи.
      </p>
      <p>
        <strong>Основні функції Moodle:</strong>
      </p>
      <ul>
        <li><strong>Створення Онлайн-Курсів:</strong> Можливість створення та організації навчальних курсів.</li>
        <li><strong>Відстеження Прогресу:</strong> Функціонал для відстеження прогресу учнів та оцінювання їхніх знань.</li>
        <li><strong>Форуми та Зворотний Зв'язок:</strong> Засоби комунікації та обговорення для студентів та викладачів.</li>
        <li><strong>Розширені Можливості Налаштувань:</strong> Гнучкі налаштування курсів та користувацьких облікових записів.</li>
      </ul>
      <p>
        <strong>Основні переваги Moodle:</strong>
      </p>
      <ul>
        <li><strong>Відкритий Код:</strong> Безкоштовна та з відкритим вихідним кодом.</li>
        <li><strong>Гнучкість:</strong> Можливість адаптації під різні педагогічні завдання.</li>
        <li><strong>Активна Спільнота:</strong> Велика спільнота користувачів та розробників.</li>
      </ul>
      <p><strong>Сторінка Moodle:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Moodle</h2>
      <p>
        Moodle is a free learning management system (LMS) that allows creating online courses and educational platforms.
      </p>
      <p>
        <strong>Key Features of Moodle:</strong>
      </p>
      <ul>
        <li><strong>Creation of Online Courses:</strong> Ability to create and organize educational courses.</li>
        <li><strong>Progress Tracking:</strong> Functionality for tracking students' progress and assessing their knowledge.</li>
        <li><strong>Forums and Feedback:</strong> Communication and discussion tools for students and teachers.</li>
        <li><strong>Advanced Settings Options:</strong> Flexible settings for courses and user accounts.</li>
      </ul>
      <p>
        <strong>Main Advantages of Moodle:</strong>
      </p>
      <ul>
        <li><strong>Open Source:</strong> Free and open-source.</li>
        <li><strong>Flexibility:</strong> Ability to adapt to various educational tasks.</li>
        <li><strong>Active Community:</strong> Large community of users and developers.</li>
      </ul>
      <p><strong>Moodle Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default MoodleModalContent;
