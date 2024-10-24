const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
  // проверяем, что данные - это массив
  const arrayLength = isArrayHasLength(data);

  if (!arrayLength)
    throw new Error("Данные блога не являются массивом или массив пуст");

  // проверяем каждый объект в массиве на обязательные поля
  data.forEach((obj) => isObjectHasProps(obj, ["date", "title", "imgSrc", "link"]));
};

module.exports = isBlogDataValid;
