import React from 'react';

const SymfonyModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "#000", 
        color: "#fff",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
    };

    const content = isUkrainian ? (
        <>
            <p>
                Symfony - це фреймворк для створення веб-додатків та веб-сервісів на мові програмування PHP.
            </p>
            <p>
                <strong>Основні принципи Symfony:</strong>
            </p>
            <ul>
                <li><strong>Модульність та Компонентна архітектура:</strong> Symfony побудований на основі модульної структури та компонентної архітектури для зручності розробки та розширюваності.</li>
                <li><strong>Флексібільність та Конфігурування:</strong> Забезпечення гнучкості за допомогою конфігурування та можливості використовувати лише ті компоненти, які потрібні.</li>
                <li><strong>Співробітництво та Розробка за Стандартами:</strong> Використання стандартів розробки, таких як PSR, та підтримка співробітництва в команді.</li>
            </ul>
            <p>
                <strong>Основні компоненти Symfony:</strong>
            </p>
            <ul>
                <li><strong>Kernel:</strong> Центральна частина, яка обробляє запити та відправляє їх до різних компонентів.</li>
                <li><strong>Routing:</strong> Визначення шляхів запитів та відповідність їм контролерів.</li>
                <li><strong>DependencyInjection:</strong> Введення інших компонентів та сервісів у додаток.</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                Symfony використовується для розробки різноманітних веб-додатків, від невеликих сайтів до великих корпоративних проектів.
            </p>
            <p>
                <strong>Де вчити Symfony:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація Symfony:</strong> <a href="https://symfony.com/doc/current/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Symfony Documentation</a></li>
                <br></br>
                <li><strong>Symfony Getting Started:</strong> <a href="https://symfony.com/doc/current/setup.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Symfony Getting Started</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>Symfony Programming Language</h2>
            <p>
                Symfony is a framework for building web applications and web services using the PHP programming language.
            </p>
            <p>
                <strong>Key Principles of Symfony:</strong>
            </p>
            <ul>
                <li><strong>Modularity and Component-Based Architecture:</strong> Symfony is built on a modular structure and component-based architecture for ease of development and extensibility.</li>
                <li><strong>Flexibility and Configuration:</strong> Providing flexibility through configuration and the ability to use only the components needed.</li>
                <li><strong>Collaboration and Development Standards:</strong> Using development standards such as PSR and supporting collaboration within the team.</li>
            </ul>
            <p>
                <strong>Core Components of Symfony:</strong>
            </p>
            <ul>
                <li><strong>Kernel:</strong> The central part that handles requests and dispatches them to various components.</li>
                <li><strong>Routing:</strong> Defining paths for requests and mapping them to controllers.</li>
                <li><strong>DependencyInjection:</strong> Injecting other components and services into the application.</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                Symfony is used for developing various web applications, from small sites to large corporate projects.
            </p>
            <p>
                <strong>Where to Learn Symfony:</strong>
            </p>
            <ul>
                <li><strong>Official Symfony Documentation:</strong> <a href="https://symfony.com/doc/current/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Symfony Documentation</a></li>
                <br></br>
                <li><strong>Symfony Getting Started:</strong> <a href="https://symfony.com/doc/current/setup.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>Symfony Getting Started</a></li>
            </ul>
        </>
    );

    return content;
};

export default SymfonyModalContent;
