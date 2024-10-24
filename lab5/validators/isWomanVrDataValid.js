const { isObjectHasProps } = require("./utils/validators");

const isWomanVrDataValid = (data) => {
  // проверяем наличие обязательных полей
  isObjectHasProps(data, ["title", "description", "imgSrc"]);
};

module.exports = isWomanVrDataValid;
