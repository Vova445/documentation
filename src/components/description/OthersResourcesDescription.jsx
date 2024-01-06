import React from "react";

const ResourcesDescription = ({ isUkrainian }) => {
  return (
    <>
      <hr id="resources" />
      <div className="additional-content">
        <p>
          {isUkrainian
            ? 'Інші ресурси включають в себе будь-які інструменти, бібліотеки, або онлайн-ресурси, які полегшують розробку, тестування та управління проектами. Вони можуть включати в себе такі елементи як відділиність для ведення зборки, системи контролю версій, інструменти для тестування коду, тощо.'
            : 'Other resources encompass any tools, libraries, or online resources that facilitate development, testing, and project management. They may include elements such as build automation, version control systems, tools for code testing, and more.'}
        </p>

        <p>
          {isUkrainian
            ? 'Основні характеристики інших ресурсів можуть включати:'
            : 'Key features of other resources may include:'}
        </p>

        <ul>
          <li>
            {isUkrainian
              ? 'Засоби автоматизації збірки: Інструменти, які допомагають автоматизувати процес компіляції та збирання програмного коду.'
              : 'Build Automation Tools: Tools that help automate the process of compiling and building software code.'}
          </li>
          <li>
            {isUkrainian
              ? 'Системи контролю версій: Інструменти, які дозволяють відстежувати та управляти змінами в програмному коді.'
              : 'Version Control Systems: Tools that allow tracking and managing changes in software code.'}
          </li>
          <li>
            {isUkrainian
              ? 'Інструменти для тестування коду: Засоби, які допомагають в автоматизованому тестуванні програмного коду.'
              : 'Code Testing Tools: Tools that assist in automated testing of software code.'}
          </li>
        </ul>

        <p>
          {isUkrainian
            ? 'Загалом, інші ресурси спрямовані на полегшення рутинних завдань та оптимізацію робочого процесу розробників.'
            : 'In general, other resources aim to streamline routine tasks and optimize the workflow of developers.'}
        </p>
      </div>
    </>
  );
};

export default ResourcesDescription;
