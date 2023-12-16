import React from "react";
import "./languageModal.css";
import HtmlModalContent from "./Languages/HTML";
import CssModalContent from "./Languages/CSS";
import PythonModalContent from "./Languages/Python";
import JavaScriptModalContent from "./Languages/JS";
import JavaModalContent from "./Languages/Java";
import CModalContent from "./Languages/C";
import CppModalContent from "./Languages/Cpp";
import CSharpModalContent from "./Languages/cs";
import SwiftModalContent from "./Languages/Swift";
import TypeScriptModalContent from "./Languages/TypeScript";
import PhpModalContent from "./Languages/Php";
import RubyModalContent from "./Languages/Ruby";
import GoModalContent from "./Languages/Go";
import RustModalContent from "./Languages/Rust";
import ObjectiveCModalContent from "./Languages/ObjectiveC";
import KotlinModalContent from "./Languages/Kotlin";
import DartModalContent from "./Languages/Dart";
import ScalaModalContent from "./Languages/Scala";
import HaskellModalContent from "./Languages/Haskell";
import PerlModalContent from "./Languages/Perl";
import LuaModalContent from "./Languages/Lua";
import ShellModalContent from "./Languages/Shell";
import MATLABModalContent from "./Languages/MATLAB";
import RModalContent from "./Languages/R";
import GroovyModalContent from "./Languages/Groovy";
import SQLModalContent from "./Languages/SQL";
import AdaModalContent from "./Languages/Ada";
import FortranModalContent from "./Languages/Fortran";
import COBOLModalContent from "./Languages/COBOL";
import VBScriptModalContent from "./Languages/VBScript";
import PowerShellModalContent from "./Languages/PowerShell";
import ClojureModalContent from "./Languages/Clojure";
import ErlangModalContent from "./Languages/Erlang";
import FSharpModalContent from "./Languages/FSharp";
import OCamlModalContent from "./Languages/OCaml";
import SchemeModalContent from "./Languages/Scheme";
import SmalltalkModalContent from "./Languages/Smalltalk";
import PrologModalContent from "./Languages/Prolog";
import RacketModalContent from "./Languages/Racket";
import ElixirModalContent from "./Languages/Elixir";
import JuliaModalContent from "./Languages/Julia";
import HackModalContent from "./Languages/Hack";
import ObjectiveJModalContent from "./Languages/ObjectiveJ";
import ActionScriptModalContent from "./Languages/ActionScript";
import DModalContent from "./Languages/D";
import TCLModalContent from "./Languages/Tcl";
import KSHModalContent from "./Languages/KSH";
import BashModalContent from "./Languages/Bash";
import JModalContent from "./Languages/J";
import AwkModalContent from "./Languages/Awk";
import ValaModalContent from "./Languages/Vala";
import HaxeModalContent from "./Languages/Haxe";
import VerilogModalContent from "./Languages/Verilog";
import BasicModalContent from "./Languages/Basic";
import ABAPModalContent from "./Languages/ABAP";
import OpenCLModalContent from "./Languages/OpenCL";
import HCLModalContent from "./Languages/HCL";
import ApexModalContent from "./Languages/Apex";
import BatchModalContent from "./Languages/Batch";
import LispModalContent from "./Languages/Lisp";
import PascalModalContent from "./Languages/Pascal";
import ForthModalContent from "./Languages/Forth";
import RexxModalContent from "./Languages/Rexx";
import IdlModalContent from "./Languages/Idl";
import PostScriptModalContent from "./Languages/PostScript";
import EiffelModalContent from "./Languages/Eiffel";
import Modula2ModalContent from "./Languages/Modula2";
import PLIModalContent from "./Languages/PLI";
import COOLModalContent from "./Languages/Cool";
import MUMPSModalContent from "./Languages/MUMPS";
import LogoModalContent from "./Languages/Logo";
import ScratchModalContent from "./Languages/Scratch";
import SASModalContent from "./Languages/SAS";
import FoxProModalContent from "./Languages/FoxPro";
import LabVIEWModalContent from "./Languages/LabVIEW";
import FantomModalContent from "./Languages/Fantom";
import LadderLogicModalContent from "./Languages/LadderLogic";
import RedModalContent from "./Languages/Red";
import FortranIIModalContent from "./Languages/FortranII";


