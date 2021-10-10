import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="login-form">
            <div className="form-body">
                <h2 className="login-title">Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Email" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br /> <br />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
                <p>Already have an Account?
                    <br />
                    <Link className="form-text" to="/login">Login</Link>
                </p>
                <div>-------or-------</div>
                <br />
                <button className="login-btn">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;