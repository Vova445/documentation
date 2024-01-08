import React, { useState, useEffect, useCallback } from 'react';
import { fetchProgrammingNews } from '../../newsAPI'; 
import LoaderSVG from '../../svg/loading-svgrepo-com.svg';

const SectionSeven = ({ isUkrainian }) => {
  const [programmingNews, setProgrammingNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 592) {
      setItemsPerPage(4);
    } else if (window.innerWidth < 1132) {
      setItemsPerPage(6);
    } else {
      setItemsPerPage(8);
    }
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await fetchProgrammingNews();
        setProgrammingNews(news);
      } catch (error) {
        console.error('Error fetching programming news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const totalPages = Math.ceil(programmingNews.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderNewsItems = () => {
    if (!programmingNews || programmingNews.length === 0) {
      return <p>No news available</p>;
    }
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = programmingNews.slice(startIndex, endIndex);
  
    return currentNews.map((news) => (
      <div key={news.title} className="programming-news-item">
        <h3 className="news-title">{truncateTitle(news.title, 30)}</h3>
        <p className="news-description">
          {truncateDescription(news.description, 100)} 
        </p>
        <p className="news-date">Published on: {news.published_at.toLocaleDateString()}</p>
        <a href={news.url} target="_blank" rel="noopener noreferrer" className="read-more-link">
          {isUkrainian ? 'Читати більше' : 'Read More'}
        </a>
      </div>
    ));
  };

  const truncateTitle = (title, maxLength) => {
    return title && title.length > maxLength
      ? title.substring(0, maxLength) + '...'
      : title || ''; 
  };
  
  const truncateDescription = (description, maxLength) => {
    return description && description.length > maxLength
      ? description.substring(0, maxLength) + '...'
      : description || ''; 
  };
  
  return (
    <>
    <hr />
    <section className={`section-five programming-news ${isUkrainian ? 'ukrainian' : 'english'}`}>
      <h2 className="section-five-title">{isUkrainian ? 'Новини з програмування' : 'Programming News'}</h2>
      {isLoading ? (
        <div className="loader-container">
          <img className="loader" src={LoaderSVG} alt="Loader" />
        </div>
      ) : (
        <div className="programming-news-container">
          {renderNewsItems()}
        </div>
      )}
      {totalPages > 1 && (
        <div className="pagination-container">
          <button
            className="pagination-button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            {'<'}
          </button>
          <span className="pagination-current-page">{currentPage}</span>
          <button
            className="pagination-button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {'>'}
          </button>
        </div>
      )}
    </section>
    </>
  );
};

export default SectionSeven;
