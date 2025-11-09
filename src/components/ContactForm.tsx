import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ID || 'https://formspree.io/f/XXXXYYYY';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          consent: false,
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-900 mb-2">
          Nombre completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-900 mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-900 mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 w-4 h-4 rounded border-brand-300 text-brand-500 focus:ring-brand-500"
        />
        <label htmlFor="consent" className="text-sm text-brand-700">
          He leído y acepto la{' '}
          <Link to="/legal/privacy" className="text-brand-500 hover:underline">
            política de privacidad
          </Link>
          . *
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-brand-500 text-white rounded-xl px-5 py-3 hover:opacity-90 transition disabled:opacity-50"
      >
        {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      {status === 'success' && (
        <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800">
          ¡Gracias! Tu mensaje ha sido enviado correctamente. Te responderemos pronto.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
          Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
        </div>
      )}
    </form>
  );
};

export default ContactForm;

