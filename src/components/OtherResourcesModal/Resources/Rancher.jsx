import React from 'react';

const RancherModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#0080FF",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://rancher.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Rancher
    </a>
  ) : (
    <a href="https://rancher.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Rancher Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Rancher - це відкритий фреймворк для управління контейнерами, який надає інструменти для розгортання та керування Kubernetes на будь-якому сервері.
      </p>
      <p>
        <strong>Основні функції Rancher:</strong>
      </p>
      <ul>
        <li><strong>Управління Контейнерами:</strong> Зручне керування контейнерами та їх оркестрація.</li>
        <li><strong>Підтримка Kubernetes:</strong> Можливість розгортання та управління Kubernetes на будь-якому сервері.</li>
        <li><strong>Керування Кластерами:</strong> Легке створення та керування кластерами контейнерів.</li>
        <li><strong>Моніторинг та Журналювання:</strong> Засоби моніторингу та запису подій для контейнерів.</li>
      </ul>
      <p>
        <strong>Основні переваги Rancher:</strong>
      </p>
      <ul>
        <li><strong>Просте Управління Kubernetes:</strong> Зручний інтерфейс для розгортання та керування Kubernetes.</li>
        <li><strong>Підтримка Будь-яких Серверів:</strong> Можливість використання на будь-яких серверах для розгортання контейнерів.</li>
        <li><strong>Розширені Функції Оркестрації:</strong> Додаткові можливості для керування та оркестрації контейнерів.</li>
      </ul>
      <p><strong>Сторінка Rancher:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Rancher - Container Management Framework</h2>
      <p>
        Rancher is an open-source framework for managing containers, providing tools for deploying and managing Kubernetes on any server.
      </p>
      <p>
        <strong>Key Features of Rancher:</strong>
      </p>
      <ul>
        <li><strong>Container Management:</strong> Convenient container management and orchestration.</li>
        <li><strong>Kubernetes Support:</strong> Ability to deploy and manage Kubernetes on any server.</li>
        <li><strong>Cluster Management:</strong> Easy creation and management of container clusters.</li>
        <li><strong>Monitoring and Logging:</strong> Monitoring tools and event logging for containers.</li>
      </ul>
      <p>
        <strong>Main Advantages of Rancher:</strong>
      </p>
      <ul>
        <li><strong>Easy Kubernetes Management:</strong> User-friendly interface for deploying and managing Kubernetes.</li>
        <li><strong>Support for Any Servers:</strong> Ability to use on any servers for container deployment.</li>
        <li><strong>Advanced Orchestration Features:</strong> Additional capabilities for managing and orchestrating containers.</li>
      </ul>
      <p><strong>Rancher Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default RancherModalContent;
