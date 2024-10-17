// initBlog.js

import { blogPosts } from '../../mockData/blogData.js';
import { createBlogCard, createBlogCardLarge } from '../templates/blogTemplate.js';

const renderBlog = (blogNode) => {
  blogNode.innerHTML = ''; // Очистка предыдущего контента

  const largePost = blogPosts.find(post => post.isLarge);
  const smallPosts = blogPosts.filter(post => !post.isLarge);

  // Разметка для 3-х колонн
  blogNode.innerHTML = `
    <div class="blog-grid">
        <div class="blog-column-large">
            ${createBlogCardLarge(
                largePost.date,
                largePost.title,
                largePost.imgSrc,
                largePost.link
            )}
        </div>
      
        <div class="blog-column">
            ${createBlogCard(
                smallPosts[0].date,
                smallPosts[0].title,
                smallPosts[0].imgSrc,
                smallPosts[0].link
            )}
            ${createBlogCard(
                smallPosts[1].date,
                smallPosts[1].title,
                smallPosts[1].imgSrc,
                smallPosts[1].link
            )}
        </div>
        <div class="blog-column">
            ${createBlogCard(
            smallPosts[2].date,
            smallPosts[2].title,
            smallPosts[2].imgSrc,
            smallPosts[2].link
            )}
            ${createBlogCard(
            smallPosts[3].date,
            smallPosts[3].title,
            smallPosts[3].imgSrc,
            smallPosts[3].link
            )}
        </div>
    </div>
  `;
};

export default renderBlog;
