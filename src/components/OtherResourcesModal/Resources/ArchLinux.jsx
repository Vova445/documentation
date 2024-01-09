import React from 'react';

const ArchLinuxModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#1793d1",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLinkText = isUkrainian ? "Офіційна Сторінка Arch Linux" : "Arch Linux Official Page";

  const officialPageLink = (
    <a href="https://www.archlinux.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      {officialPageLinkText}
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Arch Linux - це легкий та гнучкий дистрибутив Linux, спрямований на користувачів, які бажають власноруч налаштовувати свою операційну систему. Arch Linux славиться своєю простотою та мінімалістичним підходом до конфігурації.
      </p>
      <p>
        <strong>Основні поняття Arch Linux:</strong>
      </p>
      <ul>
        <li><strong>Pacman:</strong> Власний менеджер пакунків Arch Linux для управління програмами та залежностями.</li>
        <li><strong>AUR (Arch User Repository):</strong> Спільнота, яка надає скрипти для автоматизованої збірки та встановлення програм, яких немає в офіційних репозиторіях.</li>
        <li><strong>Rolling Release:</strong> Модель випуску, де система постійно оновлюється, уникати випуску версій.</li>
        <li><strong>Arch Wiki:</strong> Великий ресурс з документацією та порадами для користувачів Arch Linux.</li>
      </ul>
      <p>
        <strong>Основні переваги Arch Linux:</strong>
      </p>
      <ul>
        <li><strong>Призначений для Налаштувань:</strong> Дозволяє користувачам визначати, як система має працювати.</li>
        <li><strong>Спільнота та Документація:</strong> Активна спільнота та велика кількість документації на Arch Wiki.</li>
        <li><strong>Rolling Release:</strong> Постійне оновлення для отримання нових версій програм та безпеки.</li>
      </ul>
      <p>
        <strong>Сторінка Arch Linux:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Arch Linux</h2>
      <p>
        Arch Linux is a lightweight and flexible Linux distribution designed for users who want to manually configure their operating system. Arch Linux is known for its simplicity and minimalistic approach to configuration.
      </p>
      <p>
        <strong>Key Concepts of Arch Linux:</strong>
      </p>
      <ul>
        <li><strong>Pacman:</strong> Arch Linux's package manager for managing programs and dependencies.</li>
        <li><strong>AUR (Arch User Repository):</strong> Community-driven repository providing scripts for automated building and installation of programs not in official repositories.</li>
        <li><strong>Rolling Release:</strong> Release model where the system is constantly updated, avoiding version releases.</li>
        <li><strong>Arch Wiki:</strong> Extensive resource with documentation and tips for Arch Linux users.</li>
      </ul>
      <p>
        <strong>Main Advantages of Arch Linux:</strong>
      </p>
      <ul>
        <li><strong>Customization-Focused:</strong> Allows users to define how the system should work.</li>
        <li><strong>Community and Documentation:</strong> Active community and extensive documentation on Arch Wiki.</li>
        <li><strong>Rolling Release:</strong> Continuous updates to get new software versions and security updates.</li>
      </ul>
      <p>
        <strong>Page Arch Linux:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default ArchLinuxModalContent;
