import { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.scss";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({...data, [name]: value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="loginPage">
      <main>
        <h1>Login</h1>
        <p className="noAccount">Don't have an account? <Link to="/register">Sign Up</Link></p>
        <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          <input className="submit" type="submit" />
        </form>
      </main>
    </div>
  );
}

export default Login;
