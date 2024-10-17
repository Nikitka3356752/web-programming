import ctaData from '../mockData/ctaData';

const CTA = () => {
  return (
    <div className="container__cta">
      <div>
        <a href={ctaData.linkHref} className="cta-start__link">{ctaData.linkText}</a>
        <h3 className="cta-start__title">{ctaData.title}</h3>
      </div>
      <button className="cta__button">{ctaData.buttonText}</button>
    </div>
  );
};

export default CTA;
