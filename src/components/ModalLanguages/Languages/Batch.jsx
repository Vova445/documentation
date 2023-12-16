import React from 'react';

const BatchModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Batch - сценарій для виконання команд в командному рядку Windows.
          </p>
          <p>
            <strong>Застосування Batch:</strong>
          </p>
          <ul>
            <li><strong>Автоматизація завдань:</strong> Batch використовується для автоматизації виконання послідовностей команд та завдань в командному рядку.</li>
            <li><strong>Обробка файлів:</strong> За допомогою Batch можна виконувати операції з файлами, такі як копіювання, переміщення та видалення.</li>
            <li><strong>Запуск програм:</strong> Batch дозволяє запускати і виконувати інші програми з командного рядка.</li>
          </ul>
          <p>
            <strong>Місце в програмуванні:</strong>
          </p>
          <p>
            Batch використовується для автоматизації рутинних завдань та обробки файлів в середовищі Windows.
          </p>
          <p>
            <strong>Де вчити Batch:</strong>
          </p>
          <ul>
            <li><strong>Офіційна документація:</strong> <a href="https://ss64.com/nt/" target="_blank" rel="noopener noreferrer">Windows Commands Documentation</a></li>
          </ul>
          <p>
            <strong>Унікальні риси Batch:</strong>
          </p>
          <ul>
            <li><strong>Автоматизація системних завдань:</strong> Batch дозволяє автоматизувати виконання системних завдань та команд в середовищі Windows.</li>
            <li><strong>Робота з файлами:</strong> Batch надає можливість виконувати операції з файлами та каталогами.</li>
            <li><strong>Зручний для автоматизації рутинних завдань:</strong> Batch є зручним для написання скриптів для автоматизації рутинних завдань.</li>
          </ul>
          <p>
            Batch відіграє важливу роль у системному адмініструванні та автоматизації завдань в середовищі Windows.
          </p>
        </>
      ) : (
        <>
          <p>
            Batch is a script for executing commands in the Windows command prompt.
          </p>
          <p>
            <strong>Applications of Batch:</strong>
          </p>
          <ul>
            <li><strong>Task Automation:</strong> Batch is used for automating the execution of command sequences and tasks in the command prompt.</li>
            <li><strong>File Processing:</strong> With Batch, you can perform operations on files, such as copying, moving, and deleting.</li>
            <li><strong>Running Programs:</strong> Batch allows running and executing other programs from the command line.</li>
          </ul>
          <p>
            <strong>Place in Programming:</strong>
          </p>
          <p>
            Batch is used for automating routine tasks and file processing in the Windows environment.
          </p>
          <p>
            <strong>Where to Learn Batch:</strong>
          </p>
          <ul>
            <li><strong>Official Documentation:</strong> <a href="https://ss64.com/nt/" target="_blank" rel="noopener noreferrer">Windows Commands Documentation</a></li>
          </ul>
          <p>
            <strong>Unique Features of Batch:</strong>
          </p>
          <ul>
            <li><strong>System Task Automation:</strong> Batch allows automating the execution of system tasks and commands in the Windows environment.</li>
            <li><strong>File Operations:</strong> Batch provides the ability to perform operations on files and directories.</li>
            <li><strong>Convenient for Automating Routine Tasks:</strong> Batch is convenient for scripting and automating routine tasks.</li>
          </ul>
          <p>
            Batch plays a crucial role in system administration and task automation in the Windows environment.
          </p>
        </>
      )}
    </div>
  );
};

export default BatchModalContent;
