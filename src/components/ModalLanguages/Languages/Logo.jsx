import React from 'react';

const LogoModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Logo - це мова програмування, розроблена для навчання та розвитку дітей. Вона використовується для створення графічних зображень та навчання основам програмування.
          </p>
          <p>
            <strong>Застосування Logo:</strong>
          </p>
          <ul>
            <li><strong>Освітні Завдання:</strong> Logo використовується для навчання програмування та комп'ютерної грамотності, зокрема серед дітей.</li>
            <li><strong>Створення Графіки:</strong> Мова дозволяє користувачам створювати графічні зображення за допомогою простих команд.</li>
            <li><strong>Логічне Програмування:</strong> Logo розвиває навички логічного програмування через використання команд та процедур.</li>
          </ul>
          <p>
            Logo є ефективним інструментом для ознайомлення з основами програмування та створення ігор та мультимедійних застосувань для дітей.
          </p>
          <p>
            <strong>Де вчити Logo:</strong>
          </p>
          <ul>
            <li><strong>UCB Logo Project:</strong> <a href="https://www2.eecs.berkeley.edu/Pubs/TechRpts/1992/CSD-92-718.pdf" target="_blank" rel="noopener noreferrer">UCB Logo Project</a> - Проект Logo в Університеті Каліфорнії в Берклі містить матеріали та ресурси для вивчення Logo.</li>
            <li><strong>Logo Foundation:</strong> <a href="https://el.media.mit.edu/logo-foundation/" target="_blank" rel="noopener noreferrer">Logo Foundation</a> - Фонд Logo пропонує інформацію, книги та інші ресурси для вивчення Logo.</li>
          </ul>
        </>
      ) : (
        <>
          <p>
            Logo is a programming language developed for educational purposes and children's development. It is used for creating graphic images and teaching the basics of programming.
          </p>
          <p>
            <strong>Applications of Logo:</strong>
          </p>
          <ul>
            <li><strong>Educational Tasks:</strong> Logo is used for teaching programming and computer literacy, especially among children.</li>
            <li><strong>Graphic Creation:</strong> The language allows users to create graphic images using simple commands.</li>
            <li><strong>Logical Programming:</strong> Logo develops logical programming skills through the use of commands and procedures.</li>
          </ul>
          <p>
            Logo is an effective tool for introducing the basics of programming and creating games and multimedia applications for children.
          </p>
          <p>
            <strong>Where to Learn Logo:</strong>
          </p>
          <ul>
            <li><strong>UCB Logo Project:</strong> <a href="https://www2.eecs.berkeley.edu/Pubs/TechRpts/1992/CSD-92-718.pdf" target="_blank" rel="noopener noreferrer">UCB Logo Project</a> - The Logo Project at the University of California, Berkeley, contains materials and resources for learning Logo.</li>
            <li><strong>Logo Foundation:</strong> <a href="https://el.media.mit.edu/logo-foundation/" target="_blank" rel="noopener noreferrer">Logo Foundation</a> - The Logo Foundation offers information, books, and other resources for learning Logo.</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default LogoModalContent;
