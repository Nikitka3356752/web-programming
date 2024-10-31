const { isObjectHasProps } = require("./utils/validators");

const isWomanVrDataValid = (data) => {
  // Проверка наличия обязательных полей в data
  isObjectHasProps(data, ["altText", "buttonText", "title", "description", "imgSrc"]);
};

module.exports = isWomanVrDataValid;
