import React from 'react';

const BasicModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Basic - це популярна мова програмування великого вжитку для початківців. Вона відома своєю простотою та легкістю в освоєнні.
      </p>
      <p>
        <strong>Застосування мови Basic:</strong>
      </p>
      <ul>
        <li><strong>Освіта:</strong> Basic часто використовується для навчання програмування через свою простоту та зрозумілість.</li>
        <li><strong>Створення простих програм:</strong> Basic ідеально підходить для написання невеликих та простих програм.</li>
        <li><strong>Автоматизація офісних задач:</strong> Завдяки своїй простоті, Basic може бути використаний для автоматизації рутинних офісних завдань.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Basic є відмінним вибором для початківців, але він також знаходить своє застосування в простих програмах та автоматизації.
      </p>
      <p>
        <strong>Де вчити Basic:</strong>
      </p>
      <ul>
       
        <li><strong>Книга "Basic Programming for Dummies":</strong> Доступна в онлайн-книгарнях та магазинах.</li>
      </ul>
      <p>
        Basic - прекрасний вибір для тих, хто тільки починає свій шлях у світ програмування.
      </p>
    </>
  ) : (
    <>
      <p>
        Basic is a popular programming language widely used for beginners. It is known for its simplicity and ease of learning.
      </p>
      <p>
        <strong>Applications of Basic:</strong>
      </p>
      <ul>
        <li><strong>Education:</strong> Basic is often used for teaching programming due to its simplicity and understandability.</li>
        <li><strong>Creating Simple Programs:</strong> Basic is ideal for writing small and simple programs.</li>
        <li><strong>Office Task Automation:</strong> Thanks to its simplicity, Basic can be used for automating routine office tasks.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Basic is an excellent choice for beginners, but it also finds its application in simple programs and automation.
      </p>
      <p>
        <strong>Where to Learn Basic:</strong>
      </p>
      <ul>
        <li><strong>Book "Basic Programming for Dummies":</strong> Available in online bookstores and stores.</li>
      </ul>
      <p>
        Basic is an excellent choice for those who are just starting their journey into the world of programming.
      </p>
    </>
  );

  return content;
};

export default BasicModalContent;
