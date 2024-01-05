import React from 'react';

const MicronautModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Micronaut - це сучасний фреймворк для розробки мікросервісних та облакових додатків на мові програмування Java,
        Kotlin і Groovy.
      </p>
      <p>
        <strong>Основні принципи Micronaut:</strong>
      </p>
      <ul>
        <li><strong>Швидкість та Низьке Споживання Пам'яті:</strong> Micronaut дозволяє створювати додатки з вражаючою
          швидкістю завантаження та ефективним використанням пам'яті.</li>
        <li><strong>Система Конфігурації:</strong> Можливість налаштовувати додатки зручно та без зайвого коду.</li>
        <li><strong>Реактивність:</strong> Підтримка реактивного програмування для створення високопродуктивних додатків.</li>
      </ul>
      <p>
        <strong>Основні концепції Micronaut:</strong>
      </p>
      <ul>
        <li><strong>Dependency Injection:</strong> Вбудована система ін'єкції залежностей для ефективного управління
          компонентами.</li>
        <li><strong>Анотації та Метапрограмування:</strong> Використання анотацій та метапрограмування для зручної розробки.</li>
        <li><strong>Integrations:</strong> Широкий вибір інтеграцій із популярними технологіями.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Micronaut є відмінним вибором для розробників Java, Kotlin і Groovy, які цінують продуктивність та ефективність в
        мікросервісному та облачному середовищі.
      </p>
      <p>
        <strong>Де вчитися Micronaut:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Micronaut:</strong> <a href="https://docs.micronaut.io/latest/guide/"
            target="_blank" rel="noopener noreferrer" style={linkStyles}>Micronaut</a></li>
        <br></br>
        <li><strong>Офіційна сторінка Micronaut:</strong> <a
            href="https://micronaut.io/" target="_blank" rel="noopener noreferrer"
            style={linkStyles}>Micronaut</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Micronaut Framework</h2>
      <p>
        Micronaut is a modern framework for developing microservices and cloud-native applications in Java, Kotlin, and
        Groovy.
      </p>
      <p>
        <strong>Key Principles of Micronaut:</strong>
      </p>
      <ul>
        <li><strong>Speed and Low Memory Consumption:</strong> Micronaut enables the creation of applications with
          impressive startup speed and efficient memory usage.</li>
        <li><strong>Configuration System:</strong> Ability to configure applications conveniently and without unnecessary
          code.</li>
        <li><strong>Reactivity:</strong> Support for reactive programming to create highly productive applications.</li>
      </ul>
      <p>
        <strong>Core Concepts of Micronaut:</strong>
      </p>
      <ul>
        <li><strong>Dependency Injection:</strong> Built-in dependency injection system for efficient component
          management.</li>
        <li><strong>Annotations and Metaprogramming:</strong> Use of annotations and metaprogramming for convenient
          development.</li>
        <li><strong>Integrations:</strong> Wide range of integrations with popular technologies.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Micronaut is an excellent choice for Java, Kotlin, and Groovy developers who value productivity and efficiency in
        the microservices and cloud-native environment.
      </p>
      <p>
        <strong>Where to Learn Micronaut:</strong>
      </p>
      <ul>
        <li><strong>Official Micronaut Documentation:</strong> <a href="https://docs.micronaut.io/latest/guide/"
            target="_blank" rel="noopener noreferrer" style={linkStyles}>Micronaut</a></li>
        <br></br>
        <li><strong>Official Micronaut:</strong> <a
            href="https://micronaut.io/" target="_blank" rel="noopener noreferrer"
            style={linkStyles}>Micronaut</a></li>
      </ul>
    </>
  );

  return content;
};

export default MicronautModalContent;
