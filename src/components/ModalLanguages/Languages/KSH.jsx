import React from 'react';

const KSHModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Korn Shell (ksh) - це командний інтерпретатор та мова програмування для Unix-подібних операційних систем. Вона включає в себе ряд корисних функцій та можливостей для автоматизації завдань у командному середовищі.
      </p>
      <p>
        <strong>Застосування Korn Shell:</strong>
      </p>
      <ul>
        <li><strong>Автоматизація Завдань:</strong> Korn Shell використовується для написання скриптів для автоматизації рутинних завдань.</li>
        <li><strong>Командний Інтерпретатор:</strong> Вона є потужним інтерпретатором команд, зручним для використання в командному рядку.</li>
        <li><strong>Сценарії Оболонки:</strong> Мова дозволяє створювати скрипти оболонки для виконання послідовності команд.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Korn Shell є важливим інструментом для автоматизації завдань та роботи з командним інтерфейсом в Unix-подібних системах.
      </p>
      <p>
        <strong>Де Вчити Korn Shell:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Korn Shell:</strong> <a href="http://www.kornshell.com/doc/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Korn Shell Documentation</a></li>
      </ul>
      <p>
        <strong>Особливості Korn Shell:</strong>
      </p>
      <ul>
        <li><strong>Потужний Інтерпретатор Команд:</strong> Korn Shell має багатий набір функцій для роботи з командами.</li>
        <li><strong>Автоматизація Завдань:</strong> Вона дозволяє створювати скрипти для автоматизації рутинних завдань.</li>
        <li><strong>Вбудовані Функції:</strong> Мова містить в собі численні вбудовані функції для обробки файлів, рядків тощо.</li>
      </ul>
      <p>
        Korn Shell - це потужний інструмент для роботи з командним інтерфейсом в Unix-системах та автоматизації завдань.
      </p>
    </>
  ) : (
    <>
      <p>
        Korn Shell (ksh) is a command interpreter and programming language for Unix-like operating systems. It includes a set of useful features and capabilities for automating tasks within a command-line environment.
      </p>
      <p>
        <strong>Applications of Korn Shell:</strong>
      </p>
      <ul>
        <li><strong>Task Automation:</strong> Korn Shell is used for scripting to automate routine tasks.</li>
        <li><strong>Command Interpreter:</strong> It is a powerful command interpreter convenient for use in the command line.</li>
        <li><strong>Shell Scripts:</strong> The language allows creating shell scripts to execute a sequence of commands.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Korn Shell is an essential tool for task automation and working with the command-line interface in Unix-like systems.
      </p>
      <p>
        <strong>Where to Learn Korn Shell:</strong>
      </p>
      <ul>
        <li><strong>Official Korn Shell Documentation:</strong> <a href="http://www.kornshell.com/doc/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Korn Shell Documentation</a></li>
      </ul>
      <p>
        <strong>Features of Korn Shell:</strong>
      </p>
      <ul>
        <li><strong>Powerful Command Interpreter:</strong> Korn Shell has a rich set of features for working with commands.</li>
        <li><strong>Task Automation:</strong> It allows creating scripts for automating routine tasks.</li>
        <li><strong>Built-in Functions:</strong> The language includes numerous built-in functions for file handling, string manipulation, and more.</li>
      </ul>
      <p>
        Korn Shell is a powerful tool for working with the command-line interface in Unix systems and automating tasks.
      </p>
    </>
  );

  return content;
};

export default KSHModalContent;
