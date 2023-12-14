import React from 'react';

const ShellModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Shell - це командний інтерпретатор, який забезпечує взаємодію користувача з операційною системою шляхом виконання команд з текстового інтерфейсу. Shell є ключовим компонентом у багатьох UNIX-подібних операційних системах та використовується для автоматизації завдань та виконання скриптів.
      </p>
      <p>
        <strong>Застосування Shell:</strong>
      </p>
      <ul>
        <li><strong>Автоматизація завдань:</strong> Використовується для написання скриптів для автоматизації повторюваних завдань.</li>
        <li><strong>Взаємодія з операційною системою:</strong> Shell дозволяє користувачеві взаємодіяти з операційною системою через командний інтерфейс.</li>
        <li><strong>Розширення функціональності:</strong> Використовується для розширення функціональності операційної системи за допомогою скриптів.</li>
      </ul>
      <p>
        <strong>Початок роботи:</strong>
      </p>
      <p>
        Основи командного рядка UNIX: <a href="https://www.tutorialspoint.com/unix/unix-basic-operators.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'violet' }}>Tutorialspoint - UNIX Command Line Basics</a>
      </p>
      <p>
        <strong>Додаткові ресурси для вивчення Shell:</strong>
      </p>
      <ul>
        <li><strong>GNU Bash офіційна документація:</strong> <a href="https://www.gnu.org/software/bash/manual/bash.html" target="_blank" rel="noopener noreferrer" style={{ color: 'violet' }}>GNU Bash Manual</a></li>
        <li><strong>Shell Scripting Tutorial (LinuxConfig.org):</strong> <a href="https://linuxconfig.org/bash-scripting-tutorial-for-beginners" target="_blank" rel="noopener noreferrer" style={{ color: 'violet' }}>Shell Scripting Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <p>
        Shell is a command interpreter that facilitates user interaction with the operating system by executing commands from a text interface. It is a key component in many UNIX-like operating systems and is used for task automation and script execution.
      </p>
      <p>
        <strong>Applications of Shell:</strong>
      </p>
      <ul>
        <li><strong>Task Automation:</strong> Used to write scripts for automating repetitive tasks.</li>
        <li><strong>Interaction with the Operating System:</strong> Shell allows users to interact with the operating system through a command-line interface.</li>
        <li><strong>Functionality Extension:</strong> Used to extend the functionality of the operating system through scripts.</li>
      </ul>
      <p>
        <strong>Getting Started:</strong>
      </p>
      <p>
        Basics of UNIX Command Line: <a href="https://www.tutorialspoint.com/unix/unix-basic-operators.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'violet' }}>Tutorialspoint - UNIX Command Line Basics</a>
      </p>
      <p>
        <strong>Additional Resources for Learning Shell:</strong>
      </p>
      <ul>
        <li><strong>GNU Bash Official Documentation:</strong> <a href="https://www.gnu.org/software/bash/manual/bash.html" target="_blank" rel="noopener noreferrer" style={{ color: 'violet' }}>GNU Bash Manual</a></li>
        <li><strong>Shell Scripting Tutorial (LinuxConfig.org):</strong> <a href="https://linuxconfig.org/bash-scripting-tutorial-for-beginners" target="_blank" rel="noopener noreferrer" style={{ color: 'violet' }}>Shell Scripting Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default ShellModalContent;
