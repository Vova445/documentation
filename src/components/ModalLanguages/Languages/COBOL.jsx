import React from 'react';

const COBOLModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        COBOL (Common Business-Oriented Language) - це стара мова програмування, спроектована для бізнес-застосувань, і використовується головним чином для обробки даних та бізнес-систем.
      </p>
      <p>
        <strong>Застосування COBOL:</strong>
      </p>
      <ul>
        <li><strong>Бізнес-системи:</strong> COBOL використовується для створення бізнес-систем та обробки даних, особливо в області фінансів та банківської справи.</li>
        <li><strong>Легасі-системи:</strong> Багато старих систем та програм розроблені на COBOL, і вони продовжують використовуватися як легасі-системи.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        COBOL залишається однією з основних мов програмування для обробки даних та бізнес-застосувань, особливо в галузі фінансів.
      </p>
      <p>
        <strong>Де Вчити COBOL:</strong>
      </p>
      <ul>
        <li><strong>COBOL Tutorial - Tutorialspoint:</strong> <a href="https://www.tutorialspoint.com/cobol/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>COBOL Tutorial on TutorialsPoint</a></li>
      </ul>
      <p>
        <strong>Особливості COBOL:</strong>
      </p>
      <ul>
        <li><strong>Орієнтована на Бізнес:</strong> COBOL розроблена спеціально для вирішення задач бізнес-програмування та обробки даних.</li>
        <li><strong>Великий Термін Служби:</strong> Багато програм та систем, написаних на COBOL, мають довгий термін служби.</li>
        <li><strong>Використання в Фінансовому Секторі:</strong> COBOL широко використовується в фінансовому секторі для обробки транзакцій та звітності.</li>
      </ul>
      <p>
        COBOL залишається важливою мовою програмування в області бізнес-розробки та обробки даних.
      </p>
    </>
  ) : (
    <>
      <p>
        COBOL (Common Business-Oriented Language) is an old programming language designed for business applications and primarily used for data processing and business systems.
      </p>
      <p>
        <strong>Applications of COBOL:</strong>
      </p>
      <ul>
        <li><strong>Business Systems:</strong> COBOL is used for creating business systems and processing data, especially in the finance and banking sector.</li>
        <li><strong>Legacy Systems:</strong> Many old systems and programs are developed in COBOL and continue to be used as legacy systems.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        COBOL remains one of the primary programming languages for data processing and business applications, especially in the field of finance.
      </p>
      <p>
        <strong>Where to Learn COBOL:</strong>
      </p>
      <ul>
        <li><strong>COBOL Tutorial - Tutorialspoint:</strong> <a href="https://www.tutorialspoint.com/cobol/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>COBOL Tutorial on TutorialsPoint</a></li>
      </ul>
      <p>
        <strong>Features of COBOL:</strong>
      </p>
      <ul>
        <li><strong>Business-Oriented:</strong> COBOL is specifically designed to address business programming tasks and data processing.</li>
        <li><strong>Long Service Life:</strong> Many programs and systems written in COBOL have a long service life.</li>
        <li><strong>Usage in the Financial Sector:</strong> COBOL is widely used in the financial sector for transaction processing and reporting.</li>
      </ul>
      <p>
        COBOL remains a significant programming language in the field of business development and data processing.
      </p>
    </>
  );

  return content;
};

export default COBOLModalContent;
