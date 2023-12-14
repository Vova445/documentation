import React from 'react';

const PerlModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Perl - це потужна та гнучка мова програмування, яка використовується для веб-розробки, обробки тексту та системного адміністрування. Perl має ряд корисних функцій та виразний синтаксис, що робить його популярним серед програмістів.
      </p>
      <p>
        <strong>Застосування Perl:</strong>
      </p>
      <ul>
        <li><strong>Веб-розробка:</strong> Perl використовується для створення динамічних веб-сайтів та обробки веб-форм.</li>
        <li><strong>Обробка тексту:</strong> Perl є потужним інструментом для обробки та аналізу текстової інформації.</li>
        <li><strong>Системне адміністрування:</strong> Perl використовується для автоматизації завдань системного адміністрування та розробки скриптів.</li>
        <li><strong>Бази даних:</strong> Perl інтегрується з різними системами керування базами даних, що робить його корисним для роботи з даними.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Perl володіє великою кількістю розширень та модулів, що дозволяє програмістам розв'язувати різноманітні завдання.
      </p>
      <p>
        <strong>Де вчити Perl:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Perl:</strong> <a href="https://www.tutorialspoint.com/perl/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Perl Documentation</a></li>
        <li><strong>Perl Maven:</strong> <a href="https://perlmaven.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Perl Maven</a> - навчальні матеріали та практичні завдання з Perl.</li>
      </ul>
      <p>
        <strong>Особливості Perl:</strong>
      </p>
      <ul>
        <li><strong>Синтаксис:</strong> Perl відомий своєю гнучкістю та виразністю синтаксису.</li>
        <li><strong>Модульність:</strong> Велика кількість модулів дозволяє використовувати готові рішення для різних задач.</li>
        <li><strong>Крос-платформеність:</strong> Perl підтримується на багатьох операційних системах, що дозволяє його використовувати в різних середовищах.</li>
      </ul>
      <p>
        Perl - це мова, яка надає багатий інструментарій для вирішення різноманітних задач у сферах веб-розробки, обробки тексту та автоматизації.
      </p>
    </>
  ) : (
    <>
      <p>
        Perl is a powerful and flexible programming language used for web development, text processing, and system administration. Perl has a range of useful features and expressive syntax, making it popular among programmers.
      </p>
      <p>
        <strong>Applications of Perl:</strong>
      </p>
      <ul>
        <li><strong>Web Development:</strong> Perl is used for creating dynamic websites and processing web forms.</li>
        <li><strong>Text Processing:</strong> Perl is a powerful tool for processing and analyzing textual information.</li>
        <li><strong>System Administration:</strong> Perl is used for automating system administration tasks and script development.</li>
        <li><strong>Database Interaction:</strong> Perl integrates with various database management systems, making it useful for working with data.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Perl boasts a large number of extensions and modules, allowing programmers to tackle diverse tasks.
      </p>
      <p>
        <strong>Where to Learn Perl:</strong>
      </p>
      <ul>
        <li><strong>Official Perl Documentation:</strong> <a href="https://www.tutorialspoint.com/perl/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Perl Documentation</a></li>
        <li><strong>Perl Maven:</strong> <a href="https://perlmaven.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Perl Maven</a> - educational materials and practical exercises on Perl.</li>
      </ul>
      <p>
        <strong>Features of Perl:</strong>
      </p>
      <ul>
        <li><strong>Syntax:</strong> Perl is known for its flexibility and expressive syntax.</li>
        <li><strong>Modularity:</strong> A vast number of modules allow using ready-made solutions for various tasks.</li>
        <li><strong>Cross-Platform:</strong> Perl is supported on many operating systems, enabling its use in different environments.</li>
      </ul>
      <p>
        Perl is a language that provides a rich toolkit for solving various challenges in web development, text processing, and automation.
      </p>
    </>
  );

  return content;
};

export default PerlModalContent;
