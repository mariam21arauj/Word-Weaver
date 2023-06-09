// LoginForm.jsx
import './LoginForm.css'
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { Navigate, useNavigate } from 'react-router-dom';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }
const navigate = useNavigate()
  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/')
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="login-form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
        <img id='loginLogo' className='drop' src = "https://i.postimg.cc/CKTH3kYj/Word-Weaver2logo.png"  alt = "" />
          <label style={{fontWeight: 400}}>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label style={{fontWeight: 400}}>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button className='custom-btn' type="submit"><span>LOG IN</span></button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
