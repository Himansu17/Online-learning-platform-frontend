import React, { useState} from 'react';
import "./auth.css";
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";  // Correct the import
import { UserData } from '../../context/UserContext';
import { CourseData } from '../../context/CourseContext';

const Login = () => {
   const navigate = useNavigate();
   const{ btnLoading, loginUser } = UserData();
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("");

   const { fetchMyCourse } = CourseData();

   const submitHandler=async(e)=>{
    e.preventDefault();
    await loginUser(email,password,navigate,fetchMyCourse);
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
    console.log('Google login failed');
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required />

          <label htmlFor="password">Password</label>
          <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
           required />

          <button disabled={btnLoading} type="submit"className="common-btn">{btnLoading?"please wait....":"Login"}</button>
        </form>

        {/* Google login button */}
        <div className='google'>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </div>

        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


