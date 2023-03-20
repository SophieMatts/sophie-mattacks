import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './ContactForm.css'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2eb8f710-c723-11ed-b4ee-9d74f7714d9e";

const ContactForm = () => {
 const [submitted, setSubmitted] = useState(true);
  const handleSubmit = e => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }


    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      // .then(() => setStatus("We'll be in touch soon."))
      // .catch((err) => setStatus(err.toString()));
  };

  if (submitted) {
    return (
      <>
        <div className="contact-container">
          <h2>Thank you!</h2>
          <p>We'll be in touch soon.</p>
          <Link to="/">Home</Link>
        </div>
      </>
    );
  }

  return (
    <div className="contact-form-container">
      <form className="form"
      action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="form-title">
          Let's get in touch...
        </div>

        <div className="form-inputs-container">
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
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
