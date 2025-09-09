import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Animation.css'; 

export default function DelayedSlideForm() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 5000); // 5-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1 className="mb-5">🚀 Welcome to My Website</h1>

      {showForm && (
        <div className="slide-form shadow p-4 bg-light rounded">
          <h3 className="mb-3">📝 Contact Form</h3>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <button className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
