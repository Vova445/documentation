import React from 'react';

const LispModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            Lisp - мова програмування високого рівня, яка виникла в середині 1950-х років.
          </p>
          <p>
            <strong>Застосування Lisp:</strong>
          </p>
          <ul>
            <li><strong>Штучний Інтелект:</strong> Lisp широко використовується у сфері розробки штучного інтелекту і експертних систем.</li>
            <li><strong>Програмування з базами даних:</strong> Lisp використовується для розробки систем управління базами даних та обробки даних.</li>
            <li><strong>Робототехніка:</strong> Lisp є популярним вибором для програмування роботів і систем робототехніки.</li>
            <li><strong>Програмування мовлення:</strong> Lisp використовується для створення і розробки мовленнєвих програм та інтерфейсів.</li>
          </ul>
          <p>
            <strong>Місце в програмуванні:</strong>
          </p>
          <p>
            Lisp володіє потужними можливостями для маніпулювання символьними виразами і використовується в різних областях програмування.
          </p>
          <p>
            <strong>Де вчити Lisp:</strong>
          </p>
          <ul>
            <li><strong>Common Lisp HyperSpec:</strong> <a href="http://www.lispworks.com/documentation/HyperSpec/Front/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>Common Lisp HyperSpec</a></li>
            <li><strong>Practical Common Lisp:</strong> <a href="http://www.gigamonkeys.com/book/" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>Practical Common Lisp</a></li>
          </ul>
          <p>
            <strong>Унікальні риси Lisp:</strong>
          </p>
          <ul>
            <li><strong>Символьне програмування:</strong> Lisp базується на символьному програмуванні і дозволяє легко маніпулювати кодом як даними.</li>
            <li><strong>Макроси:</strong> Lisp володіє потужними макросами, які розширюють можливості мови програмування.</li>
            <li><strong>Динамічні типи даних:</strong> Lisp має динамічну систему типізації, що полегшує роботу з даними і кодом.</li>
          </ul>
          <p>
            Lisp грає важливу роль у розвитку програмування і використовується в різних галузях від науки до розробки програмного забезпечення.
          </p>
        </>
      ) : (
        <>
          <p>
            Lisp is a high-level programming language that originated in the mid-1950s.
          </p>
          <p>
            <strong>Applications of Lisp:</strong>
          </p>
          <ul>
            <li><strong>Artificial Intelligence:</strong> Lisp is widely used in the development of artificial intelligence and expert systems.</li>
            <li><strong>Database Programming:</strong> Lisp is used for developing database management systems and data processing.</li>
            <li><strong>Robotics:</strong> Lisp is a popular choice for programming robots and robotics systems.</li>
            <li><strong>Natural Language Processing:</strong> Lisp is used for creating and developing natural language processing programs and interfaces.</li>
          </ul>
          <p>
            <strong>Place in Programming:</strong>
          </p>
          <p>
            Lisp has powerful capabilities for manipulating symbolic expressions and is used in various programming domains.
          </p>
          <p>
            <strong>Where to Learn Lisp:</strong>
          </p>
          <ul>
            <li><strong>Common Lisp HyperSpec:</strong> <a href="http://www.lispworks.com/documentation/HyperSpec/Front/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>Common Lisp HyperSpec</a></li>
            <li><strong>Practical Common Lisp:</strong> <a href="http://www.gigamonkeys.com/book/" target="_blank" rel="noopener noreferrer" style={{ color: 'orange' }}>Practical Common Lisp</a></li>
          </ul>
          <p>
            <strong>Unique Features of Lisp:</strong>
          </p>
          <ul>
            <li><strong>Symbolic Programming:</strong> Lisp is based on symbolic programming and allows easy manipulation of code as data.</li>
            <li><strong>Macros:</strong> Lisp has powerful macros that extend the capabilities of the programming language.</li>
            <li><strong>Dynamic Data Types:</strong> Lisp has a dynamic typing system, making it easy to work with data and code.</li>
          </ul>
          <p>
            Lisp plays a crucial role in the development of programming and is used in various fields from science to software development.
          </p>
        </>
      )}
    </div>
  );
};

export default LispModalContent;
