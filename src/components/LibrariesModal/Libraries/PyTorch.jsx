import React from 'react';

const PyTorchModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#EE4C2C",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        PyTorch - це відкрите програмне забезпечення для машинного навчання та глибокого навчання, розроблене командою Facebook.
      </p>
      <p>
        <strong>Основні характеристики PyTorch:</strong>
      </p>
      <ul>
        <li><strong>Динамічний Граф Обчислень:</strong> PyTorch використовує динамічний граф обчислень, що полегшує роботу зі складними моделями.</li>
        <li><strong>Нативна Підтримка Python:</strong> Проста інтеграція з Python та підтримка стандартних структур даних мови.</li>
        <li><strong>Широкий Вибір Алгоритмів:</strong> Підтримка різноманітних алгоритмів для завдань машинного навчання і глибокого навчання.</li>
        <li><strong>Робота з Великими Данними:</strong> Зручність роботи з великими обсягами даних та їх обробка.</li>
      </ul>
      <p>
        <strong>Застосування PyTorch:</strong>
      </p>
      <p>
        PyTorch використовується для розробки та навчання моделей у багатьох галузях, включаючи комп'ютерне зору, обробку природних мов, генерацію зображень та інше.
      </p>
      <p>
        <strong>Де Вчитися PyTorch:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація PyTorch:</strong> <a href="https://pytorch.org/docs/stable/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>PyTorch Docs</a></li>
        <br></br>
        <li><strong>PyTorch Tutorials:</strong> <a href="https://pytorch.org/tutorials/" target="_blank" rel="noopener noreferrer" style={linkStyles}>PyTorch Tutorials</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>PyTorch Library</h2>
      <p>
        PyTorch is an open-source software library for machine learning and deep learning developed by the Facebook team.
      </p>
      <p>
        <strong>Key Features of PyTorch:</strong>
      </p>
      <ul>
        <li><strong>Dynamic Computational Graph:</strong> PyTorch uses a dynamic computational graph, making it easy to work with complex models.</li>
        <li><strong>Native Python Support:</strong> Seamless integration with Python and support for standard Python data structures.</li>
        <li><strong>Wide Range of Algorithms:</strong> Support for various algorithms for machine learning and deep learning tasks.</li>
        <li><strong>Handling Big Data:</strong> Convenience in working with large datasets and their processing.</li>
      </ul>
      <p>
        <strong>Applications of PyTorch:</strong>
      </p>
      <p>
        PyTorch is used for developing and training models in various domains, including computer vision, natural language processing, image generation, and more.
      </p>
      <p>
        <strong>Where to Learn PyTorch:</strong>
      </p>
      <ul>
        <li><strong>Official PyTorch Documentation:</strong> <a href="https://pytorch.org/docs/stable/index.html" target="_blank" rel="noopener noreferrer" style={linkStyles}>PyTorch Docs</a></li>
        <br></br>
        <li><strong>PyTorch Tutorials:</strong> <a href="https://pytorch.org/tutorials/" target="_blank" rel="noopener noreferrer" style={linkStyles}>PyTorch Tutorials</a></li>
      </ul>
    </>
  );

  return content;
};

export default PyTorchModalContent;
