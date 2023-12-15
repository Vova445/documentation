import React from 'react';

const ErlangModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Erlang - це функціональна та конкурентна мова програмування, призначена для розробки розподілених та паралельних систем, таких як телекомунікаційні додатки та сервіси з високою доступністю.
      </p>
      <p>
        <strong>Застосування Erlang:</strong>
      </p>
      <ul>
        <li><strong>Телекомунікаційні Системи:</strong> Erlang широко використовується для розробки телекомунікаційних систем та обробки великої кількості одночасних з'єднань.</li>
        <li><strong>Системи З Високою Доступністю:</strong> Мова добре підходить для створення систем, які мають високий рівень доступності та відмовостійкості.</li>
        <li><strong>Паралельне Програмування:</strong> Erlang забезпечує легку реалізацію паралельних та конкурентних програм.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Erlang є популярним в галузях, де важлива паралельна обробка та висока доступність, таких як телекомунікаційні та веб-системи.
      </p>
      <p>
        <strong>Де Вчити Erlang:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Erlang:</strong> <a href="https://www.erlang.org/docs" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>Erlang Documentation</a></li>
        <li><strong>Learn You Some Erlang for Great Good!:</strong> <a href="https://learnyousomeerlang.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>Learn You Some Erlang</a></li>
      </ul>
      <p>
        <strong>Особливості Erlang:</strong>
      </p>
      <ul>
        <li><strong>Акторська Модель:</strong> Erlang використовує акторську модель, що сприяє паралельній обробці та конкурентності.</li>
        <li><strong>Вбудована Підтримка Розподілених Систем:</strong> Мова має вбудовану підтримку для розробки розподілених систем.</li>
        <li><strong>Гарантована Відмовостійкість:</strong> Erlang побудований з огляду на відмовостійкість та можливість живої заміни коду.</li>
      </ul>
      <p>
        Erlang - це потужний інструмент для розробки надійних та високопродуктивних розподілених систем.
      </p>
    </>
  ) : (
    <>
      <p>
        Erlang is a functional and concurrent programming language designed for developing distributed and parallel systems, such as telecommunications applications and highly available services.
      </p>
      <p>
        <strong>Applications of Erlang:</strong>
      </p>
      <ul>
        <li><strong>Telecommunications Systems:</strong> Erlang is widely used for developing telecommunications systems and handling a large number of concurrent connections.</li>
        <li><strong>Highly Available Systems:</strong> The language is well-suited for creating systems with high availability and fault tolerance.</li>
        <li><strong>Parallel Programming:</strong> Erlang provides easy implementation of parallel and concurrent programs.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Erlang is popular in fields where parallel processing and high availability are crucial, such as telecommunications and web systems.
      </p>
      <p>
        <strong>Where to Learn Erlang:</strong>
      </p>
      <ul>
        <li><strong>Official Erlang Documentation:</strong> <a href="https://www.erlang.org/docs" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>Erlang Documentation</a></li>
        <li><strong>Learn You Some Erlang for Great Good!:</strong> <a href="https://learnyousomeerlang.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>Learn You Some Erlang</a></li>
      </ul>
      <p>
        <strong>Features of Erlang:</strong>
      </p>
      <ul>
        <li><strong>Actor Model:</strong> Erlang uses the actor model, promoting parallel processing and concurrency.</li>
        <li><strong>Built-in Support for Distributed Systems:</strong> The language has built-in support for developing distributed systems.</li>
        <li><strong>Guaranteed Fault Tolerance:</strong> Erlang is built with a focus on fault tolerance and the ability for live code replacement.</li>
      </ul>
      <p>
        Erlang is a powerful tool for developing reliable and highly productive distributed systems.
      </p>
    </>
  );

  return content;
};

export default ErlangModalContent;
