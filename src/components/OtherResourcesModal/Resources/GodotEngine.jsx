import React from 'react';

const GodotEngineModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#478CBF",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Godot Engine
    </a>
  ) : (
    <a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Godot Engine Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Godot Engine - це вільний та відкритий гейм-движок для розробки ігор. Його використовують для створення як 2D, так і 3D ігор для різних платформ.
      </p>
      <p>
        <strong>Основні функції Godot Engine:</strong>
      </p>
      <ul>
        <li><strong>Відкритий Код:</strong> Движок розповсюджується під ліцензією MIT, і весь його вихідний код доступний громадськості.</li>
        <li><strong>Мова Сценаріїв GDScript:</strong> Спеціально розроблена мова сценаріїв для зручного програмування гри.</li>
        <li><strong>Візуальний Редактор Сцен:</strong> Зручний інтерфейс для розстановки об'єктів та управління грою.</li>
        <li><strong>2D та 3D Розробка:</strong> Підтримка як 2D, так і 3D графіки та функціоналу.</li>
      </ul>
      <p>
        <strong>Основні переваги Godot Engine:</strong>
      </p>
      <ul>
        <li><strong>Вільний та Відкритий:</strong> Розповсюджується під вільною ліцензією та має відкритий вихідний код.</li>
        <li><strong>Мова Сценаріїв GDScript:</strong> Проста та потужна мова для програмування в ігровому середовищі.</li>
        <li><strong>Спільнота Розробників:</strong> Активна спільнота користувачів та розробників Godot.</li>
      </ul>
      <p>
        <strong>Сторінка Godot Engine:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Godot Engine</h2>
      <p>
        Godot Engine is a free and open-source game engine used for developing both 2D and 3D games for various platforms.
      </p>
      <p>
        <strong>Key Features of Godot Engine:</strong>
      </p>
      <ul>
        <li><strong>Open Source:</strong> The engine is distributed under the MIT license, and its entire source code is available to the public.</li>
        <li><strong>GDScript Scripting Language:</strong> Specially developed scripting language for convenient game programming.</li>
        <li><strong>Visual Scene Editor:</strong> Convenient interface for placing objects and managing the game.</li>
        <li><strong>2D and 3D Development:</strong> Support for both 2D and 3D graphics and functionality.</li>
      </ul>
      <p>
        <strong>Main Advantages of Godot Engine:</strong>
      </p>
      <ul>
        <li><strong>Free and Open Source:</strong> Distributed under a free license with open-source code.</li>
        <li><strong>GDScript Scripting Language:</strong> Simple and powerful scripting language for game development.</li>
        <li><strong>Developer Community:</strong> Active community of Godot users and developers.</li>
      </ul>
      <p>
        <strong>Godot Engine Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default GodotEngineModalContent;
