import React from 'react';

const TCLModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        TCL (Tool Command Language) - це інтерпретована мова програмування, яка використовується для створення скриптів, автоматизації завдань та розширення функціоналу програмного забезпечення. Її також часто використовують як мову конфігурації для різних програм.
      </p>
      <p>
        <strong>Застосування TCL:</strong>
      </p>
      <ul>
        <li><strong>Скриптована автоматизація:</strong> TCL використовується для написання скриптів для автоматизації рутинних завдань.</li>
        <li><strong>Вбудовані скрипти в програми:</strong> Мова часто використовується для створення вбудованих скриптів у програмах.</li>
        <li><strong>Інтерфейси користувача:</strong> TCL може бути використаний для створення графічних та текстових інтерфейсів користувача.</li>
        <li><strong>Системи управління конфігурацією:</strong> Вона часто використовується як мова конфігурації для різних програмних систем.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        TCL є ефективним інструментом для написання скриптів та розширення функціоналу програмного забезпечення.
      </p>
      <p>
        <strong>Де Вчити TCL:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація TCL:</strong> <a href="https://www.tcl.tk/doc/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>TCL Documentation</a></li>
      </ul>
      <p>
        <strong>Особливості TCL:</strong>
      </p>
      <ul>
        <li><strong>Простий синтаксис:</strong> TCL відзначається легким вивченням та зрозумілим синтаксисом.</li>
        <li><strong>Широкі можливості:</strong> Вона підтримує різні структури даних та функції для обробки тексту.</li>
        <li><strong>Інтеграція з програмами:</strong> TCL легко інтегрується з іншими мовами та програмами.</li>
      </ul>
      <p>
        TCL - це відмінний вибір для написання скриптів та автоматизації завдань в різних програмах.
      </p>
    </>
  ) : (
    <>
      <p>
        TCL (Tool Command Language) is an interpreted programming language used for scripting, task automation, and extending the functionality of software. It is also commonly used as a configuration language for various programs.
      </p>
      <p>
        <strong>Applications of TCL:</strong>
      </p>
      <ul>
        <li><strong>Scripted Automation:</strong> TCL is used to write scripts for automating routine tasks.</li>
        <li><strong>Embedded Scripts in Programs:</strong> The language is often used for creating embedded scripts in applications.</li>
        <li><strong>User Interfaces:</strong> TCL can be used to create graphical and text-based user interfaces.</li>
        <li><strong>Configuration Management Systems:</strong> It is frequently used as a configuration language for various software systems.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        TCL is an effective tool for scripting and extending the functionality of software.
      </p>
      <p>
        <strong>Where to Learn TCL:</strong>
      </p>
      <ul>
        <li><strong>Official TCL Documentation:</strong> <a href="https://www.tcl.tk/doc/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>TCL Documentation</a></li>
        
      </ul>   
      <p>
        <strong>Features of TCL:</strong>
      </p>
      <ul>
        <li><strong>Simple Syntax:</strong> TCL is known for its easy-to-learn and straightforward syntax.</li>
        <li><strong>Wide Capabilities:</strong> It supports various data structures and functions for text processing.</li>
        <li><strong>Integration with Programs:</strong> TCL easily integrates with other languages and programs.</li>
      </ul>
      <p>
        TCL is an excellent choice for scripting and automating tasks in various applications.
      </p>
    </>
  );

  return content;
};

export default TCLModalContent;
