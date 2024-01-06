import React from 'react';

const RxJSModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FF0000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        RxJS - це бібліотека для реактивного програмування в мові JavaScript. Вона надає потужні інструменти для роботи з асинхронним кодом та подіями.
      </p>
      <p>
        <strong>Основні концепції RxJS:</strong>
      </p>
      <ul>
        <li><strong>Observable (Спостережуваний):</strong> Представляє послідовність подій чи значень, яку можна споживати.</li>
        <li><strong>Observer (Спостерігач):</strong> Приймає та обробляє значення чи події, випущені Observable.</li>
        <li><strong>Operators (Оператори):</strong> Функції для обробки та трансформації значень в Observable-потоках.</li>
        <li><strong>Subscription (Підписка):</strong> Використовується для відписки від Observable та очищення ресурсів.</li>
      </ul>
      <p>
        <strong>Основні переваги RxJS:</strong>
      </p>
      <ul>
        <li><strong>Асинхронність та Події:</strong> Ефективне вирішення проблем асинхронного коду та обробки подій.</li>
        <li><strong>Композиція та Модульність:</strong> Легко комбінувати та модулізувати функціонал за допомогою операторів.</li>
        <li><strong>Управління Пам'яттю:</strong> Добре керований цикл життя та пам'ять під час роботи з асинхронним кодом.</li>
      </ul>
      <p>
        <strong>Де Вчитися RxJS:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація RxJS:</strong> <a href="https://rxjs.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>RxJS Docs</a></li>
        <br></br>
        <li><strong>RxJS в 5 хвилин:</strong> <a href="https://rxjs.dev/guide/overview" target="_blank" rel="noopener noreferrer" style={linkStyles}>RxJS in 5 Minutes</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>RxJS Library</h2>
      <p>
        RxJS is a library for reactive programming in the JavaScript language. It provides powerful tools for working with asynchronous code and events.
      </p>
      <p>
        <strong>Key Concepts of RxJS:</strong>
      </p>
      <ul>
        <li><strong>Observable:</strong> Represents a sequence of events or values that can be consumed.</li>
        <li><strong>Observer:</strong> Receives and processes values or events emitted by an Observable.</li>
        <li><strong>Operators:</strong> Functions for processing and transforming values in Observable streams.</li>
        <li><strong>Subscription:</strong> Used to unsubscribe from an Observable and clean up resources.</li>
      </ul>
      <p>
        <strong>Main Advantages of RxJS:</strong>
      </p>
      <ul>
        <li><strong>Asynchrony and Events:</strong> Efficiently solves issues with asynchronous code and event handling.</li>
        <li><strong>Composition and Modularity:</strong> Easily combine and modularize functionality using operators.</li>
        <li><strong>Memory Management:</strong> Well-managed lifecycle and memory when working with asynchronous code.</li>
      </ul>
      <p>
        <strong>Where to Learn RxJS:</strong>
      </p>
      <ul>
        <li><strong>Official RxJS Documentation:</strong> <a href="https://rxjs.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>RxJS Docs</a></li>
        <br></br>
        <li><strong>RxJS in 5 Minutes:</strong> <a href="https://rxjs.dev/guide/overview" target="_blank" rel="noopener noreferrer" style={linkStyles}>RxJS in 5 Minutes</a></li>
      </ul>
    </>
  );

  return content;
};

export default RxJSModalContent;
