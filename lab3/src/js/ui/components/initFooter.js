import { footerTemplate } from "../templates/footerTemplate.js";

const initFooter = (footerNode) => {
  footerNode.insertAdjacentHTML("beforeend", footerTemplate());
};

export default initFooter;
