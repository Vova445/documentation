import React from 'react';

const FlaskModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "grey",
        color: "#fff",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
    };

    const content = isUkrainian ? (
        <>
            <p>
                Flask - це легкий веб-фреймворк для створення веб-додатків на мові програмування Python. Flask має простий синтаксис та розширюється за допомогою різноманітних розширень.
            </p>
            <p>
                <strong>Основні принципи Flask:</strong>
            </p>
            <ul>
                <li><strong>Мінімалізм:</strong> Flask дотримується принципу мінімалізму, надаючи лише основні засоби для створення веб-додатків.</li>
                <li><strong>Розширюваність:</strong> Можливість легко розширювати функціональність за допомогою розширень.</li>
                <li><strong>Вбудований сервер:</strong> Flask має вбудований сервер для легкого розгортання та тестування.</li>
            </ul>
            <p>
                <strong>Основні концепції Flask:</strong>
            </p>
            <ul>
                <li><strong>Маршрутизація:</strong> Визначення URL-шляхів та їх зв'язок з функціями обробників.</li>
                <li><strong>Шаблоні:</strong> Використання шаблонів для відображення HTML-сторінок.</li>
                <li><strong>Розширення:</strong> Використання розширень для додаткової функціональності, такої як робота з базою даних, аутентифікація тощо.</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                Flask ідеально підходить для швидкого створення веб-додатків, особливо тих, які не вимагають великої складності та розширеної функціональності.
            </p>
            <p>
                <strong>Де вчити Flask:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація Flask:</strong> <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Flask</a></li>
                <br></br>
                <li><strong>Flask Tutorial:</strong> <a href="https://flask.palletsprojects.com/en/2.1.x/tutorial/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Flask Tutorial</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>Flask Programming Language</h2>
            <p>
                Flask is a lightweight web framework for building web applications in the Python programming language. Flask has a simple syntax and is extensible through various extensions.
            </p>
            <p>
                <strong>Key Principles of Flask:</strong>
            </p>
            <ul>
                <li><strong>Minimality:</strong> Flask adheres to the principle of minimality, providing only essential tools for building web applications.</li>
                <li><strong>Extensibility:</strong> The ability to easily extend functionality through extensions.</li>
                <li><strong>Built-in Server:</strong> Flask comes with a built-in server for easy deployment and testing.</li>
            </ul>
            <p>
                <strong>Core Concepts of Flask:</strong>
            </p>
            <ul>
                <li><strong>Routing:</strong> Defining URL paths and associating them with handler functions.</li>
                <li><strong>Templates:</strong> Using templates to render HTML pages.</li>
                <li><strong>Extensions:</strong> Utilizing extensions for additional functionality, such as database handling, authentication, etc.</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                Flask is ideal for quickly creating web applications, especially those that do not require a high level of complexity and advanced functionality.
            </p>
            <p>
                <strong>Where to Learn Flask:</strong>
            </p>
            <ul>
                <li><strong>Official Flask Documentation:</strong> <a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Flask</a></li>
                <br></br>
                <li><strong>Flask Tutorial:</strong> <a href="https://flask.palletsprojects.com/en/2.1.x/tutorial/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Flask Tutorial</a></li>
            </ul>
        </>
    );

    return content;
};

export default FlaskModalContent;
