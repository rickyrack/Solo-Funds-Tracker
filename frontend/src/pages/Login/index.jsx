import { auth } from "../../firebase";
import { useState } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.scss";

function Login() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({...data, [name]: value}))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.password === formData.password2) {
      console.log(formData);

    }
    else {
      toast("Passwords must match!")
    }
    console.log(formData);
  };

  return (
    <div className="loginPage">
      <main>
        <h1>Login</h1>
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

export default Login;
