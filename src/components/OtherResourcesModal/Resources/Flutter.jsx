import React from 'react';

const FlutterModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#02569B",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Flutter
    </a>
  ) : (
    <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Flutter Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Flutter - це вільний та відкритий фреймворк розробки високоякісних, кросплатформених мобільних додатків за допомогою однієї кодової бази.
      </p>
      <p>
        <strong>Основні функції Flutter:</strong>
      </p>
      <ul>
        <li><strong>Кросплатформеність:</strong> Розробка для iOS та Android з використанням єдиної кодової бази.</li>
        <li><strong>Відмінна Продуктивність:</strong> Висока продуктивність завдяки вбудованому движку C++.</li>
        <li><strong>Гарний Вигляд:</strong> Можливості створення красивого та адаптивного інтерфейсу.</li>
        <li><strong>Гнучкі Віджети:</strong> Широкий вибір вбудованих віджетів для швидкої розробки інтерфейсу.</li>
      </ul>
      <p>
        <strong>Основні переваги Flutter:</strong>
      </p>
      <ul>
        <li><strong>Кросплатформеність:</strong> Розробка для iOS та Android з використанням єдиної кодової бази.</li>
        <li><strong>Швидкість Розробки:</strong> Швидка розробка завдяки гнучкій структурі та великому спектру віджетів.</li>
        <li><strong>Гарний Вигляд:</strong> Сучасний та привабливий інтерфейс завдяки гнучким можливостям розміщення віджетів.</li>
      </ul>
      <p><strong>Сторінка Flutter:</strong> {officialPageLink} </p>
    </>
  ) : (
    <>
      <h2>Flutter Framework</h2>
      <p>
        Flutter is a free and open-source framework for developing high-quality, cross-platform mobile applications using a single codebase.
      </p>
      <p>
        <strong>Key Features of Flutter:</strong>
      </p>
      <ul>
        <li><strong>Cross-Platform:</strong> Develop for iOS and Android with a single codebase.</li>
        <li><strong>Excellent Performance:</strong> High performance thanks to the built-in C++ engine.</li>
        <li><strong>Beautiful Design:</strong> Capabilities for creating beautiful and adaptive interfaces.</li>
        <li><strong>Flexible Widgets:</strong> Wide selection of built-in widgets for rapid interface development.</li>
      </ul>
      <p>
        <strong>Main Advantages of Flutter:</strong>
      </p>
      <ul>
        <li><strong>Cross-Platform:</strong> Develop for iOS and Android with a single codebase.</li>
        <li><strong>Rapid Development:</strong> Fast development due to flexible structure and a wide range of widgets.</li>
        <li><strong>Beautiful Design:</strong> Modern and attractive interface design with flexible widget placement.</li>
        
      </ul>
      <p><strong>Flutter Page:</strong> {officialPageLink} </p>
    </>
  );

  return content;
};

export default FlutterModalContent;
