export const ctaTemplate = ({ linkHref, linkText, title, buttonText }) => {
  const template = `
    <section class="container__cta">
      <div class="cta-text">
        <a href="${linkHref}" class="cta-start__link">${linkText}</a>
        <h3 class="cta-start__title">
          ${title}
        </h3>
      </div>
      <a href="#">
        <button class="cta__button">${buttonText}</button>
      </a>
    </section>
  `;
  return template;
};
