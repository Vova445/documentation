import React from 'react';

const LinkedInModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#0077B5",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка LinkedIn
    </a>
  ) : (
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      LinkedIn Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        LinkedIn - це соціальна мережа для професійного спілкування та створення бізнес-контактів.
      </p>
      <p>
        <strong>Основні можливості LinkedIn:</strong>
      </p>
      <ul>
        <li><strong>Професійний Профіль:</strong> Створення та управління власним професійним профілем.</li>
        <li><strong>Бізнес-Спілкування:</strong> Знаходження та встановлення контактів з іншими фахівцями.</li>
        <li><strong>Робочі Оголошення:</strong> Пошук та розміщення вакансій та резюме.</li>
        <li><strong>Професійний Розвиток:</strong> Опублікування та споживання професійного контенту.</li>
      </ul>
      <p>
        <strong>Основні переваги LinkedIn:</strong>
      </p>
      <ul>
        <li><strong>Бізнес-Спілкування:</strong> Можливість знаходження нових бізнес-контактів та партнерів.</li>
        <li><strong>Професійний Розвиток:</strong> Доступ до професійного спілкування та корисного контенту.</li>
        <li><strong>Кар'єрні Можливості:</strong> Відкриття нових кар'єрних можливостей та робочих контактів.</li>
      </ul>
      <p><strong>Сторінка LinkedIn:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>LinkedIn</h2>
      <p>
        LinkedIn is a social network designed for professional networking and business contacts.
      </p>
      <p>
        <strong>Key Features of LinkedIn:</strong>
      </p>
      <ul>
        <li><strong>Professional Profile:</strong> Creating and managing your own professional profile.</li>
        <li><strong>Business Networking:</strong> Finding and connecting with other professionals.</li>
        <li><strong>Job Listings:</strong> Searching and posting job vacancies and resumes.</li>
        <li><strong>Professional Development:</strong> Publishing and consuming professional content.</li>
      </ul>
      <p>
        <strong>Main Advantages of LinkedIn:</strong>
      </p>
      <ul>
        <li><strong>Business Networking:</strong> Ability to discover new business contacts and partners.</li>
        <li><strong>Professional Development:</strong> Access to professional networking and valuable content.</li>
        <li><strong>Career Opportunities:</strong> Exploring new career opportunities and job contacts.</li>
      </ul>
      <p><strong>LinkedIn Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default LinkedInModalContent;
