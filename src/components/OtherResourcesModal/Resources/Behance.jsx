import React from 'react';

const BehanceModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#0055ff",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Behance" : "Behance Official Page";

  const officialPageLink = (
    <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Behance - це онлайн-платформа для публікації та відкриття творчості, спрямована на творців і художників різних галузей. Заснована в 2005 році, Behance надає можливість професіоналам демонструвати свої роботи, знаходити натхнення та взаємодіяти з іншими творчими особистостями.
      </p>
      <p>
        <strong>Основні поняття Behance:</strong>
      </p>
      <ul>
        <li><strong>Проекти:</strong> Спільноти робіт, де автор може представити свої ідеї та взаємодіяти з коментарями глядачів.</li>
        <li><strong>Профілі Творців:</strong> Особисті простори для представлення творчого портфоліо та інформації про автора.</li>
        <li><strong>Куратори та Галереї:</strong> Користувачі, які відзначають та обирають виділені роботи для подальшого визнання.</li>
        <li><strong>Мережа Творців:</strong> Можливість підключатися та спілкуватися з іншими творчими особистостями.</li>
      </ul>
      <p>
        <strong>Основні переваги Behance:</strong>
      </p>
      <ul>
        <li><strong>Відкритий Доступ:</strong> Можливість публікувати свої творчі роботи та отримувати відгуки від глобальної аудиторії.</li>
        <li><strong>Знайомства та Взаємодія:</strong> Можливість знаходження нових контактів, знаходження команд для спільних проектів.</li>
        <li><strong>Визнання та Публікація:</strong> Велика спільнота та шанс отримати визнання від інших творчих особистостей.</li>
      </ul>
      <p>
        <strong>Сторінка Behance:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Behance Creative Platform</h2>
      <p>
        Behance is an online platform for showcasing and discovering creativity, aimed at creators and artists from various fields. Founded in 2005, Behance provides professionals with the opportunity to showcase their work, find inspiration, and interact with other creative individuals.
      </p>
      <p>
        <strong>Key Concepts of Behance:</strong>
      </p>
      <ul>
        <li><strong>Projects:</strong> Work communities where the author can present their ideas and interact with viewer comments.</li>
        <li><strong>Creator Profiles:</strong> Personal spaces for presenting a creative portfolio and information about the author.</li>
        <li><strong>Curators and Galleries:</strong> Users who highlight and select featured works for further recognition.</li>
        <li><strong>Creator Network:</strong> The ability to connect and communicate with other creative individuals.</li>
      </ul>
      <p>
        <strong>Main Advantages of Behance:</strong>
      </p>
      <ul>
        <li><strong>Open Access:</strong> The ability to publish creative works and receive feedback from a global audience.</li>
        <li><strong>Networking and Interaction:</strong> The opportunity to find new contacts and teams for collaborative projects.</li>
        <li><strong>Recognition and Publication:</strong> A large community and the chance to be recognized by other creative individuals.</li>
      </ul>
      <p>
        <strong>Page Behance:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default BehanceModalContent;
