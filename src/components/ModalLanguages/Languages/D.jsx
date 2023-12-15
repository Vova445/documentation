import React from 'react';

const DModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        D - це мова програмування загального призначення з акцентом на продуктивність, ефективність та безпеку. Розроблена Вальтером Брайтом та Ігорем Стасєвським у компанії Digital Mars, D комбінує можливості низькорівневого програмування із сучасними функціональними та об'єктно-орієнтованими концепціями.
      </p>
      <p>
        <strong>Застосування D:</strong>
      </p>
      <ul>
        <li><strong>Системне програмування:</strong> D часто використовується для розробки системного та низькорівневого програмного забезпечення.</li>
        <li><strong>Веб-розробка:</strong> Завдяки своїм можливостям та екосистемі, D може бути використаний для створення веб-додатків.</li>
        <li><strong>Наукові та інженерні обчислення:</strong> Мова відмінно підходить для задач наукових обчислень та інженерії.</li>
        <li><strong>Розробка ігор:</strong> D може бути використаний для розробки високоефективних ігор.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        D пропонує збалансований підхід між продуктивністю та безпекою, що робить його привабливим для різних областей програмування.
      </p>
      <p>
        <strong>Де Вчити D:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація D:</strong> <a href="https://dlang.org/documentation.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>D Documentation</a></li>
        <li><strong>Онлайн курси та ресурси:</strong> <a href="https://wiki.dlang.org/Tutorials" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>D Tutorials</a></li>
      </ul>
      <p>
        <strong>Особливості D:</strong>
      </p>
      <ul>
        <li><strong>Синтаксис схожий на C:</strong> D взяв багато елементів синтаксису з мови програмування C.</li>
        <li><strong>Метапрограмування:</strong> Метапрограмні можливості дозволяють вам виразно та гнучко використовувати код.</li>
        <li><strong>Підтримка паралельного програмування:</strong> D надає засоби для роботи з паралельним програмуванням.</li>
      </ul>
      <p>
        D - це мова, яка поєднує ефективність низькорівневого програмування з сучасними концепціями, забезпечуючи гнучкість та продуктивність.
      </p>
    </>
  ) : (
    <>
      <p>
        D is a general-purpose programming language with an emphasis on productivity, efficiency, and safety. Developed by Walter Bright and Andrei Alexandrescu at Digital Mars, D combines low-level programming capabilities with modern functional and object-oriented concepts.
      </p>
      <p>
        <strong>Applications of D:</strong>
      </p>
      <ul>
        <li><strong>System Programming:</strong> D is often used for developing system-level and low-level software.</li>
        <li><strong>Web Development:</strong> Due to its capabilities and ecosystem, D can be used for building web applications.</li>
        <li><strong>Scientific and Engineering Computing:</strong> The language is well-suited for tasks in scientific computing and engineering.</li>
        <li><strong>Game Development:</strong> D can be utilized for developing high-performance games.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        D offers a balanced approach between productivity and safety, making it attractive for various programming domains.
      </p>
      <p>
        <strong>Where to Learn D:</strong>
      </p>
      <ul>
        <li><strong>Official D Documentation:</strong> <a href="https://dlang.org/documentation.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>D Documentation</a></li>
        <li><strong>Online Courses and Resources:</strong> <a href="https://wiki.dlang.org/Tutorials" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>D Tutorials</a></li>
      </ul>
      <p>
        <strong>Features of D:</strong>
      </p>
      <ul>
        <li><strong>C-like Syntax:</strong> D incorporates many elements of the C programming language syntax.</li>
        <li><strong>Metaprogramming:</strong> Metaprogramming capabilities allow expressive and flexible use of code.</li>
        <li><strong>Support for Parallel Programming:</strong> D provides features for working with parallel programming.</li>
      </ul>
      <p>
        D is a language that combines the efficiency of low-level programming with modern concepts, providing flexibility and productivity.
      </p>
    </>
  );

  return content;
};

export default DModalContent;
