import React from 'react';

const ValaModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Vala - це мова програмування, яка створена для використання з бібліотекою GTK і оптимізована для розробки графічних інтерфейсів користувача. Вона поєднує в собі синтаксис C# з властивостями мов програмування C. Vala компілюється до коду C і використовує GObject систему об'єктів.
      </p>
      <p>
        <strong>Застосування Vala:</strong>
      </p>
      <ul>
        <li><strong>Розробка Графічних Інтерфейсів:</strong> Vala часто використовується для створення графічних інтерфейсів користувача за допомогою GTK.</li>
        <li><strong>Розробка Додатків для GNOME:</strong> Vala є офіційною мовою розробки для створення додатків для GNOME.</li>
        <li><strong>Розробка Програм для Linux:</strong> Вона підтримується у середовищі Linux і часто використовується для розробки програм під цю операційну систему.</li>
      </ul>
      <p>
        <strong>Місце в Програмуванні:</strong>
      </p>
      <p>
        Vala використовується для створення програмного забезпечення з графічним інтерфейсом та інтегрується з оточенням GNOME.
      </p>
      <p>
        <strong>Де Вчити Vala:</strong>
      </p>
      <ul>
        <li><strong>Офіційна Документація Vala:</strong> <a href="https://valadoc.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>Vala Documentation</a></li>
        <li><strong>Vala на GNOME Wiki:</strong> <a href="https://wiki.gnome.org/Projects/Vala" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>Vala on GNOME Wiki</a></li>
      </ul>
      <p>
        <strong>Особливості Vala:</strong>
      </p>
      <ul>
        <li><strong>Інтеграція з GObject:</strong> Vala легко інтегрується з GObject для роботи з об'єктно-орієнтованим програмуванням.</li>
        <li><strong>Властивості C#:</strong> Мова використовує синтаксис, схожий на C#, що полегшує вивчення та використання.</li>
        <li><strong>Багатофункціональність:</strong> Vala підтримує розробку різноманітних програм та додатків.</li>
      </ul>
      <p>
        Vala - це зручний інструмент для розробників, які працюють у середовищі GNOME та бажають швидко створювати програми з графічним інтерфейсом.
      </p>
    </>
  ) : (
    <>
      <p>
        Vala is a programming language designed for use with the GTK library and optimized for developing graphical user interfaces. It combines the syntax of C# with the features of the C programming language. Vala compiles to C code and uses the GObject object system.
      </p>
      <p>
        <strong>Applications of Vala:</strong>
      </p>
      <ul>
        <li><strong>Graphical Interface Development:</strong> Vala is often used to create graphical user interfaces using GTK.</li>
        <li><strong>Development of GNOME Applications:</strong> Vala is the official programming language for creating applications for GNOME.</li>
        <li><strong>Linux Application Development:</strong> It is supported in the Linux environment and is often used for developing software for this operating system.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Vala is used for creating software with a graphical interface and integrates with the GNOME environment.
      </p>
      <p>
        <strong>Where to Learn Vala:</strong>
      </p>
      <ul>
        <li><strong>Official Vala Documentation:</strong> <a href="https://valadoc.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>Vala Documentation</a></li>
        <li><strong>Vala on GNOME Wiki:</strong> <a href="https://wiki.gnome.org/Projects/Vala" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>Vala on GNOME Wiki</a></li>
      </ul>
      <p>
        <strong>Features of Vala:</strong>
      </p>
      <ul>
        <li><strong>Integration with GObject:</strong> Vala easily integrates with GObject for object-oriented programming.</li>
        <li><strong>C#-like Properties:</strong> The language uses syntax similar to C#, making it easy to learn and use.</li>
        <li><strong>Multi-functionality:</strong> Vala supports the development of various programs and applications.</li>
      </ul>
      <p>
        Vala is a convenient tool for developers working in the GNOME environment who want to quickly create programs with a graphical interface.
      </p>
    </>
  );

  return content;
};

export default ValaModalContent;
