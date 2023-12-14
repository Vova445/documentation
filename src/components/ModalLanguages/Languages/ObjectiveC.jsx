import React from 'react';

const ObjectiveCModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Objective-C - це об'єктно-орієнтована мова програмування, яка використовується для розробки програм для платформ Apple, зокрема iOS та macOS. Вона поєднує в собі особливості мови C з об'єктно-орієнтованим підходом та високорівневими можливостями.
      </p>
      <p>
        <strong>Застосування Objective-C:</strong>
      </p>
      <ul>
        <li><strong>Мобільна розробка:</strong> Objective-C використовується для розробки мобільних додатків для пристроїв Apple, таких як iPhone та iPad.</li>
        <li><strong>Розробка для macOS:</strong> Мова використовується для створення програм для комп'ютерів під управлінням операційної системи macOS.</li>
        <li><strong>Розробка для iOS:</strong> Objective-C є однією з основних мов програмування для розробки додатків для iOS.</li>
        <li><strong>Розширення мови C:</strong> Мова дозволяє використовувати об'єктно-орієнтований підхід у роботі з мовою C.</li>
      </ul>
      <p>
        <strong>Місце в світі програмування:</strong>
      </p>
      <p>
        Objective-C відзначається своєю роллю в екосистемі розробки для продуктів Apple та використовується для створення високоякісних та ефективних додатків для цих платформ.
      </p>
      <p>
        <strong>Де вчити Objective-C:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Apple для Objective-C:</strong> <a href="https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Introduction to the Objective-C Language</a></li>
        <li><strong>Курси на платформі Ray Wenderlich:</strong> <a href="https://www.raywenderlich.com/ios" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>iOS & Swift Tutorials</a></li>
      </ul>
      <p>
        <strong>Особливості Objective-C:</strong>
      </p>
      <ul>
        <li><strong>Об'єктно-орієнтований підхід:</strong> Мова дозволяє використовувати концепції об'єктно-орієнтованого програмування для створення додатків.</li>
        <li><strong>Інтеграція з Apple:</strong> Objective-C є основною мовою для розробки додатків для платформ Apple.</li>
        <li><strong>Низькорівнева мова:</strong> Мова поєднує в собі можливості високорівневих та низькорівневих мов програмування.</li>
      </ul>
      <p>
        Objective-C - це інструмент для розробників, які спеціалізуються на створенні додатків для платформ Apple.
      </p>
    </>
  ) : (
    <>
      <p>
        Objective-C is an object-oriented programming language used for developing programs for Apple platforms, including iOS and macOS. It combines features of the C language with an object-oriented approach and high-level capabilities.
      </p>
      <p>
        <strong>Applications of Objective-C:</strong>
      </p>
      <ul>
        <li><strong>Mobile Development:</strong> Objective-C is used for developing mobile applications for Apple devices, such as the iPhone and iPad.</li>
        <li><strong>macOS Development:</strong> The language is used for creating programs for computers running the macOS operating system.</li>
        <li><strong>iOS Development:</strong> Objective-C is one of the primary programming languages for developing applications for iOS.</li>
        <li><strong>Extension of C Language:</strong> The language allows using an object-oriented approach in working with the C language.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Objective-C is recognized for its role in the development ecosystem for Apple products and is used to create high-quality and efficient applications for these platforms.
      </p>
      <p>
        <strong>Where to Learn Objective-C:</strong>
      </p>
      <ul>
        <li><strong>Official Apple Documentation for Objective-C:</strong> <a href="https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Introduction to the Objective-C Language</a></li>
        <li><strong>Courses on Ray Wenderlich Platform:</strong> <a href="https://www.raywenderlich.com/ios" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>iOS & Swift Tutorials</a></li>
      </ul>
      <p>
        <strong>Features of Objective-C:</strong>
      </p>
      <ul>
        <li><strong>Object-Oriented Approach:</strong> The language allows using object-oriented programming concepts to create applications.</li>
        <li><strong>Integration with Apple:</strong> Objective-C is a primary language for developing applications for Apple platforms.</li>
        <li><strong>Low-Level Language:</strong> The language combines high-level and low-level programming capabilities.</li>
      </ul>
      <p>
        Objective-C is a tool for developers specializing in creating applications for Apple platforms.
      </p>
    </>
  );

  return content;
};

export default ObjectiveCModalContent;
