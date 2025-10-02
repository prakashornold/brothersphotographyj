import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { crousalImage } from '../data/homeImages';
import { blogData } from '../data/blogData';
import { FeaturedOnNetflixData } from '../data/featuredData';

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % crousalImage.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + crousalImage.length) % crousalImage.length);
  };

  const showSelectedImage = (index: number) => {
    setCurrentIndex(index);
  };

  const autoSlide = () => {
    const id = setInterval(() => {
      nextSlide();
    }, 2000);
    setIntervalId(id);
  };

  useEffect(() => {
    autoSlide();
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const handleMouseEnter = () => {
    if (intervalId) clearInterval(intervalId);
  };

  const handleMouseLeave = () => {
    autoSlide();
  };

  return (
    <>
      <section>
        <div
          className="carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="carousel-images">
            {crousalImage.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                loading="lazy"
                className="carousel-image"
                style={{
                  display: currentIndex === index ? 'block' : 'none',
                }}
              />
            ))}
          </div>
          <button
            className="control-button prev-button bigScreen"
            onClick={prevSlide}
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button
            className="control-button next-button bigScreen"
            onClick={nextSlide}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
        <div className="selectImage">
          <div className="all-images">
            {crousalImage.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                loading="lazy"
                alt={`Image ${index + 1}`}
                className={currentIndex === index ? 'active-image' : ''}
                onClick={() => showSelectedImage(index)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </section>
      <br />
      <br />
      <section id="featured-section-first">
        <h1>
          Featured on Netflix, Vogue, Harper's, People magazine and more. And
          yes, on every bride's wishlist.
        </h1>
        <p>
          <strong>Brothers Photography </strong>is recognized as one of the
          world's finest wedding photography firms. We create exquisite visual
          stories rooted in heart, rooted in emotion, rooted in the story of the
          moment.
        </p>
        <div id="featured-section-first-cards">
          {FeaturedOnNetflixData.map((item) => (
            <div key={item.id} data-type="image" data-animation-role="image">
              <div className="margin-wrapper">
                <a role="presentation" className="image-slide-anchor content-fit">
                  <img
                    src={item.image}
                    alt={item.alter}
                    loading="lazy"
                    style={{
                      left: '0px',
                      top: '12.537px',
                      width: '128px',
                      height: '165.926px',
                      position: 'relative',
                    }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="Button">
          <p>and much more</p>
          <Link to="/contact">
            Book us <br />
            now
          </Link>
        </div>
      </section>
      <section id="featured-section">
        <h1>Featured on the blog</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, quas?
          Fuga quod assumenda ipsa quasi quos iure, tenetur asperiores libero.
        </p>
        <div id="inner-card-home">
          {blogData.map((item) => (
            <div key={item.id} className="blog">
              <Link to={`/blog/${encodeURIComponent(item.title)}`} className="img">
                <img src={item.images[0]} alt="" loading="lazy" />
              </Link>
              <Link to={`/blog/${encodeURIComponent(item.title)}`} className="content">
                <h2 className="content">{item.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
