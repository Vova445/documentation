import React from 'react';

const ABAPModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        ABAP (Advanced Business Application Programming) - це високорівнева мова програмування, розроблена компанією SAP для створення додатків у сфері корпоративного управління.
      </p>
      <p>
        <strong>Застосування ABAP:</strong>
      </p>
      <ul>
        <li><strong>Розробка корпоративних застосунків:</strong> ABAP використовується для розробки програмного забезпечення, яке використовується в сфері корпоративного управління.</li>
        <li><strong>Розширення та налаштування систем SAP:</strong> Розробники використовують ABAP для створення нових функцій та зміни існуючих в системах управління підприємством SAP.</li>
        <li><strong>Інтеграція з іншими системами:</strong> ABAP дозволяє інтегрувати програми, написані на цій мові, з іншими системами підприємства.</li>
        <li><strong>Розробка звітів та форм:</strong> Мова використовується для створення звітів та форм, необхідних для корпоративного звітності.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        ABAP відіграє ключову роль у розробці програмного забезпечення для систем управління підприємством та корпоративного планування ресурсів (ERP).
      </p>
      <p>
        <strong>Де вчити ABAP:</strong>
      </p>
      <ul>
        <li><strong>Курси на платформі openSAP:</strong> <a href="https://open.sap.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat' }}>openSAP Courses</a></li>
      </ul>
      <p>
        <strong>Особливості ABAP:</strong>
      </p>
      <ul>
        <li><strong>Орієнтована на бізнес:</strong> Мова спеціально розроблена для вирішення завдань корпоративного управління.</li>
        <li><strong>Широкі можливості для роботи з даними:</strong> Забезпечує розширені можливості роботи з базами даних SAP.</li>
        <li><strong>Інтеграція з іншими технологіями:</strong> Має засоби для ефективної інтеграції з іншими технологіями та мовами програмування.</li>
      </ul>
      <p>
        ABAP - невід'ємна частина екосистеми SAP та важлива для підтримки корпоративних бізнес-процесів.
      </p>
    </>
  ) : (
    <>
      <p>
        ABAP (Advanced Business Application Programming) is a high-level programming language developed by SAP for creating applications in the field of enterprise resource planning.
      </p>
      <p>
        <strong>Applications of ABAP:</strong>
      </p>
      <ul>
        <li><strong>Development of Enterprise Applications:</strong> ABAP is used for developing software used in enterprise resource planning.</li>
        <li><strong>Extension and Customization of SAP Systems:</strong> Developers use ABAP to create new features and modify existing ones in SAP enterprise management systems.</li>
        <li><strong>Integration with Other Systems:</strong> ABAP allows integrating programs written in this language with other enterprise systems.</li>
        <li><strong>Development of Reports and Forms:</strong> The language is used to create reports and forms necessary for corporate reporting.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        ABAP plays a crucial role in developing software for enterprise management systems and enterprise resource planning (ERP).
      </p>
      <p>
        <strong>Where to Learn ABAP:</strong>
      </p>
      <ul>
        <li><strong>Courses on the openSAP Platform:</strong> <a href="https://open.sap.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat' }}>openSAP Courses</a></li>
      </ul>
      <p>
        <strong>Features of ABAP:</strong>
      </p>
      <ul>
        <li><strong>Business-Oriented:</strong> The language is specifically designed to address corporate management tasks.</li>
        <li><strong>Extensive Data Handling Capabilities:</strong> Provides advanced capabilities for working with SAP databases.</li>
        <li><strong>Integration with Other Technologies:</strong> Has tools for effective integration with other technologies and programming languages.</li>
      </ul>
      <p>
        ABAP is an integral part of the SAP ecosystem and is essential for supporting corporate business processes.
      </p>
    </>
  );

  return content;
};

export default ABAPModalContent;
