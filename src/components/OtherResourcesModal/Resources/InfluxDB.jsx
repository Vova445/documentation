import React from 'react';

const InfluxDBModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#22ADF6",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.influxdata.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка InfluxDB
    </a>
  ) : (
    <a href="https://www.influxdata.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      InfluxDB Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        InfluxDB - це високоефективна та розширювана система управління часовими рядами (TSDB), яка використовується для
        зберігання, візуалізації та аналізу даних з часовими мітками, такими як вимірювання в реальному часі.
      </p>
      <p>
        <strong>Основні функції InfluxDB:</strong>
      </p>
      <ul>
        <li><strong>Часові Ряди:</strong> Зберігання даних з часовими мітками для вимірювань в реальному часі.</li>
        <li><strong>SQL-Подібний Запитовання:</strong> Зручний SQL-подібний мовний інтерфейс для взаємодії з даними.</li>
        <li><strong>Висока Швидкодія:</strong> Швидка вставка та витягання даних за часовими мітками.</li>
        <li><strong>Масштабованість:</strong> Здатність масштабуватися для обробки великого обсягу даних.</li>
      </ul>
      <p>
        <strong>Основні переваги InfluxDB:</strong>
      </p>
      <ul>
        <li><strong>Ефективність:</strong> Висока швидкодія та ефективність обробки часових рядів.</li>
        <li><strong>Зручний Інтерфейс:</strong> Простий SQL-подібний інтерфейс для роботи з даними.</li>
        <li><strong>Розширюваність:</strong> Здатність пристосовуватися до зростання обсягу даних.</li>
      </ul>
      <p>
        <strong>Сторінка InfluxDB:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>InfluxDB Time Series Database</h2>
      <p>
        InfluxDB is a high-performance, scalable time series database (TSDB) used for storing, visualizing, and analyzing
        timestamped data, such as real-time measurements.
      </p>
      <p>
        <strong>Key Features of InfluxDB:</strong>
      </p>
      <ul>
        <li><strong>Time Series:</strong> Storing timestamped data for real-time measurements.</li>
        <li><strong>SQL-Like Queries:</strong> Convenient SQL-like language interface for interacting with data.</li>
        <li><strong>High Speed:</strong> Fast insertion and retrieval of timestamped data.</li>
        <li><strong>Scalability:</strong> Ability to scale to handle large volumes of data.</li>
      </ul>
      <p>
        <strong>Main Advantages of InfluxDB:</strong>
      </p>
      <ul>
        <li><strong>Efficiency:</strong> High speed and efficient processing of time series data.</li>
        <li><strong>User-Friendly Interface:</strong> Simple SQL-like interface for working with data.</li>
        <li><strong>Scalability:</strong> Ability to adapt to the growth of data volume.</li>
      </ul>
      <p>
        <strong>InfluxDB Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default InfluxDBModalContent;
