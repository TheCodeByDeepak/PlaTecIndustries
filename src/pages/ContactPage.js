import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactPage.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_jfskv13',
        'template_fbpf0d2',
        formData,
        'FV0BSWDSg9a3U3lUR'
      );

      setStatus('Message sent successfully! We will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Failed to send the message. Please try again later.');
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="contact-page-wrapper">
      <div className="contact-left">
        <h1>Let's Connect</h1>
        <p className="tagline">“Mfgs. of PVC Heat Shrinkable Lay Flat Tubings.”</p>
        <div className="info-box">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h4>Address</h4>
            <p>204, Blue Rose Industrial Estate, Western Express Highway, Above Wason Motors, Next to Metro Mall, Boricali -East, Mumabai - 400 066</p>
          </div>
        </div>
        <div className="info-box">
          <FaPhoneAlt className="icon" />
          <div>
            <h4>Phone</h4>
            <p>+91 93244 01905</p>
          </div>
        </div>
        <div className="info-box">
          <FaEnvelope className="icon" />
          <div>
            <h4>Email</h4>
            <p>sales@platechindustries.com</p>
          </div>
        </div>
        <p className="working-hours">Working Hours: Mon - Sat | 9:00 AM - 6:00 PM</p>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {status && (
            <p className={`status-message ${status.includes('Failed') ? 'error' : 'success'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
