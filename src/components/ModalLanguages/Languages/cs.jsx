import React from 'react';

const CSharpModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        C# - об'єктно-орієнтована мова програмування, розроблена компанією Microsoft. Вона поєднує в собі елементи C і C++ з інноваціями мов програмування, такими як безпека типів C++ і простота використання Java.
      </p>
      <p>
        <strong>Застосування C#:</strong>
      </p>
      <ul>
        <li><strong>Розробка веб-додатків:</strong> C# використовується для створення веб-додатків за допомогою технології ASP.NET.</li>
        <li><strong>Розробка десктопних додатків:</strong> C# використовується для створення Windows-додатків та програмного забезпечення для операційних систем Microsoft.</li>
        <li><strong>Розробка мобільних додатків:</strong> C# використовується для розробки мобільних додатків на платформі Xamarin.</li>
        <li><strong>Ігрова розробка:</strong> C# є однією з основних мов програмування для створення ігор у середовищі Unity.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        C# є ключовою мовою для платформи розробки Microsoft .NET, і вона широко використовується для різних видів розробок у всьому світі.
      </p>
      <p>
        <strong>Де вчити C#:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Microsoft:</strong> <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Microsoft C# Documentation</a></li>
        <li><strong>Курси на платформі Pluralsight:</strong> <a href="https://www.pluralsight.com/courses/csharp-fundamentals-dev" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Pluralsight C# Fundamentals</a></li>
      </ul>
      <p>
        <strong>Особливості C#:</strong>
      </p>
      <ul>
        <li><strong>Інтеграція з платформою .NET:</strong> C# інтегрується з широкою платформою .NET, що робить його потужним інструментом для розробки.</li>
        <li><strong>Об'єктно-орієнтований підхід:</strong> C# використовує об'єктно-орієнтований підхід для розв'язання завдань.</li>
        <li><strong>Асинхронне програмування:</strong> C# підтримує асинхронне програмування, що робить його ефективним для операцій, які вимагають асинхронності.</li>
      </ul>
      <p>
        C# є потужною мовою програмування, яка знаходить застосування у багатьох сферах розробки програмного забезпечення.
      </p>
    </>
  ) : (
    <>
      <p>
        C# is an object-oriented programming language developed by Microsoft. It combines elements of C and C++ with innovations in programming languages like type safety from C++ and ease of use from Java.
      </p>
      <p>
        <strong>Applications of C#:</strong>
      </p>
      <ul>
        <li><strong>Web Development:</strong> C# is used for building web applications using ASP.NET technology.</li>
        <li><strong>Desktop Application Development:</strong> C# is used for creating Windows applications and software for Microsoft operating systems.</li>
        <li><strong>Mobile App Development:</strong> C# is used for developing mobile applications using the Xamarin framework.</li>
        <li><strong>Game Development:</strong> C# is one of the primary programming languages for game development in the Unity environment.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        C# is a key language for the Microsoft .NET development platform and is widely used for various development purposes worldwide.
      </p>
      <p>
        <strong>Where to Learn C#:</strong>
      </p>
      <ul>
        <li><strong>Official Microsoft Documentation:</strong> <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Microsoft C# Documentation</a></li>
        <li><strong>Courses on Pluralsight:</strong> <a href="https://www.pluralsight.com/courses/csharp-fundamentals-dev" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Pluralsight C# Fundamentals</a></li>
      </ul>
      <p>
        <strong>Features of C#:</strong>
      </p>
      <ul>
        <li><strong>Integration with the .NET Platform:</strong> C# integrates with the extensive .NET platform, making it a powerful tool for development.</li>
        <li><strong>Object-Oriented Approach:</strong> C# uses an object-oriented approach to problem-solving.</li>
        <li><strong>Asynchronous Programming:</strong> C# supports asynchronous programming, making it efficient for operations that require asynchrony.</li>
      </ul>
      <p>
        C# is a powerful programming language with applications in various software development domains.
      </p>
    </>
  );

  return content;
};

export default CSharpModalContent;
