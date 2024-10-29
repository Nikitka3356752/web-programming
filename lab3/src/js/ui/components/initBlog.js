import blogPosts from "../../mockData/blogData.js";
import { blogTemplate } from "../templates/blogTemplate.js";

const initBlog = (blogNode) => {
  blogNode.insertAdjacentHTML("beforeend", blogTemplate(blogPosts));
};

export default initBlog;
