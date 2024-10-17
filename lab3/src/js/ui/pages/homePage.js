import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initWomanVr from "./../components/initWomanVr.js";
import initCta from "../components/initCTA.js";
import renderBlog from "../components/initBlog.js"; // Изменено
import initFooter from "../components/initFooter.js";

const createHomePageTemplate = (rootNode) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section woman_vr"></section>
    <section class="section cta"></section>
    <section class="section blog"></section>
    <section class="section footer"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);
  
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  const womanVrNode = rootNode.querySelector(".woman_vr");
  initWomanVr(womanVrNode);

  const ctaNode = rootNode.querySelector(".cta"); 
  initCta(ctaNode);

  const blogNode = rootNode.querySelector(".blog"); 
  renderBlog(blogNode); // Изменено

  const footerNode = rootNode.querySelector(".footer"); 
  initFooter(footerNode);

  initBurger(headerNode);
};

export default homePage;
