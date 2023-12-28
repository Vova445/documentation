import React from "react";

const SectionThree = ({
  isUkrainian,
  renderLanguages,
  languagesData,
  itemsPerPage,
  handleLanguagePageChange,
  currentLanguagePage,
}) => {
  return (
    <section className="section-three">
      <h2 className="section-title">{isUkrainian ? 'Мови програмування' : 'Programming Languages'}</h2>
      <div className="programming-languages-container">{renderLanguages()}</div>
      <div className="pagination-controls">
        {Array.from({ length: Math.ceil(languagesData.length / itemsPerPage) }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handleLanguagePageChange(page)}
            className={currentLanguagePage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SectionThree;
