import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

export const Blog = () => {
  return (
    <main id="main-section" className="scrollBox">
      <div className="relative-blog">
        <h2>Related Posts</h2>
        <div className="inner-blog" id="inner">
          {blogData.map((item) => (
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
