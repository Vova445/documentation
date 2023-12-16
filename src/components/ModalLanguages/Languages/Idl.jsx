import React from 'react';

const IdlModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            IDL (Interface Definition Language) - мова опису інтерфейсів, призначена для визначення інтерфейсів між програмними компонентами.
          </p>
          <p>
            <strong>Застосування IDL:</strong>
          </p>
          <ul>
            <li><strong>Компонентна архітектура:</strong> IDL використовується для опису інтерфейсів між компонентами програмного забезпечення.</li>
            <li><strong>Розподілена розробка:</strong> IDL дозволяє описувати інтерфейси для виклику функцій та обміну даними між віддаленими компонентами.</li>
            <li><strong>Системи RPC (Remote Procedure Call):</strong> IDL використовується для визначення віддалених процедурних викликів і передачі даних між вузлами мережі.</li>
            <li><strong>Системи CORBA:</strong> IDL використовується в об'єктно-орієнтованих розподілених системах, таких як Common Object Request Broker Architecture (CORBA).</li>
          </ul>
          <p>
            <strong>Місце в програмуванні:</strong>
          </p>
          <p>
            IDL використовується для створення стандартів інтерфейсів між програмними компонентами для забезпечення їх взаємодії.
          </p>
          <p>
            <strong>Де вчити IDL:</strong>
          </p>
          <ul>
            <li><strong>OMG IDL Specification:</strong> <a href="https://www.omg.org/spec/IDL/" target="_blank" rel="noopener noreferrer">OMG IDL Specification</a></li>
            <li><strong>CORBA Documentation:</strong> <a href="https://www.omg.org/corba/" target="_blank" rel="noopener noreferrer">CORBA Documentation</a></li>
          </ul>
          <p>
            <strong>Унікальні риси IDL:</strong>
          </p>
          <ul>
            <li><strong>Незалежність від платформи:</strong> IDL дозволяє описувати інтерфейси незалежно від платформи, що сприяє розподіленій розробці.</li>
            <li><strong>Стандартизація інтерфейсів:</strong> IDL використовується для стандартизації взаємодії між різнорідними програмними компонентами.</li>
          </ul>
          <p>
            IDL відіграє ключову роль у розробці розподілених систем та забезпечує стандартизацію взаємодії між компонентами.
          </p>
        </>
      ) : (
        <>
          <p>
            IDL (Interface Definition Language) is a language used to describe interfaces, defining the interfaces between software components.
          </p>
          <p>
            <strong>Applications of IDL:</strong>
          </p>
          <ul>
            <li><strong>Component Architecture:</strong> IDL is used to describe interfaces between software components.</li>
            <li><strong>Distributed Development:</strong> IDL allows describing interfaces for function calls and data exchange between remote components.</li>
            <li><strong>Remote Procedure Call (RPC) Systems:</strong> IDL is used to define remote procedural calls and data transmission between network nodes.</li>
            <li><strong>CORBA Systems:</strong> IDL is used in object-oriented distributed systems, such as Common Object Request Broker Architecture (CORBA).</li>
          </ul>
          <p>
            <strong>Place in Programming:</strong>
          </p>
          <p>
            IDL is used to create standards for interfaces between software components to ensure their interaction.
          </p>
          <p>
            <strong>Where to Learn IDL:</strong>
          </p>
          <ul>
            <li><strong>OMG IDL Specification:</strong> <a href="https://www.omg.org/spec/IDL/" target="_blank" rel="noopener noreferrer">OMG IDL Specification</a></li>
            <li><strong>CORBA Documentation:</strong> <a href="https://www.omg.org/corba/" target="_blank" rel="noopener noreferrer">CORBA Documentation</a></li>
          </ul>
          <p>
            <strong>Unique Features of IDL:</strong>
          </p>
          <ul>
            <li><strong>Platform Independence:</strong> IDL allows describing interfaces independently of the platform, facilitating distributed development.</li>
            <li><strong>Standardization of Interfaces:</strong> IDL is used to standardize interactions between heterogeneous software components.</li>
          </ul>
          <p>
            IDL plays a crucial role in the development of distributed systems, providing standardization for interactions between components.
          </p>
        </>
      )}
    </div>
  );
};

export default IdlModalContent;
