import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gc6fkdl",
        "template_b5lh1zt",
        form.current,
        "nf2rhQ8PAdqVOXAI8"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Failed to send message.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#111827] text-white py-20"
    >
      <div className="max-w-3xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-[#1e293b] outline-none"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-[#1e293b] outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-[#1e293b] outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

        {status && (
          <p className="mt-6 text-center text-lg">
            {status}
          </p>
        )}

      </div>
    </section>
  );
}

export default Contact;