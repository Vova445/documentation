import React from 'react';

const GitterModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#F1719F",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://gitter.im/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Gitter
    </a>
  ) : (
    <a href="https://gitter.im/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Gitter Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Gitter - це інструмент для спілкування та співпраці розробників у реальному часі. Він забезпечує можливість створення окремих чатів для проектів, спільнот та організацій.
      </p>
      <p>
        <strong>Основні функції Gitter:</strong>
      </p>
      <ul>
        <li><strong>Чати для Проектів:</strong> Можливість створення окремих чатів для обговорення питань, пов'язаних із проектами.</li>
        <li><strong>Спільноти:</strong> Приєднуйтеся до існуючих спільнот розробників або створюйте власні.</li>
        <li><strong>Інтеграція з GitHub:</strong> Зручна інтеграція з репозиторіями та організаціями на GitHub.</li>
        <li><strong>Розширені Можливості Чату:</strong> Включає функції сповіщень, архівування повідомлень та інше.</li>
      </ul>
      <p>
        <strong>Основні переваги Gitter:</strong>
      </p>
      <ul>
        <li><strong>Реальний Час:</strong> Миттєве спілкування та обговорення проектів у реальному часі.</li>
        <li><strong>Спільноти Розробників:</strong> Участь у спільнотах та обговорення тем, що цікавлять.</li>
        <li><strong>Легка Інтеграція:</strong> Зручна інтеграція з іншими інструментами розробки.</li>
      </ul>
      <p>
        <strong>Сторінка Gitter:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Gitter Chat Platform</h2>
      <p>
        Gitter is a tool for real-time communication and collaboration among developers. It provides the ability to create separate chats for projects, communities, and organizations.
      </p>
      <p>
        <strong>Key Features of Gitter:</strong>
      </p>
      <ul>
        <li><strong>Project Chats:</strong> Ability to create separate chats for discussing issues related to projects.</li>
        <li><strong>Communities:</strong> Join existing developer communities or create your own.</li>
        <li><strong>GitHub Integration:</strong> Convenient integration with repositories and organizations on GitHub.</li>
        <li><strong>Advanced Chat Features:</strong> Includes notification features, message archiving, and more.</li>
      </ul>
      <p>
        <strong>Main Advantages of Gitter:</strong>
      </p>
      <ul>
        <li><strong>Real-Time:</strong> Instant communication and discussion of projects in real-time.</li>
        <li><strong>Developer Communities:</strong> Participation in communities and discussions on topics of interest.</li>
        <li><strong>Easy Integration:</strong> Convenient integration with other development tools.</li>
      </ul>
      <p>
        <strong>Gitter Page:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default GitterModalContent;
