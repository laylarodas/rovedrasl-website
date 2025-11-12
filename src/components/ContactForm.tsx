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

    console.log('Formspree URL:', FORMSPREE); // Debug

    try {
      const response = await fetch(FORMSPREE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status); // Debug

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
        const errorData = await response.json().catch(() => ({}));
        console.error('Error response:', errorData); // Debug
        setStatus('error');
      }
    } catch (error) {
      console.error('Fetch error:', error); // Debug
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
        <div className="p-6 rounded-xl bg-green-50 border-2 border-green-300 text-green-800 animate-success">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-checkmark">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="font-bold text-lg">¡Mensaje Enviado!</div>
          </div>
          <p className="text-green-700">
            Gracias por contactarnos. Te responderemos en menos de 24 horas.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
          <p className="font-semibold">Hubo un error al enviar el mensaje.</p>
          <p className="text-sm mt-2">Por favor, inténtalo de nuevo o contacta directamente a: rovedra.sl@gmail.com</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;

// Add inline styles for success animation
const style = document.createElement('style');
style.textContent = `
  @keyframes successBounce {
    0% {
      opacity: 0;
      transform: scale(0.8) translateY(-10px);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes checkmarkPop {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .animate-success {
    animation: successBounce 0.5s ease-out;
  }

  .animate-checkmark {
    animation: checkmarkPop 0.6s ease-out 0.2s backwards;
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('contact-form-styles')) {
  style.id = 'contact-form-styles';
  document.head.appendChild(style);
}

