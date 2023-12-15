import React from 'react';

const SmalltalkModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Smalltalk - це об'єктно-орієнтована мова програмування з акцентом на простоту та чистоту коду. Вона визначається своєю простотою синтаксису та активним використанням об'єктів для представлення даних та операцій.
      </p>
      <p>
        <strong>Застосування Smalltalk:</strong>
      </p>
      <ul>
        <li><strong>Розробка Графічних Користувацьких Інтерфейсів:</strong> Smalltalk використовується для розробки програм з графічним користувацьким інтерфейсом.</li>
        <li><strong>Навчання Програмуванню:</strong> Мова є популярною для навчання основам об'єктно-орієнтованого програмування.</li>
        <li><strong>Системи Управління Базами Даних:</strong> Smalltalk використовується для створення систем управління базами даних.</li>
        <li><strong>Розробка Програмного Забезпечення В Реальному Часі:</strong> Мова підходить для розробки програм, що вимагають реального часу.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Smalltalk володіє чистим та зрозумілим синтаксисом, що дозволяє програмістам концентруватися на об'єктно-орієнтованому дизайні та високому рівні абстракції.
      </p>
      <p>
        <strong>Де Вчити Smalltalk:</strong>
      </p>
      <ul>
        <li><strong>Pharo - Відкрита Реалізація Smalltalk:</strong> <a href="https://pharo.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Pharo</a></li>
      </ul>
      <p>
        <strong>Особливості Smalltalk:</strong>
      </p>
      <ul>
        <li><strong>Об'єктно-Орієнтований Підхід:</strong> Smalltalk використовує повністю об'єктно-орієнтований підхід.</li>
        <li><strong>Метакласи:</strong> Мова підтримує метакласи, що дозволяє змінювати поведінку об'єктів.</li>
        <li><strong>Інтерактивність:</strong> Робота з Smalltalk включає в себе інтерактивне тестування та взаємодію з об'єктами в реальному часі.</li>
      </ul>
      <p>
        Smalltalk - це мова, яка визначається своєю простотою та об'єктно-орієнтованим дизайном.
      </p>
    </>
  ) : (
    <>
      <p>
        Smalltalk is an object-oriented programming language with an emphasis on simplicity and clean code. It is characterized by its simple syntax and active use of objects to represent data and operations.
      </p>
      <p>
        <strong>Applications of Smalltalk:</strong>
      </p>
      <ul>
        <li><strong>Development of Graphical User Interfaces:</strong> Smalltalk is used for developing programs with graphical user interfaces.</li>
        <li><strong>Programming Education:</strong> The language is popular for teaching the basics of object-oriented programming.</li>
        <li><strong>Database Management Systems:</strong> Smalltalk is used for creating database management systems.</li>
        <li><strong>Real-Time Software Development:</strong> The language is suitable for developing real-time programs.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Smalltalk has a clean and understandable syntax, allowing programmers to focus on object-oriented design and a high level of abstraction.
      </p>
      <p>
        <strong>Where to Learn Smalltalk:</strong>
      </p>
      <ul>
        <li><strong>Pharo - Open Implementation of Smalltalk:</strong> <a href="https://pharo.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Pharo</a></li>
      </ul>
      <p>
        <strong>Features of Smalltalk:</strong>
      </p>
      <ul>
        <li><strong>Object-Oriented Approach:</strong> Smalltalk uses a fully object-oriented approach.</li>
        <li><strong>Metaclasses:</strong> The language supports metaclasses, allowing for changing the behavior of objects.</li>
        <li><strong>Interactivity:</strong> Working with Smalltalk involves interactive testing and interaction with objects in real-time.</li>
      </ul>
      <p>
        Smalltalk is a language characterized by its simplicity and object-oriented design.
      </p>
    </>
  );

  return content;
};

export default SmalltalkModalContent;
