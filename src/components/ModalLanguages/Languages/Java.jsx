import React from 'react';

const JavaModalContent = ({ isUkrainian }) => {
  const content = isUkrainian ? (
    <>
      <p>
        Java - об'єктно-орієнтована, клас-базова мова програмування, яка відома своєю переносимістю, надійністю та безпекою. Java є однією з найпопулярніших мов програмування у світі та використовується в широкому спектрі додатків.
      </p>
      <p>
        <strong>Застосування Java:</strong>
      </p>
      <ul>
        <li><strong>Веб-додатки:</strong> Java використовується для створення потужних веб-додатків за допомогою фреймворків, таких як Spring чи JavaServer Faces (JSF).</li>
        <li><strong>Мобільна розробка:</strong> Java використовується для розробки мобільних додатків на платформі Android.</li>
        <li><strong>Вбудовані системи:</strong> Java широко використовується для програмування вбудованих систем, включаючи робототехніку та IoT (Інтернет речей).</li>
        <li><strong>Бізнес-додатки:</strong> Java використовується для розробки корпоративних бізнес-додатків, зокрема за допомогою технологій Enterprise JavaBeans (EJB).</li>
      </ul>
      <p>
        <strong>Місце в світі програмування:</strong>
      </p>
      <p>
        Java відома своєю масштабованістю та переносимістю, що дозволяє розробникам створювати додатки для різних платформ та пристроїв.
      </p>
      <p>
        <strong>Де вчити Java:</strong>
      </p>
      <ul>
        <li><strong>Офіційна документація Java:</strong> <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Oracle Java Documentation</a></li>
        <li><strong>Курси на платформі Codecademy:</strong> <a href="https://www.codecademy.com/learn/learn-java" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Codecademy Java Course</a></li>
      </ul>
      <p>
        <strong>Особливості Java:</strong>
      </p>
      <ul>
        <li><strong>Переносимість:</strong> Java код може бути виконаний на будь-якій платформі, яка підтримує віртуальну машину Java (JVM).</li>
        <li><strong>Безпека:</strong> Java використовує механізми безпеки, що робить її популярною для розробки надійних додатків.</li>
        <li><strong>Об'єктно-орієнтована парадигма:</strong> Java використовує об'єктно-орієнтований підхід для розв'язання завдань.</li>
      </ul>
      <p>
        Java - це мова програмування, яка відмінно підходить для різних областей розробки та надає великий інструментарій для програмістів.
      </p>
    </>
  ) : (
    <>
      <p>
        Java is an object-oriented, class-based programming language known for its portability, reliability, and security. Java is one of the most popular programming languages in the world and is used in a wide range of applications.
      </p>
      <p>
        <strong>Applications of Java:</strong>
      </p>
      <ul>
        <li><strong>Web Applications:</strong> Java is used to build powerful web applications using frameworks like Spring or JavaServer Faces (JSF).</li>
        <li><strong>Mobile Development:</strong> Java is used for developing mobile applications on the Android platform.</li>
        <li><strong>Embedded Systems:</strong> Java is widely used for programming embedded systems, including robotics and the Internet of Things (IoT).</li>
        <li><strong>Business Applications:</strong> Java is used for developing enterprise business applications, particularly with Enterprise JavaBeans (EJB) technologies.</li>
      </ul>
      <p>
        <strong>Place in Programming:</strong>
      </p>
      <p>
        Java is known for its scalability and portability, allowing developers to create applications for various platforms and devices.
      </p>
      <p>
        <strong>Where to Learn Java:</strong>
      </p>
      <ul>
        <li><strong>Official Oracle Java Documentation:</strong> <a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Oracle Java Documentation</a></li>
        <li><strong>Courses on Codecademy:</strong> <a href="https://www.codecademy.com/learn/learn-java" target="_blank" rel="noopener noreferrer" style={{ color: 'purple' }}>Codecademy Java Course</a></li>
      </ul>
      <p>
        <strong>Features of Java:</strong>
      </p>
      <ul>
        <li><strong>Portability:</strong> Java code can be executed on any platform that supports the Java Virtual Machine (JVM).</li>
        <li><strong>Security:</strong> Java uses security mechanisms, making it popular for developing reliable applications.</li>
        <li><strong>Object-Oriented Paradigm:</strong> Java employs an object-oriented approach to problem-solving.</li>
      </ul>
      <p>
        Java is a programming language that is well-suited for various development domains and provides a rich set of tools for programmers.
      </p>
    </>
  );

  return content;
};

export default JavaModalContent;
