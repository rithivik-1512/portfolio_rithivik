import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-box">
        <h2 className="gradient-text">CONTACT ME</h2>

        <p>
          I am open to exciting <b>projects</b>, <b>internships</b>, and
          <b> job opportunities</b>. If you’d like to work with me or hire me,
          feel free to reach out anytime!
        </p>

        <div className="contact-details">
          <div className="contact-card">
            <h3>Email</h3>
            <p>
              <a href="mailto:chsairithivik@gmail.com">
                chsairithivik@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>
              <a href="tel:+919491140307">+91 9491140307</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
