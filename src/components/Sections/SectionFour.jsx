import React from "react";

const SectionFour = ({
  isUkrainian,
  renderFrameworks,
  frameworksData,
  itemsPerPage,
  handleFrameworkPageChange,
  currentFrameworkPage,
}) => {
  return (
    <section className="section-four">
      <h2 className="section-title">{isUkrainian ? 'Фреймворки' : 'Frameworks'}</h2>
      <div className="programming-frameworks-container">{renderFrameworks()}</div>
      <div className="pagination-controls">
        {Array.from({ length: Math.ceil(frameworksData.length / itemsPerPage) }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handleFrameworkPageChange(page)}
            className={currentFrameworkPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SectionFour;
