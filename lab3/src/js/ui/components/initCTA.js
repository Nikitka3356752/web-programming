import ctaData from "../../mockData/ctaData.js";
import { ctaTemplate } from "../templates/ctaTemplate.js";

const initCta = (ctaNode) => {
  ctaNode.insertAdjacentHTML("beforeend", ctaTemplate(ctaData));
};

export default initCta;
