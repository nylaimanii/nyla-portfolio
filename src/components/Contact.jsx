import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Window from './Window';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ from_name: '', from_email: '', company: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.from_name.trim() || !form.from_email.trim() || !form.message.trim()) {
      setStatus('ERROR: All fields except company are required.');
      return;
    }
    if (!EMAIL_REGEX.test(form.from_email)) {
      setStatus('ERROR: Invalid email address format.');
      return;
    }
    setIsLoading(true);
    setStatus('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          company: form.company || 'Not provided',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('SUCCESS: Message transmitted. Nyla will respond shortly.');
      setForm({ from_name: '', from_email: '', company: '', message: '' });
    } catch {
      setStatus('ERROR: Transmission failed. Try reaching out directly on LinkedIn.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Window title="// CONTACT.exe" variant="pink" id="contact" index={5}>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">NAME *</label>
            <input
              className="form-input"
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label className="form-label">EMAIL *</label>
            <input
              className="form-input"
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              placeholder="your@email.com"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">COMPANY / ORGANIZATION</label>
          <input
            className="form-input"
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Optional"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label className="form-label">MESSAGE *</label>
          <textarea
            className="form-input form-textarea"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What's on your mind?"
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="submit-btn"
          disabled={isLoading}
        >
          {isLoading ? 'TRANSMITTING...' : '▶ SEND MESSAGE'}
        </button>
        {status && (
          <div className={`form-status ${status.startsWith('SUCCESS') ? 'status-success' : 'status-error'}`}>
            {status}
          </div>
        )}
      </form>
    </Window>
  );
}
