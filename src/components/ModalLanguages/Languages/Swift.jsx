import React from 'react';

const SwiftModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Swift - це мова програмування, розроблена компанією Apple для створення програм для iOS, macOS, watchOS та tvOS. Вона поєднує в собі швидкість та експресивність мови Objective-C з сучасними функціями та безпечністю.
      </p>
      <p>
        <strong>Застосування Swift:</strong>
      </p>
      <ul>
        <li><strong>Розробка iOS-додатків:</strong> Swift використовується для створення програм для iPhone та iPad.</li>
        <li><strong>Розробка macOS-додатків:</strong> Swift є основною мовою для створення десктопних додатків для macOS.</li>
        <li><strong>Розробка watchOS-додатків:</strong> Swift використовується для створення додатків для годинників Apple Watch.</li>
        <li><strong>Розробка tvOS-додатків:</strong> Swift використовується для створення програм для Apple TV.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Swift швидко став популярною мовою серед розробників для створення додатків для платформ Apple.
      </p>
      <p>
        <strong>Де вчити Swift:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Swift:</strong> <a href="https://docs.swift.org/swift-book/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Swift Documentation</a></li>
        <li><strong>Курси на платформі RayWenderlich:</strong> <a href="https://www.raywenderlich.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>RayWenderlich Swift Courses</a></li>
      </ul>
      <p>
        <strong>Особливості Swift:</strong>
      </p>
      <ul>
        <li><strong>Безпечність:</strong> Swift має вбудовану систему безпеки типів, що допомагає уникнути багатьох типових помилок.</li>
        <li><strong>Сучасний синтаксис:</strong> Синтаксис Swift є зрозумілим та експресивним, що полегшує розробку програм.</li>
        <li><strong>Широкі можливості:</strong> Swift підтримує різноманітні функції, такі як функціональне програмування та об'єктно-орієнтоване програмування.</li>
      </ul>
      <p>
        Swift - це мова програмування, що визначається своєю продуктивністю та розширеними можливостями для розробників Apple.
      </p>
    </>
  ) : (
    <>
      <p>
        Swift is a programming language developed by Apple for building apps for iOS, macOS, watchOS, and tvOS. It combines the speed and expressiveness of the Objective-C language with modern features and safety.
      </p>
      <p>
        <strong>Applications of Swift:</strong>
      </p>
      <ul>
        <li><strong>iOS App Development:</strong> Swift is used to create applications for iPhone and iPad.</li>
        <li><strong>macOS App Development:</strong> Swift is the primary language for creating desktop applications for macOS.</li>
        <li><strong>watchOS App Development:</strong> Swift is used to create applications for Apple Watch.</li>
        <li><strong>tvOS App Development:</strong> Swift is used to create applications for Apple TV.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Swift has quickly become a popular language among developers for building applications on Apple platforms.
      </p>
      <p>
        <strong>Where to Learn Swift:</strong>
      </p>
      <ul>
        <li><strong>Official Swift Documentation:</strong> <a href="https://docs.swift.org/swift-book/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Swift Documentation</a></li>
        <li><strong>Courses on RayWenderlich:</strong> <a href="https://www.raywenderlich.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>RayWenderlich Swift Courses</a></li>
      </ul>
      <p>
        <strong>Features of Swift:</strong>
      </p>
      <ul>
        <li><strong>Safety:</strong> Swift has a built-in type safety system to prevent many common errors.</li>
        <li><strong>Modern Syntax:</strong> Swift syntax is clear and expressive, making program development easier.</li>
        <li><strong>Wide Capabilities:</strong> Swift supports various features, including functional programming and object-oriented programming.</li>
      </ul>
      <p>
        Swift is a programming language known for its productivity and advanced capabilities for Apple developers.
      </p>
    </>
  );

  return content;
};

export default SwiftModalContent;
