import React from 'react';

const GoModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Go (або Golang) - це компільована мова програмування, розроблена компанією Google. Вона вирізняється ефективністю, простотою синтаксису та широкою застосовуваністю в сферах розробки серверів, мережевих додатків та хмарних сервісів.
      </p>
      <p>
        <strong>Застосування Go:</strong>
      </p>
      <ul>
        <li><strong>Серверна розробка:</strong> Go використовується для створення надійних та швидких серверів.</li>
        <li><strong>Мережеві додатки:</strong> Мова чудово підходить для розробки мережевих програм і веб-сервісів.</li>
        <li><strong>Хмарні сервіси:</strong> Go широко використовується в хмарних сервісах та інфраструктурі DevOps.</li>
        <li><strong>Розробка мікросервісів:</strong> Go добре підходить для створення мікросервісної архітектури.</li>
      </ul>
      <p>
        <strong>Місце в світі програмування:</strong>
      </p>
      <p>
        Go відзначається своєю швидкістю та ефективністю, а його простий синтаксис робить його привабливим для багатьох розробників.
      </p>
      <p>
        <strong>Де вчити Go:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Go:</strong> <a href="https://golang.org/doc/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Go Documentation</a></li>
        <li><strong>Курси на платформі Coursera:</strong> <a href="https://www.coursera.org/search?query=go&" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Getting Started with Go</a></li>
      </ul>
      <p>
        <strong>Особливості Go:</strong>
      </p>
      <ul>
        <li><strong>Компіляція в один бінарний файл:</strong> Go компілюється в один бінарний файл, що полегшує розповсюдження та виконання програми.</li>
        <li><strong>Ефективна робота з пам'яттю:</strong> Мова використовує ефективні механізми роботи з пам'яттю, що робить її популярною для високопродуктивних застосувань.</li>
        <li><strong>Гарантована конкурентність:</strong> Go має вбудовану підтримку конкурентності, що полегшує роботу з паралельним виконанням коду.</li>
      </ul>
      <p>
        Go - це мова програмування, спроектована для оптимізації розробки великих та розподілених систем.
      </p>
    </>
  ) : (
    <>
      <p>
        Go (or Golang) is a compiled programming language developed by Google. It is known for its efficiency, simple syntax, and widespread use in server-side development, networking applications, and cloud services.
      </p>
      <p>
        <strong>Applications of Go:</strong>
      </p>
      <ul>
        <li><strong>Server-side Development:</strong> Go is used to create reliable and fast servers.</li>
        <li><strong>Networking Applications:</strong> The language is excellent for developing networking programs and web services.</li>
        <li><strong>Cloud Services:</strong> Go is widely used in cloud services and DevOps infrastructure.</li>
        <li><strong>Microservices Development:</strong> Go is well-suited for creating microservices architecture.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Go is characterized by its speed and efficiency, and its simple syntax makes it attractive to many developers.
      </p>
      <p>
        <strong>Where to Learn Go:</strong>
      </p>
      <ul>
        <li><strong>Official Go Documentation:</strong> <a href="https://golang.org/doc/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Go Documentation</a></li>
        <li><strong>Courses on Coursera:</strong> <a href="https://www.coursera.org/search?query=go&" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Getting Started with Go</a></li>
      </ul>
      <p>
        <strong>Features of Go:</strong>
      </p>
      <ul>
        <li><strong>Single Binary Compilation:</strong> Go compiles into a single binary file, making it easy to distribute and execute the program.</li>
        <li><strong>Efficient Memory Management:</strong> The language uses efficient memory management mechanisms, making it popular for high-performance applications.</li>
        <li><strong>Guaranteed Concurrency:</strong> Go has built-in support for concurrency, making it easy to work with parallel execution of code.</li>
      </ul>
      <p>
        Go is a programming language designed to optimize the development of large and distributed systems.
      </p>
    </>
  );

  return content;
};

export default GoModalContent;
