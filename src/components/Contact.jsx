import React from "react";
import "../stylingFiles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;