import React from 'react';

const RedModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Red - це мова програмування, що поєднує функціональність та конкретний підхід. Вона має простий синтаксис та розширювану систему типів, що дозволяє писати компактний та ефективний код.
          </p>
          <p>
            <strong>Застосування Red:</strong>
          </p>
          <ul>
            <li><strong>Загальне Програмування:</strong> Red може використовуватися для різних завдань загального програмування завдяки своїй гнучкості та простоті.</li>
            <li><strong>Розробка Вбудованих Систем:</strong> Мова підходить для створення вбудованих систем та низькорівневого програмування.</li>
            <li><strong>Функціональне Програмування:</strong> Red підтримує функціональні концепції, що дозволяє писати виразний та зрозумілий код.</li>
          </ul>
          <p>
            Red є мовою, що активно розвивається та використовується у різних сферах програмування.
          </p>
          <p>
            <strong>Де вчити Red:</strong>
          </p>
          <ul>
            <li><strong>Офіційний Веб-сайт Red:</strong> <a href="https://www.red-lang.org/" target="_blank" rel="noopener noreferrer">Офіційний Веб-сайт Red</a> - Ресурс для отримання документації, прикладів та інших матеріалів.</li>    
        </ul>
        </>
      ) : (
        <>
          <p>
            Red is a programming language that combines functionality and a concise approach. It has a simple syntax and an extensible type system, allowing for writing compact and efficient code.
          </p>
          <p>
            <strong>Applications of Red:</strong>
          </p>
          <ul>
            <li><strong>General-purpose Programming:</strong> Red can be used for various general-purpose programming tasks due to its flexibility and simplicity.</li>
            <li><strong>Embedded System Development:</strong> The language is suitable for creating embedded systems and low-level programming.</li>
            <li><strong>Functional Programming:</strong> Red supports functional programming concepts, allowing for expressive and understandable code.</li>
          </ul>
          <p>
            Red is a language actively evolving and used in various programming domains.
          </p>
          <p>
            <strong>Where to Learn Red:</strong>
          </p>
          <ul>
            <li><strong>Official Red Website:</strong> <a href="https://www.red-lang.org/" target="_blank" rel="noopener noreferrer">Official Red Website</a> - Resource for accessing documentation, examples, and other materials.</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default RedModalContent;
