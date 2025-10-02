import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

export const BlogDetail = () => {
  const { title } = useParams<{ title: string }>();
  const decodedTitle = decodeURIComponent(title || '');
  const selectedBlog = blogData.find((item) => item.title === decodedTitle);

  if (!selectedBlog) {
    return (
      <main id="main-section" className="scrollBox">
        <div className="content-section">
          <h1>Blog not found</h1>
          <Link to="/blog">Back to blogs</Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main-section" className="scrollBox">
      <div id="blog-banner-section">
        <div className="banner-section">
          <img src={selectedBlog.images[0]} alt="banner" loading="lazy" />
        </div>
        <span>{selectedBlog.releaseDate}</span>
        <h1>{selectedBlog.title}</h1>
      </div>
      <div className="content-section">
        <div className="lef-thand-side">
          <div id="blog-p-image">
            <section className="blog-img-section">
              {selectedBlog.images.map((image, index) => (
                <img key={index} src={image} alt="" loading="lazy" />
              ))}
            </section>
          </div>
        </div>
      </div>
      <hr />
      <div className="relative-blog">
        <h2>Related Posts</h2>
        <div className="inner-blog" id="inner">
          {blogData
            .filter((item) => item.id !== selectedBlog.id)
            .slice(0, 6)
            .map((item) => (
              <div key={item.id} className="blog">
                <Link to={`/blog/${encodeURIComponent(item.title)}`} className="img">
                  <img
                    src={item.images[0]}
                    alt=""
                    width="280px"
                    height="350px"
                    loading="lazy"
                  />
                </Link>
                <Link to={`/blog/${encodeURIComponent(item.title)}`} className="content">
                  <span>{item.releaseDate}</span>
                  <h2>{item.title}</h2>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};
