import React from 'react';

const SchemeModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Scheme - мова програмування, яка є діалектом мови Lisp. Вона відзначається простотою синтаксису та високою ступенем експресивності, що робить її популярною для навчання та розробки алгоритмів.
      </p>
      <p>
        <strong>Застосування Scheme:</strong>
      </p>
      <ul>
        <li><strong>Навчання Програмуванню:</strong> Scheme часто використовується для навчання основам програмування та функціонального програмування.</li>
        <li><strong>Розробка Алгоритмів:</strong> Мова використовується для розробки та вивчення алгоритмів завдяки своїй простоті та експресивності.</li>
        <li><strong>Прототипування:</strong> Scheme може бути використаний для прототипування та швидкого розроблення програм.</li>
        <li><strong>Інтеграція в Інші Мови:</strong> Існує можливість використовувати Scheme як вбудовану мову в інших програмах.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Scheme володіє високим рівнем абстракції та підтримує функціональне програмування, що робить її зручною для деяких завдань та досліджень.
      </p>
      <p>
        <strong>Де Вчити Scheme:</strong>
      </p>
      <ul>
        <li><strong>Racket - Сучасний Діалект Scheme:</strong> <a href="https://racket-lang.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Racket</a></li>
      </ul>
      <p>
        <strong>Особливості Scheme:</strong>
      </p>
      <ul>
        <li><strong>Мінімалізм Синтаксису:</strong> Scheme володіє простим та мінімалістичним синтаксисом.</li>
        <li><strong>Динамічне Типізація:</strong> Мова використовує динамічну типізацію, що дозволяє гнучко працювати з даними.</li>
        <li><strong>Функціональна Парадигма:</strong> Scheme підтримує функціональну парадигму програмування.</li>
      </ul>
      <p>
        Scheme - це мова, яка становить цікавий вибір для тих, хто цінує простоту та ефективність у програмуванні.
      </p>
    </>
  ) : (
    <>
      <p>
        Scheme is a programming language that serves as a dialect of the Lisp language. It is characterized by its simple syntax and high degree of expressiveness, making it popular for teaching and algorithm development.
      </p>
      <p>
        <strong>Applications of Scheme:</strong>
      </p>
      <ul>
        <li><strong>Programming Education:</strong> Scheme is often used for teaching the fundamentals of programming and functional programming.</li>
        <li><strong>Algorithm Development:</strong> The language is used for developing and studying algorithms due to its simplicity and expressiveness.</li>
        <li><strong>Prototyping:</strong> Scheme can be used for prototyping and rapid program development.</li>
        <li><strong>Integration into Other Languages:</strong> There is the possibility to use Scheme as an embedded language in other programs.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Scheme has a high level of abstraction and supports functional programming, making it convenient for certain tasks and research.
      </p>
      <p>
        <strong>Where to Learn Scheme:</strong>
      </p>
      <ul>
        <li><strong>Racket - Modern Dialect of Scheme:</strong> <a href="https://racket-lang.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Racket</a></li>
      </ul>
      <p>
        <strong>Features of Scheme:</strong>
      </p>
      <ul>
        <li><strong>Minimalistic Syntax:</strong> Scheme has a simple and minimalist syntax.</li>
        <li><strong>Dynamic Typing:</strong> The language uses dynamic typing, allowing for flexible data manipulation.</li>
        <li><strong>Functional Paradigm:</strong> Scheme supports the functional programming paradigm.</li>
      </ul>
      <p>
        Scheme is a language that represents an interesting choice for those who appreciate simplicity and efficiency in programming.
      </p>
    </>
  );

  return content;
};

export default SchemeModalContent;
