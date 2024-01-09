import React from 'react';
import './OtherResources.css';

import AkkaModalContent from './Resources/Akka';
import AnacondaModalContent from './Resources/Anaconda';
import AndroidStudioModalContent from './Resources/AndroidStudio';
import AnsibleModalContent from './Resources/Ansible';
import ApacheModalContent from './Resources/Apache';
import ArchLinuxModalContent from './Resources/ArchLinux';
import ArduinoModalContent from './Resources/Arduino';
import AtomModalContent from './Resources/Atom';
import BabelModalContent from './Resources/Babel';
import BehanceModalContent from './Resources/Behance';
import BitbucketModalContent from './Resources/BitBucket';
import BlenderModalContent from './Resources/Blender';
import BrowserStackModalContent from './Resources/BrowserStack';
import BulmaModalContent from './Resources/Bulma';
import BunModalContent from './Resources/Bun';
import CairoGraphicsModalContent from './Resources/CairoGraphics';
import CanvaModalContent from './Resources/Canva';
import CircleCIModalContent from './Resources/CircleCI';
import CLionModalContent from './Resources/CLion';
import CMakeModalContent from './Resources/CMake';
import CodeIgniterModalContent from './Resources/CodeIgniter';
import CodePenModalContent from './Resources/CodePen';
import ComposerModalContent from './Resources/Composer';
import ConfluenceModalContent from './Resources/Confluence';
import CouchDBModalContent from './Resources/CouchDB';
import DataGripModalContent from './Resources/DataGrip';
import DataSpellModalContent from './Resources/DataSpell';
import DBeaverModalContent from './Resources/DBeaver';
import DenoModalContent from './Resources/Deno';
import DockerModalContent from './Resources/Docker';
import DoctrineModalContent from './Resources/Doctrine';
import DrupalModalContent from './Resources/Drupal';
import EclipseModalContent from './Resources/EclipseIDE';
import ElasticsearchModalContent from './Resources/ElasticSearch';
import ESLintModalContent from './Resources/ESLint';
import FigmaModalContent from './Resources/Figma';
import FileZillaModalContent from './Resources/FileZilla';
import FlutterModalContent from './Resources/Flutter';
import GatsbyModalContent from './Resources/Gatsby';
import GCCModalContent from './Resources/GCC';
import GentooModalContent from './Resources/Gentoo';
import GimpModalContent from './Resources/GIMP';
import GitModalContent from './Resources/Git';
import GitBookModalContent from './Resources/GitBook';
import GitHubModalContent from './Resources/GitHub';
import GitLabModalContent from './Resources/GitLab';
import GitterModalContent from './Resources/Gitter';
import GodotEngineModalContent from './Resources/GodotEngine';
import GoLandModalContent from './Resources/GoLand';
import GradleModalContent from './Resources/Gradle';
import GrafanaModalContent from './Resources/Grafana';
import GrailsModalContent from './Resources/Grails';
import HandlebarsModalContent from './Resources/Handlebars';
import HardhatModalContent from './Resources/Hardhat';
import HomebrewModalContent from './Resources/Homebrew';
import IFTTTModalContent from './Resources/IFTTT';
import InfluxDBModalContent from './Resources/InfluxDB';
import InkscapeModalContent from './Resources/Inkscape';
import IntelliJIDEAModalContent from './Resources/IntelliJIDEA';
import IonicModalContent from './Resources/Ionic';
import JekyllModalContent from './Resources/Jekyll';
import JenkinsModalContent from './Resources/Jenkins';
import JetBrainsModalContent from './Resources/JetBrains';
import JiraModalContent from './Resources/Jira';
import JsonModalContent from './Resources/JSON';
import JupyterModalContent from './Resources/Jupyter';
import KaggleModalContent from './Resources/Kaggle';
import KerasModalContent from './Resources/Keras';
import KubernetesModalContent from './Resources/Kubernetes';
import LinkedInModalContent from './Resources/LinkedIn';
import LLVMModalContent from './Resources/LLVM';
import AutodeskMayaModalContent from './Resources/AutodeskMaya';
import MongoDBModalContent from './Resources/MongoDB';
import MoodleModalContent from './Resources/Moodle';
import MySQLModalContent from './Resources/MySQL';
import NanoModalContent from './Resources/Nano';
import NodeJsModalContent from './Resources/NodeJs';
import PhpStormModalContent from './Resources/PhpStorm';
import PostmanModalContent from './Resources/Postman';
import RancherModalContent from './Resources/Rancher';
import TrelloModalContent from './Resources/Trello';
import UnityModalContent from './Resources/Unity';
import UnrealEngineModalContent from './Resources/UnrealEngine';
import VisualStudioModalContent from './Resources/VisualStudio';
import VSCodeModalContent from './Resources/VisualStudioCode';
import ViteModalContent from './Resources/ViteJs';
import WebpackModalContent from './Resources/Webpack';
import WebStormModalContent from './Resources/WebStorm';
import WordPressModalContent from './Resources/WordPress';

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
      'arch linux': { backgroundColor: "#2c7bdb", color: "#fff", title: "Arch Linux", content: <ArchLinuxModalContent isUkrainian={isUkrainian} /> },
      arduino: { backgroundColor: "#1b99b3", color: "#fff", title: "Arduino", content: <ArduinoModalContent isUkrainian={isUkrainian} /> },
      atom: { backgroundColor: "#4e5450", color: "#fff", title: "Atom", content: <AtomModalContent isUkrainian={isUkrainian} /> },
      babel: { backgroundColor: "#c7c563", color: "#333", title: "Babel", content: <BabelModalContent isUkrainian={isUkrainian} /> },
      behance: { backgroundColor: "#476dcc", color: "#fff", title: "Behance", content: <BehanceModalContent isUkrainian={isUkrainian} /> },
      bitbucket: { backgroundColor: "#3b518a", color: "#fff", title: "BitBucket", content: <BitbucketModalContent isUkrainian={isUkrainian} /> },
      blender: { backgroundColor: "#eb6117", color: "#fff", title: "Blender", content: <BlenderModalContent isUkrainian={isUkrainian} /> },
      browserstack: { backgroundColor: "#e89b0c", color: "#333", title: "BrowserStack", content: <BrowserStackModalContent isUkrainian={isUkrainian} /> },
      bulma: { backgroundColor: "#09de85", color: "#333", title: "Bulma", content: <BulmaModalContent isUkrainian={isUkrainian} /> },
      bun: { backgroundColor: "#4d5250", color: "#fff", title: "Bun", content: <BunModalContent isUkrainian={isUkrainian} /> },
      'cairo graphics': { backgroundColor: "#ced41c", color: "#000", title: "Cairo Graphics", content: <CairoGraphicsModalContent isUkrainian={isUkrainian} /> },
      canva: { backgroundColor: "#0af2e7", color: "#000", title: "Canva", content: <CanvaModalContent isUkrainian={isUkrainian} /> },
      circleci: { backgroundColor: "#181c1c", color: "#fff", title: "CircleCI", content: <CircleCIModalContent isUkrainian={isUkrainian} /> },
      clion: { backgroundColor: "#181c1c", color: "#fff", title: "CLion", content: <CLionModalContent isUkrainian={isUkrainian} /> },
      cmake: { backgroundColor: "#228fc9", color: "#fff", title: "CMake", content: <CMakeModalContent isUkrainian={isUkrainian} /> },
      codeigniter: { backgroundColor: "#e34d17", color: "#fff", title: "CodeIgniter", content: <CodeIgniterModalContent isUkrainian={isUkrainian} /> },
      'code pen': { backgroundColor: "#242221", color: "#fff", title: "CodePen", content: <CodePenModalContent isUkrainian={isUkrainian} /> },
      composer: { backgroundColor: "#75594f", color: "#fff", title: "Composer", content: <ComposerModalContent isUkrainian={isUkrainian} /> },
      confluence: { backgroundColor: "#234aad", color: "#fff", title: "Confluence", content: <ConfluenceModalContent isUkrainian={isUkrainian} /> },
      couchdb: { backgroundColor: "#cf2138", color: "#fff", title: "CouchDB", content: <CouchDBModalContent isUkrainian={isUkrainian} /> },
      datagrip: { backgroundColor: "#210fa6", color: "#fff", title: "DataGrip", content: <DataGripModalContent isUkrainian={isUkrainian} /> },
      dataspell: { backgroundColor: "#210fa6", color: "#fff", title: "DataSpell", content: <DataSpellModalContent isUkrainian={isUkrainian} /> },
      dbeaver: { backgroundColor: "#454357", color: "#fff", title: "DBeaver", content: <DBeaverModalContent isUkrainian={isUkrainian} /> },
      deno: { backgroundColor: "#1e1e21", color: "#fff", title: "Deno", content: <DenoModalContent isUkrainian={isUkrainian} /> },
      docker: { backgroundColor: "#177fd4", color: "#000", title: "Docker", content: <DockerModalContent isUkrainian={isUkrainian} /> },
      doctrine: { backgroundColor: "#e89433", color: "#000", title: "Doctrine", content: <DoctrineModalContent isUkrainian={isUkrainian} /> },
      drupal: { backgroundColor: "#1488e0", color: "#000", title: "Drupal", content: <DrupalModalContent isUkrainian={isUkrainian} /> },
      'eclipse ide': { backgroundColor: "#272b2e", color: "#fff", title: "Eclipse IDE", content: <EclipseModalContent isUkrainian={isUkrainian} /> },
      'elastic search': { backgroundColor: "#355975", color: "#fff", title: "Elastic Search", content: <ElasticsearchModalContent isUkrainian={isUkrainian} /> },
      eslint: { backgroundColor: "#6737ab", color: "#fff", title: "ESLint", content: <ESLintModalContent isUkrainian={isUkrainian} /> },
      figma: { backgroundColor: "#d1155a", color: "#fff", title: "Figma", content: <FigmaModalContent isUkrainian={isUkrainian} /> },
      filezilla: { backgroundColor: "#ba1a1a", color: "#000", title: "FileZilla", content: <FileZillaModalContent isUkrainian={isUkrainian} /> },
      flutter: { backgroundColor: "#19a3d1", color: "#000", title: "Flutter", content: <FlutterModalContent isUkrainian={isUkrainian} /> },
      gatsby: { backgroundColor: "#5920c9", color: "#fff", title: "Gatsby", content: <GatsbyModalContent isUkrainian={isUkrainian} /> },
      gcc: { backgroundColor: "#f0dbc9", color: "#333", title: "GCC", content: <GCCModalContent isUkrainian={isUkrainian} /> },
      gentoo: { backgroundColor: "#c5b4ed", color: "#333", title: "Gentoo", content: <GentooModalContent isUkrainian={isUkrainian} /> },
      gimp: { backgroundColor: "#74707d", color: "#000", title: "GIMP", content: <GimpModalContent isUkrainian={isUkrainian} /> },
      git: { backgroundColor: "#d66e2d", color: "#000", title: "Git", content: <GitModalContent isUkrainian={isUkrainian} /> },
      gitbook: { backgroundColor: "#21afde", color: "#fff", title: "GitBook", content: <GitBookModalContent isUkrainian={isUkrainian} /> },
      'git hub': { backgroundColor: "black", color: "#fff", title: "GitHub", content: <GitHubModalContent isUkrainian={isUkrainian} /> },
      gitlab: { backgroundColor: "#f56c0a", color: "#fff", title: "GitLab", content: <GitLabModalContent isUkrainian={isUkrainian} /> },
      gitter: { backgroundColor: "#f942ff", color: "#000", title: "Gitter", content: <GitterModalContent isUkrainian={isUkrainian} /> },
      'godot engine': { backgroundColor: "#3775b8", color: "#fff", title: "Godot Engine", content: <GodotEngineModalContent isUkrainian={isUkrainian} /> },
      goland: { backgroundColor: "#1971ff", color: "#fff", title: "GoLand", content: <GoLandModalContent isUkrainian={isUkrainian} /> },
      gradle: { backgroundColor: "#516343", color: "#fff", title: "Gradle", content: <GradleModalContent isUkrainian={isUkrainian} /> },
      grafana: { backgroundColor: "#e68805", color: "#333", title: "Grafana", content: <GrafanaModalContent isUkrainian={isUkrainian} /> },
      grails: { backgroundColor: "#d1a584", color: "#333", title: "Grails", content: <GrailsModalContent isUkrainian={isUkrainian} /> },
      handlebars: { backgroundColor: "#d46e22", color: "#fff", title: "Handlebars", content: <HandlebarsModalContent isUkrainian={isUkrainian} /> },
      hardhat: { backgroundColor: "#f0d611", color: "#333", title: "Hardhat", content: <HardhatModalContent isUkrainian={isUkrainian} /> },
      homebrew: { backgroundColor: "#e89f17", color: "#333", title: "Homebrew", content: <HomebrewModalContent isUkrainian={isUkrainian} /> },
      ifttt: { backgroundColor: "#7cd446", color: "#333", title: "IFTTT", content: <IFTTTModalContent isUkrainian={isUkrainian} /> },
      influxdb: { backgroundColor: "#213fad", color: "#fff", title: "InfluxDB", content: <InfluxDBModalContent isUkrainian={isUkrainian} /> },
      inkscape: { backgroundColor: "#2a2c33", color: "#fff", title: "Inkscape", content: <InkscapeModalContent isUkrainian={isUkrainian} /> },
      'intellij idea': { backgroundColor: "#2e4494", color: "#fff", title: "IntelliJ IDEA", content: <IntelliJIDEAModalContent isUkrainian={isUkrainian} /> },
      ionic: { backgroundColor: "#2b7ced", color: "#fff", title: "Ionic", content: <IonicModalContent isUkrainian={isUkrainian} /> },
      jekyll: { backgroundColor: "#e6413c", color: "#000", title: "Jekyll", content: <JekyllModalContent isUkrainian={isUkrainian} /> },
      jenkins: { backgroundColor: "#e6413c", color: "#fff", title: "Jenkins", content: <JenkinsModalContent isUkrainian={isUkrainian} /> },
      jetbrains: { backgroundColor: "#423534", color: "#fff", title: "JetBrains", content: <JetBrainsModalContent isUkrainian={isUkrainian} /> },
      jira: { backgroundColor: "#46a2d4", color: "#fff", title: "Jira", content: <JiraModalContent isUkrainian={isUkrainian} /> },
      json: { backgroundColor: "#7c8a91", color: "#fff", title: "JSON", content: <JsonModalContent isUkrainian={isUkrainian} /> },
      jupyter: { backgroundColor: "#d68747", color: "#333", title: "Jupyter", content: <JupyterModalContent isUkrainian={isUkrainian} /> },
      kaggle: { backgroundColor: "#14d5f7", color: "#333", title: "Kaggle", content: <KaggleModalContent isUkrainian={isUkrainian} /> },
      keras: { backgroundColor: "#d92f29", color: "#fff", title: "Keras", content: <KerasModalContent isUkrainian={isUkrainian} /> },
      kubernetes: { backgroundColor: "#4c95d9", color: "#fff", title: "Kubernetes", content: <KubernetesModalContent isUkrainian={isUkrainian} /> },
      linkedin: { backgroundColor: "#4c95d9", color: "#fff", title: "LinkedIn", content: <LinkedInModalContent isUkrainian={isUkrainian} /> },
      llvm: { backgroundColor: "#202f3d", color: "#fff", title: "LLVM", content: <LLVMModalContent isUkrainian={isUkrainian} /> },
      'autodesk maya': { backgroundColor: "#3fba54", color: "#333", title: "Autodesk Maya", content: <AutodeskMayaModalContent isUkrainian={isUkrainian} /> },
      mongodb: { backgroundColor: "#29e348", color: "#333", title: "MongoDB", content: <MongoDBModalContent isUkrainian={isUkrainian} /> },
      moodle: { backgroundColor: "#c98b2c", color: "#fff", title: "Moodle", content: <MoodleModalContent isUkrainian={isUkrainian} /> },
      mysql: { backgroundColor: "#3189e0", color: "#fff", title: "MySQL", content: <MySQLModalContent isUkrainian={isUkrainian} /> },
      nano: { backgroundColor: "#4acf8c", color: "#fff", title: "Nano", content: <NanoModalContent isUkrainian={isUkrainian} /> },
      'node.js': { backgroundColor: "#1cc219", color: "#333", title: "Node.Js", content: <NodeJsModalContent isUkrainian={isUkrainian} /> },
      phpstorm: { backgroundColor: "#9332e3", color: "#fff", title: "PhpStorm", content: <PhpStormModalContent isUkrainian={isUkrainian} /> },
      postman: { backgroundColor: "#e68020", color: "#000", title: "Postman", content: <PostmanModalContent isUkrainian={isUkrainian} /> },
      rancher: { backgroundColor: "#109be6", color: "#000", title: "Rancher", content: <RancherModalContent isUkrainian={isUkrainian} /> },
      trello: { backgroundColor: "#109be6", color: "#000", title: "Trello", content: <TrelloModalContent isUkrainian={isUkrainian} /> },
      unity: { backgroundColor: "#1d2021", color: "#fff", title: "Unity", content: <UnityModalContent isUkrainian={isUkrainian} /> },
      'unreal engine': { backgroundColor: "#1d2021", color: "#fff", title: "Unreal Engine", content: <UnrealEngineModalContent isUkrainian={isUkrainian} /> },
      'visual studio': { backgroundColor: "#8a2be3", color: "#000", title: "Visual Studio", content: <VisualStudioModalContent isUkrainian={isUkrainian} /> },
      'visual studio code': { backgroundColor: "#2b9ce3", color: "#000", title: "Visual Studio Code", content: <VSCodeModalContent isUkrainian={isUkrainian} /> },
      'vite.js': { backgroundColor: "#d391eb", color: "#000", title: "Vite.Js", content: <ViteModalContent isUkrainian={isUkrainian} /> },
      webpack: { backgroundColor: "#a2ebf5", color: "#000", title: "Webpack", content: <WebpackModalContent isUkrainian={isUkrainian} /> },
      webstorm: { backgroundColor: "#32b8c9", color: "#000", title: "WebStorm", content: <WebStormModalContent isUkrainian={isUkrainian} /> },
      wordpress: { backgroundColor: "#718285", color: "#000", title: "WordPress", content: <WordPressModalContent isUkrainian={isUkrainian} /> },
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
