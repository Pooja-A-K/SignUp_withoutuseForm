import { useState } from 'react';

function SignupForm() {
  //define state variables u
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  
  const handleSubmit = (event) => {
    //prevent default form submission
    event.preventDefault();
    if (username.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
      alert('Please fill all the fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Form submitted successfully');
  };

  //handlechange fun. called when input fields updates value & validation
  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'username':
        setUsername(value);
        setUsernameError(value.length < 5 ? 'Username must be at least 5 characters long!' : '');
        break;
      case 'email':
        setEmail(value);
        setEmailError(!isValidEmail(value) ? 'Invalid email format' : '');
        break;
      case 'password':
        setPassword(value);
        setPasswordError(!isValidPassword(value) ? 'Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long' : '');
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        setConfirmPasswordError(value !== password ? 'Passwords do not match!' : '');
        break;
      default:
        break;
    }
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  return (
    <form id="signup" className="form" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <div className="form-field">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" onChange={handleChange} />
        {usernameError.length > 0 && <small>{usernameError}</small>}
      </div>

      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" onChange={handleChange} />
        {emailError.length > 0 && <small>{emailError}</small>}
      </div>

      <div className="form-field">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleChange} />
        {passwordError.length > 0 && <small>{passwordError}</small>}
      </div>

      <div className="form-field">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} />
        {confirmPasswordError.length > 0 && <small>{confirmPasswordError}</small>}
      </div>

      <div className="form-field">
        <button type="submit" className="btnsubmit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
