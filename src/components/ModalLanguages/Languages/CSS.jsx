import React from 'react';

const CssModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        CSS (Cascading Style Sheets) - мова стилів, яка використовується для задання вигляду та форматування веб-сторінок, написаних мовою розмітки, такою як HTML.
      </p>
      <p>
        <strong>Застосування CSS:</strong>
      </p>
      <ul>
        <li><strong>Стилізація елементів:</strong> CSS дозволяє визначити зовнішній вигляд різних елементів веб-сторінки, таких як текст, фон, рамки тощо.</li>
        <li><strong>Респонсивний дизайн:</strong> За допомогою CSS можна створювати респонсивний дизайн, який адаптується до різних розмірів екранів та пристроїв.</li>
        <li><strong>Анімації та переходи:</strong> CSS дозволяє створювати анімації та переходи, що поліпшують взаємодію та вигляд веб-сторінок.</li>
        <li><strong>Управління макетом:</strong> Застосування CSS дозволяє зручно керувати розміщенням та макетом елементів на сторінці.</li>
      </ul>
      <p>
        <strong>Місце в інфраструктурі вебу:</strong>
      </p>
      <p>
        CSS є однією з ключових технологій у триплеті веб-розробки, де вона використовується для стилізації разом із HTML та для програмної взаємодії разом із JavaScript.
      </p>
      <p>
        <strong>Де вчити CSS:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація W3C:</strong> <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">W3C CSS Specification</a></li>
        <li><strong>MDN Web Docs:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">MDN CSS</a></li>
      </ul>
      <p>
        <strong>Унікальності CSS:</strong>
      </p>
      <ul>
        <li><strong>Каскадне застосування стилів:</strong> CSS використовує каскадне застосування стилів, що дозволяє точно керувати пріоритетом стилів та їх спадкоємністю.</li>
        <li><strong>Можливості адаптації:</strong> Завдяки CSS можна легко адаптувати вигляд веб-сайту до різних умов та вимог.</li>
        <li><strong>Модульність:</strong> CSS підтримує модульний підхід до стилізації, що дозволяє розділяти код для кращої підтримки та обслуговування.</li>
      </ul>
      <p>
        CSS грає важливу роль у створенні привабливих та функціональних веб-сторінок.
      </p>
    </>
  ) : (         
    <>
      <p>
        CSS (Cascading Style Sheets) - a style language used for defining the look and formatting of web pages written in a markup language like HTML.
      </p>
      <p>
        <strong>Applications of CSS:</strong>
      </p>
      <ul>
        <li><strong>Element Styling:</strong> CSS allows defining the appearance of various elements on a web page, such as text, background, borders, etc.</li>
        <li><strong>Responsive Design:</strong> With CSS, you can create responsive designs that adapt to different screen sizes and devices.</li>
        <li><strong>Animations and Transitions:</strong> CSS enables the creation of animations and transitions, enhancing the interaction and appearance of web pages.</li>
        <li><strong>Layout Control:</strong> Applying CSS makes it convenient to control the arrangement and layout of elements on a page.</li>
      </ul>
      <p>
        <strong>Role in Web Infrastructure:</strong>
      </p>
      <p>
        CSS is a key technology in the trio of web development, where it is used for styling alongside HTML and for programmatic interaction alongside JavaScript.
      </p>
      <p>
        <strong>Where to Learn CSS:</strong>
      </p>
      <ul>
        <li><strong>Official W3C Documentation:</strong> <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">W3C CSS Specification</a></li>
        <li><strong>MDN Web Docs:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">MDN CSS</a></li>
      </ul>
      <p>
        <strong>Uniqueness of CSS:</strong>
      </p>
      <ul>
        <li><strong>Cascading Style Application:</strong> CSS uses cascading style application, allowing precise control over style priority and inheritance.</li>
        <li><strong>Adaptability:</strong> Thanks to CSS, it's easy to adapt the appearance of a website to different conditions and requirements.</li>
        <li><strong>Modularity:</strong> CSS supports a modular approach to styling, allowing the separation of code for better support and maintenance.</li>
      </ul>
      <p>
        CSS plays a crucial role in creating attractive and functional web pages.
      </p>
    </>
  );
  return content;
};

export default CssModalContent;
