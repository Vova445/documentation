import React from 'react';

const APLModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        APL (A Programming Language) - це мова програмування, яка визначається своєрідним синтаксисом та великим набором математичних операторів. Вона була спроектована з орієнтацією на обчислення із використанням масивів та маніпулювання даними.
      </p>
      <p>
        <strong>Основні риси APL:</strong>
      </p>
      <ul>
        <li><strong>Масиви та Векторизація:</strong> Основним елементом APL є масиви, і вона підтримує векторизацію операцій, що дозволяє ефективно працювати зі змішаними типами даних та виконувати операції на цілих масивах одночасно.</li>
        <li><strong>Символи та Оператори:</strong> APL використовує багатий набір символів та операторів для представлення математичних та логічних операцій. Це робить код коротким та експресивним.</li>
        <li><strong>Динамічна Типізація:</strong> APL має динамічну типізацію, що дозволяє використовувати змінні без явного вказування їх типу.</li>
        <li><strong>Мова Запитів:</strong> APL використовується як мова запитів для аналізу даних та вирішення математичних задач.</li>
      </ul>
      <p>
        <strong>Застосування APL:</strong>
      </p>
      <ul>
        <li><strong>Математичні Обчислення:</strong> APL широко використовується для математичних обчислень, особливо в галузі лінійної алгебри.</li>
        <li><strong>Аналіз Даних:</strong> Завдяки короткому та експресивному синтаксису, APL часто використовується для аналізу та обробки даних.</li>
        <li><strong>Фінансові Обчислення:</strong> APL застосовується в фінансовому секторі для складних математичних розрахунків.</li>
        <li><strong>Освіта та Дослідження:</strong> Мова використовується в освіті та наукових дослідженнях для розв'язання різноманітних завдань.</li>
      </ul>
      <p>
        <strong>Де Вчити APL:</strong>
      </p>
      <ul>
        <li><strong>APL Wiki - Learn APL:</strong> <a href="https://aplwiki.com/wiki/Main_Page" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Learn APL on APL Wiki</a></li>
      </ul>
      <p>
        APL - це мова, яка відзначається своєрідним підходом до програмування та часто використовується для високопродуктивних обчислень та математичного моделювання.
      </p>
    </>
  ) : (
    <>
      <p>
        APL (A Programming Language) is a programming language characterized by its distinctive syntax and a rich set of mathematical operators. It is designed with a focus on array computation and data manipulation.
      </p>
      <p>
        <strong>Key Features of APL:</strong>
      </p>
      <ul>
        <li><strong>Arrays and Vectorization:</strong> APL revolves around arrays and supports vectorized operations, allowing efficient work with mixed data types and performing operations on entire arrays at once.</li>
        <li><strong>Symbols and Operators:</strong> APL uses a rich set of symbols and operators to represent mathematical and logical operations, making the code concise and expressive.</li>
        <li><strong>Dynamic Typing:</strong> APL features dynamic typing, allowing the use of variables without explicitly specifying their type.</li>
        <li><strong>Query Language:</strong> APL is used as a query language for data analysis and solving mathematical problems.</li>
      </ul>
      <p>
        <strong>Applications of APL:</strong>
      </p>
      <ul>
        <li><strong>Mathematical Computations:</strong> APL is widely used for mathematical computations, especially in the field of linear algebra.</li>
        <li><strong>Data Analysis:</strong> Due to its short and expressive syntax, APL is often used for data analysis and processing.</li>
        <li><strong>Financial Calculations:</strong> APL is applied in the financial sector for complex mathematical calculations.</li>
        <li><strong>Education and Research:</strong> The language is used in education and scientific research for solving diverse tasks.</li>
      </ul>
      <p>
        <strong>Where to Learn APL:</strong>
      </p>
      <ul>
        <li><strong>APL Wiki - Learn APL:</strong> <a href="https://aplwiki.com/wiki/Main_Page" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Learn APL on APL Wiki</a></li>
      </ul>
      <p>
        APL is a language known for its unique approach to programming and is frequently utilized for high-performance computing and mathematical modeling.
      </p>
    </>
  );

  return content;
};

export default APLModalContent;
