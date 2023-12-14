import React from "react";

const Modal = ({ title, description, link, resourceClass, closeModal, isUkrainian }) => {
  return (
    <div className={`modal-overlay`} onClick={closeModal}>
      <div className={`modal-content ${resourceClass}`} onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <span className={`close-modal ${resourceClass}`} onClick={closeModal}>&times;</span>
        </div>
        <div className="modal-content-container">
          <h3 id="modalTitle">{title}</h3>
          <p id="modalDescription">{description}</p>
          {link && (
            <a href={link} target="_blank" rel="noreferrer noopener">
              <button className={`modal-button-details ${resourceClass}`}>
                {isUkrainian ? 'Перейти на ресурс' : 'Go to resource'}
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
