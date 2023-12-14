import { useState } from "react";
import languagesData from "./languages.json";

export const App = () => {
  const resources = [
    { id: 1, name: 'Codewars', link: 'https://www.codewars.com/', description: 'Платформа для вирішення завдань з програмування', resourceClass: 'codewars-modal' },
    { id: 2, name: 'MDN', link: 'https://developer.mozilla.org/', description: 'MDN - це мережа, створена компанією Mozilla для розробників. За цим посиланням можна знайти корисні матеріали та ресурси.', resourceClass: 'mdn-modal'},
    { id: 3, name: 'Stack Overflow', link: 'https://stackoverflow.com/', description: 'Stack Overflow - це спільнота для програмістів, де можна задавати та відповідати на питання.' , resourceClass: 'stack-modal'},
    { id: 4, name: 'LeetCode', link: 'https://leetcode.com/', description: 'Платформа для вирішення завдань з програмування', resourceClass: 'leetcode-modal' },
    { id: 5, name: 'W3Schools', link: 'https://www.w3schools.com/', description: 'W3Schools - це ресурс для навчання веб-розробки, який надає навчальні матеріали та уроки.', resourceClass: 'w3-modal' },
    { id: 6, name: 'Udemy', link: 'https://www.udemy.com', description: 'Udemy - це онлайн-платформа для навчання, яка пропонує різноманітні курси від різних авторів.', resourceClass: 'udemy-modal' },
    { id: 7, name: 'CodePen', link: 'https://codepen.io/', description: 'CodePen - це онлайн-редактор коду та соціальне середовище для розробки.', resourceClass: 'codepen-modal' },
    { id: 8, name: 'freeCodeCamp', link: 'https://www.freecodecamp.org/', description: 'freeCodeCamp - це платформа для вивчення програмування шляхом створення власних проектів.', resourceClass: 'fcc-modal' },
    { id: 9, name: 'GitHub', link: 'https://github.com/', description: 'GitHub - це платформа для контролю версій та співпраці над програмними проектами.', resourceClass: 'github-modal' },
  ];

  const [modalContent, setModalContent] = useState({ title: '', description: '', link: '', resourceClass: '' });

  const openModal = (title, description, link, resourceClass) => {
    setModalContent({ title, description, link, resourceClass });
  };
  
  const closeModal = () => {
    setModalContent({ title: '', description: '', link: '', resourceClass: '' });
  };

  const handleLanguageClick = (languageId) => {
    console.log(`Clicked on language with ID: ${languageId}`);
  };

  return (
    <>
      <header>
      <nav className="nav-page">
        <ul className="nav-list">
          <li><a href="#home">Головна</a></li>
          <li><a href="#programming-languages">Виберіть свою мову програмування</a></li>
          <li><a href="#frameworks">Фреймворки</a></li>
          <li><a href="#other-resources">Кілька інших ресурсів</a></li>
          <li><img src="./English_language.png" className="nav-img-language" alt="Language" /></li>
        </ul>
      </nav>

      </header>

      <main id="home">
        <div className="container">
          <section className="section-one" >
            <h1 className="main-title">Докладні описи мов програмування та фреймворків</h1>
            <p>Ласкаво просимо на мою сторінку, призначену для всіх, хто цікавиться програмуванням. Тут ви знайдете вичерпні та доступні описи різних мов програмування та фреймворків, які допоможуть вам глибше розібратися в їх функціональності та застосуванні. Вивчайте, експериментуйте та розширюйте свої знання!</p>
          </section>

          <section className="section-two">
            <h2 className="section-title">Корисні ресурси для програмістів</h2>
            <ul className="resource-list">
              {resources.map(resource => (
                <li key={resource.id}>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(resource.name, resource.description, resource.link, resource.resourceClass);
                    }}
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>


          <section id="programming-languages" className="section-three">
            <h2 className="section-title">Мови програмування</h2>
            <div className="programming-languages-container">
            {languagesData.map(language => (
              <img
              key={language.id}
              src={language.imagePath}
              alt={language.name}
              onClick={() => handleLanguageClick(language.id)}
            />
            ))}
            </div>
          </section>
        </div>

        {modalContent.title && (
          <div className={`modal-overlay`} onClick={closeModal}>
            <div className={`modal-content ${modalContent.resourceClass}`} onClick={(e) => e.stopPropagation()}>
              <div className="close">
              <span className={`close-modal ${modalContent.resourceClass}`} onClick={closeModal}>&times;</span>
              </div>
              <div className="modal-content-container">
                <h3 id="modalTitle">{modalContent.title}</h3>
                <p id="modalDescription">{modalContent.description}</p>
                {modalContent.link && (
                    <a href={modalContent.link} target="_blank" rel="noreferrer noopener">
                        <button className={`modal-button-details ${modalContent.resourceClass}`}>Перейти на ресурс</button>
                    </a>
                )}
            </div>

            </div>
          </div>
        )}
      </main>
    </>
  );
};
