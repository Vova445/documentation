import React from 'react';

const AspNetModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "pink", 
        color: "#333",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
    };

    const content = isUkrainian ? (
        <>
            <p>
                ASP.NET - це фреймворк для розробки веб-додатків та служб в мові програмування C#.
            </p>
            <p>
                <strong>Основні принципи ASP.NET:</strong>
            </p>
            <ul>
                <li><strong>Мова програмування C#:</strong> ASP.NET використовує мову програмування C# для створення динамічних та ефективних веб-додатків.</li>
                <li><strong>Модульність та Розширюваність:</strong> Використання модульної структури для полегшення розробки та розширюваності.</li>
                <li><strong>Відкритий код та Крос-платформеність:</strong> Забезпечення відкритого коду та підтримки крос-платформеності для більшої гнучкості.</li>
            </ul>
            <p>
                <strong>Основні концепції ASP.NET:</strong>
            </p>
            <ul>
                <li><strong>ASP.NET MVC:</strong> Використання шаблону проекту ASP.NET MVC для розробки веб-додатків за патерном MVC.</li>
                <li><strong>ASP.NET Web API:</strong> Розробка API за допомогою ASP.NET Web API для взаємодії з іншими додатками та службами.</li>
                <li><strong>Entity Framework:</strong> Використання Entity Framework для зручної роботи з базою даних.</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                ASP.NET використовується для розробки великих та потужних веб-додатків, зокрема корпоративних та бізнес-застосунків.
            </p>
            <p>
                <strong>Де вчити ASP.NET:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація ASP.NET:</strong> <a href="https://learn.microsoft.com/en-us/aspnet/" target="_blank" rel="noopener noreferrer" style={linkStyles}>ASP.NET Documentation</a></li>
                <br></br>
                <li><strong>ASP.NET Core Tutorial:</strong> <a href="https://docs.microsoft.com/en-us/aspnet/core/tutorials/" target="_blank" rel="noopener noreferrer" style={linkStyles}>ASP.NET Core Tutorial</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>ASP.NET Programming Language</h2>
            <p>
                ASP.NET is a framework for developing web applications and services using the C# programming language.
            </p>
            <p>
                <strong>Key Principles of ASP.NET:</strong>
            </p>
            <ul>
                <li><strong>C# Programming Language:</strong> ASP.NET utilizes the C# programming language for creating dynamic and efficient web applications.</li>
                <li><strong>Modularity and Extensibility:</strong> Using a modular structure to ease development and enhance extensibility.</li>
                <li><strong>Open Source and Cross-Platform:</strong> Providing open-source code and support for cross-platform to offer greater flexibility.</li>
            </ul>
            <p>
                <strong>Core Concepts of ASP.NET:</strong>
            </p>
            <ul>
                <li><strong>ASP.NET MVC:</strong> Using the ASP.NET MVC project template for web application development following the MVC pattern.</li>
                <li><strong>ASP.NET Web API:</strong> Developing APIs using ASP.NET Web API for interaction with other applications and services.</li>
                <li><strong>Entity Framework:</strong> Utilizing Entity Framework for convenient database operations.</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                ASP.NET is used for developing large and powerful web applications, particularly corporate and business applications.
            </p>
            <p>
                <strong>Where to Learn ASP.NET:</strong>
            </p>
            <ul>
                <li><strong>Official ASP.NET Documentation:</strong> <a href="https://learn.microsoft.com/en-us/aspnet/" target="_blank" rel="noopener noreferrer" style={linkStyles}>ASP.NET Documentation</a></li>
                <br></br>
                <li><strong>ASP.NET Core Tutorial:</strong> <a href="https://docs.microsoft.com/en-us/aspnet/core/tutorials/" target="_blank" rel="noopener noreferrer" style={linkStyles}>ASP.NET Core Tutorial</a></li>
            </ul>
        </>
    );

    return content;
};

export default AspNetModalContent;
