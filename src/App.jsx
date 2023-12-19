import { useState, useEffect } from "react";
import languagesData from "./languages.json";
import frameworksData from "./frameworks.json"
import Switch from "react-switch";
import ScrollSlider from './components/Slider/Slider';
import Modal from './components/Modal/Modal';
import LanguageModal from './components/ModalLanguages/Language';



export const App = () => {
  const resources = [
    { id: 1, name: 'Codewars', link: 'https://www.codewars.com/', resourceClass: 'codewars-modal' },
    { id: 2, name: 'MDN', link: 'https://developer.mozilla.org/', resourceClass: 'mdn-modal'},
    { id: 3, name: 'Stack Overflow', link: 'https://stackoverflow.com/',  resourceClass: 'stack-modal'},
    { id: 4, name: 'LeetCode', link: 'https://leetcode.com/', resourceClass: 'leetcode-modal' },
    { id: 5, name: 'W3Schools', link: 'https://www.w3schools.com/', resourceClass: 'w3-modal' },
    { id: 6, name: 'Udemy', link: 'https://www.udemy.com', resourceClass: 'udemy-modal' },
    { id: 7, name: 'CodePen', link: 'https://codepen.io/', resourceClass: 'codepen-modal' },
    { id: 8, name: 'freeCodeCamp', link: 'https://www.freecodecamp.org/', resourceClass: 'fcc-modal' },
    { id: 9, name: 'GitHub', link: 'https://github.com/', resourceClass: 'github-modal' },
  ];

  const resourceDescriptions = {
    Codewars: {
      uk: 'Платформа для вирішення завдань з програмування',
      en: 'Platform for solving programming challenges',
    },
    MDN: {
      uk: 'MDN - це мережа, створена компанією Mozilla для розробників. За цим посиланням можна знайти корисні матеріали та ресурси.',
      en: 'MDN is a network created by Mozilla for developers. You can find useful materials and resources at this link.',
    },
    'Stack Overflow': {
      uk: 'Stack Overflow - це спільнота для програмістів, де можна задавати та відповідати на питання.',
      en: 'Stack Overflow is a community for programmers where you can ask and answer questions.',
    },
    LeetCode: {
      uk: 'Платформа для вирішення завдань з програмування',
      en: 'Platform for solving programming challenges',
    },
    W3Schools: {
      uk: 'W3Schools - це ресурс для навчання веб-розробки, який надає навчальні матеріали та уроки.',
      en: 'W3Schools is a resource for learning web development, providing educational materials and tutorials.',
    },
    Udemy: {
      uk: 'Udemy - це онлайн-платформа для навчання, яка пропонує різноманітні курси від різних авторів.',
      en: 'Udemy is an online learning platform that offers various courses from different authors.',
    },
    CodePen: {
      uk: 'CodePen - це онлайн-редактор коду та соціальне середовище для розробки.',
      en: 'CodePen is an online code editor and social environment for development.',
    },
    freeCodeCamp: {
      uk: 'freeCodeCamp - це платформа для вивчення програмування шляхом створення власних проектів.',
      en: 'freeCodeCamp is a platform for learning programming through building your own projects.',
    },
    GitHub: {
      uk: 'GitHub - це платформа для контролю версій та співпраці над програмними проектами.',
      en: 'GitHub is a version control platform and collaboration tool for software projects.',
    },
  };



  const [modalContent, setModalContent] = useState({ title: '', description: '', link: '', resourceClass: '' });
  const [isUkrainian, setIsUkrainian] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 14;
  const [currentLanguagePage, setCurrentLanguagePage] = useState(1);
  const [currentFrameworkPage, setCurrentFrameworkPage] = useState(1);


  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = (isModalOpen || selectedLanguage) ? 'hidden' : 'auto';
    };
  
    handleBodyOverflow();
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, selectedLanguage]);
  


  const openModal = (title, description, link, resourceClass) => {
    setModalContent({ title, description, link, resourceClass });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent({ title: '', description: '', link: '', resourceClass: '' });
    setIsModalOpen(false);
  };

  const handleLanguageClick = (languageId) => {
    console.log(`Clicked on language with ID: ${languageId}`);
    setSelectedLanguage(languageId);
  };

  const toggleLanguage = () => {
    setIsUkrainian((prev) => !prev);
  };


  const handleLanguagePageChange = (page) => {
    setCurrentLanguagePage(page);
  };

  const handleFrameworkPageChange = (page) => {
    setCurrentFrameworkPage(page);
  };



  const renderLanguages = () => {
    const startIndex = (currentLanguagePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedLanguages = languagesData.slice(startIndex, endIndex);
  
    return displayedLanguages.map((language) => (
      <div
        key={language.id}
        data-language={language.name}
        onClick={() => handleLanguageClick(language.name)}
        className={`language-text ${language.name.toLowerCase()}-language`}
      >
        {language.name}
      </div>
    ));
  };



  const renderFrameworks = () => {
    const startIndex = (currentFrameworkPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedFrameworks = frameworksData.slice(startIndex, endIndex);
  
    return displayedFrameworks.map((framework) => (
      <div
        key={framework.id}
        data-framework={framework.name}
        className={`framework-text ${framework.name.toLowerCase()}-framework`}
      >
        {framework.name}
      </div>
    ));
  };
  

  return (
    <>
      <header>
        <nav className="nav-page">
          <ul className="nav-list">
            <li><a href="#home">{isUkrainian ? 'Головна' : 'Home'}</a></li>
            <li><a href="#programming-languages">{isUkrainian ? 'Виберіть свою мову програмування' : 'Choose your programming language'}</a></li>
            <li><a href="#frameworks">{isUkrainian ? 'Фреймворки' : 'Frameworks'}</a></li>
            <li><a href="#other-resources">{isUkrainian ? 'Кілька інших ресурсів' : 'Other resources'}</a></li>
            <li>
              <Switch
                onChange={toggleLanguage}
                checked={isUkrainian}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={24}
                uncheckedIcon={false}
                checkedIcon={false}
                height={24}
                width={48}
                className="react-switch"
              />
              {isUkrainian ? <span style={{ marginLeft: '12px' }}>Укр</span> : <span style={{ marginLeft: '12px' }}>Eng</span>}
            </li>
          </ul>
        </nav>
      </header>

      <main id="home">
        <div className="container">
          <section className="section-one">
            <h1 className="main-title">{isUkrainian ? 'Докладні описи мов програмування та фреймворків' : 'Detailed descriptions of programming languages and frameworks'}</h1>
            <p>
              {isUkrainian
                ? 'Ласкаво просимо на мою сторінку, призначену для всіх, хто цікавиться програмуванням. Тут ви знайдете вичерпні та доступні описи різних мов програмування та фреймворків, які допоможуть вам глибше розібратися в їх функціональності та застосуванні. Вивчайте, експериментуйте та розширюйте свої знання!'
                : 'Welcome to my page, designed for everyone interested in programming. Here you will find comprehensive and accessible descriptions of various programming languages and frameworks to help you better understand their functionality and application. Learn, experiment, and expand your knowledge!'}
            </p>
          </section>

          <section className="section-two">
            <h2 className="section-title">{isUkrainian ? 'Корисні ресурси для програмістів' : 'Useful resources for programmers'}</h2>
            <ul className="resource-list">
              {resources.map(resource => (
                <li key={resource.id}>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(resource.name, resourceDescriptions[resource.name][isUkrainian ? 'uk' : 'en'], resource.link, resource.resourceClass);
                    }}
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <hr id="programming-languages"/>

          <div className="additional-content">
            <p>
              {isUkrainian
                ? 'Мова програмування - це формальний спосіб вираження вимог для комп\'ютера. Це набір інструкцій, які визначають, як виконувати певні завдання. Ось деякі ключові аспекти мов програмування:'
                : 'A programming language is a formal way of expressing instructions to a computer. It is a set of instructions that define how to perform certain tasks. Here are some key aspects of programming languages:'}
            </p>
            <ul>
              <li>
                {isUkrainian
                  ? 'Синтаксис: Спосіб написання коду, визначає його структуру та правила форматування.'
                  : 'Syntax: The way code is written, defining its structure and formatting rules.'}
              </li>
              <li>
                {isUkrainian
                  ? 'Типи даних: Категорії для зберігання та обробки інформації, такі як числа, рядки, булеві значення тощо.'
                  : 'Data Types: Categories for storing and processing information, such as numbers, strings, boolean values, etc.'}
              </li>
              <li>
                {isUkrainian
                  ? 'Змінні: Іменовані контейнери для зберігання значень, які можуть змінюватися під час виконання програми.'
                  : 'Variables: Named containers for storing values that can change during program execution.'}
              </li>
              <li>
                {isUkrainian
                  ? 'Умовні конструкції: Інструкції, які дозволяють виконувати різні дії в залежності від умов.'
                  : 'Conditional Statements: Instructions that allow performing different actions based on conditions.'}
              </li>
              <li>
                {isUkrainian
                  ? 'Цикли: Конструкції, які дозволяють повторювати виконання певного блоку коду доки або поки виконується певна умова.'
                  : 'Loops: Constructs that allow repeating the execution of a specific code block while or until a certain condition is met.'}
              </li>
              <li>
                {isUkrainian
                  ? 'Функції: Блоки коду, які можна викликати для виконання певних завдань. Вони сприяють уникатові та організації коду.'
                  : 'Functions: Code blocks that can be called to perform specific tasks. They contribute to code modularity and organization.'}
              </li>
            </ul>
            <p>
              {isUkrainian
                ? 'Існує багато мов програмування, кожна з яких призначена для вирішення конкретних завдань та має свої переваги та обмеження.'
                : 'There are many programming languages, each designed to solve specific tasks and having its own advantages and limitations.'}
            </p>
          </div>
          <section className="section-three">
            <h2 className="section-title">{isUkrainian ? 'Мови програмування' : 'Programming Languages'}</h2>
            <div className="programming-languages-container">
              {renderLanguages()}
            </div>
            <div className="pagination-controls">
              {Array.from({ length: Math.ceil(languagesData.length / itemsPerPage) }, (_, index) => index + 1).map((page) => (
                <button key={page} onClick={() => handleLanguagePageChange(page)} className={currentLanguagePage === page ? 'active' : ''}>
                  {page}
                </button>
              ))}
            </div>
          </section>
          <hr />
          <div className="additional-content">
          <p>
        {isUkrainian
          ? 'Фреймворк у розумінні програмування - це платформа або структура, яка надає загальний фундамент для розробки програмного забезпечення. Він містить багато готових компонентів, бібліотек та інструментів, які допомагають розробникам створювати програми або веб-додатки. Головною метою фреймворку є спростити розробку шляхом надання загальних правил та структур для вирішення типових задач.'
          : 'A framework in programming is a platform or structure that provides a general foundation for developing software. It contains many ready-made components, libraries, and tools that help developers create programs or web applications. The main purpose of a framework is to simplify development by providing common rules and structures to address typical tasks.'}
          </p>

          <p>Основні характеристики фреймворків включають в себе:</p>

          <ul>
            <li>Взаємодія компонентів: Фреймворк надає структуру для взаємодії компонентів, що спрощує розробку та управління великими кодовими базами.</li>
            <li>Шаблони проектування: Визначені шаблони проектування та структури коду сприяють створенню ефективних та організованих додатків.</li>
            <li>Бібліотеки та інструменти: Фреймворк постачається з попередньо вбудованими бібліотеками та інструментами, що допомагають вирішувати типові завдання без необхідності відтворення коду.</li>
            <li>Стандартизація: Фреймворк встановлює стандарти та правила для розробки, що полегшує командну роботу та обмін між розробниками.</li>
            <li>Спрощений цикл розробки: Фреймворк надає засоби для автоматизації тестування, відладки та інших етапів циклу розробки.</li>
            <li>Підтримка розширення: Деякі фреймворки дозволяють вам легко розширювати їхні можливості шляхом додавання власних модулів чи розширень.</li>
          </ul>

          <p>
            {isUkrainian
              ? 'Загалом, фреймворки допомагають розробникам зосередитися на бізнес-логіці додатку, а не на вирішенні загальних завдань, які вже розв\'язані в рамках фреймворку.'
              : 'In general, frameworks help developers focus on the business logic of the application rather than solving common tasks that are already addressed within the framework.'}
          </p>
        </div>

          <section id="frameworks" className="section-four">
            <h2 className="section-title">{isUkrainian ? 'Фреймворки' : 'Frameworks'}</h2>
            <div className="programming-frameworks-container">
              {renderFrameworks()}
            </div>
            <div className="pagination-controls">
              {Array.from({ length: Math.ceil(frameworksData.length / itemsPerPage) }, (_, index) => index + 1).map((page) => (
                <button key={page} onClick={() => handleFrameworkPageChange(page)} className={currentFrameworkPage === page ? 'active' : ''}>
                  {page}
                </button>
              ))}
            </div>
          </section>
        </div>

        {modalContent.title && (
          <Modal
            title={modalContent.title}
            description={modalContent.description}
            link={modalContent.link}
            resourceClass={modalContent.resourceClass}
            closeModal={closeModal}
            isUkrainian={isUkrainian}
          />
        )}

        {selectedLanguage && (
          <LanguageModal
            language={selectedLanguage}
            closeModal={() => setSelectedLanguage(null)}
            isUkrainian={isUkrainian}
          />
        )}
        <ScrollSlider />
      </main>
    </>
  );
};
