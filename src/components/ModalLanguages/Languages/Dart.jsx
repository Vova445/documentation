import React from 'react';

const DartModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Dart - об'єктно-орієнтована мова програмування, розроблена компанією Google, яка використовується для розробки веб-додатків та мобільних додатків. Dart пропонує ефективну та швидку розробку завдяки своєму простому синтаксису та широкому функціоналу.
      </p>
      <p>
        <strong>Застосування Dart:</strong>
      </p>
      <ul>
        <li><strong>Веб-розробка:</strong> Dart використовується для розробки веб-додатків, зокрема за допомогою фреймворку Flutter для створення крос-платформених інтерфейсів.</li>
        <li><strong>Мобільна розробка:</strong> Dart використовується для створення мобільних додатків за допомогою фреймворку Flutter, що дозволяє розробляти додатки для iOS та Android із загальним кодом.</li>
        <li><strong>Інструменти для розробників:</strong> Dart також використовується для написання інструментів для розробників та скриптів.</li>
      </ul>
      <p>
        <strong>Місце в світі програмування:</strong>
      </p>
      <p>
        Dart набув популярності завдяки використанню його у фреймворку Flutter для розробки мобільних додатків та веб-додатків. Він пропонує високу продуктивність та можливість створювати крос-платформені додатки.
      </p>
      <p>
        <strong>Де вчити Dart:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Dart:</strong> <a href="https://dart.dev/guides" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Dart Documentation</a></li>
        <li><strong>Курси на платформі Udacity:</strong> <a href="https://www.udacity.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Dart and Flutter: The Complete Developer's Guide</a></li>
      </ul>
      <p>
        <strong>Особливості Dart:</strong>
      </p>
      <ul>
        <li><strong>Крос-платформеність:</strong> Dart використовується у фреймворку Flutter для створення додатків, що працюють як на iOS, так і на Android, із загальним кодом.</li>
        <li><strong>Швидкість виконання:</strong> Dart пропонує високу швидкість виконання завдяки технології Just-In-Time (JIT) та Ahead-Of-Time (AOT) компіляції.</li>
        <li><strong>Ефективний синтаксис:</strong> Мова має простий та зрозумілий синтаксис, що сприяє ефективній розробці.</li>
      </ul>
      <p>
        Dart - це мова програмування, яка дозволяє розробляти якісні та продуктивні додатки для різних платформ.
      </p>
    </>
  ) : (
    <>
      <p>
        Dart is an object-oriented programming language developed by Google, used for developing web applications and mobile apps. Dart offers efficient and fast development with its simple syntax and extensive functionality.
      </p>
      <p>
        <strong>Applications of Dart:</strong>
      </p>
      <ul>
        <li><strong>Web Development:</strong> Dart is used for web development, especially with the Flutter framework for creating cross-platform interfaces.</li>
        <li><strong>Mobile Development:</strong> Dart is used for building mobile apps with the Flutter framework, allowing developers to create apps for both iOS and Android with a shared codebase.</li>
        <li><strong>Developer Tools:</strong> Dart is also used for writing developer tools and scripts.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Dart gained popularity through its use in the Flutter framework for developing mobile and web applications. It offers high productivity and the ability to create cross-platform applications.
      </p>
      <p>
        <strong>Where to Learn Dart:</strong>
      </p>
      <ul>
        <li><strong>Official Dart Documentation:</strong> <a href="https://dart.dev/guides" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Dart Documentation</a></li>
        <li><strong>Courses on Udacity:</strong> <a href="https://www.udacity.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Dart and Flutter: The Complete Developer's Guide</a></li>
      </ul>
      <p>
        <strong>Features of Dart:</strong>
      </p>
      <ul>
        <li><strong>Cross-Platform:</strong> Dart is used in the Flutter framework to create apps that work on both iOS and Android with a shared codebase.</li>
        <li><strong>Execution Speed:</strong> Dart offers high execution speed through Just-In-Time (JIT) and Ahead-Of-Time (AOT) compilation technologies.</li>
        <li><strong>Efficient Syntax:</strong> The language has a simple and understandable syntax, promoting efficient development.</li>
      </ul>
      <p>
        Dart is a programming language that enables the development of high-quality and productive applications for various platforms.
      </p>
    </>
  );

  return content;
};

export default DartModalContent;
