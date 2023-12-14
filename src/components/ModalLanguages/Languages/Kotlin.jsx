import React from 'react';

const KotlinModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Kotlin - статично типізована мова програмування, яка працює на віртуальній машині Java (JVM) та часто використовується для розробки Android-додатків. Вона поєднує в собі конкістентність та безпеку мови, що властива Java, з сучасними можливостями та зручністю синтаксису.
      </p>
      <p>
        <strong>Застосування Kotlin:</strong>
      </p>
      <ul>
        <li><strong>Android-розробка:</strong> Kotlin є офіційною мовою для розробки Android-додатків та допомагає спростити синтаксис та покращити продуктивність.</li>
        <li><strong>Серверна розробка:</strong> Мова може бути використана для написання серверних додатків, використовуючи фреймворки, такі як Spring.</li>
        <li><strong>Web-розробка:</strong> Kotlin може використовуватися для розробки веб-додатків за допомогою фреймворків, таких як Ktor.</li>
        <li><strong>Загальне програмування:</strong> Kotlin може бути використаний для широкого спектру задач, включаючи розробку інструментів та утиліт.</li>
      </ul>
      <p>
        <strong>Місце в світі програмування:</strong>
      </p>
      <p>
        Kotlin широко використовується у різних областях, зокрема в мобільній розробці, серверній розробці та загальному програмуванні, завдяки своїй безпеці та зручному синтаксису.
      </p>
      <p>
        <strong>Де вчити Kotlin:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Kotlin:</strong> <a href="https://kotlinlang.org/docs/home.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Kotlin Documentation</a></li>
        <li><strong>Онлайн курс на Coursera:</strong> <a href="https://www.coursera.org/learn/kotlin-for-java-developers" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Kotlin for Java Developers</a></li>
      </ul>
      <p>
        <strong>Особливості Kotlin:</strong>
      </p>
      <ul>
        <li><strong>Взаємодія з Java:</strong> Kotlin повністю сумісний з Java, що дозволяє використовувати код обох мов в одному проекті.</li>
        <li><strong>Розширення мови:</strong> Kotlin надає сучасні можливості, такі як функціональне програмування та розширення функціоналу мови.</li>
        <li><strong>Безпека:</strong> Статична типізація та інші функції сприяють безпеці та ефективності коду.</li>
      </ul>
      <p>
        Kotlin - це сучасна мова програмування, яка широко використовується у різних галузях розробки програмного забезпечення.
      </p>
    </>
  ) : (
    <>
      <p>
        Kotlin is a statically typed programming language that runs on the Java Virtual Machine (JVM) and is often used for Android app development. It combines the consistency and safety of the Java language with modern features and a convenient syntax.
      </p>
      <p>
        <strong>Applications of Kotlin:</strong>
      </p>
      <ul>
        <li><strong>Android Development:</strong> Kotlin is the official language for Android app development, helping to simplify syntax and improve productivity.</li>
        <li><strong>Server-Side Development:</strong> The language can be used for writing server-side applications using frameworks like Spring.</li>
        <li><strong>Web Development:</strong> Kotlin can be used for developing web applications using frameworks like Ktor.</li>
        <li><strong>General Programming:</strong> Kotlin can be used for a wide range of tasks, including the development of tools and utilities.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Kotlin is widely used in various areas, including mobile development, server-side development, and general programming, thanks to its safety and convenient syntax.
      </p>
      <p>
        <strong>Where to Learn Kotlin:</strong>
      </p>
      <ul>
        <li><strong>Official Kotlin Documentation:</strong> <a href="https://kotlinlang.org/docs/home.html" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Kotlin Documentation</a></li>
        <li><strong>Online Course on Coursera:</strong> <a href="https://www.coursera.org/learn/kotlin-for-java-developers" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Kotlin for Java Developers</a></li>
      </ul>
      <p>
        <strong>Features of Kotlin:</strong>
      </p>
      <ul>
        <li><strong>Interoperability with Java:</strong> Kotlin is fully interoperable with Java, allowing the use of code from both languages in one project.</li>
        <li><strong>Language Extensions:</strong> Kotlin provides modern features, such as functional programming and language extensions.</li>
        <li><strong>Safety:</strong> Static typing and other features contribute to the safety and efficiency of the code.</li>
      </ul>
      <p>
        Kotlin is a modern programming language widely used in various software development fields.
      </p>
    </>
  );

  return content;
};

export default KotlinModalContent;
