import React from "react";
import './framework.css'

import ReactModalContent from "./Frameworks/React";
import AngularModalContent from "./Frameworks/Angular";
import VueModalContent from "./Frameworks/VueJS";
import DjangoModalContent from "./Frameworks/Django";
import FlaskModalContent from "./Frameworks/Flask";
import SpringModalContent from "./Frameworks/Spring";
import ExpressModalContent from "./Frameworks/ExpressJS";
import RailsModalContent from "./Frameworks/RoR";
import LaravelModalContent from "./Frameworks/Laravel";
import AspNetModalContent from "./Frameworks/ASPNET";
import SymfonyModalContent from "./Frameworks/Symfony";
import MeteorModalContent from "./Frameworks/Meteor";
import PlayFrameworkModalContent from "./Frameworks/Play";
import CakePHPModalContent from "./Frameworks/CakePHP";

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
          'vue.js': { backgroundColor: "#42b883", color: "#fff", title: "Vue.js", content: <VueModalContent isUkrainian={isUkrainian} />},
          django: {backgroundColor: "#092e20" , color: '#fff', title: "Django", content: <DjangoModalContent isUkrainian={isUkrainian} />},
          flask: {backgroundColor: '#000', color: "#fff" , title: "Flask", content: <FlaskModalContent isUkrainian={isUkrainian} />},
          spring: {backgroundColor: '#6db33f', color: "#333", title: "Spring", content: <SpringModalContent isUkrainian={isUkrainian} />},
          'express.js': {backgroundColor: '#454545', color: '#fff', title: "Express.JS", content: <ExpressModalContent isUkrainian={isUkrainian} />},
          'ruby on rails': {backgroundColor: '#9e3b3b', color: '#000', title: 'Ruby on Rails', content: <RailsModalContent isUkrainian={isUkrainian} />},
          laravel: {backgroundColor: '#ff2d20', color: '#000', title: 'Laravel', content: <LaravelModalContent isUkrainian={isUkrainian} /> },
          'asp.net': {backgroundColor: "#512bd4", color: '#fff', title: "ASP.NET", content: <AspNetModalContent isUkrainian={isUkrainian} />},
          symfony: {backgroundColor: "#212121", color: "#fff", title: "Symfony", content: <SymfonyModalContent isUkrainian={isUkrainian} />},
          meteor: {backgroundColor: "#a13a3a", color: "#333", title: "Meteor", content: <MeteorModalContent isUkrainian={isUkrainian} />},
          'play framework': {backgroundColor: '#5f3196', color: "#fff", title: "Play Framework", content: <PlayFrameworkModalContent isUkrainian={isUkrainian} />},
          cakephp: {backgroundColor: '#a71e29', color: '#fff', title: 'CakePHP', content: <CakePHPModalContent isUkrainian={isUkrainian} />},
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