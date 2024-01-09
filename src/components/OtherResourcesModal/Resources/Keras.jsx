import React from 'react';

const KerasModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#D00000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://keras.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Keras
    </a>
  ) : (
    <a href="https://keras.io/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Keras Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Keras - це високорівневий інтерфейс для роботи з нейронними мережами, який працює поверх бібліотек таких як TensorFlow та Theano.
      </p>
      <p>
        <strong>Основні функції Keras:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Легко створювати та навчати нейронні мережі навіть без глибоких знань зі специфікації.</li>
        <li><strong>Модульність:</strong> Модульна структура дозволяє швидко створювати та розширювати складні моделі.</li>
        <li><strong>Підтримка Різних Бекендів:</strong> Підтримує різні бекенди, такі як TensorFlow та Theano.</li>
        <li><strong>Інтеграція з TensorFlow:</strong> Забезпечує використання всіх можливостей TensorFlow під капотом.</li>
      </ul>
      <p>
        <strong>Основні переваги Keras:</strong>
      </p>
      <ul>
        <li><strong>Високорівневий Інтерфейс:</strong> Простий та легкий в освоєнні високорівневий інтерфейс для роботи з нейронними мережами.</li>
        <li><strong>Модульність:</strong> Можливість легко створювати та розширювати складні моделі.</li>
        <li><strong>Висока Продуктивність:</strong> Швидкість навчання та інференції завдяки використанню потужних бекендів.</li>
      </ul>
      <p><strong>Сторінка Keras:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Keras High-Level API</h2>
      <p>
        Keras is a high-level interface for working with neural networks, operating on top of libraries such as TensorFlow and Theano.
      </p>
      <p>
        <strong>Key Features of Keras:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Easily create and train neural networks even without in-depth knowledge of specifications.</li>
        <li><strong>Modularity:</strong> Modular structure allows for quickly building and extending complex models.</li>
        <li><strong>Support for Various Backends:</strong> Supports various backends such as TensorFlow and Theano.</li>
        <li><strong>Integration with TensorFlow:</strong> Provides the ability to leverage all the capabilities of TensorFlow under the hood.</li>
      </ul>
      <p>
        <strong>Main Advantages of Keras:</strong>
      </p>
      <ul>
        <li><strong>High-Level Interface:</strong> Simple and easy-to-learn high-level interface for working with neural networks.</li>
        <li><strong>Modularity:</strong> Ability to easily create and extend complex models.</li>
        <li><strong>High Performance:</strong> Fast training and inference speeds due to the use of powerful backends.</li>
      </ul>
      <p><strong>Keras Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default KerasModalContent;
