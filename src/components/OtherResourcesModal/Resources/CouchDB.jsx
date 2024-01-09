import React from 'react';

const CouchDBModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#e63946",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка CouchDB" : "CouchDB Official Page";

  const officialPageLink = (
    <a href="https://couchdb.apache.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Apache CouchDB - це база даних, яка використовує модель документу та забезпечує розподілене зберігання даних. CouchDB розроблений для ефективної роботи з великим обсягом даних та підтримує реплікацію для забезпечення доступу до даних навіть при відсутності зв'язку з мережею.
      </p>
      <p>
        <strong>Основні можливості CouchDB:</strong>
      </p>
      <ul>
        <li><strong>Модель Документу:</strong> Збереження даних у вигляді JSON-документів, що спрощує взаємодію та обробку даних.</li>
        <li><strong>Розподілене Зберігання:</strong> Можливість розміщення даних на різних вузлах для забезпечення надійності та швидкості.</li>
        <li><strong>Реплікація Даних:</strong> Автоматична синхронізація даних між вузлами для забезпечення доступу при відсутності мережевого зв'язку.</li>
        <li><strong>Використання MapReduce:</strong> Запити до бази даних за допомогою технології MapReduce.</li>
      </ul>
      <p>
        <strong>Основні переваги CouchDB:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість та Простота:</strong> Простий та гнучкий підхід до зберігання та обробки даних.</li>
        <li><strong>Розподіленість:</strong> Можливість ефективного розміщення та роботи з даними на різних серверах.</li>
        <li><strong>Реплікація для Надійності:</strong> Забезпечення доступу до даних та надійності за допомогою реплікації.</li>
      </ul>
      <p>
        <strong>Сторінка CouchDB:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Apache CouchDB - Distributed Database System</h2>
      <p>
        Apache CouchDB is a database that uses a document model and provides distributed data storage. CouchDB is designed to efficiently handle large volumes of data and supports replication to ensure data access even when the network is unavailable.
      </p>
      <p>
        <strong>Key Features of CouchDB:</strong>
      </p>
      <ul>
        <li><strong>Document Model:</strong> Storing data in the form of JSON documents, simplifying interaction and data processing.</li>
        <li><strong>Distributed Storage:</strong> The ability to store data on different nodes to ensure reliability and speed.</li>
        <li><strong>Data Replication:</strong> Automatic synchronization of data between nodes to ensure access in the absence of network connectivity.</li>
        <li><strong>Use of MapReduce:</strong> Querying the database using MapReduce technology.</li>
      </ul>
      <p>
        <strong>Main Advantages of CouchDB:</strong>
      </p>
      <ul>
        <li><strong>Flexibility and Simplicity:</strong> A simple and flexible approach to storing and processing data.</li>
        <li><strong>Distributed Nature:</strong> The ability to efficiently store and work with data on different servers.</li>
        <li><strong>Replication for Reliability:</strong> Ensuring data access and reliability through replication.</li>
      </ul>
      <p>
        <strong>Page CouchDB:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default CouchDBModalContent;
