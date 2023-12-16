import React from 'react';

const ScratchModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Scratch - це блочна мова програмування, призначена для навчання основам кодування та розвитку творчих навичок серед дітей та початківців.
          </p>
          <p>
            <strong>Особливості Scratch:</strong>
          </p>
          <ul>
            <li><strong>Блочне Програмування:</strong> Scratch використовує графічний інтерфейс та блоки для створення програм без використання текстуального коду.</li>
            <li><strong>Створення Графіки та Анімацій:</strong> За допомогою Scratch можна створювати інтерактивні ігри, мультфільми та анімації.</li>
            <li><strong>Спільнота Користувачів:</strong> Scratch має активну спільноту користувачів, яка обмінюється проектами та допомагає в навчанні.</li>
          </ul>
          <p>
            Scratch - ідеальний інструмент для введення в світ програмування та розвитку творчих навичок у наймолодших програмістів.
          </p>
          <p>
            <strong>Де вчити Scratch:</strong>
          </p>
          <ul>
            <li><strong>Офіційний Веб-сайт Scratch:</strong> <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">Офіційний Веб-сайт Scratch</a> - Ресурс, де можна вчитися, створювати та ділитися проектами в Scratch.</li>
            <li><strong>ScratchEd:</strong> <a href="https://scratched.gse.harvard.edu/" target="_blank" rel="noopener noreferrer">ScratchEd</a> - Ресурс для вчителів та батьків з навчання Scratch.</li>
          </ul>
        </>
      ) : (
        <>
          <p>
            Scratch is a block-based programming language designed to teach coding fundamentals and foster creativity among children and beginners.
          </p>
          <p>
            <strong>Features of Scratch:</strong>
          </p>
          <ul>
            <li><strong>Block Programming:</strong> Scratch uses a graphical interface and blocks to create programs without the use of textual code.</li>
            <li><strong>Graphics and Animation Creation:</strong> With Scratch, you can create interactive games, cartoons, and animations.</li>
            <li><strong>User Community:</strong> Scratch has an active user community that shares projects and assists in learning.</li>
          </ul>
          <p>
            Scratch is an ideal tool for introducing programming and developing creative skills in the youngest programmers.
          </p>
          <p>
            <strong>Where to Learn Scratch:</strong>
          </p>
          <ul>
            <li><strong>Official Scratch Website:</strong> <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">Official Scratch Website</a> - The resource where you can learn, create, and share projects in Scratch.</li>
            <li><strong>ScratchEd:</strong> <a href="https://scratched.gse.harvard.edu/" target="_blank" rel="noopener noreferrer">ScratchEd</a> - Resource for teachers and parents on teaching Scratch.</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default ScratchModalContent;
