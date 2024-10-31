const { isObjectHasProps } = require("./utils/validators");

const isCtaDataValid = (data) => {
  // Убедитесь, что обязательные поля присутствуют, без проверки поля link
  isObjectHasProps(data, ["linkHref", "linkText", "title", "buttonText"]);
};

module.exports = isCtaDataValid;
