const isCtaDataValid = require("../validators/isCtaDataValid");

const {
    getCtaDataModel,
    postCtaDataModel 
    } = require("../model/files/ctaDataModel");

const getCtaData = (req, res, next) => {
  try {
    const data = getCtaDataModel(); // логика получения данных
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postCtaData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    isCtaDataValid(data);

    // логика записи данных
    postCtaDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные Cta успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getCtaData, postCtaData };
