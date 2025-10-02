import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IndexSliderImage } from '../data/homeImages';

export const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IndexSliderImage.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div className="slideshow" id="slideshow">
        {IndexSliderImage.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.alt}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectPosition: `50% ${item.top_bottom}%`,
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
      </div>

      <div className="content">
        <h4 style={{ textAlign: 'center' }}>Brothers Photography</h4>
        <div className="containerr-center">
          <div className="left-part">
            <h2 style={{ textAlign: 'center' }}>
              Capturing Moments, Creating Memories.
            </h2>
            <h5 style={{ textAlign: 'center', fontSize: '18px' }}>
              At Brothers Photography, we craft timeless memories through our
              lens, ensuring every moment is preserved with care and artistry. Let
              us capture your story, one frame at a time.
            </h5>
          </div>
          <Link to="/home" className="welcome-button">
            Welcome
          </Link>
        </div>
        <footer>
          <div className="social-media-links">
            <a
              href="https://www.instagram.com/brothersphotographyj?igsh=MWZxeGU1N2U0ZDF0aA=="
              className="social-link instagram"
            >
              <i className="fa fa-instagram" style={{ fontSize: '20px' }}></i>
            </a>
            <a
              href="https://www.facebook.com/share/FUp3LXkaSpsrh2ti/?mibextid=LQQJ4d"
              className="social-link facebook"
            >
              <i className="fa fa-facebook" style={{ fontSize: '20px' }}></i>
            </a>
            <a
              href="https://youtube.com/@brothersphotography4517?si=DGdJHjwSkjxOO0cT"
              className="social-link youtube"
            >
              <i className="fa fa-youtube" style={{ fontSize: '20px' }}></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
