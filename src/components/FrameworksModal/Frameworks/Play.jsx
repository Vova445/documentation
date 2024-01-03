import React from 'react';

const PlayFrameworkModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "#dc5849", 
        color: "#fff",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
    };

    const content = isUkrainian ? (
        <>
            <p>
                Play Framework - це відкрите програмне забезпечення для побудови веб-додатків на мові програмування Java та Scala.
            </p>
            <p>
                <strong>Основні особливості Play Framework:</strong>
            </p>
            <ul>
                <li><strong>Модель акторів (Actor Model):</strong> Використовує модель акторів для покращення розподіленої обробки.</li>
                <li><strong>Безстатеве протоколювання (Stateless):</strong> Підтримує безстатеве протоколювання для покращення масштабованості.</li>
                <li><strong>Асинхронність:</strong> Використовує асинхронний підхід для оптимізації продуктивності.</li>
            </ul>
            <p>
                <strong>Основні концепції Play Framework:</strong>
            </p>
            <ul>
                <li><strong>HTTP-кодировка (HTTP-Based):</strong> Дозволяє побудову додатків, що обробляють HTTP запити та відповіді.</li>
                <li><strong>Шаблони (Templates):</strong> Використовує Twirl як мову шаблонізації для створення динамічних сторінок.</li>
                <li><strong>Фреймворк для REST API:</strong> Play Framework чудово підходить для розробки RESTful API.</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                Play Framework широко використовується для розробки веб-додатків, особливо там, де важлива продуктивність та асинхронність.
            </p>
            <p>
                <strong>Де вчити Play Framework:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація Play Framework:</strong> <a href="https://www.playframework.com/documentation" target="_blank" rel="noopener noreferrer" style={linkStyles}>Play Framework Documentation</a></li>
                <br></br>
                <li><strong>Play Framework Tutorial:</strong> <a href="https://www.playframework.com/getting-started" target="_blank" rel="noopener noreferrer" style={linkStyles}>Play Framework Tutorial</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>Play Framework Programming Language</h2>
            <p>
                Play Framework is open-source software for building web applications in Java and Scala programming languages.
            </p>
            <p>
                <strong>Key Features of Play Framework:</strong>
            </p>
            <ul>
                <li><strong>Actor Model:</strong> Utilizes the actor model to enhance distributed processing.</li>
                <li><strong>Stateless:</strong> Supports stateless programming for improved scalability.</li>
                <li><strong>Asynchronous:</strong> Adopts an asynchronous approach for optimized performance.</li>
            </ul>
            <p>
                <strong>Core Concepts of Play Framework:</strong>
            </p>
            <ul>
                <li><strong>HTTP-Based:</strong> Enables building applications that handle HTTP requests and responses.</li>
                <li><strong>Templates:</strong> Uses Twirl as the template language for creating dynamic pages.</li>
                <li><strong>REST API Framework:</strong> Play Framework is well-suited for developing RESTful APIs.</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                Play Framework is widely used for web application development, especially where performance and asynchronous processing are crucial.
            </p>
            <p>
                <strong>Where to Learn Play Framework:</strong>
            </p>
            <ul>
                <li><strong>Official Play Framework Documentation:</strong> <a href="https://www.playframework.com/documentation" target="_blank" rel="noopener noreferrer" style={linkStyles}>Play Framework Documentation</a></li>
                <br></br>
                <li><strong>Play Framework Tutorial:</strong> <a href="https://www.playframework.com/getting-started" target="_blank" rel="noopener noreferrer" style={linkStyles}>Play Framework Tutorial</a></li>
            </ul>
        </>
    );

    return content;
};

export default PlayFrameworkModalContent;
