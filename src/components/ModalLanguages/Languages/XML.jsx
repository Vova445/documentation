import React from 'react';

const XmlModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        XML (eXtensible Markup Language) - це мова розмітки, призначена для представлення та обміну структурованою інформацією між програмами та системами. XML використовується для створення власних тегів та визначення їх інтерпретації, що робить її високоякісним інструментом для представлення різноманітних типів даних у читабельному та легко розбірливому форматі.
      </p>
      <p>
        <strong>Основні характеристики XML:</strong>
      </p>
      <ul>
        <li><strong>Розширюваність:</strong> XML дозволяє визначати власні теги та атрибути для представлення будь-яких типів даних.</li>
        <li><strong>Незалежність від Платформи:</strong> Формат XML є незалежним від конкретної платформи, що дозволяє легко обмінюватися даними між різними системами.</li>
        <li><strong>Читабельність для Людей:</strong> XML файл може бути легко читаним та розумілим для людей, оскільки він використовує текстовий формат.</li>
        <li><strong>Зручність для Обробки:</strong> XML дані легко обробляються за допомогою різних програм та мов програмування.</li>
      </ul>
      <p>
        <strong>Застосування XML:</strong>
      </p>
      <ul>
        <li><strong>Конфігураційні Файли:</strong> XML використовується для зберігання конфігураційних даних у програмах.</li>
        <li><strong>Обмін Даними:</strong> XML широко використовується для обміну даними між різними програмами та системами.</li>
        <li><strong>Веб-Розробка:</strong> XML використовується в комбінації з іншими технологіями, такими як SOAP та XHTML, для веб-розробки.</li>
        <li><strong>Опис Даних:</strong> XML може служити для опису структури та характеристик даних.</li>
      </ul>
      <p>
        <strong>Де Вчити XML:</strong>
      </p>
      <ul>
        <li><strong>MDN Web Docs - XML:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/XML" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>MDN Web Docs - XML</a></li>
        <li><strong>W3Schools - XML Tutorial:</strong> <a href="https://www.w3schools.com/xml/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>W3Schools - XML Tutorial</a></li>
      </ul>
      <p>
        XML використовується для представлення та обміну даними в різних галузях і є важливою технологією для розробників та архітекторів систем.
      </p>
    </>
  ) : (
    <>
      <p>
        XML (eXtensible Markup Language) is a markup language designed for representing and exchanging structured information between programs and systems. XML allows the creation of custom tags and defines their interpretation, making it a versatile tool for representing various types of data in a readable and easily parseable format.
      </p>
      <p>
        <strong>Key Features of XML:</strong>
      </p>
      <ul>
        <li><strong>Extensibility:</strong> XML allows defining custom tags and attributes to represent any type of data.</li>
        <li><strong>Platform-Independence:</strong> The XML format is independent of a specific platform, enabling easy data exchange between different systems.</li>
        <li><strong>Human-Readable:</strong> XML files can be easily read and understood by humans as it uses a text-based format.</li>
        <li><strong>Convenience for Processing:</strong> XML data is easily processed by various programs and programming languages.</li>
      </ul>
      <p>
        <strong>Applications of XML:</strong>
      </p>
      <ul>
        <li><strong>Configuration Files:</strong> XML is used to store configuration data in programs.</li>
        <li><strong>Data Exchange:</strong> XML is widely used for data exchange between different programs and systems.</li>
        <li><strong>Web Development:</strong> XML is used in conjunction with other technologies such as SOAP and XHTML for web development.</li>
        <li><strong>Data Description:</strong> XML can serve to describe the structure and characteristics of data.</li>
      </ul>
      <p>
        <strong>Where to Learn XML:</strong>
      </p>
      <ul>
        <li><strong>MDN Web Docs - XML:</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/XML" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>MDN Web Docs - XML</a></li>
        <li><strong>W3Schools - XML Tutorial:</strong> <a href="https://www.w3schools.com/xml/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>W3Schools - XML Tutorial</a></li>
      </ul>
      <p>
        XML is used for representing and exchanging data in various fields and is an essential technology for developers and system architects.
      </p>
    </>
  );

  return content;
};

export default XmlModalContent;
