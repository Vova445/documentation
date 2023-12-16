import React from 'react';

const EiffelModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Eiffel - об'єктно-орієнтована мова програмування, яка визначається чіткими правилами проектування та високим рівнем надійності.
          </p>
          <p>
            <strong>Застосування Eiffel:</strong>
          </p>
          <ul>
            <li><strong>Розробка програмного забезпечення:</strong> Eiffel використовується для створення високоякісного програмного забезпечення з наголосом на надійність та ефективність.</li>
            <li><strong>ООП (Об'єктно-орієнтоване програмування):</strong> Eiffel повністю підтримує принципи об'єктно-орієнтованого програмування, такі як спадкування, інкапсуляція та поліморфізм.</li>
            <li><strong>Робота з конрактами:</strong> Eiffel використовує концепцію контрактного програмування, де специфікації (контракти) визначають поведінку програми.</li>
            <li><strong>Системи реального часу:</strong> Eiffel застосовується для розробки програм в системах реального часу та інших вимогливих до надійності областях.</li>
          </ul>
          <p>
            <strong>Місце в програмуванні:</strong>
          </p>
          <p>
            Eiffel володіє високим рівнем абстракції та дозволяє програмістам швидко створювати надійні та ефективні програми.
          </p>
          <p>
            <strong>Де вчити Eiffel:</strong>
          </p>
          <ul>
            <li><strong>Eiffel Software Documentation:</strong> <a href="https://www.eiffel.org/doc/" target="_blank" rel="noopener noreferrer">Eiffel Software Documentation</a></li>
            <li><strong>Object-Oriented Software Construction by Bertrand Meyer:</strong> Книга, написана Бертраном Мейєром, створителем мови Eiffel.</li>
          </ul>
          <p>
            <strong>Унікальні риси Eiffel:</strong>
          </p>
          <ul>
            <li><strong>Контрактне програмування:</strong> Використання контрактів для визначення та перевірки поведінки програми.</li>
            <li><strong>Проектування з урахуванням надійності:</strong> Eiffel ставить наголос на проектування програм, які є надійними та легко зберігаються.</li>
          </ul>
          <p>
            Eiffel є потужною мовою програмування, яка розширює можливості об'єктно-орієнтованого програмування.
          </p>
        </>
      ) : (
        <>
          <p>
            Eiffel is an object-oriented programming language that is defined by clear design rules and a high level of reliability.
          </p>
          <p>
            <strong>Applications of Eiffel:</strong>
          </p>
          <ul>
            <li><strong>Software Development:</strong> Eiffel is used to create high-quality software with an emphasis on reliability and efficiency.</li>
            <li><strong>Object-Oriented Programming (OOP):</strong> Eiffel fully supports object-oriented programming principles such as inheritance, encapsulation, and polymorphism.</li>
            <li><strong>Working with Contracts:</strong> Eiffel utilizes the concept of contract-based programming, where specifications (contracts) define the program's behavior.</li>
            <li><strong>Real-Time Systems:</strong> Eiffel is applied to develop programs in real-time systems and other reliability-demanding areas.</li>
          </ul>
          <p>
            <strong>Place in Programming:</strong>
          </p>
          <p>
            Eiffel offers a high level of abstraction, allowing programmers to quickly create reliable and efficient programs.
          </p>
          <p>
            <strong>Where to Learn Eiffel:</strong>
          </p>
          <ul>
            <li><strong>Eiffel Software Documentation:</strong> <a href="https://www.eiffel.org/doc/" target="_blank" rel="noopener noreferrer">Eiffel Software Documentation</a></li>
            <li><strong>Object-Oriented Software Construction by Bertrand Meyer:</strong> A book written by Bertrand Meyer, the creator of the Eiffel language.</li>
          </ul>
          <p>
            <strong>Unique Features of Eiffel:</strong>
          </p>
          <ul>
            <li><strong>Contract-Based Programming:</strong> Use of contracts to specify and verify the program's behavior.</li>
            <li><strong>Reliability-Oriented Design:</strong> Eiffel emphasizes designing programs that are reliable and easy to maintain.</li>
          </ul>
          <p>
            Eiffel is a powerful programming language that extends the capabilities of object-oriented programming.
          </p>
        </>
      )}
    </div>
  );
};

export default EiffelModalContent;
