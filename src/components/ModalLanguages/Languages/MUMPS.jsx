import React from 'react';

const MUMPSModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            MUMPS (Massachusetts General Hospital Utility Multi-Programming System) - це мова програмування та система управління базами даних, розроблена для медичних застосувань та обчислень.
          </p>
          <p>
            <strong>Застосування MUMPS:</strong>
          </p>
          <ul>
            <li><strong>Медичні Застосування:</strong> MUMPS почав використовуватися в медичних установах для управління медичною інформацією та електронними медичними записами.</li>
            <li><strong>Управління Базами Даних:</strong> Мова має вбудовану систему управління базами даних (DBMS) для ефективного зберігання та обробки даних.</li>
            <li><strong>Системи Обчислень:</strong> MUMPS використовується для розробки систем обчислень, зокрема в медичних науках та дослідженнях.</li>
          </ul>
          <p>
            MUMPS володіє особливою синтаксичною структурою та зручними засобами для роботи з базами даних.
          </p>
          <p>
            <strong>Де вчити MUMPS:</strong>
          </p>
          <ul>
            <li><strong>MUMPS Wiki:</strong> <a href="https://en.wikipedia.org/wiki/MUMPS" target="_blank" rel="noopener noreferrer">MUMPS Wiki</a> - Сторінка на Вікіпедії містить інформацію та посилання для докладного вивчення MUMPS.</li>
          </ul>
        </>
      ) : (
        <>
          <p>
            MUMPS (Massachusetts General Hospital Utility Multi-Programming System) is a programming language and database management system developed for medical applications and computing.
          </p>
          <p>
            <strong>Applications of MUMPS:</strong>
          </p>
          <ul>
            <li><strong>Medical Applications:</strong> MUMPS began to be used in medical institutions for managing medical information and electronic health records.</li>
            <li><strong>Database Management:</strong> The language has a built-in database management system (DBMS) for efficient data storage and processing.</li>
            <li><strong>Computing Systems:</strong> MUMPS is used in the development of computing systems, particularly in medical sciences and research.</li>
          </ul>
          <p>
            MUMPS features a unique syntax structure and convenient tools for working with databases.
          </p>
          <p>
            <strong>Where to Learn MUMPS:</strong>
          </p>
          <ul>
            <li><strong>MUMPS Wiki:</strong> <a href="https://en.wikipedia.org/wiki/MUMPS" target="_blank" rel="noopener noreferrer">MUMPS Wiki</a> - The Wikipedia page contains information and links for in-depth learning about MUMPS.</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default MUMPSModalContent;
