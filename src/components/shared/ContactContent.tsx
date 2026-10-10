import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

/** Contact details and the enquiry form — shared by the Contact Us popup and the Contact Us page. */
export const CONTACT_EMAIL = "nepednagaland@gmail.com";

export function ContactDetails({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
      <div className="flex items-start gap-3 p-4 bg-[#F3F6F3] border border-[#e5e4e4]">
        <MapPin size={16} className="text-[#1E6F4C] mt-0.5 shrink-0" />
        <div className="text-[13px] text-[#1A2E23] leading-relaxed">
          <p className="text-[#1A2E23] font-medium">NEPED Secretariat</p>
          <p>Capital Convention Centre</p>
          <p>Near Nagaland Civil Secretariat</p>
          <p>Post Box-231,</p>
          <p>Kohima-797001, Nagaland</p>
        </div>
      </div>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="flex items-start gap-3 p-4 bg-[#F3F6F3] border border-[#e5e4e4] hover:border-[#1E6F4C]/50 transition-colors"
      >
        <Mail size={16} className="text-[#1E6F4C] mt-0.5 shrink-0" />
        <div className="text-[13px] text-[#1A2E23] leading-relaxed">
          <p className="text-[#1A2E23] font-medium">Email Us</p>
          <p className="break-all">{CONTACT_EMAIL}</p>
        </div>
      </a>
    </div>
  );
}

/** Opens the visitor's email app with the message filled in (the site has no mail server). */
export function ContactForm({ idPrefix = "contact" }: { idPrefix?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Enquiry from ${name || "Website Visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}${phone ? `\n${phone}` : ""}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full bg-[#ffffff] border border-[#d9d9d9] px-4 py-3 text-[14px] text-[#1A2E23] placeholder:text-[#5B6660] focus:outline-none focus:border-[#1E6F4C] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input id={`${idPrefix}-name`} type="text" required placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Your email</span>
          <input id={`${idPrefix}-email`} type="email" required placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Your phone number (optional)</span>
        <input
          id={`${idPrefix}-phone`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="Your phone number (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={field}
        />
      </label>
      <label className="block">
        <span className="sr-only">Your message</span>
        <textarea
          id={`${idPrefix}-message`}
          required
          rows={4}
          placeholder="How can we help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} resize-none`}
        />
      </label>
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E6F4C] hover:bg-[#185A3E] text-white text-[14px] font-medium px-6 py-3 transition-colors cursor-pointer"
      >
        <span>Send Message</span>
        <Send size={14} />
      </button>
    </form>
  );
}
