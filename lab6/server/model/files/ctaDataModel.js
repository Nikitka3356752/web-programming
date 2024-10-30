const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(
    __dirname,
    "..", 
    "..", 
    "db",
    "files",
    "ctaData.json");

const getCtaDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    
    return JSON.parse(file);
  } catch (error) {
    console.log(error);
    throw new Error("Не удалось прочитать данные CTA.");
  }
};

const postCtaDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    console.log(error);
    throw new Error("Не удалось записать данные CTA.");
  }
};

module.exports = { getCtaDataModel, postCtaDataModel };
