import React from 'react';

const ApexModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Apex - високорівнева, інтерпретована мова програмування, призначена для розробки ентерпрайз-рішень на платформі Salesforce.
      </p>
      <p>
        <strong>Застосування Apex:</strong>
      </p>
      <ul>
        <li><strong>Розробка на платформі Salesforce:</strong> Apex використовується для створення логіки бізнес-процесів та розширення функціональності Salesforce.</li>
        <li><strong>Взаємодія з базою даних:</strong> З допомогою Apex можна взаємодіяти з базою даних Salesforce та виконувати операції читання та запису даних.</li>
        <li><strong>Обробка подій:</strong> Apex надає можливість реагувати на події в системі Salesforce та виконувати відповідні дії.</li>
        <li><strong>Інтеграція з іншими сервісами:</strong> З Apex можна виконувати інтеграцію з іншими сервісами та зовнішніми системами.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Apex є основною мовою програмування для розробки корпоративних додатків на платформі Salesforce.
      </p>
      <p>
        <strong>Де вчити Apex:</strong>
      </p>
      <ul>
        <li><strong>Salesforce Developer Documentation:</strong> <a href="https://developer.salesforce.com/docs" target="_blank" rel="noopener noreferrer">Salesforce Developer Documentation</a></li>
        <li><strong>Trailhead:</strong> <a href="https://trailhead.salesforce.com/" target="_blank" rel="noopener noreferrer">Salesforce Trailhead</a></li>
      </ul>
      <p>
        <strong>Унікальні риси Apex:</strong>
      </p>
      <ul>
        <li><strong>Інтеграція з Salesforce:</strong> Apex є невід'ємною частиною розробки на платформі Salesforce і забезпечує доступ до специфічних можливостей Salesforce.</li>
        <li><strong>Тригери:</strong> Apex дозволяє створювати тригери, які виконуються при певних подіях у системі Salesforce.</li>
        <li><strong>Можливості розширення:</strong> З Apex можна розширювати функціональність Salesforce за допомогою власних класів та об'єктів.</li>
      </ul>
      <p>
        Apex відіграє важливу роль у розробці корпоративних додатків на платформі Salesforce.
      </p>
    </>
  ) : (
    <>
      <p>
        Apex is a high-level, interpreted programming language designed for developing enterprise solutions on the Salesforce platform.
      </p>
      <p>
        <strong>Applications of Apex:</strong>
      </p>
      <ul>
        <li><strong>Salesforce Development:</strong> Apex is used for creating business process logic and extending the functionality of Salesforce.</li>
        <li><strong>Database Interaction:</strong> With Apex, you can interact with the Salesforce database and perform read and write operations on data.</li>
        <li><strong>Event Handling:</strong> Apex allows reacting to events in the Salesforce system and performing corresponding actions.</li>
        <li><strong>Integration with Other Services:</strong> Apex enables integration with other services and external systems.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Apex is the primary programming language for developing corporate applications on the Salesforce platform.
      </p>
      <p>
        <strong>Where to Learn Apex:</strong>
      </p>
      <ul>
        <li><strong>Salesforce Developer Documentation:</strong> <a href="https://developer.salesforce.com/docs" target="_blank" rel="noopener noreferrer">Salesforce Developer Documentation</a></li>
        <li><strong>Trailhead:</strong> <a href="https://trailhead.salesforce.com/" target="_blank" rel="noopener noreferrer">Salesforce Trailhead</a></li>
      </ul>
      <p>
        <strong>Unique Features of Apex:</strong>
      </p>
      <ul>
        <li><strong>Salesforce Integration:</strong> Apex is an integral part of Salesforce development and provides access to Salesforce-specific features.</li>
        <li><strong>Triggers:</strong> Apex allows creating triggers that execute on specific events in the Salesforce system.</li>
        <li><strong>Extensibility:</strong> With Apex, you can extend the functionality of Salesforce using custom classes and objects.</li>
      </ul>
      <p>
        Apex plays a crucial role in the development of enterprise applications on the Salesforce platform.
      </p>
    </>
  );
  return content;
};

export default ApexModalContent;
