import React from 'react';
import blogData from '../mockData/blogData';

const Blog = () => {
  // Обработка данных в формате blogTemplate
  const header = "Последние статьи";
  const mainArticle = blogData.find((post) => post.isLarge); // Находим главную статью
  const articlesMini = blogData.filter((post) => !post.isLarge); // Остальные статьи

  // Функция создания мини-статьи
  const createMiniArticle = (article, index) => (
    <div key={index} className="blog-card">
      <img src={article.imgSrc} alt={article.title} className="blog-img" />
      <div className="blog-content">
        <p className="blog-date">{article.date}</p>
        <h3 className="blog-post-title">{article.title}</h3>
        <a href={article.link} className="blog-link">Читать полную статью</a>
      </div>
    </div>
  );

  // Разделение статей на колонки
  const columns = articlesMini.reduce((acc, article, index) => {
    const columnIndex = Math.floor(index / 2); // Две статьи на колонку
    if (!acc[columnIndex]) acc[columnIndex] = [];
    acc[columnIndex].push(createMiniArticle(article, index));
    return acc;
  }, []);

  return (
    <section className="blog-section">
      <h1 className="top__header">{header}</h1>
      <div className="news">
        <div className="blog-grid">
          {/* Главная статья */}
          {mainArticle && (
            <div className="blog-column-large">
              <div className="blog-card-large">
                <img
                  src={mainArticle.imgSrc}
                  alt={mainArticle.title}
                  className="blog-img-large"
                />
                <div className="blog-content">
                  <p className="blog-date">{mainArticle.date}</p>
                  <h3 className="blog-post-title">{mainArticle.title}</h3>
                  <a href={mainArticle.link} className="blog-link">
                    Читать полную статью
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Колонки для мини-статей */}
          {columns.map((column, index) => (
            <div key={index} className="blog-column">
              {column}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
