import React from 'react';

const AnsibleModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const officialPageLink = isUkrainian ? (
    <a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Офіційна Сторінка Ansible
    </a>
  ) : (
    <a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>
      Ansible Official Page
    </a>
  );

  const content = isUkrainian ? (
    <>
      <p>
        Ansible - це інструмент автоматизації, який використовується для конфігурації та управління серверами, а також для автоматизації процесів розгортання.
      </p>
      <p>
        <strong>Основні поняття Ansible:</strong>
      </p>
      <ul>
        <li><strong>Інвентар (Inventory):</strong> Файл або група файлів, що містять інформацію про сервери, які Ansible повинен управляти.</li>
        <li><strong>Playbooks:</strong> YAML файли, які містять описи задач та конфігурації, які Ansible повинен виконати на серверах.</li>
        <li><strong>Ролі (Roles):</strong> Відокремлені директорії з файлами та задачами, які можна використовувати повторно в Playbooks.</li>
        <li><strong>Модулі (Modules):</strong> Вбудовані або користувацькі функції, які використовуються Ansible для виконання конкретних завдань на серверах.</li>
      </ul>
      <p>
        <strong>Основні переваги Ansible:</strong>
      </p>
      <ul>
        <li><strong>Простота Використання:</strong> Ansible використовує простий у формі YAML синтаксис для конфігурації.</li>
        <li><strong>Агентлес Архітектура:</strong> Не потребує установки агентів на серверах, знижуючи навантаження.</li>
        <li><strong>Розширюваність:</strong> Можливість розширення за допомогою власних модулів та ролей.</li>
      </ul>
      <p>
        <strong>Сторінка Ansible:</strong> {officialPageLink}
      </p>
    </>
  ) : (
    <>
      <h2>Ansible Automation</h2>
      <p>
        Ansible is an automation tool used for configuration management, server orchestration, and deployment automation.
      </p>
      <p>
        <strong>Key Concepts of Ansible:</strong>
      </p>
      <ul>
        <li><strong>Inventory:</strong> A file or group of files containing information about servers that Ansible should manage.</li>
        <li><strong>Playbooks:</strong> YAML files containing task descriptions and configurations that Ansible should execute on servers.</li>
        <li><strong>Roles:</strong> Isolated directories with files and tasks that can be reused in Playbooks.</li>
        <li><strong>Modules:</strong> Built-in or custom functions used by Ansible to perform specific tasks on servers.</li>
      </ul>
      <p>
        <strong>Main Advantages of Ansible:</strong>
      </p>
      <ul>
        <li><strong>Ease of Use:</strong> Ansible uses a simple YAML syntax for configuration.</li>
        <li><strong>Agentless Architecture:</strong> Does not require agents to be installed on servers, reducing overhead.</li>
        <li><strong>Extensibility:</strong> Ability to extend functionality with custom modules and roles.</li>
      </ul>
      <p>
        <strong>Page Ansible:</strong> {officialPageLink}
      </p>
    </>
  );

  return content;
};

export default AnsibleModalContent;
