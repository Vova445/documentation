import React from 'react';

const SaasModalContent = ({ isUkrainian }) => {
  const linkStyles = {
    backgroundColor: "#F05340",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: 'none',
    padding: '3px'
  };

  const content = isUkrainian ? (
    <>
      <p>
        SAAS (Software as a Service) - це модель надання програмного забезпечення, при якій програми надаються через Інтернет на засновані на підписці основі. Замість того щоб завантажувати та встановлювати програми на своїх пристроях, користувачі можуть отримати доступ до програм і їх функціональності через веб-браузер.
      </p>
      <p>
        <strong>Основні характеристики SAAS:</strong>
      </p>
      <ul>
        <li><strong>Підписка:</strong> Користувачі платять за користування програмою на підписку, зазвичай щомісяця або щороку.</li>
        <li><strong>Доступ через Інтернет:</strong> Програми доступні через веб-браузер, що дозволяє користувачам отримувати доступ до них з будь-якого пристрою з підключенням до Інтернету.</li>
        <li><strong>Оновлення:</strong> Оновлення програм проводяться автоматично на стороні провайдера, що забезпечує актуальність функціональності.</li>
        <li><strong>Спільний Доступ:</strong> Декілька користувачів може використовувати програму одночасно, не потрібно встановлювати її на кожному пристрої окремо.</li>
      </ul>
      <p>
        <strong>Застосування SAAS:</strong>
      </p>
      <p>
        SAAS використовується для різноманітних програм, включаючи офісні пакети, програми для управління відносинами з клієнтами (CRM), ресурси людського капіталу (HR), та багато інших.
      </p>
      <p>
        <strong>Де Вчитися SAAS:</strong>
      </p>
      <ul>
        <li><strong>SAAS Explained:</strong> <a href="https://www.salesforce.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Salesforce SAAS Explained</a></li>
        <br></br>
        <li><strong>Understanding SAAS, PAAS, and IAAS:</strong> <a href="https://www.ibm.com/cloud/learn/saas-paas-iaas-explained" target="_blank" rel="noopener noreferrer" style={linkStyles}>IBM Cloud - SAAS, PAAS, IAAS</a></li>
      </ul>
    </>
  ) : (
    <>
      <h2>SAAS (Software as a Service)</h2>
      <p>
        SAAS is a software delivery model where applications are provided over the Internet on a subscription basis. Instead of downloading and installing software on their devices, users can access programs and their functionality through a web browser.
      </p>
      <p>
        <strong>Key Features of SAAS:</strong>
      </p>
      <ul>
        <li><strong>Subscription:</strong> Users pay for the use of the software on a subscription basis, usually monthly or annually.</li>
        <li><strong>Internet Access:</strong> Programs are accessible through a web browser, allowing users to access them from any device with an internet connection.</li>
        <li><strong>Updates:</strong> Software updates are performed automatically on the provider's side, ensuring the relevance of functionality.</li>
        <li><strong>Collaborative Access:</strong> Multiple users can use the program simultaneously, eliminating the need to install it on each device individually.</li>
      </ul>
      <p>
        <strong>Applications of SAAS:</strong>
      </p>
      <p>
        SAAS is used for various applications, including office suites, customer relationship management (CRM) software, human resources (HR) software, and many others.
      </p>
      <p>
        <strong>Where to Learn SAAS:</strong>
      </p>
      <ul>
        <li><strong>SAAS Explained:</strong> <a href="https://www.salesforce.com/" target="_blank" rel="noopener noreferrer" style={linkStyles}>Salesforce SAAS Explained</a></li>
        <br></br>
        <li><strong>Understanding SAAS, PAAS, and IAAS:</strong> <a href="https://www.ibm.com/cloud/learn/saas-paas-iaas-explained" target="_blank" rel="noopener noreferrer" style={linkStyles}>IBM Cloud - SAAS, PAAS, IAAS</a></li>
      </ul>
    </>
  );

  return content;
};

export default SaasModalContent;
