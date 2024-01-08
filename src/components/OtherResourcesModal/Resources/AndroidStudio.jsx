import React from 'react';

const AndroidStudioModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#3ddc84",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://developer.android.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Android Studio
    </a>
  ) : (
    <a href="https://developer.android.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Android Studio Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Android Studio - це офіційне інтегроване середовище розробки (IDE) для платформи Android.
      </p>
      <p>
        <strong>Основні поняття Android Studio:</strong>
      </p>
      <ul>
        <li><strong>Кодування на Kotlin та Java:</strong> Підтримка мов програмування Kotlin і Java для розробки Android-додатків.</li>
        <li><strong>Графічний Дизайнер інтерфейсу:</strong> Інструменти для візуального редагування та налаштування інтерфейсу користувача.</li>
        <li><strong>Емулятори та Дебаггер:</strong> Вбудовані інструменти для тестування та налагодження додатків.</li>
        <li><strong>Інструменти для Розробки Ігор:</strong> Підтримка розробки ігор для платформи Android.</li>
      </ul>
      <p>
        <strong>Основні переваги Android Studio:</strong>
      </p>
      <ul>
        <li><strong>Потужне Середовище Розробки:</strong> Інтегрована підтримка всіх етапів розробки Android-додатків.</li>
        <li><strong>Актуальність:</strong> Оновлення та підтримка для нових версій Android SDK.</li>
        <li><strong>Співпраця з Kotlin:</strong> Відмінна інтеграція з сучасною мовою програмування Kotlin.</li>
      </ul>
      <p>
        <strong>Сторінка Android Studio:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Android Studio IDE</h2>
      <p>
        Android Studio is the official integrated development environment (IDE) for the Android platform.
      </p>
      <p>
        <strong>Key Concepts of Android Studio:</strong>
      </p>
      <ul>
        <li><strong>Coding in Kotlin and Java:</strong> Support for Kotlin and Java programming languages for Android app development.</li>
        <li><strong>Graphical Interface Designer:</strong> Tools for visual editing and customization of user interfaces.</li>
        <li><strong>Emulators and Debugger:</strong> Built-in tools for testing and debugging applications.</li>
        <li><strong>Game Development Tools:</strong> Support for developing games for the Android platform.</li>
      </ul>
      <p>
        <strong>Main Advantages of Android Studio:</strong>
      </p>
      <ul>
        <li><strong>Powerful Development Environment:</strong> Integrated support for all stages of Android app development.</li>
        <li><strong>Up-to-Date:</strong> Updates and support for the latest Android SDK versions.</li>
        <li><strong>Collaboration with Kotlin:</strong> Excellent integration with the modern Kotlin programming language.</li>
      </ul>
      <p>
        <strong>Page Android Studio:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default AndroidStudioModalContent;
