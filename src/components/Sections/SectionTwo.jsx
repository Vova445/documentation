import React from "react";

const SectionTwo = ({ isUkrainian, resources, openModal, resourceDescriptions }) => {
  return (
    <section className="section-two">
      <h2 className="section-title">
        {isUkrainian ? 'Корисні ресурси для програмістів' : 'Useful resources for programmers'}
      </h2>
      <ul className="resource-list">
        {resources.map((resource) => (
          <li key={resource.id}>
            <a
              href={resource.link}
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => {
                e.preventDefault();
                openModal(resource.name, resourceDescriptions[resource.name][isUkrainian ? 'uk' : 'en'], resource.link, resource.resourceClass);
              }}
            >
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionTwo;
