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
import PhoenixModalContent from "./Frameworks/Phoenix";
import NestModalContent from "./Frameworks/NestJS";
import FastAPIModalContent from "./Frameworks/FastAPI";
import GinModalContent from "./Frameworks/Gin";
import HapiJSModalContent from "./Frameworks/HapiJS";
import QuasarModalContent from "./Frameworks/Quasar";
import SailsJSModalContent from "./Frameworks/SailsJS";
import DjangoRestModalContent from "./Frameworks/DjangoREST";
import AdonisJsModalContent from "./Frameworks/AdonisJS";
import KoaJsModalContent from "./Frameworks/KoaJS";
import SlimModalContent from "./Frameworks/Slim";
import StrapiModalContent from "./Frameworks/Strapi";
import NuxtModalContent from "./Frameworks/NuxtJS";
import AureliaModalContent from "./Frameworks/Aurelia";
import EmberModalContent from "./Frameworks/EmberJS";
import NextJSModalContent from "./Frameworks/NextJs";
import QuarkusModalContent from "./Frameworks/Quarkus";
import MicronautModalContent from "./Frameworks/Micronaut";
import ActixModalContent from "./Frameworks/Actix";
import NancyModalContent from "./Frameworks/Nancy";
import RocketModalContent from "./Frameworks/Rocket";
import LoopBackModalContent from "./Frameworks/LoopBack";
import StrutsModalContent from "./Frameworks/Struts";
import CherryPyModalContent from "./Frameworks/CherryPy";
import FeathersModalContent from "./Frameworks/Feathers";
import SvelteKitModalContent from "./Frameworks/SvelteKit";
import ElectronModalContent from "./Frameworks/Electron";
import PhalconModalContent from "./Frameworks/Phalcon";

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
          phoenix: {backgroundColor: "#4e2758", color: '#fff', title: 'Phoenix', content: <PhoenixModalContent isUkrainian={isUkrainian} />},
          'nest.js': {backgroundColor: '#e0234e', color: '#000', title: "Nest.JS", content: <NestModalContent isUkrainian={isUkrainian} />},
          fastapi: {backgroundColor: "#009688", color: '#333', title: "FastAPI",content: <FastAPIModalContent isUkrainian={isUkrainian} />},
          gin: {backgroundColor: '#00acd7', color: '#000', title: 'Gin', content: <GinModalContent isUkrainian={isUkrainian} />},
          'hapi.js': {backgroundColor: "#4f4f4f", color: '#fff', title: 'HapiJS', content: <HapiJSModalContent isUkrainian={isUkrainian} /> },
          quasar: {backgroundColor: '#1976d2', color:"#fff", title: 'Quasar', content: <QuasarModalContent isUkrainian={isUkrainian} />},
          'sails.js': {backgroundColor: "#3997d8", color: "#333", title: "SailsJS", content: <SailsJSModalContent isUkrainian={isUkrainian}/>},
          'django rest': {backgroundColor: "#092e20", color: "#fff", title: "Django REST", content: <DjangoRestModalContent isUkrainian={isUkrainian}/>},
          adonisjs: {backgroundColor: "#4f4466", color: "#000", title: 'AdonisJS', content: <AdonisJsModalContent isUkrainian={isUkrainian}/>},
          'koa.js': {backgroundColor: "#363636", color: "#fff", title: "Koa.JS", content: <KoaJsModalContent isUkrainian={isUkrainian}/>},
          slim: {backgroundColor: "#6db33f", color: "#333", title: "Slim", content: <SlimModalContent isUkrainian={isUkrainian}/> },
          strapi: {backgroundColor: "#2e7ee0", color: "#fff", title: "Strapi", content: <StrapiModalContent isUkrainian={isUkrainian}/> },
          'nuxt.js': {backgroundColor: "#00c58e", color: "#fff", title: "Nuxt.JS", content: <NuxtModalContent isUkrainian={isUkrainian}/> },
          aurelia: {backgroundColor: "#ed2b88", color: "#fff", title: "Aurelia", content: <AureliaModalContent isUkrainian={isUkrainian}/> },
          'ember.js': {backgroundColor: "#f23819", color: "#000", title: "Ember.JS", content: <EmberModalContent isUkrainian={isUkrainian}/> },
          'next.js': {backgroundColor: "#333", color: "#fff", title: "Next.JS", content: <NextJSModalContent isUkrainian={isUkrainian}/> },
          quarkus: {backgroundColor: "#005e7a", color: "#fff", title: "Quarkus", content: <QuarkusModalContent isUkrainian={isUkrainian}/> },
          micronaut: {backgroundColor: "#454545", color: "#fff", title: "Micronaut", content: <MicronautModalContent isUkrainian={isUkrainian}/> },
          actix: {backgroundColor: "#363636", color: "#fff", title: "Actix", content: <ActixModalContent isUkrainian={isUkrainian}/> },
          nancy: {backgroundColor: "#000", color: "#fff", title: "Nancy", content: <NancyModalContent isUkrainian={isUkrainian}/> },
          rocket: {backgroundColor: "#d62828", color: "#000", title: "Rocket", content: <RocketModalContent isUkrainian={isUkrainian}/> },
          loopback: {backgroundColor: "blue", color: "#fff", title: "LoopBack", content: <LoopBackModalContent isUkrainian={isUkrainian}/> },
          struts: {backgroundColor: "#8c2b2b", color: "#fff", title: "Struts", content: <StrutsModalContent isUkrainian={isUkrainian}/> },
          cherrypy: {backgroundColor: "#c13232", color: "#fff", title: "CherryPy", content: <CherryPyModalContent isUkrainian={isUkrainian}/> },
          feathers: {backgroundColor: "#2f2f2f", color: "#fff", title: "Feathers", content: <FeathersModalContent isUkrainian={isUkrainian}/> },
          sveltekit: {backgroundColor: "#f93e2c", color: "#000", title: "SvelteKit", content: <SvelteKitModalContent isUkrainian={isUkrainian}/> },
          electron: {backgroundColor: "rgb(59 132 142)", color: "#000", title: "Electron", content: <ElectronModalContent isUkrainian={isUkrainian}/> },
          phalcon: {backgroundColor: "purple", color: "#fff", title: "Phalcon", content: <PhalconModalContent isUkrainian={isUkrainian}/> },
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