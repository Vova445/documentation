import React from "react";

const SectionFive = ({
  isUkrainian,
  renderLibraries,
  librariesData,
  itemsPerPage,
  handleLibraryPageChange,
  currentLibraryPage,
}) => {
  return (
    <section className="section-six">
      <h2 className="section-title">{isUkrainian ? 'Бібліотеки' : 'Libraries'}</h2>
      <div className="programming-libraries-container">{renderLibraries()}</div>
      <div className="pagination-controls">
        {Array.from({ length: Math.ceil(librariesData.length / itemsPerPage) }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handleLibraryPageChange(page)}
            className={currentLibraryPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SectionFive;
