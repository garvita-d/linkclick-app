import React from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Normally, you'd send signup data to backend here

        // After successful signup, navigate to login
        navigate('/');
    };

    return (
        <div className="sign-up-container">
            <div className="logo">LinkClick</div>
            <h2>Create your account</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    required 
                    className="input-field" 
                />
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="input-field" 
                />
                <button type="submit" className="sign-up-button">Sign Up</button>
            </form>
            <div className="footer">
                <p>Already have an account? <span onClick={() => navigate('/')} style={{color: '#4f7df9', cursor: 'pointer'}}>Login</span></p>
                <div className="languages">
                    <span>తెలుగుకు</span>
                    <span>हिन्दी</span>
                    <span>English</span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

