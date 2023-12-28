import React from "react";
import './framework.css'

import ReactModalContent from "./Frameworks/React";
import AngularModalContent from "./Frameworks/Angular";

const FrameworksModal = ({ framework, closeModal, isUkrainian }) => {
    const handleGoOut = () => {
      console.log(`Go out from ${framework}`);
      closeModal();
    };
  
    const getModalContent = () => {
        const frameworkLower = typeof framework === 'string' ? framework.toLowerCase() : '';
      
        const frameworks = {
          react: { backgroundColor: "#61dafb", color: "#000", title: "React", content: <ReactModalContent isUkrainian={isUkrainian} /> },
          angular: { backgroundColor: "#dd0031", color: "#fff", title: "Angular", content: <AngularModalContent isUkrainian={isUkrainian} /> },
          'vue.js': { backgroundColor: "#42b883", color: "#fff", title: "Vue.js"},
        };
      
        return frameworks[frameworkLower] || {};
      };
      
  
    const { backgroundColor, color, title, content } = getModalContent();
  
    return (
      <div className={`framework-modal-container framework-${framework.toLowerCase()}`}>
        <div className="framework-modal" style={{ backgroundColor }}>
          <div className="framework-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-button-go-out"
              onClick={handleGoOut}
            >
              {isUkrainian ? "Вийти" : "Go out"}
            </button>
            <div className="framework-modal-content-container" style={{ color }}>
              <h1 id="modalTitle">{title}</h1>
              {content && <p>{content}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameworksModal;