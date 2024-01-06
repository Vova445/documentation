import React from "react";

const LibrariesDescription = ({ isUkrainian }) => {
    return (
        <>
            <hr id="libraries" />
            <div className="additional-content">
                <p>
                    {isUkrainian
                        ? 'Бібліотека в програмуванні - це набір функцій або об\'єктів, які допомагають вирішувати певні завдання. Вони призначені для використання в різних програмах та можуть прискорювати розробку, надаючи готові рішення для типових проблем.'
                        : 'A library in programming is a collection of functions or objects that help solve specific tasks. They are designed for use in various programs and can accelerate development by providing ready-made solutions for common problems.'}
                </p>

                <p>
                    {isUkrainian
                        ? 'Основні характеристики бібліотек включають в себе:'
                        : 'Main features of libraries include:'}
                </p>

                <ul>
                    <li>
                        {isUkrainian
                            ? 'Виконання конкретних завдань: Бібліотеки спрощують розробку, надаючи функції або об\'єкти для конкретних задач.'
                            : 'Performing specific tasks: Libraries simplify development by providing functions or objects for specific tasks.'}
                    </li>
                    <li>
                        {isUkrainian
                            ? 'Підтримка утиліт та інструментів: Бібліотеки можуть містити корисні утиліти та інструменти для полегшення розробки.'
                            : 'Support for utilities and tools: Libraries may contain useful utilities and tools to facilitate development.'}
                    </li>
                    <li>
                        {isUkrainian
                            ? 'Інтеграція з іншими програмами: Бібліотеки дозволяють використовувати їх у різних програмах та проектах.'
                            : 'Integration with other programs: Libraries allow their use in various programs and projects.'}
                    </li>
                </ul>

                <p>
                    {isUkrainian
                        ? 'Загалом, бібліотеки є важливим елементом розробки програмного забезпечення, сприяючи використанню готових рішень та прискорюючи процес розробки.'
                        : 'In general, libraries are an essential element of software development, promoting the use of ready-made solutions and accelerating the development process.'}
                </p>
            </div>
        </>
    );
};

export default LibrariesDescription;
