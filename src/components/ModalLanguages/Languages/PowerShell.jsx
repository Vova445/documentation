import React from 'react';

const PowerShellModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        PowerShell - це мова сценаріїв та інтерфейс командного рядка, розроблена компанією Microsoft. Вона поєднує в собі силу командного рядка та гнучкість сценаріїв для автоматизації завдань та управління системами.
      </p>
      <p>
        <strong>Застосування PowerShell:</strong>
      </p>
      <ul>
        <li><strong>Автоматизація Завдань Windows:</strong> PowerShell часто використовується для автоматизації рутинних завдань в операційній системі Windows.</li>
        <li><strong>Керування Системами:</strong> PowerShell надає потужні інструменти для керування конфігурацією та станом систем, а також для взаємодії з іншими службами Microsoft, такими як Active Directory.</li>
        <li><strong>Сценарії Деплою та Конфігурації:</strong> PowerShell може бути використаний для написання сценаріїв деплою та конфігурації програмного забезпечення.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        PowerShell широко використовується адміністраторами систем та розробниками для автоматизації та управління системами в середовищі Windows.
      </p>
      <p>
        <strong>Де Вчити PowerShell:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Microsoft - PowerShell:</strong> <a href="https://docs.microsoft.com/en-us/powershell/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Microsoft Docs - PowerShell</a></li>
        <li><strong>PowerShell.org:</strong> <a href="https://powershell.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>PowerShell.org</a></li>
        <li><strong>Microsoft Learn - PowerShell for Beginners:</strong> <a href="https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.1" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Microsoft Learn - PowerShell for Beginners</a></li>
      </ul>
      <p>
        <strong>Особливості PowerShell:</strong>
      </p>
      <ul>
        <li><strong>Командний Рядок та Сценарії:</strong> PowerShell поєднує командний рядок з мовою сценаріїв, що робить його важливим інструментом для автоматизації та управління завданнями.</li>
        <li><strong>Можливості Роботи з .NET:</strong> PowerShell надає доступ до фреймворку .NET, що розширює можливості сценаріїв.</li>
        <li><strong>Інтеграція з Системами Microsoft:</strong> PowerShell взаємодіє з іншими продуктами Microsoft, що полегшує автоматизацію завдань в середовищі Windows.</li>
      </ul>
      <p>
        PowerShell - потужний інструмент для автоматизації та управління системами в середовищі Windows.
      </p>
    </>
  ) : (
    <>
      <p>
        PowerShell is a scripting language and command-line interface developed by Microsoft. It combines the power of the command line with the flexibility of scripting for task automation and system management.
      </p>
      <p>
        <strong>Applications of PowerShell:</strong>
      </p>
      <ul>
        <li><strong>Windows Task Automation:</strong> PowerShell is often used to automate routine tasks in the Windows operating system.</li>
        <li><strong>System Management:</strong> PowerShell provides powerful tools for managing system configuration and state, as well as interacting with other Microsoft services such as Active Directory.</li>
        <li><strong>Deployment and Configuration Scripts:</strong> PowerShell can be used to write deployment and configuration scripts for software.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        PowerShell is widely used by system administrators and developers for automation and system management in the Windows environment.
      </p>
      <p>
        <strong>Where to Learn PowerShell:</strong>
      </p>
      <ul>
        <li><strong>Official Microsoft Documentation - PowerShell:</strong> <a href="https://docs.microsoft.com/en-us/powershell/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Microsoft Docs - PowerShell</a></li>
        <li><strong>PowerShell.org:</strong> <a href="https://powershell.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>PowerShell.org</a></li>
        <li><strong>Microsoft Learn - PowerShell for Beginners:</strong> <a href="https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.1" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Microsoft Learn - PowerShell for Beginners</a></li>
      </ul>
      <p>
        <strong>Features of PowerShell:</strong>
      </p>
      <ul>
        <li><strong>Command Line and Scripts:</strong> PowerShell combines the command line with a scripting language, making it a crucial tool for automation and task management.</li>
        <li><strong>Integration with .NET Capabilities:</strong> PowerShell provides access to the .NET framework, expanding the capabilities of scripts.</li>
        <li><strong>Integration with Microsoft Systems:</strong> PowerShell interacts with other Microsoft products, facilitating task automation in the Windows environment.</li>
      </ul>
      <p>
        PowerShell is a powerful tool for automation and system management in the Windows environment.
      </p>
    </>
  );

  return content;
};

export default PowerShellModalContent;
