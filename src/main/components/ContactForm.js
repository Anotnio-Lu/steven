import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleNameBlur = () => {
    if (!name) {
      setNameError('Name is required');
    }
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError('Email is required');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError('Name is required');
    }

    if (!email) {
      setEmailError('Email is required');
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
    }

    if (name && email && isValidEmail(email)) {
      console.log('Form submitted successfully');
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            className="input-field"
          />
          {nameError && <p className="error">{nameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            className="input-field"
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input-field"
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
