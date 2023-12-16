import React from 'react';

const FantomModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Fantom - це мова програмування, яка є високорівневою, конкретною та має статичну систему типізації. Вона розроблена для створення ефективних та портативних додатків, які можна використовувати в різних середовищах.
          </p>
          <p>
            <strong>Застосування Fantom:</strong>
          </p>
          <ul>
            <li><strong>Розробка Платформенно-Незалежних Додатків:</strong> Fantom дозволяє створювати додатки, які можна використовувати на різних платформах, завдяки своєму портативному характеру.</li>
            <li><strong>Веб-Розробка:</strong> Мова підтримує веб-розробку та може використовуватися для створення серверних та клієнтських додатків.</li>
            <li><strong>Розширення Функціональності Інших Мов:</strong> Fantom може використовуватися як внутрішня мова для розширення функціональності інших мов програмування.</li>
          </ul>
          <p>
            Fantom відрізняється своєю гнучкістю та можливістю використання в різних областях програмування.
          </p>
          <p>
            <strong>Де вчити Fantom:</strong>
          </p>
          <ul>
            <li><strong>Офіційний Веб-сайт Fantom:</strong> <a href="https://fantom.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'green'}} >Офіційний Веб-сайт Fantom</a> - Ресурс для отримання документації, прикладів та інших ресурсів.</li>
            <li><strong>Fantom GitHub Repository:</strong> <a href="https://github.com/fantom-lang/fantom" target="_blank" rel="noopener noreferrer" style={{ color: 'green'}}>Fantom GitHub Repository</a> - GitHub-репозиторій для перегляду вихідних кодів та співпраці у розвитку мови.</li>
          </ul>
        </>
      ) : (
        <>
          <p>
            Fantom is a programming language that is high-level, concise, and has a static type system. It is designed to create efficient and portable applications that can be used in different environments.
          </p>
          <p>
            <strong>Applications of Fantom:</strong>
          </p>
          <ul>
            <li><strong>Development of Platform-Independent Applications:</strong> Fantom allows creating applications that can be used on different platforms due to its portable nature.</li>
            <li><strong>Web Development:</strong> The language supports web development and can be used to create server-side and client-side applications.</li>
            <li><strong>Extending Functionality of Other Languages:</strong> Fantom can be used as an internal language to extend the functionality of other programming languages.</li>
          </ul>
          <p>
            Fantom stands out for its flexibility and versatility for use in various programming domains.
          </p>
          <p>
            <strong>Where to Learn Fantom:</strong>
          </p>
          <ul>
            <li><strong>Official Fantom Website:</strong> <a href="https://fantom.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'green'}}>Official Fantom Website</a> - Resource for accessing documentation, examples, and other materials.</li>
            <li><strong>Fantom GitHub Repository:</strong> <a href="https://github.com/fantom-lang/fantom" target="_blank" rel="noopener noreferrer" style={{ color: 'green'}}>Fantom GitHub Repository</a> - GitHub repository to view source code and collaborate on language development.</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default FantomModalContent;
