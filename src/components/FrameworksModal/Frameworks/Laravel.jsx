import React from 'react';

const LaravelModalContent = ({ isUkrainian }) => {
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
                Laravel - це високорівневий веб-фреймворк для швидкої розробки сучасних та ефективних веб-додатків.
            </p>
            <p>
                <strong>Основні принципи Laravel:</strong>
            </p>
            <ul>
                <li><strong>Елегантний синтаксис:</strong> Laravel пропонує чистий та елегантний синтаксис для розробки, що робить код зрозумілим та легким для використання.</li>
                <li><strong>Екосистема та Розширення:</strong> Laravel має розширену екосистему та підтримує велику кількість розширень для розширення функціональності.</li>
                <li><strong>Міграції та Сіди:</strong> Використання міграцій для керування базою даних та сідів для наповнення бази початковими даними.</li>
            </ul>
            <p>
                <strong>Основні концепції Laravel:</strong>
            </p>
            <ul>
                <li><strong>Маршрутизація:</strong> Визначення маршрутів для визначення того, як додаток відповідає на конкретний запит.</li>
                <li><strong>Контролери та Види:</strong> Використання контролерів для обробки логіки та видів для відображення інтерфейсу.</li>
                <li><strong>ORM Елоквент:</strong> Використання ORM Eloquent для взаємодії з базою даних у зручний об'єктно-орієнтований спосіб.</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                Laravel використовується для швидкої та продуктивної розробки веб-додатків з використанням PHP як мови програмування.
            </p>
            <p>
                <strong>Де вчити Laravel:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація Laravel:</strong> <a href="https://laravel.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Laravel Documentation</a></li>
                <br></br>
                <li><strong>Laracasts:</strong> <a href="https://laracasts.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Laracasts</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>Laravel Programming Language</h2>
            <p>
                Laravel is a high-level web framework for quickly developing modern and efficient web applications.
            </p>
            <p>
                <strong>Key Principles of Laravel:</strong>
            </p>
            <ul>
                <li><strong>Elegant Syntax:</strong> Laravel offers a clean and elegant syntax for development, making the code understandable and easy to use.</li>
                <li><strong>Ecosystem and Extensions:</strong> Laravel has an extensive ecosystem and supports a large number of extensions to extend functionality.</li>
                <li><strong>Migrations and Seeders:</strong> Using migrations for database management and seeders for populating the database with initial data.</li>
            </ul>
            <p>
                <strong>Core Concepts of Laravel:</strong>
            </p>
            <ul>
                <li><strong>Routing:</strong> Defining routes to determine how the application responds to specific requests.</li>
                <li><strong>Controllers and Views:</strong> Using controllers to handle logic and views to display the interface.</li>
                <li><strong>ORM Eloquent:</strong> Using the Eloquent ORM to interact with the database in a convenient object-oriented way.</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                Laravel is used for rapid and productive development of web applications using PHP as the programming language.
            </p>
            <p>
                <strong>Where to Learn Laravel:</strong>
            </p>
            <ul>
                <li><strong>Official Laravel Documentation:</strong> <a href="https://laravel.com/docs" target="_blank" rel="noopener noreferrer" style={linkStyles}>Laravel Documentation</a></li>
                <br></br>
                <li><strong>Laracasts:</strong> <a href="https://laracasts.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Laracasts</a></li>
            </ul>
        </>
    );

    return content;
};

export default LaravelModalContent;
