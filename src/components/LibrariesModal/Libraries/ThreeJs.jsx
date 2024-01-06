import React from 'react';

const ThreeJsModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#008080",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Three.js - це бібліотека для роботи з 3D-графікою в браузері, яка базується на WebGL. Вона дозволяє легко створювати вражаючі 3D-сцени та взаємодіяти з ними у веб-додатках.
      </p>
      <p>
        <strong>Основні можливості Three.js:</strong>
      </p>
      <ul>
        <li><strong>Візуалізація 3D-Графіки:</strong> Three.js дозволяє створювати складні 3D-моделі та відтворювати їх у браузері.</li>
        <li><strong>Анімації та Ефекти:</strong> Легко створюйте анімації та застосовуйте різноманітні ефекти для покращення візуального враження.</li>
        <li><strong>Взаємодія з Користувачем:</strong> Реалізуйте взаємодію користувача з 3D-сценою, таку як обертання, масштабування та перетягування.</li>
        <li><strong>Підтримка VR та AR:</strong> Three.js надає можливості для розробки віртуальної та доповненої реальності.</li>
      </ul>
      <p>
        <strong>Де Вчитися Three.js:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Three.js:</strong> <a href="https://threejs.org/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Three.js Docs</a></li>
        <br></br>
        <li><strong>Three.js Journey:</strong> <a href="https://threejs-journey.xyz/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Three.js Journey</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Three.js 3D Graphics Library</h2>
      <p>
        Three.js is a library for working with 3D graphics in the browser, based on WebGL. It allows you to easily create impressive 3D scenes and interact with them in web applications.
      </p>
      <p>
        <strong>Key Features of Three.js:</strong>
      </p>
      <ul>
        <li><strong>3D Graphics Visualization:</strong> Three.js enables the creation of complex 3D models and renders them in the browser.</li>
        <li><strong>Animations and Effects:</strong> Easily create animations and apply various effects to enhance the visual experience.</li>
        <li><strong>User Interaction:</strong> Implement user interaction with the 3D scene, such as rotation, scaling, and dragging.</li>
        <li><strong>VR and AR Support:</strong> Three.js provides capabilities for virtual and augmented reality development.</li>
      </ul>
      <p>
        <strong>Where to Learn Three.js:</strong>
      </p>
      <ul>
        <li><strong>Official Three.js Documentation:</strong> <a href="https://threejs.org/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Three.js Docs</a></li>
        <br></br>
        <li><strong>Three.js Journey:</strong> <a href="https://threejs-journey.xyz/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Three.js Journey</a></li>
      </ul>
    </>
  );

  return content;
};

export default ThreeJsModalContent;
