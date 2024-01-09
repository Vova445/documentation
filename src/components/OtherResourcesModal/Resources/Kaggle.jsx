import React from 'react';

const KaggleModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#20BEFF",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Kaggle
    </a>
  ) : (
    <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Kaggle Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Kaggle - це платформа для проведення конкурсів у галузі машинного навчання, аналізу даних та розв'язання складних завдань.
      </p>
      <p>
        <strong>Основні особливості Kaggle:</strong>
      </p>
      <ul>
        <li><strong>Конкурси та Виклики:</strong> Участь у конкурсах та вирішення реальних проблем за допомогою машинного навчання.</li>
        <li><strong>Набори Даних:</strong> Доступ до широкого вибору наборів даних для проведення досліджень та експериментів.</li>
        <li><strong>Платформа Навчання:</strong> Матеріали, курси та ресурси для вивчення машинного навчання та аналізу даних.</li>
        <li><strong>Спільнота:</strong> Можливість обміну знаннями та спілкування з професіоналами галузі.</li>
      </ul>
      <p>
        <strong>Сторінка Kaggle:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Kaggle Platform</h2>
      <p>
        Kaggle is a platform for hosting machine learning competitions, data analysis, and solving complex challenges.
      </p>
      <p>
        <strong>Key Features of Kaggle:</strong>
      </p>
      <ul>
        <li><strong>Competitions and Challenges:</strong> Participate in competitions and solve real-world problems using machine learning.</li>
        <li><strong>Datasets:</strong> Access to a wide range of datasets for research and experimentation.</li>
        <li><strong>Learning Platform:</strong> Materials, courses, and resources for learning machine learning and data analysis.</li>
        <li><strong>Community:</strong> Opportunity to share knowledge and interact with professionals in the field.</li>
      </ul>
      <p>
        <strong>Kaggle Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default KaggleModalContent;
