import React from 'react';

const RubyModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Ruby - це динамічна, об'єктно-орієнтована мова програмування, яка покладається на простоту та елегантність синтаксису. Вона активно використовується для розробки веб-додатків та відома своєю дружелюбністю до розробників.
      </p>
      <p>
        <strong>Застосування Ruby:</strong>
      </p>
      <ul>
        <li><strong>Веб-розробка:</strong> Ruby використовується для створення веб-додатків за допомогою фреймворків, таких як Ruby on Rails.</li>
        <li><strong>Скриптінг:</strong> Ruby широко використовується для написання скриптів і автоматизації завдань.</li>
        <li><strong>Розробка гри:</strong> Вона використовується для створення ігор та інтерактивних додатків.</li>
        <li><strong>Аналіз та обробка даних:</strong> Ruby використовується для аналізу та обробки даних завдяки своїм потужним інструментам.</li>
      </ul>
      <p>
        <strong>Місце в програмуванні:</strong>
      </p>
      <p>
        Ruby відома своєю простотою та елегантністю, що робить її популярною серед розробників та призначеною для покращення продуктивності.
      </p>
      <p>
        <strong>Де вчити Ruby:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Ruby:</strong> <a href="https://ruby-doc.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>Ruby Documentation</a></li>
        <li><strong>Офіційний сайт Ruby on Rails:</strong> <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>Ruby on Rails</a></li>
      </ul>
      <p>
        <strong>Особливості Ruby:</strong>
      </p>
      <ul>
        <li><strong>Простий та приємний синтаксис:</strong> Ruby має чистий та лаконічний синтаксис, що полегшує розробку.</li>
        <li><strong>Об'єктно-орієнтований підхід:</strong> Вся інформація в Ruby є об'єктом, що сприяє модульності та гнучкості.</li>
        <li><strong>Активна спільнота:</strong> Ruby має велику та активну спільноту розробників, готових надавати підтримку.</li>
      </ul>
      <p>
        Ruby - це мова програмування, яка відзначається зручністю використання та призначена для створення елегантного коду.
      </p>
    </>
  ) : (
    <>
      <p>
        Ruby is a dynamic, object-oriented programming language known for its simplicity and elegant syntax. It is actively used for web development and is renowned for its developer-friendly nature.
      </p>
      <p>
        <strong>Applications of Ruby:</strong>
      </p>
      <ul>
        <li><strong>Web Development:</strong> Ruby is used to create web applications using frameworks such as Ruby on Rails.</li>
        <li><strong>Scripting:</strong> Ruby is widely used for scripting and task automation.</li>
        <li><strong>Game Development:</strong> It is used for creating games and interactive applications.</li>
        <li><strong>Data Analysis and Processing:</strong> Ruby is used for data analysis and processing due to its powerful tools.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Ruby is known for its simplicity and elegance, making it popular among developers and designed to enhance productivity.
      </p>
      <p>
        <strong>Where to Learn Ruby:</strong>
      </p>
      <ul>
        <li><strong>Official Ruby Documentation:</strong> <a href="https://ruby-doc.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>Ruby Documentation</a></li>
        <li><strong>Official Ruby on Rails Website:</strong> <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>Ruby on Rails</a></li>
      </ul>
      <p>
        <strong>Features of Ruby:</strong>
      </p>
      <ul>
        <li><strong>Simple and Pleasant Syntax:</strong> Ruby has a clean and concise syntax that facilitates development.</li>
        <li><strong>Object-Oriented Approach:</strong> All information in Ruby is treated as an object, promoting modularity and flexibility.</li>
        <li><strong>Active Community:</strong> Ruby has a large and active community of developers ready to provide support.</li>
      </ul>
      <p>
        Ruby is a programming language known for its ease of use and designed to create elegant code.
      </p>
    </>
  );

  return content;
};

export default RubyModalContent;
