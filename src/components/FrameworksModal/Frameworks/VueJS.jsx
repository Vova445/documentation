import React from 'react';

const VueModalContent = ({ isUkrainian }) => {
    const linkStyles = {
        backgroundColor: "#4FC08D",
        color: "#fff",
        borderRadius: "10px",
        textDecoration: 'none',
        padding: '3px'
      };

    const content = isUkrainian ? (
        <>
            <p>
                Vue.js - це прогресивний JavaScript фреймворк для створення користувацьких інтерфейсів.
            </p>
            <p>
                <strong>Основні принципи Vue.js:</strong>
            </p>
            <ul>
                <li><strong>Прогресивність:</strong> Vue.js легко внедрюється в проект поступово, що дозволяє використовувати лише ту частину, яка потрібна.</li>
                <li><strong>Реактивність:</strong> Vue.js використовує реактивний підхід для автоматичного оновлення інтерфейсу при зміні даних.</li>
                <li><strong>Компоненти:</strong> Vue.js базується на компонентній архітектурі, де кожен компонент відповідає за свою частину інтерфейсу.</li>
            </ul>
            <p>
                <strong>Основні концепції Vue.js:</strong>
            </p>
            <ul>
                <li><strong>Директиви:</strong> Vue.js використовує директиви для зручної маніпуляції DOM-елементами в шаблонах.</li>
                <li><strong>Vue CLI:</strong> Командний інтерфейс для швидкого старту проектів та взаємодії з ними.</li>
                <li><strong>Vue Router:</strong> Офіційний маршрутизатор Vue для створення SPA (Single Page Application).</li>
            </ul>
            <p>
                <strong>Місце в програмуванні:</strong>
            </p>
            <p>
                Vue.js часто використовується для створення користувацьких інтерфейсів в середніх та невеликих проектах, де важлива простота та продуктивність.
            </p>
            <p>
                <strong>Де вчити Vue.js:</strong>
            </p>
            <ul>
                <li><strong>Офіційна документація Vue.js:</strong> <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Vue.js</a></li>
                <br></br>
                <li><strong>Vue.js Guide:</strong> <a href="https://vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Vue.js Guide</a></li>
            </ul>
        </>
    ) : (
        <>
            <h2>Vue.js Programming Language</h2>
            <p>
                Vue.js is a progressive JavaScript framework for building user interfaces.
            </p>
            <p>
                <strong>Key Principles of Vue.js:</strong>
            </p>
            <ul>
                <li><strong>Progressiveness:</strong> Vue.js can be incrementally adopted, allowing the use of only the needed parts in a project.</li>
                <li><strong>Reactivity:</strong> Vue.js employs a reactive approach for automatically updating the interface when data changes.</li>
                <li><strong>Components:</strong> Vue.js is built on a component-based architecture, where each component is responsible for its part of the interface.</li>
            </ul>
            <p>
                <strong>Core Concepts of Vue.js:</strong>
            </p>
            <ul>
                <li><strong>Directives:</strong> Vue.js uses directives for convenient manipulation of DOM elements in templates.</li>
                <li><strong>Vue CLI:</strong> Command-line interface for quickly starting and interacting with projects.</li>
                <li><strong>Vue Router:</strong> The official Vue router for creating Single Page Applications (SPA).</li>
            </ul>
            <p>
                <strong>Place in Programming:</strong>
            </p>
            <p>
                Vue.js is often used for creating user interfaces in medium and small projects, where simplicity and productivity are essential.
            </p>
            <p>
                <strong>Where to Learn Vue.js:</strong>
            </p>
            <ul>
                <li><strong>Official Vue.js Documentation:</strong> <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Vue.js</a></li>
                <br></br>
                <li><strong>Vue.js Guide:</strong> <a href="https://vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Vue.js Guide</a></li>
            </ul>
        </>
    );

    return content;
};

export default VueModalContent;
