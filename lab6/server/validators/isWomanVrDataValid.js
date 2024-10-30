const { isObjectHasProps } = require("./utils/validators");

const isWomanVrDataValid = (data) => {
  // проверяем наличие обязательных полей
  isObjectHasProps(data, ["title", "description", "imgSrc"]);
  
  const { image, button } = data;
  
  // проверяем объект image на наличие полей и соответствие типу "объект"
  isObjectHasProps(image, ["src", "alt"]);

  // проверяем объект button на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["href", "title"]);
};

module.exports = isWomanVrDataValid;
