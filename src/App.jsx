import { useState, useEffect } from "react";
import languagesData from "./languages.json";
import frameworksData from "./frameworks.json"
import ScrollSlider from './components/Slider/Slider';
import Modal from './components/Modal/Modal';
import LanguageModal from './components/ModalLanguages/Language';
import FrameworksModal from "./components/FrameworksModal/Frameworks";
import LanguagesDescription from "./components/description/LanguagesDescription";
import FrameworksDescription from "./components/description/FrameworksDescription";
import {ReactComponent as MenuIcon} from './svg/burger-menu-svgrepo-com.svg';
import LoaderSVG from './svg/loading-svgrepo-com.svg';
import SectionOne from "components/Sections/SectionOne";
import SectionTwo from "components/Sections/SectionTwo";
import SectionThree from "components/Sections/SectionThree";
import SectionFour from "components/Sections/SectionFour";
import SectionFive from "components/Sections/SectionFive";
import { ReactComponent as HomeIcon } from './svg/home-svgrepo-com.svg';
import { ReactComponent as LanguagesIcon } from './svg/programming-code-svgrepo-com.svg';
import { ReactComponent as ReactIcon } from './svg/react-svgrepo-com.svg';
import { ReactComponent as ResourcesIcon } from './svg/education-book-learn-school-library-svgrepo-com.svg';
import { ReactComponent as UkraineIcon } from './svg/flag-ua-svgrepo-com.svg';
import { ReactComponent as UKIcon } from './svg/united-kingdom-uk-svgrepo-com.svg';



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
  const [selectedFramework, setSelectedFramework] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 14;
  const [currentLanguagePage, setCurrentLanguagePage] = useState(1);
  const [currentFrameworkPage, setCurrentFrameworkPage] = useState(1);


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



  
  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);

  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = (isModalOpen || selectedLanguage || isMenuOpen || selectedFramework) ? 'hidden' : 'auto';
    };
  
    handleBodyOverflow();
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, selectedLanguage, isMenuOpen, selectedFramework]);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
      <img className="loader" src={LoaderSVG} alt="Loader" />
    </div>

    );
  }

  const openModal = (title, description, link, resourceClass) => {
    setModalContent({ title, description, link, resourceClass });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent({ title: '', description: '', link: '', resourceClass: '' });
    setIsModalOpen(false);
  };

  const handleLanguageClick = (languageId) => {
    console.log(`Clicked on language: ${languageId}`);
    setSelectedLanguage(languageId);
  };

  const handleFrameworkClick = (framework) => {
    console.log(`Clicked on framework: ${framework.name}`);
    setSelectedFramework(framework.name);
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
        onClick={() => handleFrameworkClick(framework)}
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
          <button className="nav-menu-button" onClick={handleMenuClick}>
            <MenuIcon className="nav-menu-icon" width={30} height={30} />
          </button>
          <ul className={`nav-list ${isMenuOpen ? 'nav-list-open' : ''}`}>
          <li><a href="#home">{isUkrainian ? <><HomeIcon /> Головна</> : <><HomeIcon /> Home</>}</a></li>
            <li><a href="#programming-languages">{isUkrainian ? <> <LanguagesIcon /> Виберіть свою мову програмування </> : <> <LanguagesIcon /> Choose your programming language </>}</a></li>
            <li><a href="#frameworks">{isUkrainian ? <> <ReactIcon /> Фреймворки </> : <> <ReactIcon /> Frameworks </>}</a></li>
            <li><a href="#programming-news">{isUkrainian ? <> <ResourcesIcon /> Кілька інших ресурсів </> : <> <ResourcesIcon /> Other resources</>}</a></li>
            <li className="language-switch-item">
              <label className="switch">
                <input type="checkbox" onChange={toggleLanguage} checked={isUkrainian} />
                <span className="slider"></span>
              </label>
              <span style={{ marginLeft: '12px', display: 'flex' }}>{isUkrainian ? <UkraineIcon /> : <UKIcon />}</span>
            </li>

          </ul>
          {isMenuOpen && (
            <div className="modal">
              <ul className="modal-list">
                <li onClick={closeMenu}><a href="#home">{isUkrainian ? 'Головна' : 'Home'}</a></li>
                <li onClick={closeMenu}><a href="#programming-languages">{isUkrainian ? 'Виберіть свою мову програмування' : 'Choose your programming language'}</a></li>
                <li onClick={closeMenu}><a href="#frameworks">{isUkrainian ? 'Фреймворки' : 'Frameworks'}</a></li>
                <li onClick={closeMenu}><a href="#programming-news">{isUkrainian ? 'Кілька інших ресурсів' : 'Other resources'}</a></li>
                <li style={{marginBottom: '20px'}} className="language-switch-item"> 
                  <label className="switch">
                    <input type="checkbox" onChange={toggleLanguage} checked={isUkrainian} />
                    <span className="slider"></span>
                  </label>
                  <span style={{ marginLeft: '12px', display: 'flex' }}>{isUkrainian ? <UkraineIcon /> : <UKIcon />}</span>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>


      <main id="home">
        <div className="container">
         <SectionOne isUkrainian={isUkrainian} />
          

          <SectionTwo isUkrainian={isUkrainian} resources={resources} openModal={openModal} resourceDescriptions={resourceDescriptions} />

          <LanguagesDescription isUkrainian={isUkrainian} />
          
          <SectionThree isUkrainian={isUkrainian} renderLanguages={renderLanguages} languagesData={languagesData} itemsPerPage={itemsPerPage} handleLanguagePageChange={handleLanguagePageChange} currentLanguagePage={currentLanguagePage} />
         
         <FrameworksDescription isUkrainian={isUkrainian} />

          <SectionFour isUkrainian={isUkrainian} renderFrameworks={renderFrameworks} frameworksData={frameworksData} itemsPerPage={itemsPerPage} handleFrameworkPageChange={handleFrameworkPageChange} currentFrameworkPage={currentFrameworkPage} />


          <SectionFive isUkrainian={isUkrainian} />
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


        {selectedFramework && (
        <FrameworksModal
          framework={selectedFramework}
          closeModal={() => setSelectedFramework(null)}
          isUkrainian={isUkrainian}
        />
      )}

        <ScrollSlider />
      </main>
    </>
  );
};
