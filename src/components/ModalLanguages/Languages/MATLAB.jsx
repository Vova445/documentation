import React from 'react';

const MATLABModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        MATLAB - це інтерактивна мова програмування та середовище для числових обчислень та візуалізації даних. Ця мова зручно використовується для вирішення складних математичних задач та аналізу даних.
      </p>
      <p>
        <strong>Застосування MATLAB:</strong>
      </p>
      <ul>
        <li><strong>Математичні обчислення:</strong> MATLAB є потужним інструментом для вирішення математичних рівнянь та проведення числових обчислень.</li>
        <li><strong>Візуалізація даних:</strong> MATLAB надає різноманітні інструменти для візуалізації та графічного представлення даних.</li>
        <li><strong>Симуляції та моделювання:</strong> MATLAB дозволяє створювати складні симуляції та моделі для вивчення поведінки систем.</li>
        <li><strong>Обробка сигналів та зображень:</strong> MATLAB часто використовується для обробки сигналів, а також робіт з зображеннями.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        MATLAB є невід'ємною частиною академічного світу, досліджень та індустрії для вирішення різноманітних завдань в галузі науки та техніки.
      </p>
      <p>
        <strong>Де вчити MATLAB:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація MATLAB:</strong> <a href="https://www.mathworks.com/help/matlab/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>MATLAB Documentation</a></li>
        <li><strong>Онлайн-курси на MathWorks:</strong> <a href="https://www.mathworks.com/services/training.html" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>MATLAB Training Courses</a></li>
      </ul>
      <p>
        <strong>Особливості MATLAB:</strong>
      </p>
      <ul>
        <li><strong>Мова програмування та середовище:</strong> MATLAB поєднує в собі мову програмування та інтерактивне середовище для виконання обчислень.</li>
        <li><strong>Багатофункціональність:</strong> Від математичних операцій до роботи з графікою та обробки сигналів - MATLAB має широкі можливості.</li>
        <li><strong>Широке застосування:</strong> Використовується в науці, інженерії, фінансах та багатьох інших галузях.</li>
      </ul>
      <p>
        MATLAB - інструмент, що допомагає вирішувати складні завдання в числових обчисленнях та аналізі даних.
      </p>
    </>
  ) : (
    <>
      <p>
        MATLAB is an interactive programming language and environment for numerical computations and data visualization. It is conveniently used for solving complex mathematical problems and data analysis.
      </p>
      <p>
        <strong>Applications of MATLAB:</strong>
      </p>
      <ul>
        <li><strong>Mathematical Computations:</strong> MATLAB is a powerful tool for solving mathematical equations and performing numerical computations.</li>
        <li><strong>Data Visualization:</strong> MATLAB provides various tools for data visualization and graphical representation.</li>
        <li><strong>Simulations and Modeling:</strong> MATLAB allows creating complex simulations and models for studying the behavior of systems.</li>
        <li><strong>Signal and Image Processing:</strong> MATLAB is often used for signal processing and working with images.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        MATLAB is an integral part of the academic world, research, and industry for solving a variety of tasks in science and engineering.
      </p>
      <p>
        <strong>Where to Learn MATLAB:</strong>
      </p>
      <ul>
        <li><strong>Official MATLAB Documentation:</strong> <a href="https://www.mathworks.com/help/matlab/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>MATLAB Documentation</a></li>
        <li><strong>Online Courses on MathWorks:</strong> <a href="https://www.mathworks.com/services/training.html" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>MATLAB Training Courses</a></li>
      </ul>
      <p>
        <strong>Features of MATLAB:</strong>
      </p>
      <ul>
        <li><strong>Programming Language and Environment:</strong> MATLAB combines a programming language and an interactive environment for performing computations.</li>
        <li><strong>Functionality:</strong> From mathematical operations to working with graphics and signal processing, MATLAB has a wide range of capabilities.</li>
        <li><strong>Wide Application:</strong> Used in science, engineering, finance, and many other fields.</li>
      </ul>
      <p>
        MATLAB is a tool that helps solve complex tasks in numerical computations and data analysis.
      </p>
    </>
  );

  return content;
};

export default MATLABModalContent;
