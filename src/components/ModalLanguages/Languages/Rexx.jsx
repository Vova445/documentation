import React from 'react';

const RexxModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            REXX - високорівнева мова програмування, яка була створена Аріфом Маркусом в 1979 році.
          </p>
          <p>
            <strong>Застосування REXX:</strong>
          </p>
          <ul>
            <li><strong>Сценарій програмування:</strong> REXX часто використовується для написання скриптів та автоматизації завдань.</li>
            <li><strong>Обробка текстової інформації:</strong> REXX відомий своєю зручністю у роботі з текстовою інформацією.</li>
            <li><strong>Системні скрипти:</strong> REXX може використовуватися для написання системних скриптів та управління файловою системою.</li>
            <li><strong>Взаємодія з іншими мовами:</strong> REXX може бути викликаний з інших мов програмування та взаємодіяти з ними.</li>
          </ul>
          <p>
            <strong>Місце в програмуванні:</strong>
          </p>
          <p>
            REXX відомий своєю простотою та зручністю у написанні скриптів для різних завдань.
          </p>
          <p>
            <strong>Де вчити REXX:</strong>
          </p>
          <ul>
            <li><strong>REXX Language Association:</strong> <a href="https://www.rexxla.org/" target="_blank" rel="noopener noreferrer">REXX Language Association</a></li>
            <li><strong>REXX Documentation:</strong> <a href="https://www.rexxinfo.org/" target="_blank" rel="noopener noreferrer">REXX Documentation</a></li>
          </ul>
          <p>
            <strong>Унікальні риси REXX:</strong>
          </p>
          <ul>
            <li><strong>Кросплатформеність:</strong> REXX може використовуватися на різних операційних системах без змін в коді.</li>
            <li><strong>Простота вивчення:</strong> REXX є легкою для вивчення мовою, що робить її доступною для широкого кола користувачів.</li>
            <li><strong>Можливості розширення:</strong> REXX підтримує розширення за допомогою зовнішніх бібліотек та викликів до системних функцій.</li>
          </ul>
          <p>
            REXX залишається важливою мовою для написання скриптів та автоматизації різноманітних завдань.
          </p>
        </>
      ) : (
        <>
          <p>
            REXX is a high-level programming language created by Mike Cowlishaw in 1979.
          </p>
          <p>
            <strong>Applications of REXX:</strong>
          </p>
          <ul>
            <li><strong>Scripting:</strong> REXX is often used for writing scripts and automating tasks.</li>
            <li><strong>Text Processing:</strong> REXX is known for its convenience in working with text information.</li>
            <li><strong>System Scripts:</strong> REXX can be used for writing system scripts and managing the file system.</li>
            <li><strong>Interaction with Other Languages:</strong> REXX can be invoked from other programming languages and interact with them.</li>
          </ul>
          <p>
            <strong>Place in Programming:</strong>
          </p>
          <p>
            REXX is known for its simplicity and convenience in writing scripts for various tasks.
          </p>
          <p>
            <strong>Where to Learn REXX:</strong>
          </p>
          <ul>
            <li><strong>REXX Language Association:</strong> <a href="https://www.rexxla.org/" target="_blank" rel="noopener noreferrer">REXX Language Association</a></li>
            <li><strong>REXX Documentation:</strong> <a href="https://www.rexxinfo.org/" target="_blank" rel="noopener noreferrer">REXX Documentation</a></li>
          </ul>
          <p>
            <strong>Unique Features of REXX:</strong>
          </p>
          <ul>
            <li><strong>Cross-Platform:</strong> REXX can be used on different operating systems without changes to the code.</li>
            <li><strong>Ease of Learning:</strong> REXX is an easy-to-learn language, making it accessible to a wide range of users.</li>
            <li><strong>Extensibility:</strong> REXX supports extensions through external libraries and calls to system functions.</li>
          </ul>
          <p>
            REXX remains a significant language for scripting and automating various tasks.
          </p>
        </>
      )}
    </div>
  );
};

export default RexxModalContent;
