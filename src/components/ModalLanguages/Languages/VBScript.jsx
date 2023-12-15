import React from 'react';

const VBScriptModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        VBScript (Visual Basic Scripting Edition) - це мова сценаріїв, розроблена Microsoft. Вона є підмножиною мови Visual Basic і часто використовується для автоматизації завдань в середовищі Windows та розробки веб-сценаріїв.
      </p>
      <p>
        <strong>Застосування VBScript:</strong>
      </p>
      <ul>
        <li><strong>Автоматизація Завдань Windows:</strong> VBScript часто використовується для створення сценаріїв автоматизації в операційній системі Windows.</li>
        <li><strong>Веб-Розробка:</strong> VBScript може використовуватися для створення веб-сценаріїв, хоча зараз це менше популярно через обмежену підтримку в сучасних браузерах.</li>
        <li><strong>Розробка Сценаріїв для Microsoft Office:</strong> VBScript може використовуватися для створення макросів та сценаріїв у продуктах Microsoft Office.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        VBScript часто використовується там, де потрібна автоматизація завдань в середовищі Windows або створення простих веб-сценаріїв.
      </p>
      <p>
        <strong>Де Вчити VBScript:</strong>
      </p>
      <ul>
        <li><strong>Microsoft Docs - VBScript:</strong> <a href="https://www.tutorialspoint.com/vbscript/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'pink' }}>Microsoft Docs - VBScript</a></li>
        <li><strong>W3Schools - VBScript Tutorial:</strong> <a href="https://www.guru99.com/vbscript-tutorials-for-beginners.html" target="_blank" rel="noopener noreferrer" style={{ color: 'pink' }}>W3Schools - VBScript Tutorial</a></li>
      </ul>
      <p>
        <strong>Особливості VBScript:</strong>
      </p>
      <ul>
        <li><strong>Автоматизація Windows:</strong> VBScript використовується для створення сценаріїв автоматизації завдань в операційній системі Windows.</li>
        <li><strong>Вбудована у Microsoft Products:</strong> VBScript інтегрована в різні продукти Microsoft, такі як Internet Explorer і Office.</li>
        <li><strong>Обмежена Підтримка в Браузерах:</strong> Зараз використання VBScript веб-розробкою обмежено через обмежену підтримку в сучасних браузерах.</li>
      </ul>
      <p>
        VBScript залишається інструментом для автоматизації завдань та розробки сценаріїв в середовищі Windows.
      </p>
    </>
  ) : (
    <>
      <p>
        VBScript (Visual Basic Scripting Edition) is a scripting language developed by Microsoft. It is a subset of the Visual Basic language and is often used for task automation in the Windows environment and web scripting.
      </p>
      <p>
        <strong>Applications of VBScript:</strong>
      </p>
      <ul>
        <li><strong>Windows Task Automation:</strong> VBScript is often used to create automation scripts for tasks in the Windows operating system.</li>
        <li><strong>Web Development:</strong> VBScript can be used for web scripting, although it is less popular now due to limited support in modern browsers.</li>
        <li><strong>Scripting for Microsoft Office:</strong> VBScript can be used to create macros and scripts in Microsoft Office products.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        VBScript is often used where task automation in the Windows environment or the creation of simple web scripts is required.
      </p>
      <p>
        <strong>Where to Learn VBScript:</strong>
      </p>
      <ul>
        <li><strong>Microsoft Docs - VBScript:</strong> <a href="https://www.tutorialspoint.com/vbscript/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'pink' }}>Microsoft Docs - VBScript</a></li>
        <li><strong>W3Schools - VBScript Tutorial:</strong> <a href="https://www.guru99.com/vbscript-tutorials-for-beginners.html" target="_blank" rel="noopener noreferrer" style={{ color: 'pink' }}>W3Schools - VBScript Tutorial</a></li>
      </ul>
      <p>
        <strong>Features of VBScript:</strong>
      </p>
      <ul>
        <li><strong>Windows Automation:</strong> VBScript is used for creating automation scripts for tasks in the Windows operating system.</li>
        <li><strong>Built into Microsoft Products:</strong> VBScript is integrated into various Microsoft products, such as Internet Explorer and Office.</li>
        <li><strong>Limited Browser Support:</strong> Currently, the use of VBScript in web development is limited due to restricted support in modern browsers.</li>
      </ul>
      <p>
        VBScript remains a tool for task automation and script development in the Windows environment.
      </p>
    </>
  );

  return content;
};

export default VBScriptModalContent;
