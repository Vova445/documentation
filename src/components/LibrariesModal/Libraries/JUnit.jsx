import React from 'react';

const JUnitModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FF473D",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        JUnit - це фреймворк для тестування програм на мові Java. Він дозволяє розробникам створювати та виконувати автоматизовані тести для перевірки різних аспектів програмного коду. JUnit використовується для написання тестів, які перевіряють функціональність окремих методів, класів або навіть цілих пакетів програмного коду.
      </p>
      <p>
        <strong>Основні концепції JUnit:</strong>
      </p>
      <ul>
        <li><strong>Анотації:</strong> Використовуються для позначення методів, які мають бути виконані в процесі тестування.</li>
        <li><strong>Позначки:</strong> Визначаються для визначення того, чи тест вірний чи ні, використовуючи методи-перевірки (assertions).</li>
        <li><strong>Життєвий Цикл Тесту:</strong> JUnit надає методи для налаштування та очищення середовища перед і після виконання тесту.</li>
        <li><strong>Виконання Груп Тестів:</strong> Можливість групувати тести та визначати порядок їх виконання.</li>
      </ul>
      <p>
        <strong>Застосування JUnit:</strong>
      </p>
      <p>
        JUnit використовується в широкому спектрі проектів на Java для написання автоматизованих тестів та забезпечення якості програмного коду.
      </p>
      <p>
        <strong>Де Вчитися JUnit:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація JUnit:</strong> <a href="https://junit.org/junit5/docs/current/user-guide/" target="_blank" rel="noopener noreferrer" style={linkStyles}>JUnit Docs</a></li>
        <br></br>
        <li><strong>JUnit на GitHub:</strong> <a href="https://github.com/junit-team/junit5" target="_blank" rel="noopener noreferrer" style={linkStyles}>JUnit GitHub</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>JUnit Testing Framework</h2>
      <p>
        JUnit is a testing framework for Java programs. It allows developers to create and execute automated tests to check various aspects of the source code. JUnit is used for writing tests that verify the functionality of individual methods, classes, or even entire packages of source code.
      </p>
      <p>
        <strong>Key Concepts of JUnit:</strong>
      </p>
      <ul>
        <li><strong>Annotations:</strong> Used to mark methods that should be executed during testing.</li>
        <li><strong>Assertions:</strong> Defined to determine whether a test is true or false using assertion methods.</li>
        <li><strong>Test Lifecycle:</strong> JUnit provides methods for setting up and tearing down the test environment before and after test execution.</li>
        <li><strong>Test Group Execution:</strong> Ability to group tests and define their execution order.</li>
      </ul>
      <p>
        <strong>Applications of JUnit:</strong>
      </p>
      <p>
        JUnit is used in a wide range of Java projects for writing automated tests and ensuring the quality of the source code.
      </p>
      <p>
        <strong>Where to Learn JUnit:</strong>
      </p>
      <ul>
        <li><strong>Official JUnit Documentation:</strong> <a href="https://junit.org/junit5/docs/current/user-guide/" target="_blank" rel="noopener noreferrer" style={linkStyles}>JUnit Docs</a></li>
        <br></br>
        <li><strong>JUnit on GitHub:</strong> <a href="https://github.com/junit-team/junit5" target="_blank" rel="noopener noreferrer" style={linkStyles}>JUnit GitHub</a></li>
      </ul>
    </>
  );

  return content;
};

export default JUnitModalContent;
