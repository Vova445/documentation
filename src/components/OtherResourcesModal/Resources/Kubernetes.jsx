import React from 'react';

const KubernetesModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#326CE5",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Kubernetes
    </a>
  ) : (
    <a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Kubernetes Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Kubernetes - це відкрита система автоматизації розгортання, масштабування та управління контейнеризованими додатками.
      </p>
      <p>
        <strong>Основні функції Kubernetes:</strong>
      </p>
      <ul>
        <li><strong>Оркестрація Контейнерів:</strong> Автоматизоване розгортання та керування контейнерами.</li>
        <li><strong>Скелетон Системи:</strong> Забезпечує загальну структуру та функціональність системи.</li>
        <li><strong>Самовідновлення:</strong> Здатність виявлення та відновлення стану системи в разі відмови чи помилки.</li>
        <li><strong>Масштабування:</strong> Зручне горизонтальне масштабування додатків.</li>
      </ul>
      <p>
        <strong>Основні переваги Kubernetes:</strong>
      </p>
      <ul>
        <li><strong>Відкритий Закритий Код:</strong> Повністю відкритий за кодом проект з активною спільнотою.</li>
        <li><strong>Спрощена Автоматизація:</strong> Забезпечує ефективне керування контейнерами та додатками.</li>
        <li><strong>Самовідновлення:</strong> Здатність автоматично відновлювати роботу системи.</li>
      </ul>
      <p><strong>Сторінка Kubernetes:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Kubernetes</h2>
      <p>
        Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.
      </p>
      <p>
        <strong>Key Features of Kubernetes:</strong>
      </p>
      <ul>
        <li><strong>Container Orchestration:</strong> Automated deployment and management of containers.</li>
        <li><strong>System Skeleton:</strong> Provides the overall structure and functionality of the system.</li>
        <li><strong>Self-Healing:</strong> Ability to detect and recover from system failures or errors.</li>
        <li><strong>Scalability:</strong> Convenient horizontal scaling of applications.</li>
      </ul>
      <p>
        <strong>Main Advantages of Kubernetes:</strong>
      </p>
      <ul>
        <li><strong>Open Source:</strong> Fully open-source project with an active community.</li>
        <li><strong>Simplified Automation:</strong> Efficiently manages containers and applications.</li>
        <li><strong>Self-Healing:</strong> Ability to automatically recover from system failures.</li>
      </ul>
      <p><strong>Kubernetes Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default KubernetesModalContent;
