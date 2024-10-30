const { isObjectHasProps, isArrayHasLength } = require("./utils/validators");

const isFooterDataValid = (data) => {
  // проверяем наличие обязательных полей
  isObjectHasProps(data, ["address", "phone", "email", "socialLinks"]);

  // проверяем, что socialLinks - это массив и не пустой
  const arrayLength = isArrayHasLength(data.socialLinks);

  if (!arrayLength)
    throw new Error("socialLinks должен быть массивом с хотя бы одним элементом");

  // проверяем каждый объект в массиве socialLinks
  data.socialLinks.forEach((obj) => isObjectHasProps(obj, ["name", "link"]));
};

module.exports = isFooterDataValid;
