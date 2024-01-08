import React from 'react';
import './OtherResources.css';

import AkkaModalContent from './Resources/Akka';
import AnacondaModalContent from './Resources/Anaconda';
import AndroidStudioModalContent from './Resources/AndroidStudio';
import AnsibleModalContent from './Resources/Ansible';
import ApacheModalContent from './Resources/Apache';

const OtherResourcesModal = ({ resource, closeModal, isUkrainian }) => {
  const handleGoOut = () => {
    console.log(`Go out from ${resource}`);
    closeModal();
  };

  const getModalContent = () => {
    const resourceLower = typeof resource === 'string' ? resource.toLowerCase() : '';

    const resources = {
      akka: { backgroundColor: "#228B22", color: "#000", title: "Akka", content: <AkkaModalContent isUkrainian={isUkrainian} /> },
      anaconda: { backgroundColor: "#8FBC8F", color: "#000", title: "Anaconda", content: <AnacondaModalContent isUkrainian={isUkrainian} /> },
      'android studio': { backgroundColor: "#20B2AA", color: "#000", title: "Android Studio", content: <AndroidStudioModalContent isUkrainian={isUkrainian} /> },
      ansible: { backgroundColor: "#171414", color: "#fff", title: "Ansible", content: <AnsibleModalContent isUkrainian={isUkrainian} /> },
      apache: { backgroundColor: "#6853d4", color: "#fff", title: "Apache", content: <ApacheModalContent isUkrainian={isUkrainian} /> },
    };
   
    return resources[resourceLower] || {};
  };

  const { backgroundColor, color, title, content } = getModalContent();

  return (
    <div className={`resource-modal-container library-${resource.toLowerCase().replace(' ', '-')}`}>
      <div className="resource-modal" style={{ backgroundColor }}>
        <div className="library-modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="modal-button-go-out"
            onClick={handleGoOut}
          >
            {isUkrainian ? 'Вийти' : 'Go out'}
          </button>
          <div className="library-modal-content-container" style={{ color }}>
            <h1 id="modalTitle">{title}</h1>
            {content && <>{content}</>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherResourcesModal;
