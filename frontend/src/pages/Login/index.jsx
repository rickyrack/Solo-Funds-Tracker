import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { user, login } = useAuth();

  //if(user) navigate('/dashboard');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await login(formData.email, formData.password);
      navigate('/dashboard');
    } catch (e) {
      setError(e.message);
      toast('Incorrect Username/Password');
      console.log(error);
    }
  };

  return (
    <div className="loginPage">
      <main>
        <h1>Login</h1>
        <p className="noAccount">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
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
