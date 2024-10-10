import womanVrTopData from "../../mockData/womanVrData.js";
import { womanVrTemplate } from "../templates/womanVrTemplate.js";

const initWomanVrSection = (womanVrNode) => {
    womanVrNode.insertAdjacentHTML(
    "beforeend",
    womanVrTemplate(womanVrTopData)
  );
};

export default initWomanVrSection;