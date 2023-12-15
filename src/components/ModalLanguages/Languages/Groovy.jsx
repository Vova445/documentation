import React from 'react';

const GroovyModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Groovy - це динамічна мова програмування, яка працює на платформі Java. Вона поєднує в собі силу та гнучкість Java з елегантністю та легкістю сучасних скриптових мов.
      </p>
      <p>
        <strong>Застосування Groovy:</strong>
      </p>
      <ul>
        <li><strong>Розробка на Java-платформі:</strong> Groovy може бути використаний для розширення та поліпшення Java-проектів.</li>
        <li><strong>Сценарії та Автоматизація:</strong> Groovy часто використовується для написання скриптів та автоматизації завдань.</li>
        <li><strong>Веб-розробка:</strong> Groovy може використовуватися для розробки веб-додатків за допомогою фреймворку Grails.</li>
        <li><strong>Тестування:</strong> Його лаконічний синтаксис робить Groovy популярним для написання тестів.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Groovy є ідеальним вибором для розширення Java-проектів та написання зрозумілого та лаконічного коду.
      </p>
      <p>
        <strong>Де Вчити Groovy:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Groovy:</strong> <a href="https://groovy-lang.org/documentation.html" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Groovy Documentation</a></li>
        <li><strong>Книга "Programming Groovy 2":</strong> <a href="https://www.amazon.com/Programming-Groovy-Programming-Patterns-Developers/dp/1935182447" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Programming Groovy 2</a></li>
      </ul>
      <p>
        <strong>Особливості Groovy:</strong>
      </p>
      <ul>
        <li><strong>Динамічна Типізація:</strong> Groovy підтримує динамічну типізацію, що полегшує написання гнучкого коду.</li>
        <li><strong>Лаконічний Синтаксис:</strong> Чистий та простий синтаксис робить код на Groovy легким для читання та розуміння.</li>
        <li><strong>Інтеграція з Java:</strong> Гладка інтеграція з Java дозволяє використовувати існуючий Java-код.</li>
      </ul>
      <p>
        Groovy - це потужний інструмент для розробників, які шукають гнучку та ефективну мову для використання на платформі Java.
      </p>
    </>
  ) : (
    <>
      <p>
        Groovy is a dynamic programming language that runs on the Java platform. It combines the power and flexibility of Java with the elegance and ease of modern scripting languages.
      </p>
      <p>
        <strong>Applications of Groovy:</strong>
      </p>
      <ul>
        <li><strong>Java Platform Development:</strong> Groovy can be used to extend and enhance Java projects.</li>
        <li><strong>Scripts and Automation:</strong> Groovy is often used for writing scripts and automating tasks.</li>
        <li><strong>Web Development:</strong> Groovy can be used for developing web applications using the Grails framework.</li>
        <li><strong>Testing:</strong> Its concise syntax makes Groovy popular for writing tests.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Groovy is an ideal choice for extending Java projects and writing clear and concise code.
      </p>
      <p>
        <strong>Where to Learn Groovy:</strong>
      </p>
      <ul>
        <li><strong>Official Groovy Documentation:</strong> <a href="https://groovy-lang.org/documentation.html" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Groovy Documentation</a></li>
        <li><strong>Book "Programming Groovy 2":</strong> <a href="https://www.amazon.com/Programming-Groovy-Programming-Patterns-Developers/dp/1935182447" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Programming Groovy 2</a></li>
      </ul>
      <p>
        <strong>Features of Groovy:</strong>
      </p>
      <ul>
        <li><strong>Dynamic Typing:</strong> Groovy supports dynamic typing, making it easy to write flexible code.</li>
        <li><strong>Concise Syntax:</strong> Clean and straightforward syntax makes Groovy code easy to read and understand.</li>
        <li><strong>Integration with Java:</strong> Smooth integration with Java allows leveraging existing Java code.</li>
      </ul>
      <p>
        Groovy is a powerful tool for developers looking for a flexible and efficient language for use on the Java platform.
      </p>
    </>
  );

  return content;
};

export default GroovyModalContent;
