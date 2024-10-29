export const blogTemplate = (data) => {
  const { header, mainArticle, articlesMini } = data;
  
  const createMiniArticle = (article) => `
    <div class="blog-card">
      <img src="${article.imgSrc}" alt="Blog Image" class="blog-img">
      <div class="blog-content">
        <p class="blog-date">${article.date}</p>
        <h3 class="blog-post-title">${article.title}</h3>
        <a href="${article.link}" class="blog-link">Читать полную статью</a>
      </div>
    </div>
  `;

  const template = `
    <h1 class="top__header">
      ${header}
    </h1>
    <div class="news">
      <div class="blog-grid">
        
        <!-- Main article column -->
        <div class="blog-column-large">
          <div class="blog-card-large">
            <img src="${mainArticle.imgSrc}" alt="Blog Image" class="blog-img-large">
            <div class="blog-content">
              <p class="blog-date">${mainArticle.date}</p>
              <h3 class="blog-post-title">${mainArticle.title}</h3>
              <a href="${mainArticle.link}" class="blog-link">Читать полную статью</a>
            </div>
          </div>
        </div>

        <!-- Second column with two mini articles -->
        <div class="blog-column">
          ${createMiniArticle(articlesMini[0])}
          ${createMiniArticle(articlesMini[1])}
        </div>

        <!-- Third column with two mini articles -->
        <div class="blog-column">
          ${createMiniArticle(articlesMini[2])}
          ${createMiniArticle(articlesMini[3])}
        </div>

      </div>
    </div>
  `;

  return template;
};
