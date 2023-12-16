import { useState, useEffect } from "react";
import languagesData from "./languages.json";
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
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    };
    handleBodyOverflow();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);


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


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  const renderLanguages = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
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

          <section id="programming-languages" className="section-three">
        <h2 className="section-title">{isUkrainian ? 'Мови програмування' : 'Programming Languages'}</h2>
        <div className="programming-languages-container">
          {renderLanguages()}
        </div>
        <div className="pagination-controls">
          {Array.from({ length: Math.ceil(languagesData.length / itemsPerPage) }, (_, index) => index + 1).map((page) => (
            <button key={page} onClick={() => handlePageChange(page)} className={currentPage === page ? 'active' : ''}>
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
