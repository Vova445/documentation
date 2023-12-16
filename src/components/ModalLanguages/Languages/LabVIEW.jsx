import React from 'react';

const LabVIEWModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            LabVIEW - це програмне середовище для візуального програмування, розроблене для автоматизації вимірювань та роботи зі схемами контролю та вимірювань (SCADA).
          </p>
          <p>
            <strong>Застосування LabVIEW:</strong>
          </p>
          <ul>
            <li><strong>Автоматизація Вимірювань:</strong> LabVIEW використовується для розробки програм для автоматизації вимірювань та тестувань.</li>
            <li><strong>Візуальне Програмування:</strong> Мова має візуальний інтерфейс програмування, що дозволяє створювати програми за допомогою графічних елементів (блоків).</li>
            <li><strong>Робота зі Схемами SCADA:</strong> LabVIEW використовується для розробки систем контролю та вимірювань (SCADA).</li>
          </ul>
          <p>
            LabVIEW є популярним інструментом для інженерів та науковців у сфері автоматизації та вимірювань.
          </p>
          <p>
            <strong>Де вчити LabVIEW:</strong>
          </p>
          <ul>
            <li><strong>Офіційний Веб-сайт LabVIEW:</strong> <a href="https://www.ni.com/en-us/shop/labview.html" target="_blank" rel="noopener noreferrer">Офіційний Веб-сайт LabVIEW</a> - Ресурс для отримання програмного забезпечення та навчання з LabVIEW.</li>
            
        </ul>
        </>
      ) : (
        <>
          <p>
            LabVIEW is a visual programming environment developed for automation of measurements and working with supervisory control and data acquisition (SCADA) schemes.
          </p>
          <p>
            <strong>Applications of LabVIEW:</strong>
          </p>
          <ul>
            <li><strong>Measurement Automation:</strong> LabVIEW is used to develop programs for automating measurements and testing.</li>
            <li><strong>Visual Programming:</strong> The language has a visual programming interface that allows creating programs using graphical elements (blocks).</li>
            <li><strong>SCADA System Development:</strong> LabVIEW is used for developing supervisory control and data acquisition (SCADA) systems.</li>
          </ul>
          <p>
            LabVIEW is a popular tool for engineers and scientists in the field of automation and measurements.
          </p>
          <p>
            <strong>Where to Learn LabVIEW:</strong>
          </p>
          <ul>
            <li><strong>Official LabVIEW Website:</strong> <a href="https://www.ni.com/en-us/shop/labview.html" target="_blank" rel="noopener noreferrer">Official LabVIEW Website</a> - Resource for obtaining software and learning LabVIEW.</li>
            
        </ul>
        </>
      )}
    </div>
  );
};

export default LabVIEWModalContent;
