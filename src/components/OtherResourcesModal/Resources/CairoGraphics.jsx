import React from 'react';

const CairoGraphicsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#2980b9",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Cairo Graphics" : "Cairo Graphics Official Page";

  const officialPageLink = (
    <a href="https://cairographics.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Cairo Graphics - це бібліотека для рендерингу 2D графіки з підтримкою різних вихідних пристроїв та форматів. Вона надає програмістам інтерфейс для створення зображень та графічних елементів з високою якістю, які можуть бути виведені на екрани, друковані або використовувані у веб-розробці.
      </p>
      <p>
        <strong>Основні поняття Cairo Graphics:</strong>
      </p>
      <ul>
        <li><strong>Контекст Малювання:</strong> Об'єкт, який утримує параметри та дані для малювання.</li>
        <li><strong>Оператори Малювання:</strong> Функції для роботи з різними типами малювань та обробки зображень.</li>
        <li><strong>Векторна та Растрова Графіка:</strong> Підтримка як векторної, так і растрової графіки.</li>
        <li><strong>Вивід на Різні Пристрої:</strong> Можливість виводу на екрани, друк, або інші вихідні пристрої.</li>
      </ul>
      <p>
        <strong>Основні переваги Cairo Graphics:</strong>
      </p>
      <ul>
        <li><strong>Універсальність:</strong> Підтримка різних форматів та вихідних пристроїв.</li>
        <li><strong>Якість Зображень:</strong> Створення високоякісних зображень та графічних елементів.</li>
        <li><strong>Відкритий Код:</strong> Доступний у вигляді відкритого програмного забезпечення.</li>
      </ul>
      <p>
        <strong>Сторінка Cairo Graphics:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Cairo Graphics Library</h2>
      <p>
        Cairo Graphics is a library for rendering 2D graphics with support for various output devices and formats. It provides programmers with an interface to create high-quality images and graphical elements that can be displayed on screens, printed, or used in web development.
      </p>
      <p>
        <strong>Key Concepts of Cairo Graphics:</strong>
      </p>
      <ul>
        <li><strong>Drawing Context:</strong> Object that holds parameters and data for drawing.</li>
        <li><strong>Drawing Operators:</strong> Functions for working with different types of drawing and image processing.</li>
        <li><strong>Vector and Raster Graphics:</strong> Support for both vector and raster graphics.</li>
        <li><strong>Output to Various Devices:</strong> Ability to output to screens, printing, or other output devices.</li>
      </ul>
      <p>
        <strong>Main Advantages of Cairo Graphics:</strong>
      </p>
      <ul>
        <li><strong>Versatility:</strong> Support for various formats and output devices.</li>
        <li><strong>Image Quality:</strong> Creation of high-quality images and graphical elements.</li>
        <li><strong>Open Source:</strong> Available as open-source software.</li>
      </ul>
      <p>
        <strong>Page Cairo Graphics:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default CairoGraphicsModalContent;
