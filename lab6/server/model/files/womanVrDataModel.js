const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "womanVrData.json");

const getWomanVrDataModel = () => {
  try {
    const file = readFileSync(filePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    console.log(error);
    throw new Error("Не удалось прочитать данные Voman-VR.");
  }
};

const postWomanVrDataModel = (data) => {
  try {
    writeFileSync(filePath, data);
  } catch (error) {
    console.log(error);
    throw new Error("Не удалось записать данные Woman-VR.");
  }
};

module.exports = { getWomanVrDataModel, postWomanVrDataModel };
