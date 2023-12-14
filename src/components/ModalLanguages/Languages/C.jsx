import React from 'react';

const CModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Мова програмування C - загальноприйнята мова програмування, яка використовується для створення ефективних та швидких програм. Вона визначається своєю близькістю до апаратного забезпечення та високою продуктивністю.
      </p>
      <p>
        <strong>Застосування мови C:</strong>
      </p>
      <ul>
        <li><strong>Вбудовані системи:</strong> Мова C часто використовується для розробки вбудованих систем, оскільки вона дозволяє ефективно взаємодіяти з апаратним забезпеченням.</li>
        <li><strong>Операційні системи:</strong> Багато операційних систем були реалізовані або мають компоненти, написані на мові C.</li>
        <li><strong>Розробка драйверів:</strong> Завдяки близькості до апаратного рівня, мова C є вибором для розробки драйверів пристроїв.</li>
        <li><strong>Інші системні програми:</strong> C використовується для написання системних програм, таких як компілятори та інші інструменти розробки.</li>
      </ul>
      <p>
        <strong>Основні особливості мови C:</strong>
      </p>
      <ul>
        <li><strong>Ефективність:</strong> Мова C відома своєю високою продуктивністю та ефективністю використання ресурсів.</li>
        <li><strong>Близькість до апаратного забезпечення:</strong> Програми на C можуть ефективно взаємодіяти з апаратним забезпеченням комп'ютера або вбудованої системи.</li>
        <li><strong>Наявність багатьох бібліотек:</strong> Велика кількість бібліотек для різних завдань робить мову C потужним інструментом розробки.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Мова C залишається важливою мовою програмування в індустрії завдяки своїй ефективності та близькості до апаратного забезпечення.
      </p>
      <p>
        <strong>Де вчити мову C:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація на сайті ANSI C:</strong> <a href="https://www.iso.org/standard/74528.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple', backgroundColor:'white' }}>ANSI C Standard</a></li>
        <li><strong>Курси на платформі Udacity:</strong> <a href="https://www.udacity.com/course/c-for-programmers--ud283" target="_blank" rel="noopener noreferrer" style={{ color: 'purple', backgroundColor:'white' }}>C++ Nanodegree Program</a></li>
      </ul>
    </>
  ) : (
    <>
      <p>
        The C programming language is a widely used programming language known for creating efficient and fast programs. It is characterized by its proximity to hardware and high performance.
      </p>
      <p>
        <strong>Applications of C:</strong>
      </p>
      <ul>
        <li><strong>Embedded Systems:</strong> C is often used in the development of embedded systems as it allows efficient interaction with hardware.</li>
        <li><strong>Operating Systems:</strong> Many operating systems have components implemented in or entirely written in the C language.</li>
        <li><strong>Driver Development:</strong> Due to its proximity to the hardware level, C is a choice for developing device drivers.</li>
        <li><strong>Other System Programs:</strong> C is used for writing system programs such as compilers and other development tools.</li>
      </ul>
      <p>
        <strong>Key Features of C:</strong>
      </p>
      <ul>
        <li><strong>Efficiency:</strong> C is known for its high performance and efficient use of resources.</li>
        <li><strong>Proximity to Hardware:</strong> C programs can efficiently interact with the hardware of a computer or embedded system.</li>
        <li><strong>Abundance of Libraries:</strong> A large number of libraries for various tasks make the C language a powerful development tool.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        The C language remains an essential programming language in the industry due to its efficiency and proximity to hardware.
      </p>
      <p>
        <strong>Where to Learn C:</strong>
      </p>
      <ul>
        <li><strong>Official ANSI C Documentation:</strong> <a href="https://www.iso.org/standard/74528.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>ANSI C Standard</a></li>
        <li><strong>Udacity Courses:</strong> <a href="https://www.udacity.com/course/c-for-programmers--ud283" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>C++ Nanodegree Program</a></li>
      </ul>
    </>
  );

  return content;
};

export default CModalContent;
