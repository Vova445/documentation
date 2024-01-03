import React from 'react';

const DjangoModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "#331",
        color: "#fff",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
    };

    const content = isUkrainian ? (
        <>
            <p>
                Django - це високорівневий веб-фреймворк для швидкої розробки стабільних та масштабованих веб-додатків на мові програмування Python.
            </p>
            <p>
                <strong>Основні принципи Django:</strong>
            </p>
            <ul>
                <li><strong>Модель-Вид-Контролер (MVC):</strong> Django використовує парадигму MVT, що є модифікацією концепції MVC.</li>
                <li><strong>ORM (Object-Relational Mapping):</strong> Django забезпечує ORM для зручної роботи з базою даних, використовуючи об'єктно-реляційний підхід.</li>
                <li><strong>Адміністративний панель:</strong> Включена адміністративна панель для простого управління даними та адміністрування.</li>
            </ul>
            <p>
                <strong>Основні концепції Django:</strong>
            </p>
            <ul>
                <li><strong>URLconf:</strong> Конфігурація URL для визначення шляхів та їх зв'язку з відповідними видами.</li>
                <li><strong>Шаблони:</strong> Використання шаблонів для розділення логіки та представлення веб-сторінок.</li>
                <li><strong>Middleware:</strong> Проміжний програмний засіб для розширення функціональності Django за допомогою власних обробників.</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                Django використовується для розробки різноманітних веб-додатків, включаючи великі та складні системи з багатофункціональністю.
            </p>
            <p>
                <strong>Де вчити Django:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація Django:</strong> <a href="https://docs.djangoproject.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Django</a></li>
                <br></br>
                <li><strong>Django Tutorial:</strong> <a href="https://docs.djangoproject.com/en/3.2/intro/tutorial01/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Django Tutorial</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>Django Programming Language</h2>
            <p>
                Django is a high-level web framework for rapid development of stable and scalable web applications using the Python programming language.
            </p>
            <p>
                <strong>Key Principles of Django:</strong>
            </p>
            <ul>
                <li><strong>Model-View-Controller (MVC):</strong> Django uses the MVT paradigm, which is a modification of the MVC concept.</li>
                <li><strong>Object-Relational Mapping (ORM):</strong> Django provides ORM for convenient database operations, using an object-relational approach.</li>
                <li><strong>Admin Panel:</strong> Built-in admin panel for easy data management and administration.</li>
            </ul>
            <p>
                <strong>Core Concepts of Django:</strong>
            </p>
            <ul>
                <li><strong>URLconf:</strong> URL configuration to define paths and associate them with corresponding views.</li>
                <li><strong>Templates:</strong> Use of templates to separate logic and presentation of web pages.</li>
                <li><strong>Middleware:</strong> Middleware for extending Django's functionality with custom processors.</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                Django is used for developing various web applications, including large and complex systems with multifunctionality.
            </p>
            <p>
                <strong>Where to Learn Django:</strong>
            </p>
            <ul>
                <li><strong>Official Django Documentation:</strong> <a href="https://docs.djangoproject.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Django</a></li>
                <br></br>
                <li><strong>Django Tutorial:</strong> <a href="https://docs.djangoproject.com/en/3.2/intro/tutorial01/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Django Tutorial</a></li>
            </ul>
        </>
    );

    return content;
};

export default DjangoModalContent;
