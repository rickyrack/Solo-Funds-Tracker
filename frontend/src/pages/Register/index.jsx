import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.scss";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { user, createUser } = useAuth();

  //if(user) navigate('/dashboard');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({...data, [name]: value}))
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    if(formData.password === formData.password2) {
      try {
        await createUser(formData.email, formData.password);
        navigate('/dashboard');
      } catch (e) {
        setError(e.message);
        console.log(error);
      }
    }
    else {
      toast("Passwords must match!")
    }
  };

  return (
    <div className="registerPage">
      <main>
        <h1>Register</h1>
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
            <input
              type="password"
              placeholder="Confirm your password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
            />
          <input className="submit" type="submit" />
        </form>
      </main>
    </div>
  );
}

export default Register;
