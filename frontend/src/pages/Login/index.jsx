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
    toast("Testing");
    if(formData.password === formData.password2) {
      console.log(formData);
    }
    else {
      console.log()
    }
    console.log(formData);
  };

  return (
    <div className="loginPage">
      <main>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
            />
          </label>
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}

export default Login;
