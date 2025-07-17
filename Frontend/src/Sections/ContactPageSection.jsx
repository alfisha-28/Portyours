import React from 'react';
import { InputField } from './FormFields';

export default function ContactPageSection() {
  return (
    <section id="Contact-Page" className="form-section">
      <h2>Contact Page:</h2>
      <div className="contact-grid">
        <div className="contact-left">
          <InputField id="contact-name" placeholder="Name" />
          <InputField id="contact-email" placeholder="E-mail" type="email" />
          <InputField id="linkedin" placeholder="Linkedin" />
          <InputField id="instagram" placeholder="Instagram" />
        </div>
        <div className="contact-right">
          <InputField id="github" placeholder="Git Hub" />
          <InputField id="twitter" placeholder="Twitter" />
          <InputField id="facebook" placeholder="Facebook" />
        </div>
      </div>
    </section>
  );
}
