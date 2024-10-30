import blogData from '../mockData/blogData';

const Blog = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-title">Последние статьи</h2>
      <div className="blog-grid">
        {blogData.map((post, index) => (
          <div key={index} className={post.isLarge ? 'blog-card-large' : 'blog-card'}>
            <img
              src={post.imgSrc}
              alt={post.title}
              className={post.isLarge ? 'blog-img-large' : 'blog-img'}
            />
            <div className="blog-content">
              <p className="blog-date">{post.date}</p>
              <h3 className="blog-post-title">{post.title}</h3>
              <a href={post.link} className="blog-link">Читать дальше</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
