import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="login-form">
            <div className="form-body">
                <h2 className="login-title">Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Email" />
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br /> <br />
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <br />
                    <Link className="form-text" to="register">Create an Account</Link>
                </p>
                <div>------or---------</div>
                <br />
                <button
                    onClick={handleGoogleLogin}
                    className="login-btn"
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;