const isWomanVrDataValid = require("../validators/isWomanVrDataValid");
const { getWomanVrDataModel, postWomanVrDataModel } = require("../model/files/womanVrDataModel");

const getWomanVrData = (req, res, next) => {
  try {
    const data = getWomanVrDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postWomanVrData = (req, res, next) => {
  try {
    const data = req.body;
    console.log("Полученные данные:", data); // Добавляем лог для отладки

    isWomanVrDataValid(data); // Проверяем данные

    postWomanVrDataModel(data); // Записываем данные
    res.status(200).json({
      message: "Данные woman-vr успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getWomanVrData, postWomanVrData };
