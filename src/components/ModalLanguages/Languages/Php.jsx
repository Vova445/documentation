import React from 'react';

const PhpModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        PHP - це сценарна мова програмування, яка часто використовується для розробки веб-додатків та взаємодії з базами даних. PHP легко інтегрується з HTML і забезпечує велику гнучкість для розробки різноманітних веб-рішень.
      </p>
      <p>
        <strong>Застосування PHP:</strong>
      </p>
      <ul>
        <li><strong>Веб-розробка:</strong> PHP широко використовується для створення динамічних веб-сайтів та взаємодії з користувачами.</li>
        <li><strong>Розробка форумів та блогів:</strong> Багато популярних форумів та блогів побудовані з використанням PHP.</li>
        <li><strong>Робота з базами даних:</strong> PHP забезпечує зручний інтерфейс для взаємодії з різними системами управління базами даних.</li>
        <li><strong>Розробка електронної комерції:</strong> Багато електронних магазинів використовують PHP для реалізації своїх функціональних можливостей.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        PHP є однією з найпопулярніших мов для веб-розробки, і вона залишається важливим інструментом для створення різноманітних веб-додатків.
      </p>
      <p>
        <strong>Де вчити PHP:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація PHP:</strong> <a href="https://www.php.net/manual/en/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>PHP Documentation</a></li>
        <li><strong>Курси на платформі Codecademy:</strong> <a href="https://www.codecademy.com/learn/learn-php" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Codecademy PHP Course</a></li>
      </ul>
      <p>
        <strong>Особливості PHP:</strong>
      </p>
      <ul>
        <li><strong>Вбудована підтримка HTTP:</strong> PHP має вбудовану підтримку HTTP, що полегшує роботу з веб-серверами.</li>
        <li><strong>Велика спільнота:</strong> Є велика активна спільнота розробників, яка підтримує та розвиває мову.</li>
        <li><strong>Легкість вивчення:</strong> PHP досить простий для вивчення, особливо для початківців в програмуванні.</li>
      </ul>
      <p>
        PHP залишається важливим інструментом для веб-розробки і надає розробникам можливість швидко створювати функціональні веб-сайти та додатки.
      </p>
    </>
  ) : (
    <>
      <p>
        PHP is a server-side scripting language commonly used for web development and interacting with databases. PHP easily integrates with HTML and provides great flexibility for developing various web solutions.
      </p>
      <p>
        <strong>Applications of PHP:</strong>
      </p>
      <ul>
        <li><strong>Web Development:</strong> PHP is widely used to create dynamic websites and interact with users.</li>
        <li><strong>Development of Forums and Blogs:</strong> Many popular forums and blogs are built using PHP.</li>
        <li><strong>Working with Databases:</strong> PHP provides a convenient interface for interacting with various database management systems.</li>
        <li><strong>E-commerce Development:</strong> Many e-commerce stores use PHP to implement their functional capabilities.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        PHP is one of the most popular languages for web development and remains a vital tool for creating various web applications.
      </p>
      <p>
        <strong>Where to Learn PHP:</strong>
      </p>
      <ul>
        <li><strong>Official PHP Documentation:</strong> <a href="https://www.php.net/manual/en/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>PHP Documentation</a></li>
        <li><strong>Courses on Codecademy:</strong> <a href="https://www.codecademy.com/learn/learn-php" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Codecademy PHP Course</a></li>
      </ul>
      <p>
        <strong>Features of PHP:</strong>
      </p>
      <ul>
        <li><strong>Built-in HTTP Support:</strong> PHP has built-in HTTP support, making it easy to work with web servers.</li>
        <li><strong>Large Community Support:</strong> There is a large and active community of developers supporting and evolving the language.</li>
        <li><strong>Ease of Learning:</strong> PHP is relatively easy to learn, especially for beginners in programming.</li>
      </ul>
      <p>
        PHP remains a vital tool for web development, providing developers with the ability to quickly create functional websites and applications.
      </p>
    </>
  );

  return content;
};

export default PhpModalContent;
