import React from 'react';

const ElasticsearchModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#005571",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.elastic.co/elasticsearch/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Elastic Search
    </a>
  ) : (
    <a href="https://www.elastic.co/elasticsearch/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Elastic Search Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Elastic Search - це розподілена система аналізу та пошуку за допомогою масштабованого та розподіленого зберігання даних.
      </p>
      <p>
        <strong>Основні поняття Elastic Search:</strong>
      </p>
      <ul>
        <li><strong>Індекси:</strong> Масштабовані колекції документів, які зберігаються та індексуються для пошуку.</li>
        <li><strong>Документи:</strong> Одиниці інформації, які можна зберігати та індексувати у вигляді JSON-об'єктів.</li>
        <li><strong>Запити:</strong> Засоби для виконання запитів до збережених даних.</li>
        <li><strong>Вузли та Кластери:</strong> Одиничні сервери та групи серверів, які спільно працюють.</li>
      </ul>
      <p>
        <strong>Основні переваги Elastic Search:</strong>
      </p>
      <ul>
        <li><strong>Масштабованість:</strong> Здатність працювати з великим обсягом даних та великою кількістю запитів.</li>
        <li><strong>Швидкість Пошуку:</strong> Ефективний та швидкий пошук за допомогою індексації даних.</li>
        <li><strong>Гнучкість:</strong> Можливість налаштування та розширення функціональності.</li>
      </ul>
      <p>
        <strong>Сторінка Elastic Search:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Elasticsearch</h2>
      <p>
        Elasticsearch is a distributed system for analytics and full-text search using scalable and distributed data storage.
      </p>
      <p>
        <strong>Key Concepts of Elasticsearch:</strong>
      </p>
      <ul>
        <li><strong>Indexes:</strong> Scalable collections of documents stored and indexed for search.</li>
        <li><strong>Documents:</strong> Units of information that can be stored and indexed as JSON objects.</li>
        <li><strong>Queries:</strong> Tools for executing queries on stored data.</li>
        <li><strong>Nodes and Clusters:</strong> Individual servers and groups of servers that work together.</li>
      </ul>
      <p>
        <strong>Main Advantages of Elasticsearch:</strong>
      </p>
      <ul>
        <li><strong>Scalability:</strong> Ability to handle large volumes of data and numerous queries.</li>
        <li><strong>Search Speed:</strong> Efficient and fast search through data indexing.</li>
        <li><strong>Flexibility:</strong> Configurability and extensibility.</li>
      </ul>
      <p>
        <strong>Elasticsearch Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default ElasticsearchModalContent;
