import React from "react";

const LanguagesDescription = ({ isUkrainian }) => {
  return (
    <div>
      <hr id="programming-languages" />

      <div className="additional-content">
        <p>
          {isUkrainian
            ? 'Мова програмування - це формальний спосіб вираження вимог для комп\'ютера. Це набір інструкцій, які визначають, як виконувати певні завдання. Ось деякі ключові аспекти мов програмування:'
            : 'A programming language is a formal way of expressing instructions to a computer. It is a set of instructions that define how to perform certain tasks. Here are some key aspects of programming languages:'}
        </p>
        <ul>
          <li>
            {isUkrainian
              ? 'Синтаксис: Спосіб написання коду, визначає його структуру та правила форматування.'
              : 'Syntax: The way code is written, defining its structure and formatting rules.'}
          </li>
          <li>
            {isUkrainian
              ? 'Типи даних: Категорії для зберігання та обробки інформації, такі як числа, рядки, булеві значення тощо.'
              : 'Data Types: Categories for storing and processing information, such as numbers, strings, boolean values, etc.'}
          </li>
          <li>
            {isUkrainian
              ? 'Змінні: Іменовані контейнери для зберігання значень, які можуть змінюватися під час виконання програми.'
              : 'Variables: Named containers for storing values that can change during program execution.'}
          </li>
          <li>
            {isUkrainian
              ? 'Умовні конструкції: Інструкції, які дозволяють виконувати різні дії в залежності від умов.'
              : 'Conditional Statements: Instructions that allow performing different actions based on conditions.'}
          </li>
          <li>
            {isUkrainian
              ? 'Цикли: Конструкції, які дозволяють повторювати виконання певного блоку коду доки або поки виконується певна умова.'
              : 'Loops: Constructs that allow repeating the execution of a specific code block while or until a certain condition is met.'}
          </li>
          <li>
            {isUkrainian
              ? 'Функції: Блоки коду, які можна викликати для виконання певних завдань. Вони сприяють уникатові та організації коду.'
              : 'Functions: Code blocks that can be called to perform specific tasks. They contribute to code modularity and organization.'}
          </li>
        </ul>
        <p>
          {isUkrainian
            ? 'Існує багато мов програмування, кожна з яких призначена для вирішення конкретних завдань та має свої переваги та обмеження.'
            : 'There are many programming languages, each designed to solve specific tasks and having its own advantages and limitations.'}
        </p>
      </div>
    </div>
  );
};

export default LanguagesDescription;
