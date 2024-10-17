// blogTemplate.js

export const createBlogCard = (date, title, imgSrc, link) => {
    return `
      <div class="blog-card">
        <img src="${imgSrc}" alt="Blog Image" class="blog-img">
        <div class="blog-content">
          <p class="blog-date">${date}</p>
          <h3 class="blog-post-title">${title}</h3>
          <a href="${link}" class="blog-link">Читать полную статью</a>
        </div>
      </div>
    `;
};

export const createBlogCardLarge = (date, title, imgSrc, link) => {
    return `
      <div class="blog-card-large">
        <img src="${imgSrc}" alt="Blog Image" class="blog-img-large">
        <div class="blog-content">
          <p class="blog-date">${date}</p>
          <h3 class="blog-post-title">${title}</h3>
          <a href="${link}" class="blog-link">Читать полную статью</a>
        </div>
      </div>
    `;
};
