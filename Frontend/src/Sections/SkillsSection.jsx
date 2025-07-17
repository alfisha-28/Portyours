import React from 'react';
import { TextAreaField, UploadField } from './FormFields';
import { MdAddPhotoAlternate } from "react-icons/md";

export default function SkillsSection() {
  return (
    <section id="Skills-Section" className="form-section">
      <h2>Skills Section:</h2>
      <TextAreaField id="skills-desc" placeholder="About Skills" rows={4} />
      <div className="skills-icons">
        {[...Array(6)].map((_, index) => (
          <label key={index} htmlFor={`skill-pic-${index}`} className="profile-upload">
               <MdAddPhotoAlternate  className='skill-icon'/>
            <input type="file" id={`skill-pic-${index}`} accept="image/*" hidden />
          </label>
        ))}
      </div>
    </section>
  );
}
