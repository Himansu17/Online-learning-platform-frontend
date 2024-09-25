import React, { useState } from 'react';
import "./auth.css";
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";  // Correct the import
import { UserData } from "../../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const{ btnLoading, registerUser } = UserData();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler=async(e)=>{
   e.preventDefault();
   await registerUser(name,email,password,navigate);
  }
  const handleGoogleLoginSuccess = (credentialResponse) => {
    //console.log('Full credential response:', credentialResponse); // Log the full response
    if (credentialResponse && credentialResponse.credential) {
      // Decoding the Google token
      try {
        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
        console.log('Decoded Google user data:', credentialResponseDecoded);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.log('No credential received from Google login');
    }
  };

  const handleGoogleLoginError = () => {
    console.log('Google registration failed');
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" value={name}
          onChange={(e) => setName(e.target.value)} 
          required />

          <label htmlFor="email">Email</label>
          <input type="email" value={email}
          onChange={(e) => setEmail(e.target.value)} 
           required />

          <label htmlFor="password">Password</label>
          <input type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} 
           required />

          <button type="submit" disabled={btnLoading} className="common-btn">{btnLoading? "please wait..." : "Register"}</button>
        </form>

        {/* Google registration button */}
        <div className='google'>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </div>

        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

