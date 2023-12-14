import React from 'react';

const ScalaModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Scala - мова програмування, що поєднує об'єктно-орієнтований та функціональний підходи. Вона відома своєю конкізністю та масштабованістю, що робить її популярним вибором для розробки великих та складних систем.
      </p>
      <p>
        <strong>Застосування Scala:</strong>
      </p>
      <ul>
        <li><strong>Великі системи та додатки:</strong> Scala використовується для розробки великих та масштабованих систем, забезпечуючи високий рівень конкізності та ефективність.</li>
        <li><strong>Веб-розробка:</strong> Scala використовується для створення веб-додатків за допомогою фреймворків, таких як Play Framework та Akka HTTP.</li>
        <li><strong>Аналіз даних:</strong> Scala широко використовується в області аналізу даних та обробки великих даних.</li>
        <li><strong>Штучний інтелект:</strong> Scala використовується для розробки систем штучного інтелекту та машинного навчання.</li>
      </ul>
      <p>
        <strong>Місце в світі програмування:</strong>
      </p>
      <p>
        Scala є мовою, яка сприяє розвитку сучасних та ефективних програм, комбінуючи в собі можливості об'єктно-орієнтованого та функціонального програмування.
      </p>
      <p>
        <strong>Де вчити Scala:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Scala:</strong> <a href="https://docs.scala-lang.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Scala Documentation</a></li>
        <li><strong>Курси на платформі Coursera:</strong> <a href="https://www.coursera.org/search?query=scala&" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Functional Programming Principles in Scala</a></li>
      </ul>
      <p>
        <strong>Особливості Scala:</strong>
      </p>
      <ul>
        <li><strong>Об'єктно-орієнтований та функціональний підходи:</strong> Scala поєднує в собі можливості об'єктно-орієнтованого та функціонального програмування.</li>
        <li><strong>Статична типізація:</strong> Scala використовує статичну типізацію для забезпечення безпеки та ефективності коду.</li>
        <li><strong>Конкізний синтаксис:</strong> Scala відома своїм лаконічним та зрозумілим синтаксисом, що полегшує розробку.</li>
      </ul>
      <p>
        Scala - це мова програмування, яка дозволяє розробляти високоефективні та сучасні програми.
      </p>
    </>
  ) : (
    <>
      <p>
        Scala is a programming language that combines object-oriented and functional programming approaches. It is known for its conciseness and scalability, making it a popular choice for developing large and complex systems.
      </p>
      <p>
        <strong>Applications of Scala:</strong>
      </p>
      <ul>
        <li><strong>Large Systems and Applications:</strong> Scala is used for developing large and scalable systems, providing a high level of conciseness and efficiency.</li>
        <li><strong>Web Development:</strong> Scala is used for building web applications using frameworks like Play Framework and Akka HTTP.</li>
        <li><strong>Data Analysis:</strong> Scala is widely used in the field of data analysis and processing big data.</li>
        <li><strong>Artificial Intelligence:</strong> Scala is used for developing artificial intelligence systems and machine learning.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Scala is a language that promotes the development of modern and efficient programs by combining the capabilities of object-oriented and functional programming.
      </p>
      <p>
        <strong>Where to Learn Scala:</strong>
      </p>
      <ul>
        <li><strong>Official Scala Documentation:</strong> <a href="https://docs.scala-lang.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Scala Documentation</a></li>
        <li><strong>Courses on Coursera:</strong> <a href="https://www.coursera.org/search?query=scala&" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Functional Programming Principles in Scala</a></li>
      </ul>
      <p>
        <strong>Features of Scala:</strong>
      </p>
      <ul>
        <li><strong>Object-Oriented and Functional Approaches:</strong> Scala combines the capabilities of object-oriented and functional programming.</li>
        <li><strong>Static Typing:</strong> Scala uses static typing to ensure the safety and efficiency of the code.</li>
        <li><strong>Concise Syntax:</strong> Scala is known for its concise and understandable syntax, facilitating development.</li>
      </ul>
      <p>
        Scala is a programming language that enables the development of highly efficient and modern programs.
      </p>
    </>
  );

  return content;
};

export default ScalaModalContent;
