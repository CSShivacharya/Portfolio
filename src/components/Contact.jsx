import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    if (!form.current) {
      setStatus({ type: "error", message: "The contact form is unavailable. Please email me directly." });
      return;
    }

    setSending(true);
    setStatus({ type: "", message: "" });
    try {
      await emailjs.sendForm(
        "service_gc6fkdl",
        "template_b5lh1zt",
        form.current,
        "nf2rhQ8PAdqVOXAI8",
      );
      setStatus({ type: "success", message: "Message sent. Thanks for reaching out!" });
      form.current.reset();
    } catch (error) {
      console.error("EmailJS could not send the contact message.", error);
      setStatus({
        type: "error",
        message: "Your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section py-24">
      <div className="section-container">
        <div className="section-eyebrow">YOUR NEXT IDEA STARTS HERE</div>
        <h2 className="section-title">Have a Project in Mind?</h2>
        <p className="section-lede">
          Have an opportunity, a question, or an interesting problem? Send me a note.
        </p>

        <div className="contact-layout">
          <div className="contact-copy">
            <p className="contact-prompt">I&apos;m always up for a good conversation.</p>
            <a className="contact-email" href="mailto:chandrashekharashivacharya18@gmail.com">
              <FaEnvelope aria-hidden="true" />
              chandrashekharashivacharya18@gmail.com
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <div className="contact-social-links">
              <a href="https://github.com/CSShivacharya" target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chandra-v-m-019b60260/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
              <a href="/chandracv.pdf" download>
                <FaPaperPlane aria-hidden="true" /> Resume
              </a>
            </div>
            <div className="contact-decoration" aria-hidden="true">
              <span>01</span><i /><span>Let&apos;s make it real</span>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>
              Your name
              <input
                type="text"
                name="from_name"
                placeholder="How should I address you?"
                autoComplete="name"
                minLength={2}
                maxLength={100}
                required
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="from_email"
                placeholder="you@example.com"
                autoComplete="email"
                maxLength={254}
                required
              />
            </label>
            <label>
              What&apos;s on your mind?
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me a little about it..."
                minLength={10}
                maxLength={5000}
                required
              />
            </label>
            <button type="submit" className="contact-submit" disabled={sending}>
              {sending ? "Sending..." : "Send message"}
              <FaPaperPlane aria-hidden="true" />
            </button>
            <p className={`contact-status ${status.type}`} role="status" aria-live="polite">
              {status.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
