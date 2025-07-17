import React from 'react';
import { InputField, TextAreaField, UploadField } from './FormFields';


export default function HomePageSection() {
  return (
    <section id="Home-page" className="form-section">
      <h2>Home Page:</h2>
      <div className="grid">
        <div className="left">
          <InputField id="name" placeholder="Name" />
          <InputField id="title" placeholder="Title" />
          <TextAreaField id="desc" placeholder="Description" />
        </div>
        <div className="right">
          <UploadField id="profile-pic" label="Upload your photo" />
        </div>
      </div>
    </section>
  );
}
