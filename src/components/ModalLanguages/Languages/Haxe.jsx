import React from 'react';

const HaxeModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Haxe - це мова програмування та компілятор, які дозволяють писати один і той же код для різних цільових платформ, таких як JavaScript, Flash, NekoVM, PHP, C++, і багато інших. Вона поєднує в собі синтаксис мови програмування ActionScript з системою типів, схожою на ту, яка використовується в OCaml.
      </p>
      <p>
        <strong>Застосування Haxe:</strong>
      </p>
      <ul>
        <li><strong>Розробка Веб-додатків:</strong> Haxe може бути використаний для створення веб-додатків, включаючи ігри та інтерактивні застосунки.</li>
        <li><strong>Кросплатформенний Розвиток:</strong> Розробка для різних цільових платформ без значного переписування коду.</li>
        <li><strong>Графічні Ігри та Анімації:</strong> Використання Haxe для створення графічних ігор і анімацій.</li>
        <li><strong>Нативна Розробка:</strong> Використання Haxe для створення нативних додатків для різних операційних систем.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Haxe надає гнучкість та потужність для розробки на різних платформах і застосуваннях.
      </p>
      <p>
        <strong>Де Вчити Haxe:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Haxe:</strong> <a href="https://haxe.org/documentation/introduction/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Haxe Documentation</a></li>
        
      </ul>
      <p>
        <strong>Особливості Haxe:</strong>
      </p>
      <ul>
        <li><strong>Кросплатформенність:</strong> Можливість компіляції коду для різних платформ без змін.</li>
        <li><strong>Система Типів:</strong> Haxe має потужну систему типів, яка сприяє безпеці та ефективності коду.</li>
        <li><strong>Модульність:</strong> Використання модульної структури для полегшення розробки та управління кодом.</li>
      </ul>
      <p>
        Haxe - це інструмент для розробників, які хочуть працювати з різними цільовими платформами, використовуючи один і той же код.
      </p>
    </>
  ) : (
    <>
      <p>
        Haxe is a programming language and compiler that allows writing the same code for different target platforms, such as JavaScript, Flash, NekoVM, PHP, C++, and many others. It combines the syntax of the ActionScript programming language with a type system similar to that used in OCaml.
      </p>
      <p>
        <strong>Applications of Haxe:</strong>
      </p>
      <ul>
        <li><strong>Web Application Development:</strong> Haxe can be used to create web applications, including games and interactive applications.</li>
        <li><strong>Cross-platform Development:</strong> Developing for different target platforms without significant code rewriting.</li>
        <li><strong>Graphic Games and Animations:</strong> Using Haxe for creating graphic games and animations.</li>
        <li><strong>Native Development:</strong> Using Haxe for creating native applications for various operating systems.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Haxe provides flexibility and power for development on various platforms and applications.
      </p>
      <p>
        <strong>Where to Learn Haxe:</strong>
      </p>
      <ul>
        <li><strong>Official Haxe Documentation:</strong> <a href="https://haxe.org/documentation/introduction/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Haxe Documentation</a></li>
        
      </ul>
      <p>
        <strong>Features of Haxe:</strong>
      </p>
      <ul>
        <li><strong>Cross-platform:</strong> The ability to compile code for different platforms without changes.</li>
        <li><strong>Type System:</strong> Haxe has a powerful type system that contributes to code safety and efficiency.</li>
        <li><strong>Modularity:</strong> Using a modular structure to facilitate development and code management.</li>
      </ul>
      <p>
        Haxe is a tool for developers who want to work with different target platforms using the same code.
      </p>
    </>
  );

  return content;
};

export default HaxeModalContent;
