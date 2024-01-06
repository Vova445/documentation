import React from 'react';
import './libraries.css';


import NumPyModalContent from './Libraries/NumPy';
import SciPyModalContent from './Libraries/SciPy';
import MatplotlibModalContent from './Libraries/Matplotlib';
import PandasModalContent from './Libraries/Pandas';
import TensorFlowModalContent from './Libraries/TensorFlow';
import PyTorchModalContent from './Libraries/PyTorch';
import ScikitLearnModalContent from './Libraries/ScikitLearn';
import AxiosModalContent from './Libraries/Axios';
import LodashModalContent from './Libraries/Lodash';
import JQueryModalContent from './Libraries/JQuery';
import MomentJsModalContent from './Libraries/MomentJs';
import ReduxModalContent from './Libraries/Redux';
import RxJSModalContent from './Libraries/RxJS';
import RamdaModalContent from './Libraries/Ramda';
import ThreeJsModalContent from './Libraries/ThreeJs';
import SocketIOModalContent from './Libraries/SocketIO';
import SQLAlchemyModalContent from './Libraries/SQLAlchemy';
import SeleniumModalContent from './Libraries/Selenium';
import OpenCVModalContent from './Libraries/OpenCV';
import ReactRouterModalContent from './Libraries/ReactRouter';
import ReduxSagaModalContent from './Libraries/ReduxSaga';
import JestModalContent from './Libraries/Jest';
import TailwindCSSModalContent from './Libraries/TailwindCSS';
import BootstrapModalContent from './Libraries/Bootstrap';
import SaasModalContent from './Libraries/SAAS';
import FirebaseModalContent from './Libraries/Firebase';
import TwilioModalContent from './Libraries/Twilio';
import GraphQLModalContent from './Libraries/GraphQL';
import MongooseModalContent from './Libraries/Mongoose';
import PassportJsModalContent from './Libraries/PassportJs';
import MochaModalContent from './Libraries/Mocha';
import JasmineModalContent from './Libraries/Jasmine';
import CypressModalContent from './Libraries/Cypress';
import JUnitModalContent from './Libraries/JUnit';

