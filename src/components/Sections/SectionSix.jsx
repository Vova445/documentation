import React from "react";

const SectionSix = ({
  isUkrainian,
  renderResources,
  resourcesData,
  itemsPerPage,
  handleResourcePageChange,
  currentResourcePage,
}) => {
  return (
    <section className="section-six">
      <h2 className="section-six-title">{isUkrainian ? 'Ресурси' : 'Resources'}</h2>
      <div className="programming-resources-container">{renderResources()}</div>
      <div className="pagination-controls">
        {Array.from({ length: Math.ceil(resourcesData.length / itemsPerPage) }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handleResourcePageChange(page)}
            className={currentResourcePage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SectionSix;
