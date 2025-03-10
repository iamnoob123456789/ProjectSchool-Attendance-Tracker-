import React, { useState } from 'react';
import axios from 'axios';  // Ensure axios is installed

const ProfileCreation = () => {
  const [formData, setFormData] = useState({
    photo: null,
    mobile: '',
    rollNo: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      if (e.target.files.length > 0) {
        setFormData({ ...formData, photo: e.target.files[0] });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("photo", formData.photo);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("rollNo", formData.rollNo);
    formDataToSend.append("password", formData.password);

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/profile", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      alert("Profile Created Successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Profile Creation Failed:", error);
      alert("Error Creating Profile! Check console for details.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Profile Creation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Upload Photo (JPG only)</label>
          <input type="file" className="form-control" name="photo" accept=".jpg" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Roll No</label>
          <input type="text" className="form-control" name="rollNo" value={formData.rollNo} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ProfileCreation;
