import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import languagesData from "./languages.json";
import frameworksData from "./frameworks.json";
import librariesData from "./libraries.json";
import resourcesData from './resources.json';
import ScrollSlider from './components/Slider/Slider';
import Modal from './components/Modal/Modal';
import LanguageModal from './components/ModalLanguages/Language';
import FrameworksModal from "./components/FrameworksModal/Frameworks";
import LibrariesModal from "components/LibrariesModal/Libraries";
import OtherResourcesModal from "components/OtherResourcesModal/OtherResources";
import LanguagesDescription from "./components/description/LanguagesDescription";
import FrameworksDescription from "./components/description/FrameworksDescription";
import LibrariesDescription from "components/description/LibrariesDescription";
import ResourcesDescription from "components/description/OthersResourcesDescription";
import {ReactComponent as MenuIcon} from './svg/burger-menu-svgrepo-com.svg';
import LoaderSVG from './svg/loading-svgrepo-com.svg';
import SectionOne from "components/Sections/SectionOne";
import SectionTwo from "components/Sections/SectionTwo";
import SectionThree from "components/Sections/SectionThree";
import SectionFour from "components/Sections/SectionFour";
import SectionFive from "components/Sections/SectionFive";
import SectionSix from "components/Sections/SectionSix";
import SectionSeven from "components/Sections/SectionSeven";
import Footer from "components/Footer/Footer";
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
  const [selectedLibrary, setSelectedLibrary] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrollSliderVisible, setIsScrollSliderVisible] = useState(true);

  const itemsPerPage = 14;
  const [currentLanguagePage, setCurrentLanguagePage] = useState(1);
  const [currentFrameworkPage, setCurrentFrameworkPage] = useState(1);
  const [currentLibraryPage, setCurrentLibraryPage] = useState(1);
  const [currentResourcePage, setCurrentResourcePage] = useState(1);
  



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
      document.body.style.overflow = (isModalOpen || selectedLanguage || isMenuOpen || selectedFramework || selectedLibrary || selectedResource) ? 'hidden' : 'auto';
    };
  
    handleBodyOverflow();
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, selectedLanguage, isMenuOpen, selectedFramework, selectedLibrary, selectedResource]);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  
  useEffect(() => {
    setIsScrollSliderVisible(!isMenuOpen);
  }, [isMenuOpen]);

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
  const handleLibraryClick = (library) => {
    console.log(`Clicked on library: ${library.name}`);
    setSelectedLibrary(library.name); 
  };


  const handleResourceClick = (resource) => {
    console.log(`Clicked on resource: ${resource.name}`);
    setSelectedResource(resource);
    openModal(resource.name, resourceDescriptions[resource.name][isUkrainian ? 'uk' : 'en'], resource.link, resource.resourceClass);
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

  const handleLibraryPageChange = (page) => {
    setCurrentLibraryPage(page);
  };

  const handleResourcePageChange = (page) => {
    setCurrentResourcePage(page);
  };




  const handleNavLinkClick = (event, target) => {
    event.preventDefault();
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const renderLanguages = () => {
    const startIndex = (currentLanguagePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedLanguages = languagesData.slice(startIndex, endIndex);
  
    return (
      <div className="programming-languages-container">
        {displayedLanguages.map((language) => (
          <div key={language.id}>
            <div
              data-language={language.name}
              onClick={() => handleLanguageClick(language.name)}
              className={`language-text ${language.name.toLowerCase()}-language`}
            >
            </div>
            <div className="language-name">
              {language.name}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  


  const renderFrameworks = () => {
    const startIndex = (currentFrameworkPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedFrameworks = frameworksData.slice(startIndex, endIndex);
  
    return (
      <div className="programming-languages-container">
        {displayedFrameworks.map((framework) => (
          <div key={framework.id} className="framework-container">
            <div
              data-framework={framework.name}
              onClick={() => handleFrameworkClick(framework)}
              className={`framework-text ${framework.name.toLowerCase()}-framework`}
            >
              </div>
              <div className="language-name">
              {framework.name}
            </div>
            </div>
        ))}
      </div>
    );
  };



  const renderLibraries = () => {
    const startIndex = (currentLibraryPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedLibraries = librariesData.slice(startIndex, endIndex);
  
    return (
      <div className="programming-languages-container">
        {displayedLibraries.map((library) => (
          <div key={library.id} className="library-container">
            <div
              data-library={library.name}
              onClick={() => handleLibraryClick(library)}
              className={`library-text ${library.name.toLowerCase().replace(' ', '-')}-library`}
            ></div>
            <div className="language-name">{library.name}</div>
          </div>
        ))}
      </div>
    );
  };
  

  const renderResources = () => {
    const startIndex = (currentResourcePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedResources = resourcesData.slice(startIndex, endIndex);

    return (
      <div className="programming-languages-container">
        {displayedResources.map((resource) => (
          <div key={resource.id} className="resource-container">
            <div
              data-resource={resource.name}
              onClick={() => handleResourceClick(resource)}
              className={`resource-text ${resource.name.toLowerCase().replace(' ', '-')}-resource`}
            ></div>
            <div className="language-name">{resource.name}</div>
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <>
      <header>
        <nav className="nav-page">
          <button className="nav-menu-button" onClick={handleMenuClick}>
            <MenuIcon className="nav-menu-icon" width={30} height={30} />
          </button>
          <ul className={`nav-list ${isMenuOpen ? 'nav-list-open' : ''}`}>
          <li><Link to="/" onClick={(e) => handleNavLinkClick(e, 'home')}> {isUkrainian ? <><HomeIcon /> Головна</> : <><HomeIcon /> Home</>} </Link></li>
            <li> <Link to="/" onClick={(e) => handleNavLinkClick(e, 'programming-languages')}> {isUkrainian ? <> <LanguagesIcon /> Виберіть свою мову програмування </> : <> <LanguagesIcon /> Choose your programming language </>} </Link></li>
            <li><Link to="/" onClick={(e) => handleNavLinkClick(e, 'frameworks')}> {isUkrainian ? <> <ReactIcon /> Фреймворки </> : <> <ReactIcon /> Frameworks </>} </Link></li>
            <li><Link to="/" onClick={(e) => handleNavLinkClick(e, 'programming-resources')}> {isUkrainian ? <> <ResourcesIcon /> Кілька інших ресурсів </> : <> <ResourcesIcon /> Other resources</>}</Link></li>
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
                <li onClick={closeMenu}>
                  <Link to="/" onClick={(e) => handleNavLinkClick(e, 'home')}>{isUkrainian ? <><HomeIcon /> Головна</> : <><HomeIcon /> Home</>}</Link></li>
                <li onClick={closeMenu}>
                  <Link to="/" onClick={(e) => handleNavLinkClick(e, 'programming-languages')}> {isUkrainian ? <> <LanguagesIcon /> Виберіть свою мову програмування </> : <> <LanguagesIcon /> Choose your programming language </>}</Link></li>
                <li onClick={closeMenu}><Link to="/" onClick={(e) => handleNavLinkClick(e, 'frameworks')}>{isUkrainian ? <> <ReactIcon /> Фреймворки </> : <> <ReactIcon /> Frameworks </>}</Link></li>
                <li onClick={closeMenu}><Link to="/" onClick={(e) => handleNavLinkClick(e, 'programming-resources')}>{isUkrainian ? <> <ResourcesIcon /> Кілька інших ресурсів </> : <> <ResourcesIcon /> Other resources</>}</Link></li>
                <li style={{ marginBottom: '20px' }} className="language-switch-item">
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


          <LibrariesDescription isUkrainian={isUkrainian} />


          <SectionFive isUkrainian={isUkrainian} renderLibraries={renderLibraries} librariesData={librariesData} itemsPerPage={itemsPerPage} handleLibraryPageChange={handleLibraryPageChange} currentLibraryPage={currentLibraryPage} />
          <ResourcesDescription isUkrainian={isUkrainian} />

          <SectionSix isUkrainian={isUkrainian} renderResources={renderResources} resourcesData={resourcesData} itemsPerPage={itemsPerPage} handleResourcePageChange={handleResourcePageChange} currentResourcePage={currentResourcePage} />


          <SectionSeven isUkrainian={isUkrainian} />
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


    {selectedLibrary && (
      <LibrariesModal
        library={selectedLibrary}
        closeModal={() => setSelectedLibrary(null)}
        isUkrainian={isUkrainian}
      />
    )}

    {selectedResource && (
      <OtherResourcesModal
        resource={selectedResource.name}
        closeModal={() => setSelectedResource(null)}
        isUkrainian={isUkrainian}
      />
    )}


    {isScrollSliderVisible && <ScrollSlider />}
      </main>


    
      <div className="container">
        <hr></hr>
        <Footer isUkrainian={isUkrainian}/>
       </div>
     
    </>
  );
};
