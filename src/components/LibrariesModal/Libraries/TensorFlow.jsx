import React from 'react';

const TensorFlowModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#FF6F61",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        TensorFlow - це відкрите програмне забезпечення для машинного навчання, розроблене групою дослідників та інженерів з Google Brain.
      </p>
      <p>
        <strong>Основні характеристики TensorFlow:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість та Розширюваність:</strong> TensorFlow дозволяє розробникам будувати та навчати моделі на різних платформах та пристроях.</li>
        <li><strong>Спільнота та Ресурси:</strong> Широка спільнота розробників та наявність різноманітних ресурсів для навчання.</li>
        <li><strong>Широкий Функціонал:</strong> TensorFlow надає інструменти для машинного навчання, глибокого навчання та інших задач штучного інтелекту.</li>
        <li><strong>Інтеграція з Іншими Бібліотеками:</strong> Легко інтегрується з іншими бібліотеками та інструментами для розробки.</li>
      </ul>
      <p>
        <strong>Застосування TensorFlow:</strong>
      </p>
      <p>
        TensorFlow використовується для розробки та навчання моделей для різних завдань, таких як розпізнавання об'єктів, переклад мови, генерація контенту та інше.
      </p>
      <p>
        <strong>Де Вчитися TensorFlow:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація TensorFlow:</strong> <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>TensorFlow Docs</a></li>
        <br></br>
        <li><strong>TensorFlow Tutorials:</strong> <a href="https://www.tensorflow.org/tutorials" target="_blank" rel="noopener noreferrer" style={linkStyles}>TensorFlow Tutorials</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>TensorFlow Library</h2>
      <p>
        TensorFlow is an open-source software library for machine learning developed by researchers and engineers from Google Brain.
      </p>
      <p>
        <strong>Key Features of TensorFlow:</strong>
      </p>
      <ul>
        <li><strong>Flexibility and Scalability:</strong> TensorFlow allows developers to build and train models on various platforms and devices.</li>
        <li><strong>Community and Resources:</strong> Wide community of developers and availability of various learning resources.</li>
        <li><strong>Wide Functionality:</strong> TensorFlow provides tools for machine learning, deep learning, and other artificial intelligence tasks.</li>
        <li><strong>Integration with Other Libraries:</strong> Easily integrates with other libraries and development tools.</li>
      </ul>
      <p>
        <strong>Applications of TensorFlow:</strong>
      </p>
      <p>
        TensorFlow is used for developing and training models for various tasks such as object recognition, language translation, content generation, and more.
      </p>
      <p>
        <strong>Where to Learn TensorFlow:</strong>
      </p>
      <ul>
        <li><strong>Official TensorFlow Documentation:</strong> <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>TensorFlow Docs</a></li>
        <br></br>
        <li><strong>TensorFlow Tutorials:</strong> <a href="https://www.tensorflow.org/tutorials" target="_blank" rel="noopener noreferrer" style={linkStyles}>TensorFlow Tutorials</a></li>
      </ul>
    </>
  );

  return content;
};

export default TensorFlowModalContent;
