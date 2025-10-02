import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ContactFormData } from '../types';

const banner = '/images/my-store/banner.JPG';

export const Contact = () => {
  const navigate = useNavigate();
  const [clickedField, setClickedField] = useState<string | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    country_phone: '',
    hear_from: '',
    see_work: '',
    see_work_other: '',
    event_location: '',
    event_type: '',
  });

  const handleFieldClick = (fieldName: string) => {
    setClickedField(fieldName);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      see_work: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dataToStore = {
      ...formData,
      see_work: formData.see_work === 'other' && formData.see_work_other
        ? formData.see_work_other
        : formData.see_work,
    };

    localStorage.setItem('myForm', JSON.stringify(dataToStore));
    console.log('Form data:', dataToStore);

    alert('Thank you for your submission! We will contact you soon.');
    navigate('/home');
  };

  return (
    <main id="main-section">
      <img src={banner} alt="banner" />
      <section id="content-section">
        <div className="form-container">
          <hr />
          <p>
            Our Team BROTHER'S PHOTOGRAPHY we are running with kitty team members we are privileged to shoot beauty with colourful environment to our clients, we accept limited wedding's and pre wedding's,{' '}
          </p>
          <p>
            Birthday party events, model shoot etc .. Always shoot to present magnificent moments in every second to blow out your thoughts which you keeps on BROTHER'S PHOTOGRAPHY
          </p>
          <h2>Contact Us</h2>
          <hr />
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', marginBottom: '10px' }}>
              <br />
              <strong>Brothers Photography</strong>
              <br />
              <br />
              2-28/1, Kalur, Nizamabad, Telangana
              <br />
              3 Shops in front road
              <br />
              Nizamabad, Telangana
              <br />
              India - 503003
            </li>
          </ul>
          <hr />
          <h2>Tell us about yourself</h2>
          <form id="myForm" onSubmit={handleSubmit}>
            <div
              className={`form-group ${clickedField === 'name' ? 'clicked' : ''}`}
              onClick={() => handleFieldClick('name')}
            >
              <div>
                <label htmlFor="name">
                  Your name <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div
              className={`form-group ${clickedField === 'email' ? 'clicked' : ''}`}
              onClick={() => handleFieldClick('email')}
            >
              <div>
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="message-box">
                <p>We'll mail your quote to this address</p>
              </div>
            </div>

            <div
              className={`form-group ${clickedField === 'phone' ? 'clicked' : ''}`}
              onClick={() => handleFieldClick('phone')}
            >
              <div>
                <label htmlFor="phone">
                  Phone Number <span>*</span>
                </label>
                <br />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="message-box">
                <p>This is required. In many cases, you'll get a call from us to say hello :)</p>
              </div>
            </div>

            <div
              className={`form-group ${clickedField === 'country_phone' ? 'clicked' : ''}`}
              onClick={() => handleFieldClick('country_phone')}
            >
              <div>
                <label htmlFor="phone-country">
                  Country and area code of your phone number <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="country_phone"
                  id="phone-country"
                  required
                  value={formData.country_phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="message-box">
                <p>Ex: +91 for India</p>
              </div>
            </div>

            <div
              className={`form-group ${clickedField === 'hear_from' ? 'clicked' : ''}`}
              onClick={() => handleFieldClick('hear_from')}
            >
              <div>
                <label htmlFor="hear_from">
                  How did you hear of us? Have you seen our work at a friend's wedding?
                </label>
                <br />
                <textarea
                  id="hear_from"
                  name="hear_from"
                  value={formData.hear_from}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="see-work">
                  Where did you see our work most recently? <span>*</span>
                </label>
                <br />

                <input
                  type="radio"
                  id="facebook"
                  name="see-work"
                  value="facebook"
                  required
                  checked={formData.see_work === 'facebook'}
                  onChange={handleRadioChange}
                />
                <label htmlFor="facebook">Facebook</label>
                <br />

                <input
                  type="radio"
                  id="blog-press"
                  name="see-work"
                  value="blog-press"
                  required
                  checked={formData.see_work === 'blog-press'}
                  onChange={handleRadioChange}
                />
                <label htmlFor="blog-press">On a blog, or in the press</label>
                <br />

                <input
                  type="radio"
                  id="friend-wedding"
                  name="see-work"
                  value="friend-wedding"
                  required
                  checked={formData.see_work === 'friend-wedding'}
                  onChange={handleRadioChange}
                />
                <label htmlFor="friend-wedding">Friend's wedding</label>
                <br />

                <input
                  type="radio"
                  id="instagram"
                  name="see-work"
                  value="instagram"
                  required
                  checked={formData.see_work === 'instagram'}
                  onChange={handleRadioChange}
                />
                <label htmlFor="instagram">Instagram</label>
                <br />

                <input
                  type="radio"
                  id="other"
                  name="see-work"
                  value="other"
                  required
                  checked={formData.see_work === 'other'}
                  onChange={handleRadioChange}
                />
                <label htmlFor="other">Other</label>
                <br />

                {formData.see_work === 'other' && (
                  <input
                    type="text"
                    id="other-work"
                    name="see_work_other"
                    placeholder="Please specify"
                    value={formData.see_work_other}
                    onChange={handleInputChange}
                    required
                  />
                )}
              </div>
            </div>

            <div
              className={`form-group ${clickedField === 'event_location' ? 'clicked' : ''}`}
              onClick={() => handleFieldClick('event_location')}
            >
              <div>
                <label htmlFor="event-location">
                  Which city/country is the shoot in? <span>*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="event_location"
                  id="event-location"
                  required
                  value={formData.event_location}
                  onChange={handleInputChange}
                />
              </div>
              <div className="message-box">
                <p>Please note that we do not shoot in the USA</p>
              </div>
            </div>

            <div
              className={`form-group ${clickedField === 'event_type' ? 'clicked' : ''}`}
              onClick={() => handleFieldClick('event_type')}
            >
              <div>
                <label htmlFor="event-type">
                  What event do you want to invite us to? <span>*</span>
                </label>
                <br />
                <select
                  id="event-type"
                  name="event_type"
                  required
                  value={formData.event_type}
                  onChange={handleInputChange}
                >
                  <option value=""></option>
                  <option value="Wedding">Wedding</option>
                  <option value="Lifestyle event (Parties/Other celebrations)">
                    Lifestyle event (Parties/Other celebrations)
                  </option>
                  <option value="Stories for brands (Events/Product shoots/Films)">
                    Stories for brands (Events/Product shoots/Films)
                  </option>
                </select>

                <div className="message-box">
                  <p>We'll mail your quote to this address</p>
                </div>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" value="Submit Your Request" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
