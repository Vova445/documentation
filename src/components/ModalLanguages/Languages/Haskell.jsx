import React from 'react';

const HaskellModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Haskell - чисто функціональна мова програмування з сильною, статичною системою типів. Вона відома своєю математичною основою та підтримкою функціонального програмування.
      </p>
      <p>
        <strong>Застосування Haskell:</strong>
      </p>
      <ul>
        <li><strong>Функціональне програмування:</strong> Haskell використовується для розробки програм за допомогою функціонального підходу, де функції є основним елементом програми.</li>
        <li><strong>Наукові дослідження:</strong> Haskell застосовується в наукових дослідженнях, особливо в області теорії типів та формальних методів.</li>
        <li><strong>Академічна освіта:</strong> Haskell використовується для навчання функціонального програмування та введення студентів в математичні основи програмування.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Haskell забезпечує елегантний підхід до програмування, акцентуючи увагу на функціональному стилі та безпеці типів.
      </p>
      <p>
        <strong>Де вчити Haskell:</strong>
      </p>
      <ul>
        <li><strong>Онлайн курси на сайті learnyouahaskell:</strong> <a href="http://learnyouahaskell.com/chapters" target="_blank" rel="noopener noreferrer" style={{ color: 'pink' }}>Haskell Learning Resources</a></li>
        <li><strong>Курс "Introduction to Functional Programming" на edX:</strong> <a href="https://book.realworldhaskell.org/read/" target="_blank" rel="noopener noreferrer" style={{ color: 'pink' }}>edX Haskell Course</a></li>
      </ul>
      <p>
        <strong>Особливості Haskell:</strong>
      </p>
      <ul>
        <li><strong>Чисто функціональна парадигма:</strong> Haskell побудований на чисто функціональній парадигмі, де змінні не мають стану і функції завжди повертають один і той самий результат для заданих вхідних даних.</li>
        <li><strong>Сильна, статична система типів:</strong> Haskell використовує сильну систему типів, яка дозволяє виявляти помилки на етапі компіляції та поліпшує надійність програм.</li>
      </ul>
      <p>
        Haskell - це мова програмування, яка привертає розробників своєю чистотою та елегантністю функціонального підходу.
      </p>
    </>
  ) : (
    <>
      <p>
        Haskell is a purely functional programming language with a strong, static type system. It is known for its mathematical foundation and support for functional programming.
      </p>
      <p>
        <strong>Applications of Haskell:</strong>
      </p>
      <ul>
        <li><strong>Functional Programming:</strong> Haskell is used for developing programs using a functional approach, where functions are the primary building blocks of the program.</li>
        <li><strong>Scientific Research:</strong> Haskell is applied in scientific research, particularly in the fields of type theory and formal methods.</li>
        <li><strong>Academic Education:</strong> Haskell is used to teach functional programming and introduce students to the mathematical foundations of programming.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Haskell provides an elegant approach to programming, emphasizing functional style and type safety.
      </p>
      <p>
        <strong>Where to Learn Haskell:</strong>
      </p>
      <ul>
        <li><strong>Online courses on learnyouahaskell:</strong> <a href="http://learnyouahaskell.com/chapters" target="_blank" rel="noopener noreferrer" style={{ color: 'pink' }}>Haskell Learning Resources</a></li>
        <li><strong>"Introduction to Functional Programming" course on edX:</strong> <a href="https://book.realworldhaskell.org/read/" target="_blank" rel="noopener noreferrer" style={{ color: 'pink' }}>edX Haskell Course</a></li>
      </ul>
      <p>
        <strong>Features of Haskell:</strong>
      </p>
      <ul>
        <li><strong>Purely Functional Paradigm:</strong> Haskell is built on the purely functional paradigm, where variables have no state, and functions always return the same result for a given set of inputs.</li>
        <li><strong>Strong, Static Type System:</strong> Haskell employs a strong type system, enabling the detection of errors at compile-time and enhancing program reliability.</li>
      </ul>
      <p>
        Haskell is a programming language that attracts developers with its purity and the elegance of the functional approach.
      </p>
    </>
  );

  return content;
};

export default HaskellModalContent;
