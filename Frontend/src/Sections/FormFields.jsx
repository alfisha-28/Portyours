import React from 'react';
import { FaCamera } from 'react-icons/fa';

export const InputField = ({ id, type = 'text', placeholder }) => (
  <>
    <label htmlFor={id}>{placeholder}:</label><br />
    <input type={type} id={id} placeholder={`Enter Your ${placeholder}`} className="input-box" /><br /><br />
  </>
);

export const TextAreaField = ({ id, placeholder, rows = 6 }) => (
  <>
    <label htmlFor={id}>{placeholder}:</label><br />
    <textarea id={id} rows={rows} placeholder={`Enter ${placeholder}`} className="textarea-box"></textarea><br /><br />
  </>
);

export const UploadField = ({ id, label }) => (
  <div>
    <label htmlFor={id} className="profile-upload">
    <FaCamera className="camera-icon" />
      <input type="file" id={id} accept="image/*" hidden />
    </label>
    <p className="upload-text">{label}</p>
  </div>
);
