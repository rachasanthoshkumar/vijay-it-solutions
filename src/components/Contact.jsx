import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { contactDetails, serviceLinks } from '../data/siteData.js';

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = {
      firstName: formData.get('firstName')?.trim() || '',
      lastName: formData.get('lastName')?.trim() || '',
      email: formData.get('email')?.trim() || '',
      service: formData.get('service') || '',
      message: formData.get('message')?.trim() || ''
    };

    if (!values.firstName || !values.lastName || !values.email || !values.service || !values.message) {
      setFormStatus({ type: 'error', message: 'Please complete all fields before sending your enquiry.' });
      return;
    }

    const selectedService = serviceLinks.find((service) => service.href === values.service)?.label || values.service;
    const emailBody = [
      `Name: ${values.firstName} ${values.lastName}`,
      `Work email: ${values.email}`,
      `Service interest: ${selectedService}`,
      '',
      'Project brief:',
      values.message
    ].join('\n');

    const enquiryEmail = contactDetails.find((detail) => detail.label === 'Email')?.value || '';
    const mailtoUrl = `mailto:${enquiryEmail}?subject=${encodeURIComponent(
      `New enquiry from ${values.firstName} ${values.lastName}`
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
    setFormStatus({ type: 'success', message: 'Your email app is opening with the enquiry details ready to send.' });
  };

  return (
    <section id="contact" className="section-padding bg-cloud">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Tell us where the technology needs to go next."
            copy="Share the challenge, the opportunity, or the support gap. We will come back with a practical next step and the right people in the room."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{detail.label}</p>
                <p className="mt-2 whitespace-pre-line break-words text-base font-bold text-ink">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.form
          className="rounded-[2rem] border border-white bg-white p-5 shadow-soft sm:p-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-ink">
              First name
              <input
                className="min-h-12 rounded-2xl border border-slate-200 bg-cloud px-4 text-sm font-medium outline-none transition focus:border-cobalt focus:bg-white focus:ring-4 focus:ring-cobalt/10"
                type="text"
                name="firstName"
                autoComplete="given-name"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Last name
              <input
                className="min-h-12 rounded-2xl border border-slate-200 bg-cloud px-4 text-sm font-medium outline-none transition focus:border-cobalt focus:bg-white focus:ring-4 focus:ring-cobalt/10"
                type="text"
                name="lastName"
                autoComplete="family-name"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
              Work email
              <input
                className="min-h-12 rounded-2xl border border-slate-200 bg-cloud px-4 text-sm font-medium outline-none transition focus:border-cobalt focus:bg-white focus:ring-4 focus:ring-cobalt/10"
                type="email"
                name="email"
                autoComplete="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
              Service interest
              <select
                className="min-h-12 rounded-2xl border border-slate-200 bg-cloud px-4 text-sm font-medium outline-none transition focus:border-cobalt focus:bg-white focus:ring-4 focus:ring-cobalt/10"
                name="service"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a service
                </option>
                {serviceLinks.map((service) => (
                  <option key={service.href} value={service.href}>
                    {service.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
              Project brief
              <textarea
                className="min-h-36 resize-y rounded-2xl border border-slate-200 bg-cloud px-4 py-3 text-sm font-medium outline-none transition focus:border-cobalt focus:bg-white focus:ring-4 focus:ring-cobalt/10"
                name="message"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-500">
              Average reply time is under one business day.
            </p>
            <button type="submit" className="primary-button">
              Send enquiry
            </button>
          </div>
          {formStatus.message ? (
            <p
              className={`mt-4 text-sm font-semibold ${
                formStatus.type === 'error' ? 'text-red-600' : 'text-cobalt'
              }`}
              role="status"
            >
              {formStatus.message}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
