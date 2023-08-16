import React, { useState } from 'react';

const Register = () => {
  // State variables to store form input values
  const [companyName, setcompanyName] = useState('');
  const [ownerName, setownerName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [ownerEmail, setownerEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    
  // Check if the provided access code matches the expected value
  if (accessCode !== 'jYjgQH') {
    setRegistrationStatus('Registration failed: Invalid access code');
    return; // Exit the function early if the access code is invalid
  }

  try {
    const response = await fetch('http://20.244.56.144/train/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ companyName, ownerName, rollNumber, ownerEmail, accessCode }),
    });

    if (response.ok) {
      setRegistrationStatus('Registration successful');
    } else {
      setRegistrationStatus('Registration failed');
    }
  } catch (error) {
    console.error('Error:', error);
    setRegistrationStatus('An error occurred');
  }
  };

  return (
    <div>
      <h2>Register Your Company</h2>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setcompanyName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Owner Name"
          value={ownerName}
          onChange={(e) => setownerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <input
          type="email"
          placeholder="Owner Email"
          value={ownerEmail}
          onChange={(e) => setownerEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Access Code"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p>{registrationStatus}</p>
    </div>
  );
};

export default Register;