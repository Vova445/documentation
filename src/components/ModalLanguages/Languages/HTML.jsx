import React from 'react';

const HtmlModalContent = ({ isUkrainian }) => {
    const content = isUkrainian ? (
        <>
          <p>
            HTML (Hypertext Markup Language) - стандартизована мова розмітки для створення веб-сторінок. Це основа для створення контенту та структури веб-сайтів.
          </p>
          <p>
            <strong>Застосування HTML:</strong>
          </p>
          <ul>
            <li><strong>Структура сторінки:</strong> HTML використовується для визначення структури веб-сторінок, включаючи заголовки, абзаци, списки та інші елементи.</li>
            <li><strong>Гіперпосилання:</strong> За допомогою HTML можна створювати гіперпосилання, які дозволяють переходити з однієї сторінки на іншу чи між різними частинами сторінки.</li>
            <li><strong>Мультимедіа:</strong> HTML підтримує вбудовування графіки, відео та аудіо для розширення змісту сторінок.</li>
            <li><strong>Форми та введення:</strong> Використовується для створення форм, які дозволяють відвідувачам взаємодіяти зі сторінкою, наприклад, для відправки даних на сервер.</li>
          </ul>
          <p>
            <strong>Місце в інфраструктурі вебу:</strong>
          </p>
          <p>
            HTML входить до складу триплета технологій веб-розробки, де він виконує роль мови розмітки разом із CSS (Cascading Style Sheets) для стилізації та JavaScript для програмної взаємодії.
          </p>
          <p>
            <strong>Де вчити HTML:</strong>
          </p>
          <ul>
            <li><strong>Офіційна документація W3C:</strong> <a href="https://www.w3.org/TR/html52/" target="_blank" rel="noopener noreferrer">W3C HTML Specification</a></li>
            <li><strong>MDN Web Docs:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN HTML</a></li>
          </ul>
          <p>
            <strong>Унікальності HTML:</strong>
          </p>
          <ul>
            <li><strong>Стандартизована розмітка:</strong> HTML використовує стандартизовані теги для розмітки, що спрощує читання та розуміння коду.</li>
            <li><strong>Кросплатформовий стандарт:</strong> HTML є універсальним стандартом для відображення контенту у всіх сучасних браузерах та платформах.</li>
            <li><strong>Семантичність:</strong> HTML надає семантичну структуру, дозволяючи визначати значення та роль елементів у вмісті.</li>
            <li><strong>Розширюваність:</strong> Завдяки можливості вбудовувати JavaScript та інші технології, HTML є гнучким та розширюваним для реалізації різноманітних веб-задач.</li>
          </ul>
          <p>
            HTML є основним елементом веб-розробки, і його розуміння є ключовим для будь-якого веб-розробника.
          </p>
        </>
      ) : (         
      <>
      <p>
        HTML (Hypertext Markup Language) - a standardized markup language for creating web pages. It serves as the foundation for organizing content and structure on websites.
      </p>
      <p>
        <strong>Applications of HTML:</strong>
      </p>
      <ul>
        <li><strong>Page Structure:</strong> HTML is used to define the structure of web pages, including headers, paragraphs, lists, and other elements.</li>
        <li><strong>Hyperlinks:</strong> HTML allows the creation of hyperlinks, enabling navigation between pages or different sections of a page.</li>
        <li><strong>Multimedia:</strong> HTML supports embedding graphics, videos, and audio to enhance the content of pages.</li>
        <li><strong>Forms and Input:</strong> Used for creating forms that enable visitors to interact with the page, such as submitting data to a server.</li>
      </ul>
      <p>
        <strong>Role in Web Infrastructure:</strong>
      </p>
      <p>
        HTML is part of the trio of web development technologies, where it plays the role of markup language alongside CSS (Cascading Style Sheets) for styling and JavaScript for programmatic interaction.
      </p>
      <p>
        <strong>Where to Learn HTML:</strong>
      </p>
      <ul>
        <li><strong>Official W3C Documentation:</strong> <a href="https://www.w3.org/TR/html52/" target="_blank" rel="noopener noreferrer">W3C HTML Specification</a></li>
        <li><strong>MDN Web Docs:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">MDN HTML</a></li>
      </ul>
      <p>
        <strong>Uniqueness of HTML:</strong>
      </p>
      <ul>
        <li><strong>Standardized Markup:</strong> HTML uses standardized tags for markup, making code reading and understanding easier.</li>
        <li><strong>Cross-platform Standard:</strong> HTML is a universal standard for displaying content in all modern browsers and platforms.</li>
        <li><strong>Semantic Structure:</strong> HTML provides a semantic structure, allowing the definition of meaning and roles of elements in content.</li>
        <li><strong>Extensibility:</strong> Thanks to the ability to embed JavaScript and other technologies, HTML is flexible and extensible for implementing various web tasks.</li>
      </ul>
      <p>
        HTML is a fundamental element of web development, and understanding it is crucial for any web developer.
      </p>
    </>
      );
      return content;

};
export default HtmlModalContent;