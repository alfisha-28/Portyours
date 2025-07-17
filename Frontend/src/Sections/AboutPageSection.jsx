import React from 'react';
import '../Styles/Form.css';
import { InputField, TextAreaField, UploadField } from './FormFields';

export default function AboutPageSection() {
  return (
    <section id="About-Page" className="form-section">
      <h2>About Page:</h2>
      <div className="grid">
        <div className="left">
          <InputField id="about-heading" placeholder="Course" />
          <TextAreaField id="about-desc" placeholder="About Yourself" />
        </div>
        <div className="right">
           <UploadField id="profile-pic" label="Upload your photo" />
        </div>
      </div>
    </section>
  );
}
