import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const initialState = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim())
    errors.name = "Please share your name.";
  if (!values.email.trim()) {
    errors.email = "Please share your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email doesn't look right.";
  }
  if (!values.subject.trim())
    errors.subject = "Let us know the subject.";
  if (!values.message.trim() || values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] tracking-[0.2em] uppercase text-ivory/50 mb-2 font-body"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-brick-400 text-[11px] mt-1.5 font-body">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");

    // ─────────────────────────────────────────────────────────────────
    // Connect your email service here. Replace the simulated delay with:
    //
    //   await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(values),          // { name, email, subject, message }
    //   });
    //
    // Or use Formspree:
    //   await fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: JSON.stringify(values) });
    //
    // Or EmailJS:
    //   await emailjs.send("SERVICE_ID", "TEMPLATE_ID", values, "PUBLIC_KEY");
    // ─────────────────────────────────────────────────────────────────
    await new Promise((res) => setTimeout(res, 1100));

    setStatus("sent");
    setValues(initialState);
    setTimeout(() => setStatus("idle"), 5000);
  };

  const fieldClass = (field) =>
    `input-glass${errors[field] ? " error" : ""}`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative backdrop-blur-sm bg-char-800/35 border border-brick-500/18 p-6 md:p-10"
    >
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold-500/30 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold-500/30 pointer-events-none" />

      <p className="text-[10px] tracking-[0.35em] uppercase text-gold-500/70 font-body mb-7">
        Send a Message
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={fieldClass("name")}
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>

        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={fieldClass("email")}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="subject" label="Subject" error={errors.subject}>
          <input
            id="subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            className={fieldClass("subject")}
            placeholder="Collaboration, event, heritage documentation..."
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            className={`${fieldClass("message")} resize-none`}
            placeholder="Tell me about your story, place or project..."
          />
        </Field>
      </div>

      {/* Submit */}
      <button
        type="submit"
        id="contact-submit"
        disabled={status === "sending"}
        className="mt-7 w-full sm:w-auto btn-primary disabled:opacity-55 disabled:cursor-wait disabled:hover:transform-none"
      >
        {status === "sent" ? (
          <>
            <CheckCircle2 size={15} /> Message Sent!
          </>
        ) : status === "sending" ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send size={14} />
          </>
        )}
      </button>

      {status === "sent" && (
        <p className="mt-4 text-sm text-gold-400/80 font-light font-body animate-fadein">
          Thank you! I'll get back to you soon. 🙏
        </p>
      )}
    </form>
  );
}
