import React from 'react';

const FortranIIModalContent = ({ isUkrainian }) => {
  return (
    <div>
      {isUkrainian ? (
        <>
          <p>
            FORTRAN II - це мова програмування високого рівня, розроблена для обчислювальних та наукових застосувань. Вона є покращеною версією оригінальної мови FORTRAN та надає засоби для створення чисельних обчислень та обробки даних.
          </p>
          <p>
            <strong>Характеристики FORTRAN II:</strong>
          </p>
          <ul>
            <li><strong>Чисельні Обчислення:</strong> Мова спроектована для виконання чисельних обчислень, що робить її популярною у сфері наукових досліджень та інженерії.</li>
            <li><strong>Масштабованість:</strong> FORTRAN II покращила масштабованість своєї попередниці, що дозволяє розробникам легше створювати та підтримувати великі обчислювальні програми.</li>
            <li><strong>Стандартизація:</strong> З'явилися перші спроби стандартизації, що полегшувало обмін програмами та підвищувало переносимість коду.</li>
          </ul>
          <p>
            FORTRAN II відіграв важливу роль у розвитку обчислювальної техніки та залишається важливим моментом в історії програмування.
          </p>
          <p>
            <strong>Де вчити FORTRAN II:</strong>
          </p>
          <ul>
            <li><strong>Introduction to FORTRAN II:</strong> <a href="https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.cbclx01/fortran2.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'black'}}>IBM Knowledge Center - Introduction to FORTRAN II</a></li>
            <li><strong>FORTRAN II Programming Tutorial:</strong> <a href="https://www.tutorialspoint.com/fortran/fortran_overview.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'black'}}>TutorialsPoint - FORTRAN Overview</a></li>
          </ul>
        </>
      ) : (
        <>
          <p>
            FORTRAN II is a high-level programming language designed for computational and scientific applications. It is an enhanced version of the original FORTRAN language and provides facilities for numerical computation and data processing.
          </p>
          <p>
            <strong>Features of FORTRAN II:</strong>
          </p>
          <ul>
            <li><strong>Numerical Computation:</strong> The language is designed for performing numerical computations, making it popular in the fields of scientific research and engineering.</li>
            <li><strong>Scalability:</strong> FORTRAN II improved the scalability of its predecessor, allowing developers to more easily create and maintain large computational programs.</li>
            <li><strong>Standardization:</strong> Early attempts at standardization emerged, facilitating program exchange and improving code portability.</li>
          </ul>
          <p>
            FORTRAN II played a significant role in the development of computing technology and remains a crucial point in the history of programming.
          </p>
          <p>
            <strong>Where to Learn FORTRAN II:</strong>
          </p>
          <ul>
            <li><strong>Introduction to FORTRAN II:</strong> <a href="https://www.ibm.com/support/knowledgecenter/SSLTBW_2.3.0/com.ibm.zos.v2r3.cbclx01/fortran2.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'black'}}>IBM Knowledge Center - Introduction to FORTRAN II</a></li>
            <li><strong>FORTRAN II Programming Tutorial:</strong> <a href="https://www.tutorialspoint.com/fortran/fortran_overview.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'black'}}>TutorialsPoint - FORTRAN Overview</a></li>
          </ul>
        </>
      )}
    </div>
  );
};

export default FortranIIModalContent;
