import React from 'react';

const StrapiModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#2E7EE4",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Strapi - це відкритий фреймворк для створення власних API. За допомогою Strapi ви можете легко
        створювати, редагувати та управляти своїми API для веб-додатків або мобільних додатків.
      </p>
      <p>
        <strong>Основні принципи Strapi:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість та Розширюваність:</strong> Strapi надає гнучкі інструменти для розширення функціоналу за
          допомогою власних плагінів та моделей даних.</li>
        <li><strong>Аутентифікація та Авторизація:</strong> Вбудована система аутентифікації і авторизації для забезпечення
          безпеки вашого API.</li>
        <li><strong>Адміністративний Інтерфейс:</strong> Інтуїтивний адміністративний інтерфейс для легкого управління вашими
          API і контентом.</li>
      </ul>
      <p>
        <strong>Основні концепції Strapi:</strong>
      </p>
      <ul>
        <li><strong>Контентні Типи:</strong> Визначення структури даних та API за допомогою контентних типів.</li>
        <li><strong>Ролі та Права:</strong> Налаштування ролей і прав для керування доступом до функціоналу.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Strapi ідеально підходить для розробки власних API для веб-додатків та мобільних додатків з високим рівнем
        гнучкості та безпеки.
      </p>
      <p>
        <strong>Де вчитися Strapi:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Strapi:</strong> <a href="https://strapi.io/documentation/" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Strapi</a></li>
        <br></br>
        <li><strong>Відеоуроки та Матеріали:</strong> <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer"
            style={linkStyles}>Strapi Learn</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Strapi Framework</h2>
      <p>
        Strapi is an open-source framework for creating your own APIs. With Strapi, you can easily create, edit, and manage
        your APIs for web or mobile applications.
      </p>
      <p>
        <strong>Key Principles of Strapi:</strong>
      </p>
      <ul>
        <li><strong>Flexibility and Extensibility:</strong> Strapi provides flexible tools to extend functionality through
          custom plugins and data models.</li>
        <li><strong>Authentication and Authorization:</strong> Built-in authentication and authorization system to ensure
          the security of your API.</li>
        <li><strong>Administrative Interface:</strong> Intuitive administrative interface for easy management of your API
          and content.</li>
      </ul>
      <p>
        <strong>Core Concepts of Strapi:</strong>
      </p>
      <ul>
        <li><strong>Content Types:</strong> Defining data structure and API using content types.</li>
        <li><strong>Roles and Permissions:</strong> Configuring roles and permissions to manage access to functionality.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Strapi is ideal for developing custom APIs for web and mobile applications with a high level of flexibility and
        security.
      </p>
      <p>
        <strong>Where to Learn Strapi:</strong>
      </p>
      <ul>
        <li><strong>Official Strapi Documentation:</strong> <a href="https://strapi.io/documentation/" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Strapi</a></li>
        <br></br>
        <li><strong>Strapi Official:</strong> <a href="https://strapi.io/" target="_blank"
            rel="noopener noreferrer" style={linkStyles}>Strapi Learn</a></li>
      </ul>
    </>
  );

  return content;
};

export default StrapiModalContent;
