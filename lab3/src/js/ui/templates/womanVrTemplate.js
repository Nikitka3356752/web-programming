export const createWomanVrImageTemplate = ({ imageSrc, altText }) => {
    const template = `
      <div class="woman__vr-left">
          <img src="${imageSrc}" alt="${altText}">
      </div>
    `;
    return template;
  };
  
  export const createWomanVrContentTemplate = ({
    buttonText,
    title,
    description,
  }) => {
    const template = `
      <div class="woman__vr-right">
          <a href="#" class="cont1">${buttonText}</a>
          <h2 class="cont2">${title}</h2>
          <p class="cont3">${description}</p>
          <a href="#" class="cont4">${buttonText}</a>
      </div>
    `;
    return template;
  };
  
  export const womanVrTemplate = (womanVrTopData) => {
    const womanVrImageTemplate = createWomanVrImageTemplate(womanVrTopData);
    const womanVrContentTemplate = createWomanVrContentTemplate(womanVrTopData);
  
    const resultTemplate = `
      <section class="section woman__vr">
          ${womanVrImageTemplate}
          ${womanVrContentTemplate}
      </section>
    `;
  
    return resultTemplate;
  };
  