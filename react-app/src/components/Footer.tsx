import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/contact">
          <span>
            <i className="title">Book us now</i>
          </span>
        </Link>

        <div className="footernave">
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
        <p>Capturing Moments, Creating Memories</p>
        <p>&copy; 2024 Brothers Photography. All Rights Reserved. &#8482;</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </footer>
  );
};
