import React from 'react';

const ClojureModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Clojure - це функціональна мова програмування, що працює на платформі Java. Вона ставить акцент на імутабельність даних та функціональному програмуванні, надаючи розширення Lisp для використання в сучасних додатках.
      </p>
      <p>
        <strong>Застосування Clojure:</strong>
      </p>
      <ul>
        <li><strong>Розробка Високопродуктивних Додатків:</strong> Clojure надає високий рівень абстракції та дозволяє розробляти ефективні та масштабовані програми.</li>
        <li><strong>Функціональне Програмування:</strong> Мова сприяє функціональному стилю програмування, де імутабельні дані та функції є центральними концепціями.</li>
        <li><strong>Інтеграція з Java:</strong> Clojure легко інтегрується з кодом, написаним на Java, використовуючи JVM.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Clojure стає все більш популярною серед розробників, які цінують функціональні підходи та працюють на платформі Java.
      </p>
      <p>
        <strong>Де Вчити Clojure:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Clojure:</strong> <a href="https://clojure.org/guides/getting_started" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>Clojure Documentation</a></li>
        <li><strong>ClojureDocs - Community-Powered Clojure Documentation:</strong> <a href="https://clojuredocs.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>ClojureDocs</a></li>
        <li><strong>Brave Clojure - Learn Clojure for the Brave and True:</strong> <a href="https://www.braveclojure.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>Brave Clojure</a></li>
      </ul>
      <p>
        <strong>Особливості Clojure:</strong>
      </p>
      <ul>
        <li><strong>Імутабельність Даних:</strong> Дані в Clojure зазвичай імутабельні, що сприяє створенню безпечних та ефективних програм.</li>
        <li><strong>Функціональні Структури Даних:</strong> Clojure надає багато вбудованих функціональних структур даних, таких як списки та мапи.</li>
        <li><strong>Спрощений Синтаксис:</strong> Як мова Lisp, Clojure має простий та зручний синтаксис для виразного програмування.</li>
      </ul>
      <p>
        Clojure - це мова програмування, що надає елегантні рішення для розробників, які цінують функціональні підходи та працюють на платформі Java.
      </p>
    </>
  ) : (
    <>
      <p>
        Clojure is a functional programming language that runs on the Java platform. It emphasizes data immutability and functional programming, providing a modern Lisp for use in contemporary applications.
      </p>
      <p>
        <strong>Applications of Clojure:</strong>
      </p>
      <ul>
        <li><strong>Development of High-Performance Applications:</strong> Clojure provides a high level of abstraction and enables the development of efficient and scalable programs.</li>
        <li><strong>Functional Programming:</strong> The language promotes a functional programming style, where immutable data and functions are central concepts.</li>
        <li><strong>Integration with Java:</strong> Clojure seamlessly integrates with code written in Java, using the JVM.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Clojure is becoming increasingly popular among developers who appreciate functional approaches and work on the Java platform.
      </p>
      <p>
        <strong>Where to Learn Clojure:</strong>
      </p>
      <ul>
        <li><strong>Official Clojure Documentation:</strong> <a href="https://clojure.org/guides/getting_started" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>Clojure Documentation</a></li>
        <li><strong>ClojureDocs - Community-Powered Clojure Documentation:</strong> <a href="https://clojuredocs.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>ClojureDocs</a></li>
        <li><strong>Brave Clojure - Learn Clojure for the Brave and True:</strong> <a href="https://www.braveclojure.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow' }}>Brave Clojure</a></li>
      </ul>
      <p>
        <strong>Features of Clojure:</strong>
      </p>
      <ul>
        <li><strong>Immutability of Data:</strong> Data in Clojure is typically immutable, promoting the creation of safe and efficient programs.</li>
        <li><strong>Functional Data Structures:</strong> Clojure provides many built-in functional data structures, such as lists and maps.</li>
        <li><strong>Simplified Syntax:</strong> As a Lisp language, Clojure has a simple and convenient syntax for expressive programming.</li>
      </ul>
      <p>
        Clojure is a programming language that offers elegant solutions for developers who appreciate functional approaches and work on the Java platform.
      </p>
    </>
  );

  return content;
};

export default ClojureModalContent;
