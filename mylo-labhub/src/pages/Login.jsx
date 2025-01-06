import React from 'react';
import '../styles/Signup.css';

function Login() {
return (
    <section className="form-container">
    <h1>Login to Your Account</h1>
    <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn primary">Log In</button>
    </form>
    </section>
);
}

export default Login;
