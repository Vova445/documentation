import React from 'react';

const MeteorModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "#de4f4f", 
        color: "#fff",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
    };

    const content = isUkrainian ? (
        <>
            <p>
                Meteor - це повністю JavaScript фреймворк, який використовується для створення сучасних веб-додатків.
            </p>
            <p>
                <strong>Основні особливості Meteor:</strong>
            </p>
            <ul>
                <li><strong>Повністю JavaScript:</strong> Meteor використовує JavaScript як на стороні клієнта, так і на стороні сервера.</li>
                <li><strong>Real-time оновлення:</strong> Забезпечує автоматичні оновлення даних на стороні клієнта при зміні на сервері.</li>
                <li><strong>Однорівнева база даних:</strong> Використовує MongoDB як базу даних для простого взаємодії між клієнтом та сервером.</li>
            </ul>
            <p>
                <strong>Основні концепції Meteor:</strong>
            </p>
            <ul>
                <li><strong>Пакети (Packages):</strong> Використовується система пакетів для додавання функціональності та розширення можливостей.</li>
                <li><strong>Методи та Публікації:</strong> Meteor надає методи для взаємодії з базою даних та публікації для надсилання даних на клієнт.</li>
                <li><strong>Шаблони (Templates):</strong> Використовує Blaze або React для побудови користувацьких інтерфейсів.</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                Meteor часто використовується для розробки сучасних веб-додатків з реальним часом оновлення та однорівневою базою даних.
            </p>
            <p>
                <strong>Де вчити Meteor:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація Meteor:</strong> <a href="https://docs.meteor.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Meteor Documentation</a></li>
                <br></br>
                <li><strong>Meteor Tutorial:</strong> <a href="https://www.meteor.com/tutorials/react/creating-an-app" target="_blank" rel="noopener noreferrer" style={linkStyles}>Meteor Tutorial</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>Meteor Programming Language</h2>
            <p>
                Meteor is a full-stack JavaScript framework used to build modern web applications.
            </p>
            <p>
                <strong>Key Features of Meteor:</strong>
            </p>
            <ul>
                <li><strong>Full-stack JavaScript:</strong> Meteor uses JavaScript both on the client and server sides.</li>
                <li><strong>Real-time Updates:</strong> Provides automatic data updates on the client when changes occur on the server.</li>
                <li><strong>Single-level Database:</strong> Uses MongoDB as the database for seamless interaction between the client and server.</li>
            </ul>
            <p>
                <strong>Core Concepts of Meteor:</strong>
            </p>
            <ul>
                <li><strong>Packages:</strong> Utilizes a package system for adding functionality and extending capabilities.</li>
                <li><strong>Methods and Publications:</strong> Meteor provides methods for interacting with the database and publications for sending data to the client.</li>
                <li><strong>Templates:</strong> Uses Blaze or React to build user interfaces.</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                Meteor is often used for developing modern web applications with real-time updates and a single-level database.
            </p>
            <p>
                <strong>Where to Learn Meteor:</strong>
            </p>
            <ul>
                <li><strong>Official Meteor Documentation:</strong> <a href="https://docs.meteor.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Meteor Documentation</a></li>
                <br></br>
                <li><strong>Meteor Tutorial:</strong> <a href="https://www.meteor.com/tutorials/react/creating-an-app" target="_blank" rel="noopener noreferrer" style={linkStyles}>Meteor Tutorial</a></li>
            </ul>
        </>
    );

    return content;
};

export default MeteorModalContent;
