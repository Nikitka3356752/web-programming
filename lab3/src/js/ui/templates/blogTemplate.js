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

  // Создаем разметку для мини-статей, группируя их по 2 статьи в колонке
  const columns = articlesMini.reduce((acc, article, index) => {
    const columnIndex = Math.floor(index / 2); // Определяем индекс колонки
    if (!acc[columnIndex]) acc[columnIndex] = []; // Создаем массив для новой колонки
    acc[columnIndex].push(createMiniArticle(article)); // Добавляем статью в колонку
    return acc;
  }, []);

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

        <!-- Columns for mini articles -->
        ${columns
          .map(
            (column) => `
          <div class="blog-column">
            ${column.join("")}
          </div>
        `
          )
          .join("")}

      </div>
    </div>
  `;

  return template;
};
