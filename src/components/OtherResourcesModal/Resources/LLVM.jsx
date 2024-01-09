import React from 'react';

const LLVMModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#262D3A",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://llvm.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка LLVM
    </a>
  ) : (
    <a href="https://llvm.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      LLVM Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        LLVM - це колекція модульних та переносимих компіляторів та інструментів для розробки програмного забезпечення.
      </p>
      <p>
        <strong>Основні можливості LLVM:</strong>
      </p>
      <ul>
        <li><strong>Компілятори:</strong> Модульні компілятори для різних мов програмування, таких як C, C++, та інші.</li>
        <li><strong>Оптимізація Коду:</strong> Потужні оптимізації для підвищення ефективності виконання програм.</li>
        <li><strong>Архітектурна Нейтральність:</strong> Підтримка різних архітектур процесорів та операційних систем.</li>
        <li><strong>Інструменти Розробки:</strong> Набір інструментів для аналізу, візуалізації та оптимізації коду.</li>
      </ul>
      <p>
        <strong>Основні переваги LLVM:</strong>
      </p>
      <ul>
        <li><strong>Модульність:</strong> Висока модульність дозволяє використовувати компоненти поодинці для різних завдань.</li>
        <li><strong>Переносимість:</strong> Забезпечує переносимість між різними платформами та архітектурами.</li>
        <li><strong>Активна Спільнота:</strong> Велика та активна спільнота розробників та користувачів.</li>
      </ul>
      <p><strong>Сторінка LLVM:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>LLVM</h2>
      <p>
        LLVM is a collection of modular and portable compilers and tools for software development.
      </p>
      <p>
        <strong>Key Features of LLVM:</strong>
      </p>
      <ul>
        <li><strong>Compilers:</strong> Modular compilers for various programming languages such as C, C++, and others.</li>
        <li><strong>Code Optimization:</strong> Powerful optimizations to enhance program execution efficiency.</li>
        <li><strong>Architectural Neutrality:</strong> Support for various processor architectures and operating systems.</li>
        <li><strong>Development Tools:</strong> A set of tools for code analysis, visualization, and optimization.</li>
      </ul>
      <p>
        <strong>Main Advantages of LLVM:</strong>
      </p>
      <ul>
        <li><strong>Modularity:</strong> High modularity allows using components individually for different tasks.</li>
        <li><strong>Portability:</strong> Ensures portability across different platforms and architectures.</li>
        <li><strong>Active Community:</strong> Large and active community of developers and users.</li>
      </ul>
      <p><strong>LLVM Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default LLVMModalContent;
