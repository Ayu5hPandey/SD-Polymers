'use client';
import { useState } from 'react';

export default function AboutForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Try again.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 text-gray-800 shadow">
      <h3 className="font-semibold text-lg">Request a Quote</h3>

      <label className="block mt-4">
        <span className="text-sm">Name</span>
        <input
          required
          className="w-full mt-1 p-2 border rounded"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </label>

      <label className="block mt-3">
        <span className="text-sm">Email</span>
        <input
          required
          type="email"
          className="w-full mt-1 p-2 border rounded"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>

      <label className="block mt-3">
        <span className="text-sm">Message / Requirements</span>
        <textarea
          required
          className="w-full mt-1 p-2 border rounded h-28"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </label>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded border border-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Send Enquiry
        </button>
      </div>

      {status && (
        <p
          className={`mt-3 text-sm ${
            status.includes('successfully') ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
