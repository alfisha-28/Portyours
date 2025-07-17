import React from 'react';
import { InputField, TextAreaField, UploadField } from './FormFields';
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

export default function ProjectsSection() {
  return (
    <section id="Projects" className="form-section">
      <h2>Projects:</h2>
      <div className="grid">
        <div className="left">
          <InputField id="project-title" placeholder="Project Title" />
          <InputField id="project-type" placeholder="Project Type" />
          <TextAreaField id="project-desc" placeholder="Project Description" rows={5} />
        </div>
        <div className="right">
          <UploadField id="project-image" label="Upload Project Image" />
        </div>
      </div>
      <button type="button" className="btn">Add More +</button>
    </section>
  );
}
