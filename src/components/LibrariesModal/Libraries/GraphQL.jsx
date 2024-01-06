import React from 'react';

const GraphQLModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#E535AB",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        GraphQL - це мова запитів до вашого API, яка дозволяє клієнтам вибирати дані, які їм потрібні. Вона була розроблена компанією Facebook та призначена для оптимізації передачі даних між клієнтом і сервером.
      </p>
      <p>
        <strong>Основні переваги GraphQL:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість:</strong> Клієнти отримують саме ті дані, які їм потрібні, нічого зайвого.</li>
        <li><strong>Єдина Точка Входу:</strong> Один запит GraphQL може замінити кілька традиційних API запитів.</li>
        <li><strong>Автодокументація:</strong> GraphQL автоматично створює документацію для вашого API.</li>
        <li><strong>Масштабованість:</strong> Дозволяє ефективно масштабувати розвиток API відповідно до потреб клієнтів.</li>
      </ul>
      <p>
        <strong>Застосування GraphQL:</strong>
      </p>
      <p>
        GraphQL використовується для оптимізації звернень до API веб-додатків, мобільних додатків та інших систем з великою кількістю даних.
      </p>
      <p>
        <strong>Де Вчитися GraphQL:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація GraphQL:</strong> <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>GraphQL Docs</a></li>
        <br></br>
        <li><strong>GraphQL Tutorial:</strong> <a href="https://graphql.org/learn/" target="_blank" rel="noopener noreferrer" style={linkStyles}>GraphQL Tutorial</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>GraphQL Framework</h2>
      <p>
        GraphQL is a query language for your API that allows clients to request only the data they need. It was developed by Facebook and designed to optimize the transfer of data between the client and the server.
      </p>
      <p>
        <strong>Key Advantages of GraphQL:</strong>
      </p>
      <ul>
        <li><strong>Flexibility:</strong> Clients receive precisely the data they need, nothing more.</li>
        <li><strong>Single Entry Point:</strong> A single GraphQL query can replace multiple traditional API requests.</li>
        <li><strong>Auto-Documentation:</strong> GraphQL automatically generates documentation for your API.</li>
        <li><strong>Scalability:</strong> Allows for efficient scaling of API development according to client needs.</li>
      </ul>
      <p>
        <strong>Applications of GraphQL:</strong>
      </p>
      <p>
        GraphQL is used to optimize API calls in web applications, mobile apps, and other systems with a large amount of data.
      </p>
      <p>
        <strong>Where to Learn GraphQL:</strong>
      </p>
      <ul>
        <li><strong>Official GraphQL Documentation:</strong> <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>GraphQL Docs</a></li>
        <br></br>
        <li><strong>GraphQL Tutorial:</strong> <a href="https://graphql.org/learn/" target="_blank" rel="noopener noreferrer" style={linkStyles}>GraphQL Tutorial</a></li>
      </ul>
    </>
  );

  return content;
};

export default GraphQLModalContent;
