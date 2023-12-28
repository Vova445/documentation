import React from "react";

const FrameworksDescription = ({ isUkrainian }) => {
    return(
        <>
        <hr />
          <div className="additional-content">
  <p>
    {isUkrainian
      ? 'Фреймворк у розумінні програмування - це платформа або структура, яка надає загальний фундамент для розробки програмного забезпечення. Він містить багато готових компонентів, бібліотек та інструментів, які допомагають розробникам створювати програми або веб-додатки. Головною метою фреймворку є спростити розробку шляхом надання загальних правил та структур для вирішення типових задач.'
      : 'A framework in programming is a platform or structure that provides a general foundation for developing software. It contains many ready-made components, libraries, and tools that help developers create programs or web applications. The main purpose of a framework is to simplify development by providing common rules and structures to address typical tasks.'}
  </p>

  <p>
    {isUkrainian
      ? 'Основні характеристики фреймворків включають в себе:'
      : 'Main features of frameworks include:'}
  </p>

  <ul>
    <li>
      {isUkrainian
        ? 'Взаємодія компонентів: Фреймворк надає структуру для взаємодії компонентів, що спрощує розробку та управління великими кодовими базами.'
        : 'Component Interaction: The framework provides a structure for components to interact, simplifying development and management of large code bases.'}
    </li>
    <li>
      {isUkrainian
        ? 'Шаблони проектування: Визначені шаблони проектування та структури коду сприяють створенню ефективних та організованих додатків.'
        : 'Design Patterns: Defined design patterns and code structures aid in creating efficient and organized applications.'}
    </li>
    <li>
      {isUkrainian
        ? 'Бібліотеки та інструменти: Фреймворк постачається з попередньо вбудованими бібліотеками та інструментами, що допомагають вирішувати типові завдання без необхідності відтворення коду.'
        : 'Libraries and Tools: The framework comes with built-in libraries and tools that help solve common tasks without the need to reinvent the code.'}
    </li>
    <li>
      {isUkrainian
        ? 'Стандартизація: Фреймворк встановлює стандарти та правила для розробки, що полегшує командну роботу та обмін між розробниками.'
        : 'Standardization: The framework establishes standards and rules for development, facilitating teamwork and exchange among developers.'}
    </li>
    <li>
      {isUkrainian
        ? 'Спрощений цикл розробки: Фреймворк надає засоби для автоматизації тестування, відладки та інших етапів циклу розробки.'
        : 'Simplified Development Cycle: The framework provides tools for automating testing, debugging, and other stages of the development cycle.'}
    </li>
    <li>
      {isUkrainian
        ? 'Підтримка розширення: Деякі фреймворки дозволяють вам легко розширювати їхні можливості шляхом додавання власних модулів чи розширень.'
        : 'Extension Support: Some frameworks allow you to easily extend their capabilities by adding your own modules or extensions.'}
    </li>
  </ul>

  <p>
    {isUkrainian
      ? 'Загалом, фреймворки допомагають розробникам зосередитися на бізнес-логіці додатку, а не на вирішенні загальних завдань, які вже розв\'язані в рамках фреймворку.'
      : 'In general, frameworks help developers focus on the business logic of the application rather than solving common tasks that are already addressed within the framework. '}
  </p>
</div>
</>
    )
}

export default FrameworksDescription;