const LanguageModal = ({ language, closeModal, isUkrainian }) => {
  const handleGoOut = () => {
    console.log(`Go out from ${language}`);
    closeModal();
  };

  
  const getModalContent = () => {
    const languageLower = language.toLowerCase();
  
    const languages = {
      html: { backgroundColor: "#e34c26", color: "black", title: "HTML", content: <HtmlModalContent isUkrainian={isUkrainian} /> },
      css: { backgroundColor: "#3498db", color: "white", title: "CSS", content: <CssModalContent isUkrainian={isUkrainian} /> },
      python: { backgroundColor: "#3776ab", color: "white", title: "Python", content: <PythonModalContent isUkrainian={isUkrainian} /> },
      javascript: { backgroundColor: "#f0db4f", color: "black", title: "JavaScript", content: <JavaScriptModalContent isUkrainian={isUkrainian} /> },
      java: { backgroundColor: "#5382a1", color: "#fff", title: "Java", content: <JavaModalContent isUkrainian={isUkrainian} /> },
      c: { backgroundColor: "#333333", color: "#fff", title: "C", content: <CModalContent isUkrainian={isUkrainian} /> },
      "c++": { backgroundColor: "#6495ED", color: "#fff", title: "C++", content: <CppModalContent isUkrainian={isUkrainian} /> },
      "c#": { backgroundColor: "#4CAF50", color: "#fff", title: "C#", content: <CSharpModalContent isUkrainian={isUkrainian} /> },
      swift: { backgroundColor: "#FFAC45", color: "#fff", title: "Swift", content: <SwiftModalContent isUkrainian={isUkrainian} /> },
      typescript: { backgroundColor: "#3178C6", color: "#fff", title: "TypeScript", content: <TypeScriptModalContent isUkrainian={isUkrainian} /> },
      php: { backgroundColor: "#8892BF", color: "#fff", title: "PHP", content: <PhpModalContent isUkrainian={isUkrainian} /> },
      ruby: { backgroundColor: "#A31432", color: "#fff", title: "Ruby", content: <RubyModalContent isUkrainian={isUkrainian} /> },
      go: { backgroundColor: "#6AD7E5", color: "#000", title: "Go", content: <GoModalContent isUkrainian={isUkrainian} /> },
      rust: { backgroundColor: "#E57373", color: "#000", title: "Rust", content: <RustModalContent isUkrainian={isUkrainian} /> },
      "objective-c": { backgroundColor: "#ADD8E6", color: "#000", title: "Objective-C", content: <ObjectiveCModalContent isUkrainian={isUkrainian} /> },
      kotlin: { backgroundColor: "#7f7f7f", color: "#fff", title: "Kotlin", content: <KotlinModalContent isUkrainian={isUkrainian} /> },
      dart: { backgroundColor: "#0175C2", color: "#fff", title: "Dart", content: <DartModalContent isUkrainian={isUkrainian} /> },
      scala: { backgroundColor: "#808080", color: "#fff", title: "Scala", content: <ScalaModalContent isUkrainian={isUkrainian} /> },
      haskell: { backgroundColor: "#006400", color: "#fff", title: "Haskell", content: <HaskellModalContent isUkrainian={isUkrainian} /> },
      perl: { backgroundColor: "#a7929b", color: "#fff", title: "Perl", content: <PerlModalContent isUkrainian={isUkrainian} /> },
      lua: { backgroundColor: "#2C3E50", color: "#fff", title: "Lua", content: <LuaModalContent isUkrainian={isUkrainian} /> },
      shell: { backgroundColor: "#333", color: "#fff", title: "Shell", content: <ShellModalContent isUkrainian={isUkrainian} /> },
      matlab: { backgroundColor: "#000000", color: "#fff", title: "MATLAB", content: <MATLABModalContent isUkrainian={isUkrainian} /> },
      r: { backgroundColor: "#276DC3", color: "#fff", title: "R", content: <RModalContent isUkrainian={isUkrainian} /> },
      groovy: { backgroundColor: "#4298B8", color: "#fff", title: "Groovy", content: <GroovyModalContent isUkrainian={isUkrainian} /> },
      sql: { backgroundColor: "#FFA933", color: "#000", title: "SQL", content: <SQLModalContent isUkrainian={isUkrainian} /> },
      ada: { backgroundColor: "#02f88c", color: "#000", title: "Ada", content: <AdaModalContent isUkrainian={isUkrainian} /> },
      fortran: { backgroundColor: "#4d41b1", color: "#fff", title: "Fortran", content: <FortranModalContent isUkrainian={isUkrainian} /> },
      cobol: { backgroundColor: "#394b9f", color: "#fff", title: "COBOL", content: <COBOLModalContent isUkrainian={isUkrainian} /> },
      vbscript: { backgroundColor: "#3F3F3F", color: "#fff", title: "VBScript", content: <VBScriptModalContent isUkrainian={isUkrainian} /> },
      powershell: { backgroundColor: "#808080", color: "#fff", title: "PowerShell", content: <PowerShellModalContent isUkrainian={isUkrainian} /> },
      clojure: { backgroundColor: "#006666", color: "#fff", title: "Clojure", content: <ClojureModalContent isUkrainian={isUkrainian} /> },
      erlang: { backgroundColor: "#800080", color: "#fff", title: "Erlang", content: <ErlangModalContent isUkrainian={isUkrainian} /> },
      "f#": { backgroundColor: "#666666", color: "#fff", title: "F#", content: <FSharpModalContent isUkrainian={isUkrainian} /> },
      ocaml: { backgroundColor: "#FF8C00", color: "#000", title: "OCaml", content: <OCamlModalContent isUkrainian={isUkrainian} /> },
      scheme: { backgroundColor: "#008000", color: "#fff", title: "Scheme", content: <SchemeModalContent isUkrainian={isUkrainian} /> },
      smalltalk: { backgroundColor: "#2980B9", color: "#fff", title: "Smalltalk", content: <SmalltalkModalContent isUkrainian={isUkrainian} /> },
      prolog: { backgroundColor: "#E0E0E0", color: "#000", title: "Prolog", content: <PrologModalContent isUkrainian={isUkrainian} /> },
      racket: { backgroundColor: "#1E90FF", color: "#000", title: "Racket", content: <RacketModalContent isUkrainian={isUkrainian} /> },
      elixir: { backgroundColor: "#FAF0D1", color: "#000", title: "Elixir", content: <ElixirModalContent isUkrainian={isUkrainian} /> },
      julia: { backgroundColor: "#008000", color: "#fff", title: "Julia", content: <JuliaModalContent isUkrainian={isUkrainian} /> },
      hack: { backgroundColor: "#ADD8E6", color: "#000", title: "Hack", content: <HackModalContent isUkrainian={isUkrainian} /> },
      'objective-j': { backgroundColor: "#0000CD", color: "#fff", title: "Objective-J", content: <ObjectiveJModalContent isUkrainian={isUkrainian} /> },
      actionscript: { backgroundColor: "#8A2BE2", color: "#fff", title: "ActionScript", content: <ActionScriptModalContent isUkrainian={isUkrainian} /> },
      d: { backgroundColor: "#000000", color: "#fff", title: "D", content: <DModalContent isUkrainian={isUkrainian} /> },
      tcl: { backgroundColor: "#FFC125", color: "#333", title: "Tcl", content: <TCLModalContent isUkrainian={isUkrainian} /> },
      "korn shell": { backgroundColor: "#4682B4", color: "#000", title: "Korn Shell", content: <KSHModalContent isUkrainian={isUkrainian} /> },
      bash: { backgroundColor: "#45a049", color: "#333", title: "Bash", content: <BashModalContent isUkrainian={isUkrainian} /> },
      j: { backgroundColor: "#e6b800", color: "#333", title: "J", content: <JModalContent isUkrainian={isUkrainian} /> },
      awk: { backgroundColor: "#CCA300", color: "#333", title: "Awk", content: <AwkModalContent isUkrainian={isUkrainian} /> },
      vala: { backgroundColor: "#692BCC", color: "#fff", title: "Vala", content: <ValaModalContent isUkrainian={isUkrainian} /> },
      haxe: { backgroundColor: "#FF8C00", color: "#000", title: "Haxe", content: <HaxeModalContent isUkrainian={isUkrainian} /> },
      verilog: { backgroundColor: "#9932CC", color: "#000", title: "Verilog", content: <VerilogModalContent isUkrainian={isUkrainian} /> },
      basic: { backgroundColor: "#8B4513", color: "#fff", title: "Basic", content: <BasicModalContent isUkrainian={isUkrainian} /> },
      abap: { backgroundColor: "#990000", color: "#fff", title: "ABAP", content: <ABAPModalContent isUkrainian={isUkrainian} /> },
      opencl: { backgroundColor: "#006400", color: "#fff", title: "OpenCL", content: <OpenCLModalContent isUkrainian={isUkrainian} /> },
      hcl: { backgroundColor: "#ffccff", color: "#333", title: "HCL", content: <HCLModalContent isUkrainian={isUkrainian} /> },
      apex: { backgroundColor: "#00A1E0", color: "#333", title: "Apex", content: <ApexModalContent isUkrainian={isUkrainian} /> },
      batch: { backgroundColor: "#F4D03F", color: "#333", title: "Batch", content: <BatchModalContent isUkrainian={isUkrainian} /> },
      lisp: { backgroundColor: "#2e294e", color: "#fff", title: "Lisp", content: <LispModalContent isUkrainian={isUkrainian} /> },
      pascal: { backgroundColor: "#f5f5f5", color: "#000", title: "Pascal", content: <PascalModalContent isUkrainian={isUkrainian} /> },
      forth: { backgroundColor: "#5E7F5E", color: "#fff", title: "Forth", content: <ForthModalContent isUkrainian={isUkrainian} /> },
      rexx: { backgroundColor: "#FFD700", color: "#333", title: "Rexx", content: <RexxModalContent isUkrainian={isUkrainian} /> },
      idl: { backgroundColor: "#e34c26", color: "#fff", title: "IDL", content: <IdlModalContent isUkrainian={isUkrainian} /> },
      postscript: { backgroundColor: "#4d4d4d", color: "#fff", title: "PostScript", content: <PostScriptModalContent isUkrainian={isUkrainian} /> },
      eiffel: { backgroundColor: "#1e4d2b", color: "#fff", title: "Eiffel", content: <EiffelModalContent isUkrainian={isUkrainian} /> },
      "modula-2": { backgroundColor: "#4e79a7", color: "#fff", title: "Modula-2", content: <Modula2ModalContent isUkrainian={isUkrainian} /> },
      "pl/i": { backgroundColor: "#9966cc", color: "#333", title: "PL/I", content: <PLIModalContent isUkrainian={isUkrainian} /> },
      cool: { backgroundColor: "#00cc99", color: "#333", title: "COOL", content: <COOLModalContent isUkrainian={isUkrainian} /> },
      mumps: { backgroundColor: "#ffcc00", color: "#333", title: "MUMPS", content: <MUMPSModalContent isUkrainian={isUkrainian} /> },
      logo: { backgroundColor: "#ffcc00", color: "#333", title: "Logo", content: <LogoModalContent isUkrainian={isUkrainian} /> },
      scratch: { backgroundColor: "#FFD100", color: "#333", title: "Scratch", content: <ScratchModalContent isUkrainian={isUkrainian} /> },
      sas: { backgroundColor: "#336699", color: "#fff", title: "SAS", content: <SASModalContent isUkrainian={isUkrainian} /> },
      foxpro: { backgroundColor: "#FF6600", color: "#333", title: "FoxPro", content: <FoxProModalContent isUkrainian={isUkrainian} /> },
      labview: { backgroundColor: "#FFE100", color: "#333", title: "LabVIEW", content: <LabVIEWModalContent isUkrainian={isUkrainian} /> },
      fantom: { backgroundColor: "#1F3B5E", color: "#fff", title: "Fantom", content: <FantomModalContent isUkrainian={isUkrainian} /> },
      'ladder logic': { backgroundColor: "#8FB1CC", color: "#333", title: "Ladder Logic", content: <LadderLogicModalContent isUkrainian={isUkrainian} /> },
      red: { backgroundColor: "#FF4500", color: "#333", title: "Red", content: <RedModalContent isUkrainian={isUkrainian} /> },
      'fortran ii': { backgroundColor: "#4d41b1", color: "#fff", title: "FORTRAN II", content: <FortranIIModalContent isUkrainian={isUkrainian} /> },
    };
  
    return languages[languageLower] || {};
  }
  

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
