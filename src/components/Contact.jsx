import { useState, useRef } from 'react'
import { config } from '../config'
import { AnimatedCheckmark } from './AnimatedCheckmark'
import FormField from './FormField'

// Input sanitization helper - more comprehensive
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>"'&]/g, '').replace(/javascript:/gi, '').trim();
}

// Email validation with stricter regex
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Rate limiting helper with per-session tracking
const submissionTracker = {
  timestamps: [],
  canSubmit(windowMs, maxSubmissions) {
    const now = Date.now();
    this.timestamps = this.timestamps.filter(t => now - t < windowMs);
    if (this.timestamps.length >= maxSubmissions) {
      return false;
    }
    this.timestamps.push(now);
    return true;
  },
  reset() {
    this.timestamps = [];
  }
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState('')
  const [formErrors, setFormErrors] = useState({})
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' })
  const formRef = useRef(null)
  
  // Validate form inputs with detailed error messages
  function validateForm(formData) {
    const errors = {};
    const name = sanitizeInput(formData.get('name'));
    const email = sanitizeInput(formData.get('email'));
    const message = sanitizeInput(formData.get('message'));
    
    if (!name || name.length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    } else if (name.length > 50) {
      errors.name = 'Name must be less than 50 characters';
    }
    
    if (!email) {
      errors.email = 'Email address is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!message || message.length < config.form.minMessageLength) {
      errors.message = `Message must be at least ${config.form.minMessageLength} characters`;
    } else if (message.length > config.form.maxMessageLength) {
      errors.message = `Message must be less than ${config.form.maxMessageLength} characters`;
    }
    
    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setFormErrors({})
    
    const form = e.target
    const formData = new FormData(form)
    
    const honeypotValue = formData.get(config.form.honeypotField);
    if (honeypotValue) {
      console.log('Bot detected');
      return;
    }
    
    if (!submissionTracker.canSubmit(config.form.rateLimitWindow, config.form.maxSubmissionsPerWindow)) {
      setError('Too many attempts. Please wait a moment before trying again.')
      return
    }
    
    const errors = validateForm(formData)
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setSubmitting(true)
    
    try {
      const body = new URLSearchParams(new FormData(form)).toString()
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      setSubmitted(true)
      form.reset()
      setFormValues({ name: '', email: '', message: '' })
      submissionTracker.reset()
    } catch (err) {
      setError('Something went wrong. Please try again or email directly.')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleCopy(text, kind = 'copied') {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(kind)
      setError(null)
      setTimeout(() => setCopied(''), 2000)
    } catch (err) {
      setError('Unable to copy to clipboard.')
    }
  }

  return (
    <section id="contact" className="py-32 my-32 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-white/10" role="region" aria-labelledby="contact-heading">
      <div className="max-w-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Live Availability Signal */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-green-900/20 dark:bg-green-900/30 border border-green-800/30 rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Available for new projects</span>
          </div>

          <h2 id="contact-heading" className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-slate-100 tracking-wide uppercase">Let's build something</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">Response within 24 hours — Feel free to reach out for discussing data projects, collaborations, or opportunities.</p>
        </div>

        {/* Contact Form */}
        {submitted ? (
            <div role="status" aria-live="polite" className="p-8 bg-gradient-to-br from-green-900/30 to-indigo-600/10 dark:from-green-900/20 dark:to-indigo-500/10 text-green-700 dark:text-green-300 rounded border border-green-800/50 backdrop-blur-sm animate-fadeIn swiss-card">
              <div className="flex flex-col items-center justify-center text-center gap-6">
                <AnimatedCheckmark isVisible={true} size="large" />
                <div>
                  <p className="font-bold text-2xl text-slate-900 dark:text-white mb-2">Message Sent!</p>
                  <p className="text-sm text-green-600 dark:text-green-200 mb-6">Thanks for reaching out — I'll get back to you as soon as possible.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormValues({ name: '', email: '', message: '' });
                      }}
                      className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors underline"
                    >
                      ← Send Another
                    </button>
                    <span className="text-slate-400 hidden sm:inline">•</span>
                    <a 
                      href={`mailto:${config.personal.email}`}
                      className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors underline"
                    >
                      Email Directly →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form
              ref={formRef}
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              aria-busy={submitting}
              className="swiss-card accent-left bg-slate-50 dark:bg-[#111111]/80 backdrop-blur-md p-8 border border-slate-200 dark:border-white/5"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field */}
              <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label>
                  Leave this field empty if you're human: 
                  <input 
                    name={config.form.honeypotField} 
                    tabIndex="-1" 
                    autoComplete="off"
                    type="text"
                  />
                </label>
              </div>

              {/* Name Field */}
              <FormField
                label="Your Name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formValues.name}
                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                error={formErrors.name}
                required
              />

              {/* Email Field */}
              <FormField
                label="Your Email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                error={formErrors.email}
                autoComplete="email"
                required
              />

              {/* Message Field */}
              <FormField
                label="Message"
                name="message"
                type="textarea"
                placeholder="Tell me about your project or inquiry..."
                value={formValues.message}
                onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                error={formErrors.message}
                maxLength={config.form.maxMessageLength}
                showCharCount={true}
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none group"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div role="alert" aria-live="assertive" className="p-4 bg-red-900/30 text-red-300 rounded border border-red-800 animate-shake">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">⚠️</span>
                    <span className="text-sm">{error}</span>
                  </div>
                </div>
              )}

              {/* Alternative Contact */}
              <p className="text-center text-sm text-slate-400 pt-4">
                Or <a href={`mailto:${config.personal.email}`} className="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors">email directly</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
