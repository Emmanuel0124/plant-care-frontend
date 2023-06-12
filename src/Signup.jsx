import axios from "axios";
import { useState } from "react";
import "./SignupForm.css";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="signup-container" >
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          Name: <input name="name" type="text" className="form-input" />
        </div>
        <div className="form-group">
          Email: <input name="email" type="email" className="form-input" />
        </div>
        <div className="form-group">
          Password: <input name="password" type="password" className="form-input" />
        </div>
        <div className="form-group">
          Password confirmation: <input name="password_confirmation" type="password" className="form-input" />
        </div>
        <button className="submit-button" type="submit">Signup</button>
      </form>
    </div>
  );
}