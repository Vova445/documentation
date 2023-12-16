import React from 'react';

const COOLModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            COOL (Classroom Object-Oriented Language) - мова програмування, призначена для використання в академічних середовищах для навчання принципам об'єктно-орієнтованого програмування (ООП).
          </p>
          <p>
            <strong>Застосування COOL:</strong>
          </p>
          <ul>
            <li><strong>Навчання ООП:</strong> COOL використовується для навчання основам об'єктно-орієнтованого програмування студентам в академічних закладах.</li>
            <li><strong>Створення Об'єктів:</strong> Мова надає засоби для створення та використання об'єктів програми.</li>
            <li><strong>Наслідування:</strong> COOL підтримує концепцію наслідування для створення ієрархій класів.</li>
            <li><strong>Поліморфізм:</strong> Об'єкти можуть використовуватися у загальному сенсі, сприяючи поліморфізму.</li>
          </ul>
          <p>
            COOL є мовою, спроектованою для освітніх цілей та вивчення концепцій ООП.
          </p>
        </>
      ) : (
        <>
          <p>
            COOL (Classroom Object-Oriented Language) is a programming language designed for use in academic settings to teach the principles of object-oriented programming (OOP).
          </p>
          <p>
            <strong>Applications of COOL:</strong>
          </p>
          <ul>
            <li><strong>OOP Education:</strong> COOL is used to teach the fundamentals of object-oriented programming to students in academic institutions.</li>
            <li><strong>Object Creation:</strong> The language provides facilities for creating and utilizing program objects.</li>
            <li><strong>Inheritance:</strong> COOL supports the concept of inheritance for creating class hierarchies.</li>
            <li><strong>Polymorphism:</strong> Objects can be used in a general sense, contributing to polymorphism.</li>
          </ul>
          <p>
            COOL is a language designed for educational purposes and learning OOP concepts.
          </p>
        </>
      )}
    </div>
  );
};

export default COOLModalContent;
