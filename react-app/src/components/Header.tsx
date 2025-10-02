import { useState } from 'react';
import { Link } from 'react-router-dom';

const logo = '/images/logo/logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMiddleMenuOpen, setIsMiddleMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header id="headerSection">
        <Link to="#">
          <i
            className="fa fa-bars"
            onClick={() => setIsMenuOpen(true)}
            style={{ fontSize: '22px' }}
          ></i>
        </Link>
        <div className="logo-branding">
          <img src={logo} alt="Logo" width="120px" loading="lazy" />
        </div>
        <div className="user-info">
          <nav className="social-icon">
            <div className="social-media-links">
              <a
                href="https://www.instagram.com/brothersphotographyj?igsh=MWZxeGU1N2U0ZDF0aA=="
                className="social-link instagram"
                style={{ marginRight: '10px', fontSize: '26px' }}
              >
                <i className="fa fa-instagram" style={{ color: 'black' }}></i>
              </a>
              <a
                href="https://www.facebook.com/share/FUp3LXkaSpsrh2ti/?mibextid=LQQJ4d"
                className="social-link facebook"
                style={{ marginRight: '10px', fontSize: '26px' }}
              >
                <i className="fa fa-facebook" style={{ color: 'black' }}></i>
              </a>
              <a
                href="https://youtube.com/@brothersphotography4517?si=DGdJHjwSkjxOO0cT"
                className="social-link youtube"
                style={{ marginRight: '10px', fontSize: '26px' }}
              >
                <i className="fa fa-youtube" style={{ color: 'black' }}></i>
              </a>
            </div>
          </nav>
          <div style={{ margin: 'auto' }}>
            <i
              className={`fa ${isSearchOpen ? 'fa-close' : 'fa-search'}`}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              style={{ fontSize: '22px', cursor: 'pointer' }}
            ></i>
          </div>
        </div>
      </header>

      <nav className={`menu openClose ${isMenuOpen ? 'close' : ''}`}>
        <div className="site-profile">
          <i
            className="fa fa-close"
            onClick={() => setIsMenuOpen(false)}
            style={{ fontSize: '42px', cursor: 'pointer' }}
          ></i>
          <ul>
            <li>
              <Link to="/home" style={{ color: '#fd9165' }}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>Book us now:)</span>
              </Link>
            </li>
          </ul>
          <div className="imageList">
            <Link to="/home">
              <img src={logo} alt="Logo" width="120px" loading="lazy" />
            </Link>
            <h2>Recently on instagram</h2>
            <div className="galary">
              <img
                src="/images/recently-on-instagram/1.jpg"
                alt=""
                width="200px"
                loading="lazy"
              />
            </div>
            <div className="smallScreen-socel-icon">
              <div className="social-media-links">
                <a
                  href="https://www.instagram.com/brothersphotographyj?igsh=MWZxeGU1N2U0ZDF0aA=="
                  className="social-link instagram"
                  style={{ marginRight: '10px', fontSize: '26px' }}
                >
                  <i className="fa fa-instagram" style={{ color: 'black' }}></i>
                </a>
                <a
                  href="https://www.facebook.com/share/FUp3LXkaSpsrh2ti/?mibextid=LQQJ4d"
                  className="social-link facebook"
                  style={{ marginRight: '10px', fontSize: '26px' }}
                >
                  <i className="fa fa-facebook" style={{ color: 'black' }}></i>
                </a>
                <a
                  href="https://youtube.com/@brothersphotography4517?si=DGdJHjwSkjxOO0cT"
                  className="social-link youtube"
                  style={{ marginRight: '10px', fontSize: '26px' }}
                >
                  <i className="fa fa-youtube" style={{ color: 'black' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="smallScreen-menu">
        <Link to="#" style={{ textDecoration: 'none' }}>
          <i
            className={`fa ${isMenuOpen ? 'fa-close faclose' : 'fa-bars fabars'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ fontSize: isMenuOpen ? '32px' : '22px', cursor: 'pointer' }}
          ></i>
        </Link>
        <div>
          <h1
            className={`${isMiddleMenuOpen ? '' : 'openMiddleSection'}`}
            onClick={() => setIsMiddleMenuOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            {!isMiddleMenuOpen && '...'}
          </h1>
          <h1
            className={`${isMiddleMenuOpen ? 'closeMiddleSection' : ''}`}
            onClick={() => setIsMiddleMenuOpen(false)}
            style={{ cursor: 'pointer' }}
          >
            {isMiddleMenuOpen && <i className="fa fa-close" style={{ fontSize: '32px' }}></i>}
          </h1>
        </div>
        <div className="mobile-search">
          <i
            className={`fa ${isSearchOpen ? 'fa-close' : 'fa-search'}`}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            style={{ fontSize: '22px', cursor: 'pointer' }}
          ></i>
        </div>
      </nav>

      <nav
        className={`smallScreen-search-page ${isSearchOpen ? 'search-visible' : ''}`}
        style={{ display: isSearchOpen ? 'flex' : 'none' }}
      >
        <form className="inner" onSubmit={handleSearch}>
          <input
            type="text"
            id="searchInput"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </nav>

      <nav
        className={`smallScreen-middle-menu middleSectionSmallScreen ${
          isMiddleMenuOpen ? 'closeMiddleMenu' : ''
        }`}
      >
        <div className="inner">
          <div className="profile-pic">
            <img src={logo} alt="Logo" width="120px" loading="lazy" />
          </div>
          <div className="image">
            <div className="social-media-links">
              <a
                href="https://www.instagram.com/brothersphotographyj?igsh=MWZxeGU1N2U0ZDF0aA=="
                className="social-link instagram"
                style={{ marginRight: '10px', fontSize: '26px' }}
              >
                <i className="fa fa-instagram" style={{ color: 'black' }}></i>
              </a>
              <a
                href="https://www.facebook.com/share/FUp3LXkaSpsrh2ti/?mibextid=LQQJ4d"
                className="social-link facebook"
                style={{ marginRight: '10px', fontSize: '26px' }}
              >
                <i className="fa fa-facebook" style={{ color: 'black' }}></i>
              </a>
              <a
                href="https://youtube.com/@brothersphotography4517?si=DGdJHjwSkjxOO0cT"
                className="social-link youtube"
                style={{ marginRight: '10px', fontSize: '26px' }}
              >
                <i className="fa fa-youtube" style={{ color: 'black' }}></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
