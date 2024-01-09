import React from 'react';

const GCCModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#dec3ad",
    color: "#000",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://gcc.gnu.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка GCC
    </a>
  ) : (
    <a href="https://gcc.gnu.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      GCC Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        GCC (GNU Compiler Collection) - це набір компіляторів, розроблений Free Software Foundation, який включає компілятори для мов програмування C, C++, Fortran, Ada та інших мов.
      </p>
      <p>
        <strong>Основні функції GCC:</strong>
      </p>
      <ul>
        <li><strong>Підтримка Різних Мов:</strong> Здатний компілювати код, написаний на різних мовах програмування.</li>
        <li><strong>Оптимізація Коду:</strong> Вбудовані оптимізації для покращення продуктивності та швидкості виконання програм.</li>
        <li><strong>Портованість:</strong> Доступний для багатьох платформ та операційних систем.</li>
        <li><strong>Відкрите ПЗ:</strong> Ліцензований за умовами GNU General Public License (GPL).</li>
      </ul>
      <p>
        <strong>Основні переваги GCC:</strong>
      </p>
      <ul>
        <li><strong>Мовна Різноманітність:</strong> Підтримка широкого спектру мов програмування.</li>
        <li><strong>Широка Підтримка Платформ:</strong> Портований на багато платформ та операційних систем.</li>
        <li><strong>Відкрите ПЗ:</strong> Вільний та відкритий програмний код з ліцензією GPL.</li>
      </ul>
      <p>
        <strong>Сторінка GCC:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>GNU Compiler Collection (GCC)</h2>
      <p>
        GCC is a compiler collection developed by the Free Software Foundation. It includes compilers for programming languages such as C, C++, Fortran, Ada, and others.
      </p>
      <p>
        <strong>Key Features of GCC:</strong>
      </p>
      <ul>
        <li><strong>Support for Various Languages:</strong> Capable of compiling code written in various programming languages.</li>
        <li><strong>Code Optimization:</strong> Built-in optimizations to improve program performance and execution speed.</li>
        <li><strong>Portability:</strong> Available for many platforms and operating systems.</li>
        <li><strong>Open Source:</strong> Licensed under the GNU General Public License (GPL).</li>
      </ul>
      <p>
        <strong>Main Advantages of GCC:</strong>
      </p>
      <ul>
        <li><strong>Language Diversity:</strong> Supports a wide range of programming languages.</li>
        <li><strong>Broad Platform Support:</strong> Ported to many platforms and operating systems.</li>
        <li><strong>Open Source:</strong> Free and open-source software with GPL license.</li>
        <li><strong>GCC Page:</strong> {officialPageLink}</li>
      </ul>
    </>
  );

  return content;
};

export default GCCModalContent;
