const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "footerData.json");

const getFooterDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    console.log(error);
    throw new Error("Не удалось прочитать данные из файла");
  }
};

const postFooterDataModel = (data) => {
  try {
    writeFileSync(filePath, JSON.stringify(data));
  } catch (error) {
    console.log(error);
    throw new Error("Не удалось записать данные в файл");
  }
};

module.exports = { getFooterDataModel, postFooterDataModel };
