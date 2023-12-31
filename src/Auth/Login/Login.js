import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!validateForm()) return;

      const response = await fetch("http://restapi.adequateshop.com/api/authaccount/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Update 'email' to 'username'
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      console.log("Login successful:", data);
      localStorage.setItem("token", data.token);

      // Use navigate to navigate to the main page after successful login
      navigate("/Main"); // Update '/main' with your main page route
    } catch (error) {
      setError(error.message);
    }
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  return (
    <div className="p-5">
      <div className="bg-gray-100  border-2 rounded-md p-5">
        <form
          onSubmit={handleSubmit}
          className="flex  flex-col justify-center items-center self-stretch"
        >
          <h2>Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="p-3">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              className="p-2"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-3">
            <label htmlFor="pass">Password:</label>
            <br />
            <input
              className="p-2"
              id="pass"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-[150px] border-2 py-2 p-3 rounded-md bg-fuchsia-900 hover:text-white text-center"
          >
            Login
          </button>
          <Link
            to="SignUp"
            className="w-[150px] border-2 py-2 p-3 rounded-md bg-fuchsia-900 hover:text-white text-center"
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
