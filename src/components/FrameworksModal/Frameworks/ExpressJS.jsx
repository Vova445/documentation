import React from 'react';

const ExpressModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
    };

    const content = isUkrainian ? (
        <>
            <p>
                Express.js - це мінімалістичний та гнучкий веб-фреймворк для Node.js, який дозволяє швидко розробляти серверні додатки та API.
            </p>
            <p>
                <strong>Основні принципи Express.js:</strong>
            </p>
            <ul>
                <li><strong>Маршрутизація:</strong> Використання маршрутів для обробки різних запитів та визначення точок доступу до ресурсів.</li>
                <li><strong>Middleware:</strong> Використання проміжного програмного забезпечення для обробки запитів до сервера та відправлення відповідей.</li>
                <li><strong>Шаблонізація:</strong> Можливість використання шаблонів для генерації HTML та інших видів відповідей.</li>
            </ul>
            <p>
                <strong>Основні концепції Express.js:</strong>
            </p>
            <ul>
                <li><strong>Роутери:</strong> Використання роутерів для групування маршрутів та покращення організації коду.</li>
                <li><strong>Види:</strong> Використання видів для рендерингу різних видів відповідей, таких як HTML, JSON тощо.</li>
                <li><strong>Статичні файли:</strong> Надання статичних файлів, таких як CSS, зображення, за допомогою вбудованого middleware.</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                Express.js використовується для швидкої розробки серверних додатків та API в середовищі Node.js.
            </p>
            <p>
                <strong>Де вчити Express.js:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація Express.js:</strong> <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Express.js Documentation</a></li>
                <br></br>
                <li><strong>MDN Web Docs - Express/Node.js:</strong> <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" target="_blank" rel="noopener noreferrer" style={linkStyles}>MDN Web Docs</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>Express.js Programming Language</h2>
            <p>
                Express.js is a minimalist and flexible web framework for Node.js, allowing for quick development of server-side applications and APIs.
            </p>
            <p>
                <strong>Key Principles of Express.js:</strong>
            </p>
            <ul>
                <li><strong>Routing:</strong> Using routes to handle different requests and define access points to resources.</li>
                <li><strong>Middleware:</strong> Utilizing middleware to process incoming requests to the server and send responses.</li>
                <li><strong>Templating:</strong> Ability to use templates for generating HTML and other types of responses.</li>
            </ul>
            <p>
                <strong>Core Concepts of Express.js:</strong>
            </p>
            <ul>
                <li><strong>Routers:</strong> Using routers to group routes and improve code organization.</li>
                <li><strong>Views:</strong> Using views to render different types of responses, such as HTML, JSON, etc.</li>
                <li><strong>Static Files:</strong> Serving static files like CSS, images, using built-in middleware.</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                Express.js is used for the rapid development of server-side applications and APIs in the Node.js environment.
            </p>
            <p>
                <strong>Where to Learn Express.js:</strong>
            </p>
            <ul>
                <li><strong>Official Express.js Documentation:</strong> <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Express.js Documentation</a></li>
                <br></br>
                <li><strong>MDN Web Docs - Express/Node.js:</strong> <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs" target="_blank" rel="noopener noreferrer" style={linkStyles}>MDN Web Docs</a></li>
            </ul>
        </>
    );

    return content;
};

export default ExpressModalContent;
