import React from 'react';

const OpenCVModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#5C3D2E",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        OpenCV - це бібліотека комп'ютерного зору та машинного навчання. Вона надає інструменти для обробки та аналізу зображень і відео, а також для реалізації різноманітних завдань в галузі комп'ютерного зору.
      </p>
      <p>
        <strong>Основні функції OpenCV:</strong>
      </p>
      <ul>
        <li><strong>Обробка Зображень та Відео:</strong> Велика кількість функцій для обробки та аналізу зображень та відео.</li>
        <li><strong>Машинне Навчання:</strong> Модуль машинного навчання для реалізації алгоритмів класифікації та регресії.</li>
        <li><strong>Відслідковування Об'єктів:</strong> Можливість відслідковування та розпізнавання об'єктів в режимі реального часу.</li>
        <li><strong>Робота з Веб-Камерою:</strong> Легка інтеграція з веб-камерою для обробки відеопотоку.</li>
      </ul>
      <p>
        <strong>Де Вчитися OpenCV:</strong>
      </p>
      <ul>
        <br></br>
        <li><strong>OpenCV-Python Tutorial:</strong> <a href="https://docs.opencv.org/master/d6/d00/tutorial_py_root.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>OpenCV-Python Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>OpenCV Computer Vision Library</h2>
      <p>
        OpenCV is a computer vision and machine learning library. It provides tools for image and video processing and analysis, as well as the implementation of various computer vision tasks.
      </p>
      <p>
        <strong>Key Features of OpenCV:</strong>
      </p>
      <ul>
        <li><strong>Image and Video Processing:</strong> A wide range of functions for processing and analyzing images and videos.</li>
        <li><strong>Machine Learning:</strong> Machine learning module for implementing classification and regression algorithms.</li>
        <li><strong>Object Tracking:</strong> Capability to track and recognize objects in real-time.</li>
        <li><strong>Web Camera Integration:</strong> Easy integration with a web camera for video stream processing.</li>
      </ul>
      <p>
        <strong>Where to Learn OpenCV:</strong>
      </p>
      <ul>
       <br></br>
        <li><strong>OpenCV-Python Tutorial:</strong> <a href="https://docs.opencv.org/master/d6/d00/tutorial_py_root.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>OpenCV-Python Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default OpenCVModalContent;
