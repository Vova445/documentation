import React from 'react';

const RailsModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "#a31e1e",
        color: "#fff",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
    };

    const content = isUkrainian ? (
        <>
            <p>
                Ruby on Rails - це високопродуктивний веб-фреймворк, який дозволяє швидко розробляти сучасні та масштабовані веб-додатки.
            </p>
            <p>
                <strong>Основні принципи Ruby on Rails:</strong>
            </p>
            <ul>
                <li><strong>Конвенція перед конфігурацією (Convention over Configuration):</strong> Використання загальних конвенцій для автоматизації процесів і зменшення необхідності в конфігурації.</li>
                <li><strong> (Don't Repeat Yourself):</strong> Принцип, за яким велика кількість системи повинна мати тільки одне представлення кожної ідеї, щоб уникнути зайвого коду.</li>
                <li><strong>Активний запис (Active Record):</strong> Використання шаблону проектування "Активний запис" для роботи з базою даних в об'єктно-орієнтованому стилі.</li>
            </ul>
            <p>
                <strong>Основні концепції Ruby on Rails:</strong>
            </p>
            <ul>
                <li><strong>Моделі та Контролери:</strong> Розділення додатка на моделі, які відповідають за роботу з даними, та контролери, які взаємодіють із зовнішнім середовищем.</li>
                <li><strong>Міграції бази даних:</strong> Використання міграцій для контролю версій бази даних та зручного впровадження змін.</li>
                <li><strong>Решта (RESTful) маршрутизація:</strong> Використання RESTful маршрутизації для побудови логічної структури додатка.</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                Ruby on Rails використовується для швидкої розробки ефективних та сучасних веб-додатків з використанням Ruby як мови програмування.
            </p>
            <p>
                <strong>Де вчити Ruby on Rails:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація Ruby on Rails:</strong> <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Ruby on Rails Documentation</a></li>
                <br></br>
                <li><strong>Ruby on Rails Guides:</strong> <a href="https://guides.rubyonrails.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Ruby on Rails Guides</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>Ruby on Rails Programming Language</h2>
            <p>
                Ruby on Rails is a high-productivity web framework that allows for quick development of modern and scalable web applications.
            </p>
            <p>
                <strong>Key Principles of Ruby on Rails:</strong>
            </p>
            <ul>
                <li><strong>Convention over Configuration:</strong> Using common conventions to automate processes and reduce the need for configuration.</li>
                <li><strong>DRY (Don't Repeat Yourself):</strong> The principle that there should be only one representation of each idea in the system to avoid duplication of code.</li>
                <li><strong>Active Record:</strong> Utilizing the "Active Record" design pattern to work with the database in an object-oriented style.</li>
            </ul>
            <p>
                <strong>Core Concepts of Ruby on Rails:</strong>
            </p>
            <ul>
                <li><strong>Models and Controllers:</strong> Separating the application into models responsible for data handling and controllers interacting with the external environment.</li>
                <li><strong>Database Migrations:</strong> Using migrations for database version control and convenient deployment of changes.</li>
                <li><strong>RESTful Routing:</strong> Utilizing RESTful routing to build a logical structure for the application.</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                Ruby on Rails is used for rapid development of efficient and modern web applications using Ruby as the programming language.
            </p>
            <p>
                <strong>Where to Learn Ruby on Rails:</strong>
            </p>
            <ul>
                <li><strong>Official Ruby on Rails Documentation:</strong> <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Ruby on Rails Documentation</a></li>
                <br></br>
                <li><strong>Ruby on Rails Guides:</strong> <a href="https://guides.rubyonrails.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Ruby on Rails Guides</a></li>
            </ul>
        </>
    );

    return content;
};

export default RailsModalContent;
