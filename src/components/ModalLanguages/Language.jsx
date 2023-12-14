import React from "react";
import "./languageModal.css";
import HtmlModalContent from "./Languages/HTML";
import CssModalContent from "./Languages/CSS";
import PythonModalContent from "./Languages/Python";

const LanguageModal = ({ language, closeModal, isUkrainian }) => {
  const handleGoOut = () => {
    console.log(`Go out from ${language}`);
    closeModal();
  };

  
  const getModalContent = () => {
    switch (language.toLowerCase()) {
      case "html":
        return {
          backgroundColor: "#e34c26",
          color: "black",
          title: "HTML",
          content: isUkrainian ? <HtmlModalContent isUkrainian={true} /> : <HtmlModalContent isUkrainian={false} />
        };

        case "css":
            return {
                backgroundColor: "#3498db",
                color: "white",
                title: 'CSS',
                content: isUkrainian ? <CssModalContent isUkrainian={true} /> : <CssModalContent isUkrainian={false} />
            };
            case "python":
                return {
                    backgroundColor: "#3776ab", 
                    color: "white",             
                    title: "Python",
                    content: isUkrainian ? <PythonModalContent isUkrainian={true} /> : <PythonModalContent isUkrainian={false} />
                };


      case "javascript":
        return {
          backgroundColor: "#f0db4f",
          color: "black",
          title: "JavaScript",
          content: isUkrainian
            ? "JavaScript - це високорівнева, інтерпретована мова програмування, яка додає динаміку та взаємодію до веб-сторінок. Вона підтримує об'єктно-орієнтоване програмування."
            : "JavaScript is a high-level, interpreted programming language that adds dynamic and interactive features to web pages. It supports object-oriented programming.",
        };

      default:
        return {};
    }
  };

  const { backgroundColor, color, title, content } = getModalContent();

  return (
    <div className={`language-modal-container language-${language.toLowerCase()}`}>
      <div className="language-modal" style={{ backgroundColor }}>
        <div className="language-modal-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="modal-button-go-out"
            onClick={handleGoOut}
          >
            {isUkrainian ? "Вийти" : "Go out"}
          </button>
          <div className="language-modal-content-container" style={{ color }}>
            <h1 id="modalTitle">{title}</h1>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
