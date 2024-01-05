import React from 'react';

const QuarkusModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "blue",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Quarkus - це сучасний, оптимізований для хмари фреймворк для розробки Java-додатків. Він відзначається надзвичайною
        швидкістю завантаження та низьким споживанням ресурсів.
      </p>
      <p>
        <strong>Основні принципи Quarkus:</strong>
      </p>
      <ul>
        <li><strong>Швидкість Завантаження:</strong> Quarkus розроблений для максимальної швидкості завантаження додатків.</li>
        <li><strong>Низьке Споживання Ресурсів:</strong> Фокус на оптимізації ресурсів та низькому використанні пам'яті.</li>
        <li><strong>Хмарна Оптимізація:</strong> Підтримка хмарної розробки та оптимізації для контейнерів.</li>
      </ul>
      <p>
        <strong>Основні концепції Quarkus:</strong>
      </p>
      <ul>
        <li><strong>Native Image Compilation:</strong> Можливість компіляції додатків в нативний код для ще більшої
          ефективності.</li>
        <li><strong>Extension Ecosystem:</strong> Велика кількість розширень для підтримки різних технологій.</li>
        <li><strong>Developer Joy:</strong> Зосередженість на простоті розробки та зручності для розробників.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Quarkus є відмінним вибором для розробників Java, які цінують швидкість, ефективність та оптимізацію для хмарних
        додатків.
      </p>
      <p>
        <strong>Де вчитися Quarkus:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Quarkus:</strong> <a href="https://quarkus.io/guides/"
            target="_blank" rel="noopener noreferrer" style={linkStyles}>Quarkus</a></li>
        <br></br>
      </ul>
    </>
  ) : (
    <>
      <h2>Quarkus Framework</h2>
      <p>
        Quarkus is a modern, cloud-optimized framework for developing Java applications. It stands out with extremely fast
        startup times and low resource consumption.
      </p>
      <p>
        <strong>Key Principles of Quarkus:</strong>
      </p>
      <ul>
        <li><strong>Fast Startup:</strong> Quarkus is designed for maximum application startup speed.</li>
        <li><strong>Low Resource Consumption:</strong> Focus on resource optimization and low memory usage.</li>
        <li><strong>Cloud Optimization:</strong> Support for cloud development and container optimization.</li>
      </ul>
      <p>
        <strong>Core Concepts of Quarkus:</strong>
      </p>
      <ul>
        <li><strong>Native Image Compilation:</strong> Ability to compile applications into native code for even greater
          efficiency.</li>
        <li><strong>Extension Ecosystem:</strong> A large number of extensions to support various technologies.</li>
        <li><strong>Developer Joy:</strong> Focus on development simplicity and convenience for developers.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Quarkus is an excellent choice for Java developers who value speed, efficiency, and optimization for cloud
        applications.
      </p>
      <p>
        <strong>Where to Learn Quarkus:</strong>
      </p>
      <ul>
        <li><strong>Official Quarkus Documentation:</strong> <a href="https://quarkus.io/guides/"
            target="_blank" rel="noopener noreferrer" style={linkStyles}>Quarkus</a></li>
        <br></br>
      </ul>
    </>
  );

  return content;
};

export default QuarkusModalContent;
