import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      firstName,
      lastName,
      email
    };
  }
  //   axios.post('http://localhost:8080/api/users', newUser)
  //     .then(response => {
  //       alert('User created successfully!');
  //       // Reset form
  //       setFirstName('');
  //       setLastName('');
  //       setEmail('');
  //     })
  //     .catch(error => {
  //       console.error('Error creating user:', error);
  //       alert('Error creating user');
  //     });
  // };

  return (
    <div>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input 
            type="text" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input 
            type="text" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;