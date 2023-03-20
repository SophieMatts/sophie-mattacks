import React, { useState } from "react";
import './ContactForm.css'

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
 const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="contact-form-container">
      <form
      action={"https://public.herotofu.com/v1/2eb8f710-c723-11ed-b4ee-9d74f7714d9e"}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="form-title">
          Let's get in touch...
        </div>

        <div className="name-box">
          <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div className="email-box">
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className="message-box">
          <textarea placeholder="Your message" name="message" required />
        </div>
        <div className="submit-box">
          <button type="submit"> Send a message </button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
