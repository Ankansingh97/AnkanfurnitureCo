"use client";

import Link from "next/link";
import { useState } from "react";

export default function OrdersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sofa: "",
    size: "",
    fabric: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        sofa: "",
        size: "",
        fabric: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4b5d2a] via-[#2c3e70] to-[#0c1a4d] text-white">
      <main className="mx-auto max-w-2xl px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-sm text-white/70 hover:text-white">
            ← Back home
          </Link>
          <h1 className="mt-4 text-3xl font-bold">Custom sofa order</h1>
          <p className="mt-2 text-white/80">
            Fill out the form below to get a quote and start your custom design.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-green-400/40 bg-green-400/10 p-8 text-center">
            <h2 className="text-xl font-semibold text-green-300">Thank you!</h2>
            <p className="mt-2 text-white/80">
              We've received your order request. Our team will contact you
              within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-white/15 bg-white/5 p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">
                  Sofa style *
                </label>
                <select
                  name="sofa"
                  value={formData.sofa}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-white/40 focus:outline-none"
                >
                  <option value="">Select a style</option>
                  <option value="modern">Modern</option>
                  <option value="classic">Classic</option>
                  <option value="sectional">Sectional</option>
                  <option value="sleeper">Sleeper</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Size *</label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-white/40 focus:outline-none"
                >
                  <option value="">Select size</option>
                  <option value="2-seater">2-seater (72")</option>
                  <option value="3-seater">3-seater (88")</option>
                  <option value="4-seater">4-seater (104")</option>
                  <option value="sectional">Sectional (custom)</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">
                  Fabric type *
                </label>
                <select
                  name="fabric"
                  value={formData.fabric}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-white/40 focus:outline-none"
                >
                  <option value="">Select fabric</option>
                  <option value="linen">Linen</option>
                  <option value="leather">Leather</option>
                  <option value="performance">Performance weave</option>
                  <option value="velvet">Velvet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Budget *</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-white/40 focus:outline-none"
                >
                  <option value="">Select budget</option>
                  <option value="2k">$2,000 - $2,500</option>
                  <option value="2.5k">$2,500 - $3,000</option>
                  <option value="3k">$3,000 - $4,000</option>
                  <option value="4k">$4,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">
                Desired timeline *
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white focus:border-white/40 focus:outline-none"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP (6-8 weeks)</option>
                <option value="3months">In 3 months</option>
                <option value="flexible">Flexible (6+ months)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">
                Additional notes
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:border-white/40 focus:outline-none"
                placeholder="Any special requests, measurements, or color preferences?"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#0c1a4d] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
            >
              Get a quote
            </button>
          </form>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Free consultation",
              desc: "Chat with our designer to nail your perfect fit.",
            },
            {
              title: "3D mockups",
              desc: "See your sofa in your space before ordering.",
            },
            {
              title: "Money-back guarantee",
              desc: "Love it or get your money back within 30 days.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/15 bg-white/5 p-4"
            >
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
