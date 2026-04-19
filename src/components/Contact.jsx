import { useState, useRef, useEffect } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { config } from '../config'

// Input sanitization helper - more comprehensive
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  // Remove HTML tags, script injections, and trim
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
  const [messageLength, setMessageLength] = useState(0)
  const formRef = useRef(null)
  
  // Validate form inputs with detailed error messages
  function validateForm(formData) {
    const errors = {};
    const name = sanitizeInput(formData.get('name'));
    const email = sanitizeInput(formData.get('email'));
    const message = sanitizeInput(formData.get('message'));
    
    // Name validation
    if (!name || name.length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    } else if (name.length > 50) {
      errors.name = 'Name must be less than 50 characters';
    }
    
    // Email validation
    if (!email) {
      errors.email = 'Email address is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Please enter a valid email address (e.g., name@example.com)';
    }
    
    // Message validation
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
    
    // Check for honeypot field (bot detection)
    const honeypotValue = formData.get(config.form.honeypotField);
    if (honeypotValue) {
      // Silently fail for bots
      console.log('Bot detected');
      return;
    }
    
    // Check rate limiting
    if (!submissionTracker.canSubmit(config.form.rateLimitWindow, config.form.maxSubmissionsPerWindow)) {
      setError('Too many attempts. Please wait a moment before trying again.')
      return
    }
    
    // Validate form
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
      setMessageLength(0)
      submissionTracker.reset() // Reset rate limit on success
    } catch (err) {
      setError('Something went wrong. Please try again or email directly at lamaarun2001@gmail.com')
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
      setError('Unable to copy to clipboard. Please manually copy the email address.')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">Feel free to reach out — quick email or use the form to send a message.</p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={`mailto:${config.personal.email}`}
              className="inline-flex items-center gap-2 glow-on-hover bg-brand text-white px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all font-semibold"
            >
              <MdEmail aria-hidden="true" /> Email me
            </a>
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gray-200 dark:border-gray-700 px-5 py-3 rounded-lg hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-all font-semibold hover-lift"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>

          <div className="grid gap-4">
            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 shadow-soft hover:shadow-medium transform hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg text-white">
                  <MdEmail className="text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Fast replies for quick questions — I typically respond within 24 hours.</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <a href={`mailto:${config.personal.email}`} className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                      <MdEmail aria-hidden="true" /> Email
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(config.personal.email, 'email')}
                      className="inline-flex items-center gap-2 border-2 border-gray-200 dark:border-gray-600 px-4 py-2 rounded-lg hover:border-brand hover:text-brand transition-colors font-medium"
                    >
                      Copy
                    </button>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">{copied === 'email' ? '✓ Copied!' : ''}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 shadow-soft hover:shadow-medium transform hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg text-white">
                  <FaGithub className="text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">GitHub</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Check out my projects and repos.</p>
                  <div className="mt-4">
                    <a 
                      href={config.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 border-2 border-gray-200 dark:border-gray-600 px-4 py-2 rounded-lg hover:border-brand hover:text-brand transition-colors font-medium"
                    >
                      Visit Profile →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 shadow-soft hover:shadow-medium transform hover:-translate-y-1 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg text-white">
                  <SiKaggle className="text-2xl" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Kaggle</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Data science notebooks and competitions.</p>
                  <div className="mt-4">
                    <a 
                      href={config.social.kaggle} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 border-2 border-gray-200 dark:border-gray-600 px-4 py-2 rounded-lg hover:border-brand hover:text-brand transition-colors font-medium"
                    >
                      Visit Profile →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div role="status" aria-live="polite" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-200 rounded-xl shadow-lg border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-4">
                <div className="text-3xl">✅</div>
                <div>
                  <p className="font-bold text-lg">Message sent successfully!</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Thanks — I'll get back to you shortly.</p>
                  <div className="mt-4 flex gap-4">
                    <button onClick={() => setSubmitted(false)} className="text-sm font-semibold underline hover:no-underline">Send another</button>
                    <a href={`mailto:${config.personal.email}`} className="text-sm font-semibold underline hover:no-underline">Or email directly</a>
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
              className="flex flex-col gap-4 bg-white dark:bg-gray-700 p-6 md:p-8 rounded-xl border border-gray-100 dark:border-gray-600 shadow-lg"
            >
              <input type="hidden" name="form-name" value="contact" />
              {/* Improved honeypot field - visually hidden but accessible */}
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

              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  aria-required="true"
                  disabled={submitting}
                  className={`w-full p-3.5 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all`}
                />
                {formErrors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">{formErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Your email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  aria-required="true"
                  disabled={submitting}
                  className={`w-full p-3.5 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all`}
                />
                {formErrors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or inquiry..."
                  required
                  aria-required="true"
                  disabled={submitting}
                  maxLength={config.form.maxMessageLength}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                  className={`w-full p-3.5 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none`}
                />
                <div className="flex justify-between mt-1">
                  {formErrors.message ? (
                    <p className="text-sm text-red-600 dark:text-red-400" role="alert">{formErrors.message}</p>
                  ) : <span></span>}
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    <span id="message-length">{messageLength}</span>/{config.form.maxMessageLength}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="glow-on-hover bg-brand text-white px-6 py-3 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all font-semibold"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
                <a href={`mailto:${config.personal.email}`} className="text-sm font-medium text-brand underline hover:no-underline">Or email directly</a>
              </div>

              {error && (
                <div role="alert" aria-live="assertive" className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-start gap-2">
                    <span>⚠️</span>
                    <span>{error}</span>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
