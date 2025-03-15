import React, { useState } from 'react';
import './css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Form doğrulama
    if (!formData.name) {
      newErrors.name = 'Adınız gerekli!';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Adınız 50 karakteri geçemez!';
    }

    if (!formData.email) {
      newErrors.email = 'E-posta adresi gerekli!';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Geçerli bir e-posta adresi girin!';
    }

    if (!formData.message) newErrors.message = 'Mesajınızı girin!';
    setErrors(newErrors);

    // Hata yoksa formu gönder
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        const response = await fetch('https://formspree.io/f/mzzezbqy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSuccess(true);
          setIsError(false);
          setFormData({ name: '', email: '', message: '' }); // Formu temizle
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="contact-container">
      <h1>İLETİŞİM</h1>
      {isSuccess && <div className="success-message"><p>Mesajınız başarıyla gönderildi!</p></div>}
      {isError && <div className="error-message"><p>Formda hatalı alanlar var, lütfen kontrol edin.</p></div>}
      
      <div className="contact-content">
        <div className="contact-form">
          <h2>İletişim Formu</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Adınız</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ borderColor: errors.name ? 'red' : '#ccc' }} />
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ borderColor: errors.email ? 'red' : '#ccc' }} />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} style={{ borderColor: errors.message ? 'red' : '#ccc' }} />
              {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
            </button>
          </form>
        </div>
        <div className="contact-map">
          <h2>Konumumuz</h2>
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385399.9201589598!2d28.73195885!3d41.00549935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zSXLzdGFuYnVs!5e0!3m2!1str!2str!4v1718188800000!5m2!1str!2str"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;