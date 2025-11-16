import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    // EmailJS configuration
    // You need to replace these with your actual EmailJS credentials
    // Sign up at https://www.emailjs.com/ and get your credentials
    const serviceId = 'service_pse96gm';  // Replace with your Service ID
    const templateId = 'template_8f1n68b'; // Replace with your Template ID
    const publicKey = 'ZlfbjVqmISKf-qoIB';   // Replace with your Public Key

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setStatus('success');
          setLoading(false);
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
          setLoading(false);
          setTimeout(() => setStatus(''), 5000);
        }
      );
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27989.335946318166!2d77.20391538185126!3d28.72949638912995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe706a25b3c3%3A0xd788a9098572a92c!2sWazirabad%2C%20Delhi!5e0!3m2!1sen!2sin!4v1755093613753!5m2!1sen!2sin"
            width="400" height="300" loading="lazy" title="Google Map" style={{ border: 0 }} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <form ref={form} onSubmit={sendEmail} className="form">
          {status === 'success' && (
            <div style={{ padding: '10px', marginBottom: '15px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '4px', textAlign: 'center' }}>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div style={{ padding: '10px', marginBottom: '15px', backgroundColor: '#f44336', color: 'white', borderRadius: '4px', textAlign: 'center' }}>
              Failed to send message. Please try again or email directly at itsmaansari@gmail.com
            </div>
          )}

          <div className="form-group" style={{ marginBottom: '1.2rem' }}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="form-input"
            />
          </div>
          <div className="form-group" style={{ marginBottom: '1.2rem' }}>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>
          <div className="form-group" style={{ marginBottom: '1.2rem' }}>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="form-input"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="form-btn"
            style={{ marginTop: '0.5rem' }}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </article>
  );
}

