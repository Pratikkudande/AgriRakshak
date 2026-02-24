import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="container-wide py-10 md:py-14">
      <SectionTitle
        title="Contact Us"
        subtitle="Have a question or feedback? Send us a message."
      />

      <div className="max-w-2xl card-base">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-soil-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={onChange}
              className="w-full rounded-xl border border-leaf-200 px-4 py-3 focus:border-leaf-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-soil-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={onChange}
              className="w-full rounded-xl border border-leaf-200 px-4 py-3 focus:border-leaf-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-semibold text-soil-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={onChange}
              className="w-full rounded-xl border border-leaf-200 px-4 py-3 focus:border-leaf-500 focus:outline-none"
            />
          </div>
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
        {submitted ? <p className="mt-4 text-sm font-semibold text-leaf-700">Message submitted successfully.</p> : null}
      </div>
    </section>
  );
}

export default ContactPage;
