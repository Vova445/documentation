import React from 'react';

const GrafanaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#F47A20",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://grafana.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Grafana
    </a>
  ) : (
    <a href="https://grafana.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Grafana Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Grafana - це потужний інструмент для візуалізації та аналізу даних з різних джерел. Використовується для моніторингу та створення інтерактивних панелей та графіків.
      </p>
      <p>
        <strong>Основні функції Grafana:</strong>
      </p>
      <ul>
        <li><strong>Візуалізація Даних:</strong> Створення красивих та інформативних графіків та панелей.</li>
        <li><strong>Підтримка Різних Джерел:</strong> З'єднання з різноманітними джерелами даних, такими як бази даних, служби моніторингу тощо.</li>
        <li><strong>Створення Сповіщень:</strong> Налаштування сповіщень для оперативного реагування на події.</li>
        <li><strong>Розширені Дашборди:</strong> Вбудовані та можливість створення складних та розширених дашбордів.</li>
      </ul>
      <p>
        <strong>Основні переваги Grafana:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість та Розширюваність:</strong> Можливість адаптації та розширення за допомогою різних плагінів та джерел даних.</li>
        <li><strong>Велика Спільнота:</strong> Активна спільнота користувачів та розробників.</li>
        <li><strong>Простота Використання:</strong> Інтуїтивний інтерфейс для швидкого налаштування та візуалізації даних.</li>
      </ul>
      <p>
        <strong>Сторінка Grafana:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Grafana Data Visualization</h2>
      <p>
        Grafana is a powerful tool for data visualization and analysis from various sources. It is used for monitoring and creating interactive panels and charts.
      </p>
      <p>
        <strong>Key Features of Grafana:</strong>
      </p>
      <ul>
        <li><strong>Data Visualization:</strong> Creating beautiful and informative charts and panels.</li>
        <li><strong>Support for Various Sources:</strong> Connecting to various data sources such as databases, monitoring services, etc.</li>
        <li><strong>Alerting:</strong> Configuring alerts for timely response to events.</li>
        <li><strong>Advanced Dashboards:</strong> Built-in and the ability to create complex and advanced dashboards.</li>
      </ul>
      <p>
        <strong>Main Advantages of Grafana:</strong>
      </p>
      <ul>
        <li><strong>Flexibility and Extensibility:</strong> Ability to adapt and extend using various plugins and data sources.</li>
        <li><strong>Large Community:</strong> Active community of users and developers.</li>
        <li><strong>Ease of Use:</strong> Intuitive interface for quick setup and data visualization.</li>
      </ul>
      <p>
        <strong>Grafana Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default GrafanaModalContent;
