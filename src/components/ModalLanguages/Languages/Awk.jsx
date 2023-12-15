import React from 'react';

const AwkModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Awk - це мова програмування та інструмент для обробки та аналізу текстових даних у форматі таблиць. Вона відома своєю зручністю та ефективністю в області обробки тексту та роботи з потоками даних.
      </p>
      <p>
        <strong>Застосування Awk:</strong>
      </p>
      <ul>
        <li><strong>Обробка Тексту:</strong> Awk часто використовується для фільтрації, обрізки та перетворення текстових даних.</li>
        <li><strong>Зведення Даних:</strong> Вона може бути використана для зведення та агрегації даних з різних джерел.</li>
        <li><strong>Сценарії Обробки Файлів:</strong> Awk дозволяє легко писати скрипти для обробки великої кількості файлів.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Awk є потужним інструментом для обробки текстових даних, і відома своєю простотою та ефективністю.
      </p>
      <p>
        <strong>Де Вчити Awk:</strong>
      </p>
      <ul>
        <li><strong>Awk User's Guide:</strong> <a href="https://www.gnu.org/software/gawk/manual/gawk.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>GNU Awk User's Guide</a></li>
        <li><strong>Awk Tutorial:</strong> <a href="https://www.tutorialspoint.com/awk/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Awk Tutorial on TutorialsPoint</a></li>
      </ul>
      <p>
        <strong>Особливості Awk:</strong>
      </p>
      <ul>
        <li><strong>Поля та Роздільники:</strong> Awk дозволяє легко робити операції з полями у текстових даних.</li>
        <li><strong>Шаблони та Дії:</strong> Вона використовує конструкції шаблонів та дій для обробки даних.</li>
        <li><strong>Вбудовані Функції:</strong> Awk має багато вбудованих функцій для обробки числових даних та рядків.</li>
      </ul>
      <p>
        Awk - інструмент, який знаходить широке застосування в обробці текстових даних та вивчається дуже швидко.
      </p>
    </>
  ) : (
    <>
      <p>
        Awk is a programming language and tool for processing and analyzing text data in tabular form. It is known for its convenience and efficiency in text processing and working with data streams.
      </p>
      <p>
        <strong>Applications of Awk:</strong>
      </p>
      <ul>
        <li><strong>Text Processing:</strong> Awk is often used for filtering, trimming, and transforming text data.</li>
        <li><strong>Data Summarization:</strong> It can be used for summarizing and aggregating data from different sources.</li>
        <li><strong>File Processing Scripts:</strong> Awk allows for easy scripting for processing a large number of files.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Awk is a powerful tool for text data processing and is known for its simplicity and efficiency.
      </p>
      <p>
        <strong>Where to Learn Awk:</strong>
      </p>
      <ul>
        <li><strong>Awk User's Guide:</strong> <a href="https://www.gnu.org/software/gawk/manual/gawk.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>GNU Awk User's Guide</a></li>
        <li><strong>Awk Tutorial:</strong> <a href="https://www.tutorialspoint.com/awk/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Awk Tutorial on TutorialsPoint</a></li>
      </ul>
      <p>
        <strong>Features of Awk:</strong>
      </p>
      <ul>
        <li><strong>Fields and Delimiters:</strong> Awk allows for easy operations on fields in text data.</li>
        <li><strong>Patterns and Actions:</strong> It uses pattern and action constructs for data processing.</li>
        <li><strong>Built-in Functions:</strong> Awk has many built-in functions for processing numeric data and strings.</li>
      </ul>
      <p>
        Awk is a tool that finds wide application in text data processing and is learned very quickly.
      </p>
    </>
  );

  return content;
};

export default AwkModalContent;
