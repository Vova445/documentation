import React from 'react';

const CppModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        C++ - це об'єктно-орієнтована мова програмування, яка розширює можливості мови C додаванням об'єктно-орієнтованих конструкцій та інших покращень. Вона широко використовується для розробки програмного забезпечення, ігор, драйверів, систем реального часу та багатьох інших задач.
      </p>
      <p>
        <strong>Застосування C++:</strong>
      </p>
      <ul>
        <li><strong>Розробка програмного забезпечення:</strong> C++ використовується для створення різноманітних програм, включаючи бізнес-додатки та системи управління базами даних.</li>
        <li><strong>Ігрова розробка:</strong> Багато відомих комп'ютерних ігор розроблені мовою C++, оскільки вона надає високий рівень контролю над апаратним забезпеченням.</li>
        <li><strong>Системи реального часу:</strong> C++ використовується для створення вбудованих систем та систем реального часу, де керована продуктивність має ключове значення.</li>
        <li><strong>Робототехніка:</strong> Мова C++ застосовується в розробці програмного забезпечення для роботів та автоматизованих систем.</li>
      </ul>
      <p>
        <strong>Основні особливості C++:</strong>
      </p>
      <ul>
        <li><strong>Об'єктно-орієнтований підхід:</strong> C++ підтримує об'єктно-орієнтовану парадигму програмування, що дозволяє створювати модульний та легко розширюваний код.</li>
        <li><strong>Стандартна бібліотека шаблонів (STL):</strong> STL надає готові шаблони для часто використовуваних алгоритмів та структур даних.</li>
        <li><strong>Ефективність:</strong> C++ дозволяє ефективно використовувати ресурси та забезпечує високий рівень контролю над апаратним забезпеченням.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        C++ залишається однією з найважливіших мов програмування, використовуваних для розробки різноманітних систем та додатків.
      </p>
      <p>
        <strong>Де вчити C++:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація:</strong> <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>C++ ISO</a></li>
        <li><strong>Курси на платформі Coursera:</strong> <a href="https://www.coursera.org/courses?query=c%2B%2B" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>C++ Courses on Coursera</a></li>
      </ul>
    </>
  ) : (
    <>
      <p>
        C++ is an object-oriented programming language that extends the capabilities of the C language by adding object-oriented constructs and other enhancements. It is widely used for developing software, games, drivers, real-time systems, and many other tasks.
      </p>
      <p>
        <strong>Applications of C++:</strong>
      </p>
      <ul>
        <li><strong>Software Development:</strong> C++ is used to create various programs, including business applications and database management systems.</li>
        <li><strong>Game Development:</strong> Many popular computer games are developed in C++ because it provides a high level of control over the hardware.</li>
        <li><strong>Real-Time Systems:</strong> C++ is used for creating embedded systems and real-time systems where controlled performance is crucial.</li>
        <li><strong>Robotics:</strong> C++ is applied in the development of software for robots and automated systems.</li>
      </ul>
      <p>
        <strong>Key Features of C++:</strong>
      </p>
      <ul>
        <li><strong>Object-Oriented Approach:</strong> C++ supports the object-oriented programming paradigm, allowing for modular and easily extensible code.</li>
        <li><strong>Standard Template Library (STL):</strong> The STL provides ready-made templates for commonly used algorithms and data structures.</li>
        <li><strong>Efficiency:</strong> C++ enables efficient use of resources and provides a high level of control over hardware.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        C++ remains one of the most important programming languages used for developing various systems and applications.
      </p>
      <p>
        <strong>Where to Learn C++:</strong>
      </p>
      <ul>
        <li><strong>Official Documentation:</strong> <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>C++ ISO</a></li>
        <li><strong>Courses on Coursera:</strong> <a href="https://www.coursera.org/courses?query=c%2B%2B" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>C++ Courses on Coursera</a></li>
      </ul>
    </>
  );

  return content;
};

export default CppModalContent;
