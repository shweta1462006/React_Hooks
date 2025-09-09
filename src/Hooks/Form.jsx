import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Form data submitted:\n' + JSON.stringify(formData, null, 2));
  };

  return (
<form className="p-4 shadow rounded bg-light" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="message" className="form-label">Message</label>
    <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
  </div>
  <button type="submit" className="btn btn-primary w-100">Submit</button>
</form>
  );
}

export default MyForm;
