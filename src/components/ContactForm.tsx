import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ID || 'https://formspree.io/f/xqawzwek';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormFocused, setIsFormFocused] = useState(false);
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return 'El nombre es obligatorio';
    if (name.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return 'El email es obligatorio';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Email no válido';
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (phone && phone.length > 0) {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
      if (!phoneRegex.test(phone)) return 'Teléfono no válido';
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return 'El mensaje es obligatorio';
    if (message.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
    return undefined;
  };

  const validateConsent = (consent: boolean): string | undefined => {
    if (!consent) return 'Debes aceptar la política de privacidad';
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
      consent: validateConsent(formData.consent),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleFocus = () => {
    setIsFormFocused(true);
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    
    // Validate immediately on blur
    let error: string | undefined;
    switch (field) {
      case 'name':
        error = validateName(formData.name);
        break;
      case 'email':
        error = validateEmail(formData.email);
        break;
      case 'phone':
        error = validatePhone(formData.phone);
        break;
      case 'message':
        error = validateMessage(formData.message);
        break;
      case 'consent':
        error = validateConsent(formData.consent);
        break;
    }
    setErrors({ ...errors, [field]: error });
  };

  const handleFormBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    // Check if focus is moving outside the form
    const formElement = e.currentTarget;
    const relatedTarget = e.relatedTarget as Node;
    
    if (!formElement.contains(relatedTarget)) {
      setIsFormFocused(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Mark that user has attempted to submit
    setHasAttemptedSubmit(true);
    setIsFormFocused(true);
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
      consent: true,
    });

    // Validate form
    if (!validateForm()) {
      setStatus('idle');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

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
        setErrors({});
        setTouched({});
        setErrorMessage('');
        setIsFormFocused(false);
        setHasAttemptedSubmit(false);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Error response:', errorData); // Debug
        setStatus('error');
        setErrorMessage(errorData.error || 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Fetch error:', error); // Debug
      setStatus('error');
      setErrorMessage('Error de conexión. Verifica tu internet e inténtalo de nuevo.');
    }
  };

  const handleFieldChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    
    // Validate on change if field has been touched
    if (touched[field]) {
      let error: string | undefined;
      switch (field) {
        case 'name':
          error = validateName(value as string);
          break;
        case 'email':
          error = validateEmail(value as string);
          break;
        case 'phone':
          error = validatePhone(value as string);
          break;
        case 'message':
          error = validateMessage(value as string);
          break;
        case 'consent':
          error = validateConsent(value as boolean);
          break;
      }
      setErrors({ ...errors, [field]: error });
    }
  };

  // Only show errors if form is focused OR user has attempted to submit
  const shouldShowErrors = isFormFocused || hasAttemptedSubmit;

  return (
    <form 
      onSubmit={handleSubmit} 
      onBlur={handleFormBlur}
      className="max-w-2xl space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-900 mb-2">
          Nombre completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleFieldChange('name', e.target.value)}
          onFocus={handleFocus}
          onBlur={() => handleBlur('name')}
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 bg-white transition ${
            shouldShowErrors && touched.name && errors.name
              ? 'border-red-500 focus:ring-red-500'
              : 'border-brand-300 focus:ring-brand-500'
          }`}
        />
        {shouldShowErrors && touched.name && errors.name && (
          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-900 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleFieldChange('email', e.target.value)}
          onFocus={handleFocus}
          onBlur={() => handleBlur('email')}
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 bg-white transition ${
            shouldShowErrors && touched.email && errors.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-brand-300 focus:ring-brand-500'
          }`}
        />
        {shouldShowErrors && touched.email && errors.email && (
          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-900 mb-2">
          Teléfono (opcional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => handleFieldChange('phone', e.target.value)}
          onFocus={handleFocus}
          onBlur={() => handleBlur('phone')}
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 bg-white transition ${
            shouldShowErrors && touched.phone && errors.phone
              ? 'border-red-500 focus:ring-red-500'
              : 'border-brand-300 focus:ring-brand-500'
          }`}
        />
        {shouldShowErrors && touched.phone && errors.phone && (
          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-900 mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleFieldChange('message', e.target.value)}
          onFocus={handleFocus}
          onBlur={() => handleBlur('message')}
          className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 bg-white resize-none transition ${
            shouldShowErrors && touched.message && errors.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-brand-300 focus:ring-brand-500'
          }`}
        />
        {shouldShowErrors && touched.message && errors.message && (
          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={(e) => handleFieldChange('consent', e.target.checked)}
            onFocus={handleFocus}
            onBlur={() => handleBlur('consent')}
            className={`mt-1 w-4 h-4 rounded text-brand-500 transition ${
              shouldShowErrors && touched.consent && errors.consent
                ? 'border-red-500 focus:ring-red-500'
                : 'border-brand-300 focus:ring-brand-500'
            }`}
          />
          <label htmlFor="consent" className="text-sm text-brand-700">
            He leído y acepto la{' '}
            <Link to="/legal/privacy" className="text-brand-500 hover:underline">
              política de privacidad
            </Link>
            . *
          </label>
        </div>
        {shouldShowErrors && touched.consent && errors.consent && (
          <p className="text-red-600 text-sm mt-1 flex items-center gap-1 ml-7">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-brand-500 text-white rounded-xl px-8 py-4 hover:bg-brand-600 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Enviar mensaje
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
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
        <div className="p-5 rounded-xl bg-red-50 border-2 border-red-300 text-red-800">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="font-semibold text-base mb-1">Error al enviar el mensaje</p>
              <p className="text-sm">{errorMessage || 'Por favor, inténtalo de nuevo más tarde.'}</p>
              <p className="text-sm mt-2">
                También puedes contactarnos directamente en:{' '}
                <a href="mailto:rovedra.sl@gmail.com" className="font-semibold hover:underline">
                  rovedra.sl@gmail.com
                </a>
              </p>
            </div>
          </div>
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

