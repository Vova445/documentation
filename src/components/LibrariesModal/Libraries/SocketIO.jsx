import React from 'react';

const SocketIOModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#484848",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        Socket.IO - це бібліотека для реалізації двостороннього зв'язку (real-time) між клієнтом та сервером у веб-додатках. Вона побудована на основі технологій WebSocket та покращує їх функціонал для легкої інтеграції в ваші проекти.
      </p>
      <p>
        <strong>Основні можливості Socket.IO:</strong>
      </p>
      <ul>
        <li><strong>Real-Time Communication:</strong> Socket.IO дозволяє реалізувати миттєвий обмін даними між клієнтом і сервером.</li>
        <li><strong>WebSocket Support:</strong> Підтримка технології WebSocket, яка забезпечує ефективний двосторонній зв'язок.</li>
        <li><strong>Rooms та Namespaces:</strong> Можливість створювати кімнати (rooms) та простори імен для організації обміну даними.</li>
        <li><strong>Підтримка різних Транспортів:</strong> Здатність автоматично вибирати оптимальний транспорт для кожного клієнта.</li>
      </ul>
      <p>
        <strong>Де Вчитися Socket.IO:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Socket.IO:</strong> <a href="https://socket.io/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Socket.IO Docs</a></li>
        <br></br>
        <li><strong>Socket.IO Chat Example:</strong> <a href="https://github.com/socketio/socket.io/tree/master/examples/chat" target="_blank" rel="noopener noreferrer" style={linkStyles}>Socket.IO Chat Example</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>Socket.IO Real-Time Library</h2>
      <p>
        Socket.IO is a library for implementing bidirectional (real-time) communication between the client and server in web applications. It is built on top of WebSocket technologies and enhances their functionality for easy integration into your projects.
      </p>
      <p>
        <strong>Key Features of Socket.IO:</strong>
      </p>
      <ul>
        <li><strong>Real-Time Communication:</strong> Socket.IO enables instant data exchange between the client and server.</li>
        <li><strong>WebSocket Support:</strong> Support for WebSocket technology, providing efficient bidirectional communication.</li>
        <li><strong>Rooms and Namespaces:</strong> Ability to create rooms and namespaces for organizing data exchange.</li>
        <li><strong>Support for Various Transports:</strong> Ability to automatically choose the optimal transport for each client.</li>
      </ul>
      <p>
        <strong>Where to Learn Socket.IO:</strong>
      </p>
      <ul>
        <li><strong>Official Socket.IO Documentation:</strong> <a href="https://socket.io/docs/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Socket.IO Docs</a></li>
        <br></br>
        <li><strong>Socket.IO Chat Example:</strong> <a href="https://github.com/socketio/socket.io/tree/master/examples/chat" target="_blank" rel="noopener noreferrer" style={linkStyles}>Socket.IO Chat Example</a></li>
      </ul>
    </>
  );

  return content;
};

export default SocketIOModalContent;
