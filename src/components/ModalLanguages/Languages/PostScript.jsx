import React from 'react';

const PostScriptModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            PostScript - мова опису сторінки, призначена для описування графічних об'єктів та їх розташування на сторінці.
          </p>
          <p>
            <strong>Застосування PostScript:</strong>
          </p>
          <ul>
            <li><strong>Друковані матеріали:</strong> PostScript використовується для описування сторінок та їх компонентів для друку на принтері.</li>
            <li><strong>Графічні зображення:</strong> PostScript може бути використаний для створення векторних зображень та графічних об'єктів.</li>
            <li><strong>Сторінки в Інтернеті:</strong> Деякі веб-браузери використовують PostScript для відображення змісту сторінок.</li>
            <li><strong>Публікації та книги:</strong> PostScript використовується у видавництві для підготовки матеріалів для друку.</li>
          </ul>
          <p>
            <strong>Місце в програмуванні:</strong>
          </p>
          <p>
            PostScript є мовою програмування для опису графічних об'єктів та створення друкованих матеріалів.
          </p>
          <p>
            <strong>Де вчити PostScript:</strong>
          </p>
          <ul>
            <li><strong>PostScript Language Reference:</strong> <a href="https://personal.math.ubc.ca/~cass/graphics/manual/" target="_blank" rel="noopener noreferrer">PostScript Language Reference</a></li>
          </ul>
          <p>
            <strong>Унікальні риси PostScript:</strong>
          </p>
          <ul>
            <li><strong>Векторна графіка:</strong> PostScript підтримує векторну графіку, що дозволяє створювати високоякісні зображення.</li>
            <li><strong>Переносимість:</strong> Постскриптовські файли можуть бути відтворені на різних пристроях і принтерах без втрати якості.</li>
            <li><strong>Розширюваність:</strong> PostScript дозволяє створювати складні друковані матеріали з використанням скриптів та функцій.</li>
          </ul>
          <p>
            PostScript залишається потужним інструментом для створення графічних та друкованих матеріалів.
          </p>
        </>
      ) : (
        <>
          <p>
            PostScript is a page description language designed to describe graphic objects and their placement on a page.
          </p>
          <p>
            <strong>Applications of PostScript:</strong>
          </p>
          <ul>
            <li><strong>Printed Materials:</strong> PostScript is used to describe pages and their components for printing on a printer.</li>
            <li><strong>Graphic Images:</strong> PostScript can be used to create vector images and graphic objects.</li>
            <li><strong>Web Pages:</strong> Some web browsers use PostScript to render the content of pages.</li>
            <li><strong>Publications and Books:</strong> PostScript is used in publishing to prepare materials for printing.</li>
          </ul>
          <p>
            <strong>Place in Programming:</strong>
          </p>
          <p>
            PostScript is a programming language for describing graphic objects and creating printed materials.
          </p>
          <p>
            <strong>Where to Learn PostScript:</strong>
          </p>
          <ul>
            <li><strong>PostScript Language Reference:</strong> <a href="https://personal.math.ubc.ca/~cass/graphics/manual/" target="_blank" rel="noopener noreferrer">PostScript Language Reference</a></li>
          </ul>
          <p>
            <strong>Unique Features of PostScript:</strong>
          </p>
          <ul>
            <li><strong>Vector Graphics:</strong> PostScript supports vector graphics, allowing for the creation of high-quality images.</li>
            <li><strong>Portability:</strong> PostScript files can be reproduced on different devices and printers without loss of quality.</li>
            <li><strong>Extensibility:</strong> PostScript allows for the creation of complex printed materials using scripts and functions.</li>
          </ul>
          <p>
            PostScript remains a powerful tool for creating graphic and printed materials.
          </p>
        </>
      )}
    </div>
  );
};

export default PostScriptModalContent;
