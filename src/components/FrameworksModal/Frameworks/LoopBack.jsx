import React from 'react';

const LoopBackModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#3398EA",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        LoopBack - це відкритий фреймворк для розробки серверних додатків та RESTful API, побудований на мові програмування JavaScript.
      </p>
      <p>
        <strong>Основні принципи LoopBack:</strong>
      </p>
      <ul>
        <li><strong>Швидкість розробки:</strong> LoopBack надає інструменти для швидкої розробки серверних додатків та API.</li>
        <li><strong>Модель даних:</strong> Використання моделей для опису та взаємодії з даними в базі даних.</li>
        <li><strong>Стратегія розробки API:</strong> Підтримка стратегій для створення потужних та гнучких API.</li>
      </ul>
      <p>
        <strong>Основні концепції LoopBack:</strong>
      </p>
      <ul>
        <li><strong>Моделі:</strong> Визначення даних та їх взаємодія за допомогою моделей.</li>
        <li><strong>Джерела даних:</strong> Підключення та використання різних джерел даних.</li>
        <li><strong>Контролери:</strong> Обробка запитів та визначення бізнес-логіки.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        LoopBack підходить для швидкої розробки серверних додатків та API на базі мови програмування JavaScript.
      </p>
      <p>
        <strong>Де вчитися LoopBack:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація LoopBack:</strong> <a href="https://loopback.io/doc/en/lb4/" target="_blank" rel="noopener noreferrer" style={linkStyles}>LoopBack</a></li>
        <br></br>
        <li><strong>Приклади та Ресурси:</strong> <a href="https://github.com/strongloop/loopback-next" target="_blank" rel="noopener noreferrer" style={linkStyles}>LoopBack GitHub</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>LoopBack Framework</h2>
      <p>
        LoopBack is an open-source framework for building server applications and RESTful APIs, built on the JavaScript programming language.
      </p>
      <p>
        <strong>Key Principles of LoopBack:</strong>
      </p>
      <ul>
        <li><strong>Rapid Development:</strong> LoopBack provides tools for quickly developing server applications and APIs.</li>
        <li><strong>Data Modeling:</strong> Use models to describe and interact with data in the database.</li>
        <li><strong>API Development Strategy:</strong> Support for strategies to create powerful and flexible APIs.</li>
      </ul>
      <p>
        <strong>Core Concepts of LoopBack:</strong>
      </p>
      <ul>
        <li><strong>Models:</strong> Define data and their interaction using models.</li>
        <li><strong>Data Sources:</strong> Connect and use different data sources.</li>
        <li><strong>Controllers:</strong> Handle requests and define business logic.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        LoopBack is suitable for rapid development of server applications and APIs based on the JavaScript programming language.
      </p>
      <p>
        <strong>Where to Learn LoopBack:</strong>
      </p>
      <ul>
        <li><strong>Official LoopBack Documentation:</strong> <a href="https://loopback.io/doc/en/lb4/" target="_blank" rel="noopener noreferrer" style={linkStyles}>LoopBack</a></li>
        <br></br>
        <li><strong>Examples and Resources:</strong> <a href="https://github.com/strongloop/loopback-next" target="_blank" rel="noopener noreferrer" style={linkStyles}>LoopBack GitHub</a></li>
      </ul>
    </>
  );

  return content;
};

export default LoopBackModalContent;
