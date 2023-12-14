import React from 'react';

const LuaModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Lua - легка, ефективна та універсальна скриптова мова програмування, яка часто вбудовується в різні застосунки та фреймворки для розробки ігор. Lua відома своєю простотою, переносимістю та легкістю інтеграції.
      </p>
      <p>
        <strong>Застосування Lua:</strong>
      </p>
      <ul>
        <li><strong>Розробка ігор:</strong> Lua часто використовується як скриптова мова в ігрових двигунах, таких як Unity чи Unreal Engine.</li>
        <li><strong>Вбудовані системи:</strong> Благодаря своїй легкості, Lua підходить для вбудованих систем та пристроїв Інтернету речей (IoT).</li>
        <li><strong>Скриптування:</strong> Широко використовується для написання скриптів та автоматизації завдань через свою простоту.</li>
      </ul>
      <p>
        <strong>Початок роботи:</strong>
      </p>
      <p>
        Офіційний веб-сайт Lua: <a href="https://www.lua.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat' }}>Lua.org</a>
      </p>
      <p>
        <strong>Додаткові ресурси для вивчення Lua:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Lua:</strong> <a href="https://www.lua.org/docs.html" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat' }}>Офіційна документація Lua</a></li>
        <li><strong>Learn Lua in Y minutes:</strong> <a href="https://learnxinyminutes.com/docs/lua/" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat' }}>Learn Lua in Y minutes</a></li>
      </ul>
    </>
  ) : (
    <>
      <p>
        Lua is a lightweight, efficient, and versatile scripting language that is often embedded in various applications and game development frameworks. It is known for its simplicity, portability, and ease of integration.
      </p>
      <p>
        <strong>Applications of Lua:</strong>
      </p>
      <ul>
        <li><strong>Game Development:</strong> Lua is frequently used as a scripting language in game engines like Unity and Unreal Engine.</li>
        <li><strong>Embedded Systems:</strong> Lua's lightweight nature makes it suitable for embedded systems and Internet of Things (IoT) devices.</li>
        <li><strong>Scripting:</strong> Widely used for scripting and automation due to its simplicity.</li>
      </ul>
      <p>
        <strong>Getting Started:</strong>
      </p>
      <p>
        Official Lua Website: <a href="https://www.lua.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat' }}>Lua.org</a>
      </p>
      <p>
        <strong>Additional Resources for Learning Lua:</strong>
      </p>
      <ul>
        <li><strong>Official Lua Documentation:</strong> <a href="https://www.lua.org/docs.html" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat' }}>Official Lua Documentation</a></li>
        <li><strong>Learn Lua in Y minutes:</strong> <a href="https://learnxinyminutes.com/docs/lua/" target="_blank" rel="noopener noreferrer" style={{ color: 'wheat' }}>Learn Lua in Y minutes</a></li>
      </ul>
    </>
  );

  return content;
  };

  export default LuaModalContent;