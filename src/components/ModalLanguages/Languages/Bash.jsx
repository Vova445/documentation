import React from 'react';

const BashModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Bash - це командний інтерпретатор та мова програмування, що широко використовується в Unix-подібних операційних системах. Він надає користувачам потужний інструмент для взаємодії з операційною системою та автоматизації різних завдань.
      </p>
      <p>
        <strong>Застосування Bash:</strong>
      </p>
      <ul>
        <li><strong>Командний Інтерпретатор:</strong> Bash є стандартним командним інтерпретатором для Unix-подібних систем, що дозволяє введення команд та виконання їх.</li>
        <li><strong>Сценарії Оболонки:</strong> Використовується для написання сценаріїв оболонки для автоматизації послідовностей команд.</li>
        <li><strong>Системні Сценарії:</strong> Bash дозволяє створювати скрипти для автоматизації системних завдань.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Bash є невід'ємною частиною програмування в Unix-подібних середовищах та використовується для розв'язання різноманітних задач.
      </p>
      <p>
        <strong>Де Вчити Bash:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Bash:</strong> <a href="https://www.gnu.org/software/bash/manual/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Bash Documentation</a></li>
        <li><strong>Онлайн Ресурси:</strong> <a href="https://www.learnshell.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Learn Shell</a></li>
      </ul>
      <p>
        <strong>Особливості Bash:</strong>
      </p>
      <ul>
        <li><strong>Командний Інтерпретатор:</strong> Bash взаємодіє з користувачем через командний рядок.</li>
        <li><strong>Змінні та Оператори:</strong> Включає в себе систему змінних та операторів для роботи з даними.</li>
        <li><strong>Умови та Цикли:</strong> Підтримує умови та цикли для створення складних сценаріїв.</li>
      </ul>
      <p>
        Bash - це потужний інструмент для взаємодії з операційною системою та автоматизації завдань в Unix-подібних середовищах.
      </p>
    </>
  ) : (
    <>
      <p>
        Bash is a command interpreter and programming language widely used in Unix-like operating systems. It provides users with a powerful tool for interacting with the operating system and automating various tasks.
      </p>
      <p>
        <strong>Applications of Bash:</strong>
      </p>
      <ul>
        <li><strong>Command Interpreter:</strong> Bash is the standard command interpreter for Unix-like systems, allowing users to input commands and execute them.</li>
        <li><strong>Shell Scripts:</strong> Used for writing shell scripts to automate sequences of commands.</li>
        <li><strong>System Scripts:</strong> Bash allows creating scripts for automating system tasks.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Bash is an integral part of programming in Unix-like environments and is used to solve various tasks.
      </p>
      <p>
        <strong>Where to Learn Bash:</strong>
      </p>
      <ul>
        <li><strong>Official Bash Documentation:</strong> <a href="https://www.gnu.org/software/bash/manual/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Bash Documentation</a></li>
        <li><strong>Online Resources:</strong> <a href="https://www.learnshell.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Learn Shell</a></li>
      </ul>
      <p>
        <strong>Features of Bash:</strong>
      </p>
      <ul>
        <li><strong>Command Interpreter:</strong> Bash interacts with the user through the command line.</li>
        <li><strong>Variables and Operators:</strong> Includes a system of variables and operators for working with data.</li>
        <li><strong>Conditions and Loops:</strong> Supports conditions and loops for creating complex scripts.</li>
      </ul>
      <p>
        Bash is a powerful tool for interacting with the operating system and automating tasks in Unix-like environments.
      </p>
    </>
  );

  return content;
};

export default BashModalContent;
