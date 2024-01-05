import React from 'react';

const AureliaModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "violet",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Aurelia - це сучасний фреймворк для розробки веб-додатків на основі JavaScript та TypeScript. Він вирізняється
        простотою, гнучкістю та високою продуктивністю розробки.
      </p>
      <p>
        <strong>Основні принципи Aurelia:</strong>
      </p>
      <ul>
        <li><strong>Двіжучі Засади:</strong> Проект розробляється на основі двох принципів - універсальності та
          доповнюваності.</li>
        <li><strong>Легкість Використання:</strong> Aurelia пропонує простий API та мінімальну кількість абстракцій для
          забезпечення зручності розробки.</li>
        <li><strong>Архітектурна Гнучкість:</strong> Можливість вибору окремих компонентів для використання без
          зобов'язання використовувати весь фреймворк.</li>
      </ul>
      <p>
        <strong>Основні концепції Aurelia:</strong>
      </p>
      <ul>
        <li><strong>Компоненти:</strong> Використання компонентів для структуризації та повторного використання коду.</li>
        <li><strong>Зв'язування Даних:</strong> Механізм автоматичного оновлення інтерфейсу користувача при зміні
          даних.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Aurelia ідеально підходить для розробки веб-додатків, які вимагають високої продуктивності та елегантності коду.
      </p>
      <p>
        <strong>Де вчитися Aurelia:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Aurelia:</strong> <a href="https://aurelia.io/docs" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Aurelia</a></li>
        <br></br>
        <li><strong>Відеоуроки та Приклади:</strong> <a href="https://aurelia.io/learn" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Aurelia Learn</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Aurelia Framework</h2>
      <p>
        Aurelia is a modern JavaScript and TypeScript framework for building web applications. It stands out for its
        simplicity, flexibility, and high development productivity.
      </p>
      <p>
        <strong>Key Principles of Aurelia:</strong>
      </p>
      <ul>
        <li><strong>Moving Principles:</strong> The project is developed based on two principles - universality and
          extensibility.</li>
        <li><strong>Ease of Use:</strong> Aurelia offers a simple API and a minimal number of abstractions to ensure
          development convenience.</li>
        <li><strong>Architectural Flexibility:</strong> The ability to choose individual components for use without
          committing to using the entire framework.</li>
      </ul>
      <p>
        <strong>Core Concepts of Aurelia:</strong>
      </p>
      <ul>
        <li><strong>Components:</strong> Use of components for structuring and reusing code.</li>
        <li><strong>Data Binding:</strong> Mechanism for automatically updating the user interface when data changes.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Aurelia is ideal for developing web applications that require high productivity and elegant code.
      </p>
      <p>
        <strong>Where to Learn Aurelia:</strong>
      </p>
      <ul>
        <li><strong>Official Aurelia Documentation:</strong> <a href="https://aurelia.io/docs" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Aurelia</a></li>
        <br></br>
        <li><strong>Video Tutorials and Examples:</strong> <a href="https://aurelia.io/learn" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Aurelia Learn</a></li>
      </ul>
    </>
  );

  return content;
};

export default AureliaModalContent;
