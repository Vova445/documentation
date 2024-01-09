import React from 'react';

const HardhatModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#2E2E2E",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Hardhat
    </a>
  ) : (
    <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Hardhat Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Hardhat - це інструмент для розробки, компіляції та розгортання смарт-контрактів для блокчейнів, заснованих на Ethereum.
        Він надає зручний набір інструментів для роботи з розумінням та розробкою децентралізованих додатків (DApps) на Ethereum.
      </p>
      <p>
        <strong>Основні функції Hardhat:</strong>
      </p>
      <ul>
        <li><strong>Розробка Смарт-Контрактів:</strong> Створення та розробка смарт-контрактів для Ethereum.</li>
        <li><strong>Тестування Контрактів:</strong> Можливість написання та запуску тестів для смарт-контрактів.</li>
        <li><strong>Сумісність з Ethereum:</strong> Взаємодія та розгортання на реальній мережі Ethereum.</li>
        <li><strong>Розширюваність:</strong> Додаткові плагіни та інструменти для розширення можливостей.</li>
      </ul>
      <p>
        <strong>Основні переваги Hardhat:</strong>
      </p>
      <ul>
        <li><strong>Можливості Розробки:</strong> Зручний набір інструментів для швидкої розробки смарт-контрактів.</li>
        <li><strong>Тестування:</strong> Інтегрована система тестування для перевірки правильності контрактів.</li>
        <li><strong>Сумісність з Ethereum:</strong> Легке взаємодіє з мережею Ethereum для розгортання контрактів.</li>
      </ul>
      <p>
        <strong>Сторінка Hardhat:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Hardhat</h2>
      <p>
        Hardhat is a development tool for building, compiling, and deploying smart contracts for Ethereum-based blockchains.
        It provides a convenient set of tools for working with the understanding and development of decentralized applications (DApps) on Ethereum.
      </p>
      <p>
        <strong>Key Features of Hardhat:</strong>
      </p>
      <ul>
        <li><strong>Smart Contract Development:</strong> Creation and development of smart contracts for Ethereum.</li>
        <li><strong>Contract Testing:</strong> Ability to write and run tests for smart contracts.</li>
        <li><strong>Ethereum Compatibility:</strong> Interaction and deployment on the Ethereum mainnet.</li>
        <li><strong>Extensibility:</strong> Additional plugins and tools for extending capabilities.</li>
      </ul>
      <p>
        <strong>Main Advantages of Hardhat:</strong>
      </p>
      <ul>
        <li><strong>Development Capabilities:</strong> Convenient toolset for rapid smart contract development.</li>
        <li><strong>Testing:</strong> Integrated testing system to verify the correctness of contracts.</li>
        <li><strong>Ethereum Compatibility:</strong> Easy interaction with the Ethereum network for contract deployment.</li>
      </ul>
      <p>
        <strong>Hardhat Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default HardhatModalContent;
