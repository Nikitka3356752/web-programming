export const footerTemplate = (data) => {
  const { title, button, src, address, rights, links, contactInfo } = data;

  // Генерация ссылок для главных разделов
  const mainLinksTemplate = links.mainLinks.map(link => `
      <li><a href="${link.url}" class="footer-column__link">${link.text}</a></li>
  `).join("");

  // Генерация ссылок для компании
  const companyLinksTemplate = links.companyLinks.map(link => `
      <li><a href="${link.url}" class="footer-column__link">${link.text}</a></li>
  `).join("");

  // Шаблон футера
  const template = `
      <div class="cta-footer">
        <h1 class="cta-title">
          ${title}
        </h1>
        <a href="${button.link}">
          <button class="cta-button">
            ${button.text}
          </button>
        </a>
      </div>
      <div class="footer-grid">
        <div class="footer-column">
          <img class="footer-logo" src="${src}" alt="Логотип"/>
          <p class="footer-column__text">${address}</p>
          <p class="footer-column__text">${rights}</p>
        </div>
        <div class="footer-column">
          <h3 class="footer-column__title">Полезные ссылки</h3>
          <ul>
            ${mainLinksTemplate}
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-column__title">Компания</h3>
          <ul>
            ${companyLinksTemplate}
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-column__title">Свяжитесь с нами</h3>
          <p class="footer-column__text">${address}</p>
          <p class="footer-column__text">${contactInfo.phoneNumber}</p>
          <p class="footer-column__text">${contactInfo.email}</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Все права защищены</p>
      </div>
  `;

  return template;
};
