const { isObjectHasProps } = require("./utils/validators");

const isCtaDataValid = (data) => {
  // проверяем наличие обязательных полей
  isObjectHasProps(data, ["title", "buttonText", "link"]);
};

module.exports = isCtaDataValid;