const LibrariesModal = ({ library, closeModal, isUkrainian }) => {
  const handleGoOut = () => {
    console.log(`Go out from ${library}`);
    closeModal();
  };

  const getModalContent = () => {
    const libraryLower = typeof library === 'string' ? library.toLowerCase() : '';

    const libraries = {
      numpy: { backgroundColor: "#61dafb", color: "#000", title: "NumPy", content: <NumPyModalContent isUkrainian={isUkrainian} /> },
      scipy: { backgroundColor: "#00008B", color: "#fff", title: "SciPy", content: <SciPyModalContent isUkrainian={isUkrainian} /> },
      matplotlib: { backgroundColor: "#11557c", color: "#fff", title: "Matplotlib", content: <MatplotlibModalContent isUkrainian={isUkrainian} /> },
      pandas: { backgroundColor: "#150458", color: "#fff", title: "Pandas", content: <PandasModalContent isUkrainian={isUkrainian} /> },
      tensorflow: { backgroundColor: "#FF6F61", color: "#333", title: "TensorFlow", content: <TensorFlowModalContent isUkrainian={isUkrainian} /> },
      pytorch: { backgroundColor: "#EE4C2C", color: "#000", title: "PyTorch", content: <PyTorchModalContent isUkrainian={isUkrainian} /> },
      'scikit-learn': { backgroundColor: "#F7931E", color: "#333", title: "Scikit-Learn", content: <ScikitLearnModalContent isUkrainian={isUkrainian} /> },
      axios: { backgroundColor: "#00a2ed", color: "#000", title: "Axios", content: <AxiosModalContent isUkrainian={isUkrainian} /> },
      lodash: { backgroundColor: "#7952b3", color: "#fff", title: "Lodash", content: <LodashModalContent isUkrainian={isUkrainian} /> },
      jquery: { backgroundColor: "#0769ad", color: "#fff", title: "jQuery", content: <JQueryModalContent isUkrainian={isUkrainian} /> },
      'moment.js': { backgroundColor: "green", color: "#fff", title: "Moment.js", content: <MomentJsModalContent isUkrainian={isUkrainian} /> },
      redux: { backgroundColor: "#764abc", color: "#000", title: "Redux", content: <ReduxModalContent isUkrainian={isUkrainian} /> },
      rxjs: { backgroundColor: "#FF0000", color: "#fff", title: "RxJS", content: <RxJSModalContent isUkrainian={isUkrainian} /> },
      ramda: { backgroundColor: "#7B68EE", color: "#fff", title: "Ramda", content: <RamdaModalContent isUkrainian={isUkrainian} /> },
      'three.js': { backgroundColor: "#008080", color: "#fff", title: "Three.js", content: <ThreeJsModalContent isUkrainian={isUkrainian} /> },
      'socket.io': { backgroundColor: "#484848", color: "#fff", title: "Socket.IO", content: <SocketIOModalContent isUkrainian={isUkrainian} /> },
      sqlalchemy: { backgroundColor: "#3E5269", color: "#fff", title: "SQLAlchemy", content: <SQLAlchemyModalContent isUkrainian={isUkrainian} /> },
      selenium: { backgroundColor: "#43B02A", color: "#fff", title: "Selenium", content: <SeleniumModalContent isUkrainian={isUkrainian} /> },
      opencv: { backgroundColor: "#5C3D2E", color: "#fff", title: "OpenCV", content: <OpenCVModalContent isUkrainian={isUkrainian} /> },
      'react router': { backgroundColor: "#61dafb", color: "#000", title: "React Router", content: <ReactRouterModalContent isUkrainian={isUkrainian} /> },
      'redux saga': { backgroundColor: "#7248B6", color: "#fff", title: "Redux Saga", content: <ReduxSagaModalContent isUkrainian={isUkrainian} /> },
      jest: { backgroundColor: "#99425B", color: "#fff", title: "Jest", content: <JestModalContent isUkrainian={isUkrainian} /> },
      'tailwind css': { backgroundColor: "#38B2AC", color: "#fff", title: "Tailwind CSS", content: <TailwindCSSModalContent isUkrainian={isUkrainian} /> },
      bootstrap: { backgroundColor: "#7952B3", color: "#fff", title: "Bootstrap", content: <BootstrapModalContent isUkrainian={isUkrainian} /> },
      saas: { backgroundColor: "pink", color: "#333", title: "SAAS", content: <SaasModalContent isUkrainian={isUkrainian} /> },
      firebase: { backgroundColor: "#FFCA28", color: "#000", title: "Firebase", content: <FirebaseModalContent isUkrainian={isUkrainian} /> },
      twilio: { backgroundColor: "#F22F46", color: "#fff", title: "Twilio", content: <TwilioModalContent isUkrainian={isUkrainian} /> },
      graphql: { backgroundColor: "#E535AB", color: "#000", title: "GraphQL", content: <GraphQLModalContent isUkrainian={isUkrainian} /> },
      mongoose: { backgroundColor: "#68A063", color: "#fff", title: "Mongoose", content: <MongooseModalContent isUkrainian={isUkrainian} /> },
      'passport.js': { backgroundColor: "#4B0082", color: "#fff", title: "Passport.js", content: <PassportJsModalContent isUkrainian={isUkrainian} /> },
      mocha: { backgroundColor: "#8D6748", color: "#fff", title: "Mocha", content: <MochaModalContent isUkrainian={isUkrainian} /> },
      jasmine: { backgroundColor: "#8A4182", color: "#fff", title: "Jasmine", content: <JasmineModalContent isUkrainian={isUkrainian} /> },
      cypress: { backgroundColor: "#17202A", color: "#fff", title: "Cypress", content: <CypressModalContent isUkrainian={isUkrainian} /> },
      junit: { backgroundColor: "#FF473D", color: "#000", title: "JUnit", content: <JUnitModalContent isUkrainian={isUkrainian} /> },
    };
   
    return libraries[libraryLower] || {};
  };

  const { backgroundColor, color, title, content } = getModalContent();

  return (
    <div className={`library-modal-container library-${library.toLowerCase().replace(' ', '-')}`}>
      <div className="library-modal" style={{ backgroundColor }}>
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

export default LibrariesModal;
