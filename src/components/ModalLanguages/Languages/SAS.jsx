import React from 'react';

const SASModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            SAS - це програмний продукт та мова програмування, спеціально призначена для обробки та аналізу даних, статистичного моделювання та звітності в області бізнесу та досліджень.
          </p>
          <p>
            <strong>Застосування SAS:</strong>
          </p>
          <ul>
            <li><strong>Обробка та Аналіз Даних:</strong> SAS використовується для ефективної обробки та аналізу великих обсягів даних.</li>
            <li><strong>Статистичне Моделювання:</strong> SAS надає засоби для статистичного моделювання та прогнозування.</li>
            <li><strong>Звітність та Аналітика:</strong> SAS дозволяє створювати звіти та проводити аналітичні дослідження на основі даних.</li>
            <li><strong>Інтеграція з Базами Даних:</strong> SAS легко інтегрується з різними базами даних для зручного доступу до інформації.</li>
          </ul>
          <p>
            SAS є потужним інструментом для вирішення завдань в області бізнесу, фінансів, медицини та інших сфер.
          </p>
          <p>
            <strong>Де вчити SAS:</strong>
          </p>
          <ul>
            <li><strong>SAS Training and Certification:</strong> <a href="https://www.sas.com/ru_ua/home.html" target="_blank" rel="noopener noreferrer"  style={{ color: 'yellow'}} >SAS Training and Certification</a> - Офіційний веб-сайт для навчання та сертифікації з SAS.</li>
            <li><strong>SAS Communities:</strong> <a href="https://communities.sas.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow'}} >SAS Communities</a> - Спільнота SAS, де можна обмінюватися досвідом та отримувати допомогу.</li>
          </ul>
        </>
      ) : (
        <>
          <p>
            SAS is a software product and programming language specifically designed for data processing and analysis, statistical modeling, and reporting in business and research.
          </p>
          <p>
            <strong>Applications of SAS:</strong>
          </p>
          <ul>
            <li><strong>Data Processing and Analysis:</strong> SAS is used for efficiently processing and analyzing large volumes of data.</li>
            <li><strong>Statistical Modeling:</strong> SAS provides tools for statistical modeling and forecasting.</li>
            <li><strong>Reporting and Analytics:</strong> SAS allows creating reports and conducting analytical studies based on data.</li>
            <li><strong>Integration with Databases:</strong> SAS easily integrates with various databases for convenient access to information.</li>
          </ul>
          <p>
            SAS is a powerful tool for solving tasks in business, finance, medicine, and other fields.
          </p>
          <p>
            <strong>Where to Learn SAS:</strong>
          </p>
          <ul>
            <li><strong>SAS Training and Certification:</strong> <a href="https://www.sas.com/ru_ua/home.html" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow'}} >SAS Training and Certification</a> - The official website for SAS training and certification.</li>
            <li><strong>SAS Communities:</strong> <a href="https://communities.sas.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'yellow'}} >SAS Communities</a> - The SAS community where you can exchange experiences and get help.</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default SASModalContent;
