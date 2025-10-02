import { useSearchParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredImages = blogData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="search-section">
      <h1 id="SearchQueryShow">{query}</h1>
      <div id="blogPosts" className="blogPosts">
        {filteredImages.length > 0 ? (
          filteredImages.map((item) => {
            const words = item.description.split(' ');
            const shortDescription = words.slice(0, 25).join(' ');
            const truncatedDescription =
              words.length > 25 ? shortDescription + '...' : shortDescription;

            return (
              <Link
                key={item.id}
                to={`/blog/${encodeURIComponent(item.title)}`}
                className="post"
              >
                <div className="imagesection">
                  <img
                    src={item.images[0]}
                    alt=""
                    width="180px"
                    height="180px"
                    loading="lazy"
                  />
                </div>
                <div className="contentsection">
                  <h1>{item.title}</h1>
                  <p>{truncatedDescription}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h2>No results found for "{query}"</h2>
            <p>Try searching with different keywords.</p>
          </div>
        )}
      </div>
    </main>
  );
};
