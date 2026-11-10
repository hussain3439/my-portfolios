
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  
  Send,
  MessageCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());

    // Required field validation
    if (!data.name || !data.email || !data.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    try {
      setStatus({
        submitting: true,
        submitted: false,
        error: "",
      });

      // Demo submission
      console.log("Contact Data:", data);

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: "",
      });

      e.currentTarget.reset();

    } catch {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-5 py-20 md:px-8"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
          <MessageCircle size={16} />
          Get In Touch
        </span>

        <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900">
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Have an entry-level opening, internship, freelance
          project, or simply want to chat about tech?
          My inbox is always open.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Contact Information */}
        <div className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">

            <h3 className="text-xl font-bold text-gray-900">
              Contact Information
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-7">
              I am actively looking for full-time junior
              frontend or full-stack opportunities and am
              available to join immediately.
            </p>

            <div className="mt-8 space-y-4">

              {/* Email */}
              <a
                href="mailto:youremail@example.com"
                className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Email Address
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    youremail@example.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801700000000"
                className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
              >
                <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Phone / WhatsApp
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    +880 1700-000000
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    Dhaka, Bangladesh (Remote / On-site)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Social Profiles
              </p>

              <div className="flex gap-3">
                {[
                  {
                    icon: "",
                    href: "https://github.com/",
                    label: "GitHub",
                  },
                  {
                    icon: "",
                    href: "https://linkedin.com/",
                    label: "LinkedIn",
                  },
                  {
                    icon: "",
                    href: "https://twitter.com/",
                    label: "Twitter",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                  >
                    {/* <Icon size={19} /> */}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-9">

            <h3 className="text-xl font-bold text-gray-900">
              Send a Direct Message
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form below and I&apos;ll respond
              as soon as possible.
            </p>

            {/* Success Message */}
            {status.submitted && (
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
                <CheckCircle2 size={24} />

                <div>
                  <p className="text-sm font-bold">
                    Message sent successfully!
                  </p>
                  <p className="text-xs">
                    Thank you for reaching out.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <p className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
                {status.error}
              </p>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Subject / Role
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="Job Opportunity / Project Inquiry"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Hello! We are looking for a Junior Frontend Developer..."
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status.submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={17} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
