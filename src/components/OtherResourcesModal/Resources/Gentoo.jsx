import React from 'react';

const GentooModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#54487F",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.gentoo.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Gentoo
    </a>
  ) : (
    <a href="https://www.gentoo.org/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Gentoo Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Gentoo - це дистрибутив Linux, побудований користувачем, який відомий своєю гнучкістю та високою швидкістю завантаження завдяки оптимізації під конкретне залежно від конфігурації обладнання.
      </p>
      <p>
        <strong>Основні функції Gentoo:</strong>
      </p>
      <ul>
        <li><strong>Portage Package System:</strong> Система управління пакетами Portage дозволяє користувачам встановлювати, конфігурувати та управляти програмним забезпеченням.</li>
        <li><strong>USE флаги:</strong> Гнучка система конфігурації, яка дозволяє вибирати підтримку різних функцій для кожного пакету.</li>
        <li><strong>Керування Кернелем:</strong> Вибір ядра та його конфігурація з урахуванням конкретних потреб користувача.</li>
        <li><strong>Оптимізація Під Апаратне Забезпечення:</strong> Завантаження та виконання оптимізовані для конкретного обладнання.</li>
      </ul>
      <p>
        <strong>Основні переваги Gentoo:</strong>
      </p>
      <ul>
        <li><strong>Гнучкість та Керування:</strong> Користувачі мають повний контроль над системою та можуть налаштовувати її під свої потреби.</li>
        <li><strong>Оптимізація Під Апаратне Забезпечення:</strong> Висока швидкість завантаження та виконання завдяки оптимізації.</li>
        <li><strong>Найновіші Версії ПЗ:</strong> Можливість встановлення останніх версій програмного забезпечення.</li>
      </ul>
      <p>
        <strong>Сторінка Gentoo:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Gentoo Linux</h2>
      <p>
        Gentoo is a user-built Linux distribution known for its flexibility and fast boot times due to hardware-specific optimization.
      </p>
      <p>
        <strong>Key Features of Gentoo:</strong>
      </p>
      <ul>
        <li><strong>Portage Package System:</strong> The Portage package management system allows users to install, configure, and manage software.</li>
        <li><strong>USE Flags:</strong> A flexible configuration system that enables users to select support for various features for each package.</li>
        <li><strong>Kernel Management:</strong> Choice of kernel and its configuration tailored to the specific needs of the user.</li>
        <li><strong>Hardware Optimization:</strong> Booting and execution optimized for specific hardware.</li>
      </ul>
      <p>
        <strong>Main Advantages of Gentoo:</strong>
      </p>
      <ul>
        <li><strong>Flexibility and Control:</strong> Users have full control over the system and can customize it to their needs.</li>
        <li><strong>Hardware Optimization:</strong> Fast boot times and execution speed thanks to optimization.</li>
        <li><strong>Latest Software Versions:</strong> Ability to install the latest versions of software.</li>
        <li><strong>Gentoo Page:</strong> {officialPageLink}</li>
      </ul>
    </>
  );

  return content;
};

export default GentooModalContent;
