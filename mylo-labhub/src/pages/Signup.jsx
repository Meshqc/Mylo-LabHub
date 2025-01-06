import React from 'react';
import '../styles/Signup.css';

function Signup() {
return (
    <section className="form-container">
    <h1>Create an Account</h1>
    <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="btn primary">Sign Up</button>
    </form>
    </section>
);
}

export default Signup;
