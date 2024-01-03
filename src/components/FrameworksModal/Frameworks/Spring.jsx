import React from 'react';

const SpringModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "green", 
        color: "#fff",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
    };

    const content = isUkrainian ? (
        <>
            <p>
                Spring - це універсальний фреймворк для створення сучасних веб-додатків та служб. Spring спрощує розробку, забезпечуючи розв'язання для складних завдань, таких як управління транзакціями, доступ до бази даних та безпека.
            </p>
            <p>
                <strong>Основні принципи Spring:</strong>
            </p>
            <ul>
                <li><strong>Інверсія управління:</strong> Використання інверсії управління для підвищення модульності та зручності тестування.</li>
                <li><strong>Внедрення залежностей:</strong> Spring реалізує внедрення залежностей, що полегшує створення високопродуктивних та легко тестованих додатків.</li>
                <li><strong>Модульність:</strong> Використання модульної архітектури для високого рівня повторного використання коду.</li>
            </ul>
            <p>
                <strong>Основні концепції Spring:</strong>
            </p>
            <ul>
                <li><strong>Spring Boot:</strong> Використання Spring Boot для швидкої та легкої конфігурації та створення додатків.</li>
                <li><strong>Spring MVC:</strong> Використання Spring MVC для розробки веб-додатків та API.</li>
                <li><strong>Spring Security:</strong> Використання Spring Security для забезпечення аутентифікації та авторизації.</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                Spring використовується для створення різноманітних застосунків, від веб-додатків до корпоративних служб, завдяки своїм різноманітним модулям.
            </p>
            <p>
                <strong>Де вчити Spring:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація Spring:</strong> <a href="https://spring.io/guides" target="_blank" rel="noopener noreferrer" style={linkStyles}>Spring Guides</a></li>
                <br></br>
                <li><strong>Spring Framework Documentation:</strong> <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Spring Framework Documentation</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>Spring Programming Language</h2>
            <p>
                Spring is a versatile framework for building modern web applications and services. Spring simplifies development by providing solutions for complex tasks such as transaction management, database access, and security.
            </p>
            <p>
                <strong>Key Principles of Spring:</strong>
            </p>
            <ul>
                <li><strong>Inversion of Control:</strong> Utilizing Inversion of Control to enhance modularity and ease of testing.</li>
                <li><strong>Dependency Injection:</strong> Implementing dependency injection for creating highly productive and easily testable applications.</li>
                <li><strong>Modularity:</strong> Using a modular architecture for high-level code reuse.</li>
            </ul>
            <p>
                <strong>Core Concepts of Spring:</strong>
            </p>
            <ul>
                <li><strong>Spring Boot:</strong> Using Spring Boot for quick and easy configuration and application creation.</li>
                <li><strong>Spring MVC:</strong> Employing Spring MVC for the development of web applications and APIs.</li>
                <li><strong>Spring Security:</strong> Using Spring Security for authentication and authorization.</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                Spring is used for creating a variety of applications, from web applications to enterprise services, thanks to its diverse set of modules.
            </p>
            <p>
                <strong>Where to Learn Spring:</strong>
            </p>
            <ul>
                <li><strong>Official Spring Documentation:</strong> <a href="https://spring.io/guides" target="_blank" rel="noopener noreferrer" style={linkStyles}>Spring Guides</a></li>
                <br></br>
                <li><strong>Spring Framework Documentation:</strong> <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/web.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Spring Framework Documentation</a></li>
            </ul>
        </>
    );

    return content;
};

export default SpringModalContent;
