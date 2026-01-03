import { useState } from 'react'
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { SiKaggle } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';


export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    const form = e.target
    try {
      const body = new URLSearchParams(new FormData(form)).toString()
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      setSubmitted(true)
      form.reset()
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Feel free to reach out — quick email or open the form to send me a message.</p>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            {/* Quick-contact buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <a
                href="mailto:lamaarun2001@gmail.com"
                className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded"
              >
                <MdEmail aria-hidden="true" /> Email me
              </a>
              <a
                href="https://www.linkedin.com/in/lama-arun/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded"
              >
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </div>

            {/* Email */}
            <p className="flex items-center gap-2">
                <MdEmail className="text-xl text-brand" aria-hidden="true" />
                <a
                  href="mailto:lamaarun2001@gmail.com"
                  className="text-brand font-semibold"
                >
                  <span className="sr-only">Email:</span>
                  lamaarun2001@gmail.com
                </a>
            </p>

            {/* Github */}
            <p className="flex items-center gap-2">
                <FaGithub className="text-xl text-brand" aria-hidden="true" />
                <a
                  href="https://github.com/arun-2057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand font-semibold"
                >
                  <span className="sr-only">Github:</span>
                  Github
                </a>
            </p>

            {/* Kaggle */}
            <p className="flex items-center gap-2">
                <SiKaggle className="text-xl text-brand" aria-hidden="true" />
                <a
                  href="https://www.kaggle.com/zorornoa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand font-semibold"
                >
                  <span className="sr-only">Kaggle:</span>
                  Kaggle
                </a>
            </p>

          </div>
        </div>
        <div>
          {submitted ? (
            <div role="status" aria-live="polite" className="p-4 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded shadow">
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <p className="font-semibold">Message sent</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Thanks — I’ll get back to you shortly.</p>
                  <div className="mt-3 flex gap-2">
                    <a href="#contact" onClick={() => setSubmitted(false)} className="text-sm underline">Send another</a>
                    <a href="mailto:lamaarun2001@gmail.com" className="text-sm underline">Or email directly</a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              aria-busy={submitting}
              className="flex flex-col gap-3 bg-gray-50 dark:bg-gray-700 p-4 rounded"
            >
              {/* Netlify honeypot */}
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </div>
              <input type="hidden" name="form-name" value="contact" />
              <label className="sr-only" htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                disabled={submitting}
                className="p-2 rounded"
              />
              <label className="sr-only" htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                disabled={submitting}
                className="p-2 rounded"
              />
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                required
                disabled={submitting}
                className="p-2 rounded"
              />
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-brand text-white px-4 py-2 rounded disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
                <a href="mailto:lamaarun2001@gmail.com" className="text-sm text-brand underline">Or email directly</a>
              </div>

              {error && (
                <div role="alert" aria-live="assertive" className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
