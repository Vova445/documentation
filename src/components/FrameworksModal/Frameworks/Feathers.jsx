import React from 'react';

const FeathersModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#6F4C87",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Feathers - це веб-фреймворк для побудови розподілених додатків в реальному часі, який спрощує розробку API та взаємодію з базами даних.
      </p>
      <p>
        <strong>Основні принципи Feathers:</strong>
      </p>
      <ul>
        <li><strong>Розподілений:</strong> Feathers дозволяє створювати розподілені додатки, що взаємодіють з різними сервісами.</li>
        <li><strong>Реальний час:</strong> Надає можливості роботи в реальному часі завдяки використанню WebSocket та інших технологій.</li>
        <li><strong>Модульний підхід:</strong> Використовує модульну структуру для полегшення розширення та підтримки різних функціональностей.</li>
      </ul>
      <p>
        <strong>Основні концепції Feathers:</strong>
      </p>
      <ul>
        <li><strong>Сервіси:</strong> Організація функціоналу додатка за допомогою сервісів, які взаємодіють з базою даних.</li>
        <li><strong>Хуки:</strong> Використання хуків для обробки та трансформації даних під час їх обробки сервісами.</li>
        <li><strong>Middleware:</strong> Вбудована підтримка middleware для розширення функціоналу додатка.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Feathers підходить для розробки розподілених додатків в реальному часі з використанням модульного підходу та підтримки WebSocket.
      </p>
      <p>
        <strong>Де вчитися Feathers:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Feathers:</strong> <a href="https://docs.feathersjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Feathers</a></li>
        <br></br>
        </ul>
    </>
  ) : (
    <>
      <h2>Feathers Web Framework</h2>
      <p>
        Feathers is a web framework for building real-time distributed applications that simplifies API development and database interaction.
      </p>
      <p>
        <strong>Key Principles of Feathers:</strong>
      </p>
      <ul>
        <li><strong>Distributed:</strong> Feathers enables the creation of distributed applications that interact with various services.</li>
        <li><strong>Real-Time:</strong> Provides real-time capabilities through the use of WebSocket and other technologies.</li>
        <li><strong>Modular Approach:</strong> Utilizes a modular structure to facilitate extension and support for various functionalities.</li>
      </ul>
      <p>
        <strong>Core Concepts of Feathers:</strong>
      </p>
      <ul>
        <li><strong>Services:</strong> Organizes application functionality using services that interact with the database.</li>
        <li><strong>Hooks:</strong> Uses hooks to handle and transform data during processing by services.</li>
        <li><strong>Middleware:</strong> Built-in support for middleware to extend the functionality of the application.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Feathers is suitable for developing real-time distributed applications using a modular approach and WebSocket support.
      </p>
      <p>
        <strong>Where to Learn Feathers:</strong>
      </p>
      <ul>
        <li><strong>Official Feathers Documentation:</strong> <a href="https://docs.feathersjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Feathers</a></li>
        <br></br>
        </ul>
    </>
  );

  return content;
};

export default FeathersModalContent;
