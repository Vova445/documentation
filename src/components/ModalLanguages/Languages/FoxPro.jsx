import React from 'react';

const FoxProModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            FoxPro - це відома мова програмування та система керування базами даних (DBMS), розроблена для роботи з даними та створення бізнес-застосунків.
          </p>
          <p>
            <strong>Застосування FoxPro:</strong>
          </p>
          <ul>
            <li><strong>Бази Даних:</strong> FoxPro використовується для роботи з реляційними базами даних та забезпечує широкі можливості для управління інформацією.</li>
            <li><strong>Інтерфейс Користувача:</strong> Мова має можливості для створення графічного інтерфейсу користувача для зручної взаємодії з програмами.</li>
            <li><strong>Розробка Бізнес-Застосунків:</strong> FoxPro використовується для швидкої розробки бізнес-застосунків та звітів.</li>
          </ul>
          <p>
            FoxPro є потужним інструментом для роботи з даними та автоматизації бізнес-процесів.
          </p>
          <p>
            <strong>Де вчити FoxPro:</strong>
          </p>
          <ul>
            <li><strong>Visual FoxPro Wiki:</strong> <a href="http://fox.wikis.com/" target="_blank" rel="noopener noreferrer">Visual FoxPro Wiki</a> - Вікі-ресурс з матеріалами та інформацією для вивчення Visual FoxPro.</li>
            <li><strong>Foxite Community:</strong> <a href="https://www.foxite.com/" target="_blank" rel="noopener noreferrer">Foxite Community</a> - Спільнота для обміну досвідом та допомоги з використанням FoxPro.</li>
          </ul>
        </>
      ) : (
        <>
          <p>
            FoxPro is a well-known programming language and database management system (DBMS) developed for working with data and creating business applications.
          </p>
          <p>
            <strong>Applications of FoxPro:</strong>
          </p>
          <ul>
            <li><strong>Databases:</strong> FoxPro is used for working with relational databases and provides extensive capabilities for managing information.</li>
            <li><strong>User Interface:</strong> The language has features for creating a graphical user interface for convenient interaction with programs.</li>
            <li><strong>Business Application Development:</strong> FoxPro is used for rapid development of business applications and reports.</li>
          </ul>
          <p>
            FoxPro is a powerful tool for working with data and automating business processes.
          </p>
          <p>
            <strong>Where to Learn FoxPro:</strong>
          </p>
          <ul>
            <li><strong>Visual FoxPro Wiki:</strong> <a href="http://fox.wikis.com/" target="_blank" rel="noopener noreferrer">Visual FoxPro Wiki</a> - Wiki resource with materials and information for learning Visual FoxPro.</li>
            <li><strong>Foxite Community:</strong> <a href="https://www.foxite.com/" target="_blank" rel="noopener noreferrer">Foxite Community</a> - Community for exchanging experiences and assistance in using FoxPro.</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default FoxProModalContent;
