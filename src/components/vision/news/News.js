import React, { useState } from 'react';
import './news.styles.scss';

const newsData = [
  ["Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab ducimus est fuga molestiae soluta maiores, iusto amet repudiandae qui dolores animi corrupti sed nisi quo facilis consequuntur error saepe?"],
  ["Dolor sit amet consectetur adipisicing elit. At ab ducimus est fuga molestiae soluta maiores, iusto amet repudiandae qui dolores animi corrupti sed nisi quo facilis consequuntur error saepe?"],
  ["At ab ducimus est fuga molestiae soluta maiores, iusto amet repudiandae qui dolores animi corrupti sed nisi quo facilis consequuntur error saepe?"],
  ["Sit amet consectetur adipisicing elit. At ab ducimus est fuga molestiae soluta maiores, iusto amet repudiandae qui dolores animi corrupti sed nisi quo facilis consequuntur error saepe?"],
  ["Consectetur adipisicing elit. At ab ducimus est fuga molestiae soluta maiores, iusto amet repudiandae qui dolores animi corrupti sed nisi quo facilis consequuntur error saepe?"],
];

const News = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="news-container">
      <h2>Sunday School News</h2>

      <div className="news-content">
        {newsData[currentPage].map((newsItem, index) => (
          <div key={index} className="news-item">
            {newsItem}
          </div>
        ))}
      </div>

      <div className="pagination">
        {newsData.map((_, index) => (
          <button
            key={index}
            className={`pagination-button ${index === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default News;
