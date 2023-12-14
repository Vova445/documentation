import React from 'react';

const RustModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Rust - це мова програмування загального призначення, яка визначається своєю безпечністю, швидкістю та конкурентністю. Вона призначена для розробки ефективних та надійних системних програм, а також володіє сучасними можливостями, такими як безпечна конкурентність та управління пам'яттю.
      </p>
      <p>
        <strong>Застосування Rust:</strong>
      </p>
      <ul>
        <li><strong>Системне програмування:</strong> Rust використовується для створення ефективних та безпечних системних програм, таких як операційні системи, драйвери та вбудовані системи.</li>
        <li><strong>Вбудовані системи та IoT:</strong> Мова ідеально підходить для розробки програмного забезпечення для вбудованих систем та Інтернету речей (IoT).</li>
        <li><strong>Мережеве програмування:</strong> Rust може бути використана для створення надійних та швидких мережевих додатків.</li>
        <li><strong>Blockchain та криптовалюта:</strong> Мова добре підходить для розробки блокчейн-проектів та криптовалютних додатків.</li>
      </ul>
      <p>
        <strong>Місце в світі програмування:</strong>
      </p>
      <p>
        Rust визначається своєю метою надати розробникам потужний інструментарій для створення безпечного та ефективного програмного забезпечення.
      </p>
      <p>
        <strong>Де вчити Rust:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Rust:</strong> <a href="https://doc.rust-lang.org/book/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>The Rust Programming Language</a></li>
        <li><strong>Курси на платформі Udacity:</strong> <a href="https://www.udacity.com/course/rust-programming-nanodegree--nd9990" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Rust Programming Nanodegree</a></li>
      </ul>
      <p>
        <strong>Особливості Rust:</strong>
      </p>
      <ul>
        <li><strong>Безпечна конкурентність:</strong> Rust надає гарантії безпеки та уникнення багатьох типів помилок, пов'язаних з конкурентністю та пам'яттю.</li>
        <li><strong>Власний власник пам'яті:</strong> Власницька система пам'яті дозволяє досягти високої ефективності, уникаючи проблем, таких як витоки пам'яті.</li>
        <li><strong>Сучасний синтаксис:</strong> Rust використовує сучасний та зрозумілий синтаксис, який сприяє розробці чистого та читабельного коду.</li>
      </ul>
      <p>
        Rust - це інструмент для розробників, які шукають баланс між ефективністю та безпекою у своїх програмах.
      </p>
    </>
  ) : (
    <>
      <p>
        Rust is a general-purpose programming language known for its safety, speed, and concurrency. It is designed for developing efficient and reliable systems-level programs and features modern capabilities such as safe concurrency and memory management.
      </p>
      <p>
        <strong>Applications of Rust:</strong>
      </p>
      <ul>
        <li><strong>Systems Programming:</strong> Rust is used to create efficient and secure systems-level programs, such as operating systems, drivers, and embedded systems.</li>
        <li><strong>Embedded Systems and IoT:</strong> The language is ideal for developing software for embedded systems and the Internet of Things (IoT).</li>
        <li><strong>Network Programming:</strong> Rust can be used to create reliable and fast networked applications.</li>
        <li><strong>Blockchain and Cryptocurrency:</strong> The language is well-suited for developing blockchain projects and cryptocurrency applications.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Rust is defined by its goal to provide developers with a powerful toolkit for creating safe and efficient software.
      </p>
      <p>
        <strong>Where to Learn Rust:</strong>
      </p>
      <ul>
        <li><strong>Official Rust Documentation:</strong> <a href="https://doc.rust-lang.org/book/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>The Rust Programming Language</a></li>
        <li><strong>Courses on Udacity:</strong> <a href="https://www.udacity.com/course/rust-programming-nanodegree--nd9990" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Rust Programming Nanodegree</a></li>
      </ul>
      <p>
        <strong>Features of Rust:</strong>
      </p>
      <ul>
        <li><strong>Safe Concurrency:</strong> Rust provides guarantees of safety and avoids many types of errors related to concurrency and memory.</li>
        <li><strong>Ownership System:</strong> The ownership system allows achieving high efficiency while avoiding issues like memory leaks.</li>
        <li><strong>Modern Syntax:</strong> Rust uses a modern and understandable syntax, promoting the development of clean and readable code.</li>
      </ul>
      <p>
        Rust is a tool for developers seeking a balance between efficiency and safety in their programs.
      </p>
    </>
  );

  return content;
};

export default RustModalContent;
