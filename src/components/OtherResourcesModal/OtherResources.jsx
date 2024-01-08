import React from 'react';
import './OtherResources.css';



const OtherResourcesModal = ({ resource, closeModal, isUkrainian }) => {
  const handleGoOut = () => {
    console.log(`Go out from ${resource}`);
    closeModal();
  };

  const getModalContent = () => {
    const resourceLower = typeof resource === 'string' ? resource.toLowerCase() : '';

    const resources = {
     
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
