import React from 'react';

const PythonModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Python - високорівнева, інтерпретована мова програмування, яка визначається своєю читабельністю та чистотою синтаксису. Python підтримує об'єктно-орієнтоване, імперативне та функціональне програмування, роблячи його універсальним для різних задач.
      </p>
      <p>
        <strong>Застосування Python:</strong>
      </p>
      <ul>
        <li><strong>Веб-розробка:</strong> Python використовується для створення веб-додатків за допомогою фреймворків, таких як Django чи Flask.</li>
        <li><strong>Аналіз даних та наука про дані:</strong> Python є популярним вибором для обробки та аналізу даних, використовуючи бібліотеки, такі як Pandas, NumPy та інші.</li>
        <li><strong>Штучний інтелект та машинне навчання:</strong> Python використовується для розробки моделей штучного інтелекту та алгоритмів машинного навчання, зокрема за допомогою бібліотек TensorFlow чи PyTorch.</li>
        <li><strong>Сценарії та автоматизація:</strong> Python може бути використаний для написання сценаріїв та автоматизації завдань завдяки своїй простоті та ефективності.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Python відзначається своєю загальноприйнятною фразою "зручніше читати, легше писати", що вказує на його фокус на зрозумілості та простоті використання.
      </p>
      <p>
        <strong>Де вчити Python:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Python:</strong>   <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple'}}>Python Documentation</a></li>
        <li><strong>Курси на платформі Python.org:</strong>   <a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Python.org Tutorial</a></li>
      </ul>
      <p>
        <strong>Унікальні риси Python:</strong>
      </p>
      <ul>
        <li><strong>Читабельний синтаксис:</strong> Python відомий своїм зрозумілим та читабельним синтаксисом, що полегшує розробку та сприяє співпраці.</li>
        <li><strong>Загальне використання:</strong> Python є мовою програмування загального використання, що дозволяє вам вирішувати різні завдання.</li>
        <li><strong>Активна спільнота:</strong> Python має велику та активну спільноту, яка надає підтримку та розвиває екосистему мови.</li>
      </ul>
      <p>
        Python - це мова програмування, яка відмінно підходить як для початківців, так і для досвідчених розробників.
      </p>
    </>
  ) : (         
    <>
      <p>
        Python is a high-level, interpreted programming language known for its readability and clean syntax. Python supports object-oriented, imperative, and functional programming, making it versatile for various tasks.
      </p>
      <p>
        <strong>Applications of Python:</strong>
      </p>
      <ul>
        <li><strong>Web Development:</strong> Python is used for building web applications using frameworks such as Django or Flask.</li>
        <li><strong>Data Analysis and Data Science:</strong> Python is a popular choice for processing and analyzing data using libraries like Pandas, NumPy, and others.</li>
        <li><strong>Artificial Intelligence and Machine Learning:</strong> Python is used for developing artificial intelligence models and machine learning algorithms, particularly with libraries like TensorFlow or PyTorch.</li>
        <li><strong>Scripting and Automation:</strong> Python can be used for writing scripts and automating tasks due to its simplicity and efficiency.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Python is known for the widely accepted phrase "more readable, easier to write," emphasizing its focus on understandability and ease of use.
      </p>
      <p>
        <strong>Where to Learn Python:</strong>
      </p>
      <ul>
      <ul>
  <li>
    <strong>Official Python Documentation: </strong> 
    <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple'}}>
      Python Documentation
    </a>
  </li>
  <li>
    <strong>Courses on Python.org: </strong> 
    <a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>
      Python.org Tutorial
    </a>
  </li>
</ul>
  </ul>
      <p>
        <strong>Unique Features of Python:</strong>
      </p>
      <ul>
        <li><strong>Readable Syntax:</strong> Python is known for its understandable and readable syntax, making development easier and promoting collaboration.</li>
        <li><strong>General-Purpose:</strong> Python is a general-purpose programming language that allows you to solve various tasks.</li>
        <li><strong>Active Community:</strong> Python has a large and active community that provides support and evolves the language's ecosystem.</li>
      </ul>
      <p>
        Python is a programming language suitable for both beginners and experienced developers.
      </p>
    </>
  );
  return content;
};

export default PythonModalContent;
