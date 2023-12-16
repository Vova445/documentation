import React from 'react';

const LadderLogicModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Ladder Logic - це графічна мова програмування, розроблена для програмування програмованих логічних контролерів (PLC). Вона використовує графічні елементи, щоб представляти логічні операції та керувальні функції.
          </p>
          <p>
            <strong>Застосування Ladder Logic:</strong>
          </p>
          <ul>
            <li><strong>Програмування PLC:</strong> Ladder Logic використовується для програмування програмованих логічних контролерів для автоматизації різних процесів та систем.</li>
            <li><strong>Керування Промисловими Процесами:</strong> Мова широко використовується для керування промисловими процесами, такими як виробництво та автоматизовані системи.</li>
            <li><strong>Логічне Програмування:</strong> Ladder Logic використовує графічні схеми для вираження логічних операцій, що робить її ефективною для програмування логічних контролерів.</li>
          </ul>
          <p>
            Ladder Logic є стандартом в автоматизації та індустріальному керуванні, особливо в галузі програмованих логічних контролерів.
          </p>
          <p>
            <strong>Де вчити Ladder Logic:</strong>
          </p>
          <ul>
            <li><strong>Introduction to Ladder Logic:</strong> <a href="https://www.allaboutcircuits.com/" target="_blank" rel="noopener noreferrer">All About Circuits - Introduction to PLCs</a></li>
            <li><strong>PLC Programming Basics:</strong> <a href="https://instrumentationtools.com/" target="_blank" rel="noopener noreferrer">InstrumentationTools - PLC Programming Tutorials</a></li>
          </ul>
        </>
      ) : (
        <>
          <p>
            Ladder Logic is a graphical programming language developed for programming programmable logic controllers (PLCs). It uses graphical elements to represent logical operations and control functions.
          </p>
          <p>
            <strong>Applications of Ladder Logic:</strong>
          </p>
          <ul>
            <li><strong>PLC Programming:</strong> Ladder Logic is used for programming programmable logic controllers to automate various processes and systems.</li>
            <li><strong>Industrial Process Control:</strong> The language is widely used for controlling industrial processes, such as manufacturing and automated systems.</li>
            <li><strong>Logical Programming:</strong> Ladder Logic uses graphical diagrams to express logical operations, making it effective for programming logic controllers.</li>
          </ul>
          <p>
            Ladder Logic is a standard in automation and industrial control, especially in the field of programmable logic controllers.
          </p>
          <p>
            <strong>Where to Learn Ladder Logic:</strong>
          </p>
          <ul>
            <li><strong>Introduction to Ladder Logic:</strong> <a href="https://www.allaboutcircuits.com/" target="_blank" rel="noopener noreferrer">All About Circuits - Introduction to PLCs</a></li>
            <li><strong>PLC Programming Basics:</strong> <a href="https://instrumentationtools.com/" target="_blank" rel="noopener noreferrer">InstrumentationTools - PLC Programming Tutorials</a></li>
          </ul>
        </>
      )}
    </div>
  );
};

export default LadderLogicModalContent;
