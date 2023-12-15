import React from 'react';

const FSharpModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        F# - функціональна мова програмування, що базується на платформі .NET. Вона поєднує в собі можливості функціонального та об'єктно-орієнтованого програмування та часто використовується для розробки розподілених та паралельних програм.
      </p>
      <p>
        <strong>Застосування F#:</strong>
      </p>
      <ul>
        <li><strong>Розробка Додатків на Платформі .NET:</strong> F# є ідеальним вибором для розробки додатків на платформі .NET з використанням функціональних парадигм програмування.</li>
        <li><strong>Аналіз та Обробка Даних:</strong> F# часто використовується для аналізу та обробки великих обсягів даних.</li>
        <li><strong>Розробка Веб-Додатків:</strong> Мова підтримує розробку веб-додатків та мікросервісів на платформі .NET.</li>
        <li><strong>Паралельне Програмування:</strong> F# має зручні засоби для паралельного програмування.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        F# забезпечує швидку розробку та високу продуктивність завдяки своїм функціональним можливостям та інтеграції з екосистемою .NET.
      </p>
      <p>
        <strong>Де Вчити F#:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація F#:</strong> <a href="https://docs.microsoft.com/en-us/dotnet/fsharp/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>F# Documentation</a></li>
        <li><strong>F# for Fun and Profit:</strong> <a href="https://fsharpforfunandprofit.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>F# for Fun and Profit</a></li>
        <li><strong>Try F# - Online F# Compiler:</strong> <a href="https://try.dot.net/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Try F#</a></li>
      </ul>
      <p>
        <strong>Особливості F#:</strong>
      </p>
      <ul>
        <li><strong>Сильна Типізація:</strong> F# використовує сильну типізацію для підвищення надійності та продуктивності.</li>
        <li><strong>Паралельні та Асинхронні Можливості:</strong> Мова має зручні засоби для паралельного та асинхронного програмування.</li>
        <li><strong>Інтеграція з .NET:</strong> F# легко інтегрується з екосистемою .NET та може використовувати бібліотеки, написані на C#.</li>
      </ul>
      <p>
        F# - це потужний інструмент для розробників, які цінують функціональні можливості та працюють на платформі .NET.
      </p>
    </>
  ) : (
    <>
      <p>
        F# is a functional programming language based on the .NET platform. It combines the capabilities of functional and object-oriented programming and is often used for developing distributed and parallel programs.
      </p>
      <p>
        <strong>Applications of F#:</strong>
      </p>
      <ul>
        <li><strong>.NET Application Development:</strong> F# is an excellent choice for developing applications on the .NET platform using functional programming paradigms.</li>
        <li><strong>Data Analysis and Processing:</strong> F# is frequently used for analyzing and processing large volumes of data.</li>
        <li><strong>Web Application Development:</strong> The language supports the development of web applications and microservices on the .NET platform.</li>
        <li><strong>Parallel Programming:</strong> F# provides convenient tools for parallel programming.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        F# enables fast development and high productivity due to its functional capabilities and integration with the .NET ecosystem.
      </p>
      <p>
        <strong>Where to Learn F#:</strong>
      </p>
      <ul>
        <li><strong>Official F# Documentation:</strong> <a href="https://docs.microsoft.com/en-us/dotnet/fsharp/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>F# Documentation</a></li>
        <li><strong>F# for Fun and Profit:</strong> <a href="https://fsharpforfunandprofit.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>F# for Fun and Profit</a></li>
        <li><strong>Try F# - Online F# Compiler:</strong> <a href="https://try.dot.net/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Try F#</a></li>
      </ul>
      <p>
        <strong>Features of F#:</strong>
      </p>
      <ul>
        <li><strong>Strong Typing:</strong> F# uses strong typing to enhance reliability and productivity.</li>
        <li><strong>Parallel and Asynchronous Capabilities:</strong> The language offers convenient features for parallel and asynchronous programming.</li>
        <li><strong>Integration with .NET:</strong> F# easily integrates with the .NET ecosystem and can use libraries written in C#.</li>
      </ul>
      <p>
        F# is a powerful tool for developers who appreciate functional capabilities and work on the .NET platform.
      </p>
    </>
  );

  return content;
};

export default FSharpModalContent;
