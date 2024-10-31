const { isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
  // Проверка обязательных полей (без socialLinks)
  isObjectHasProps(data, ["address", "phone", "email"]);
};

module.exports = isFooterDataValid;
