import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!validateForm()) return;

      const response = await fetch(
        "http://restapi.adequateshop.com/api/authaccount/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, password, email }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();

      console.log("Registration successful:", data);
      localStorage.setItem("token", data.token);

      // Use navigate to navigate to the main page after successful registration
      navigate("/Main");
    } catch (error) {
      setError(error.message);
    }
  };

  const validateForm = () => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(name)) {
      setError("Please enter a valid username.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
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
          <h2>Register</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="p-3">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              className="p-2"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-3">
            <label htmlFor="username">Username:</label>
            <br />
            <input
              className="p-2"
              id="username"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            SignUp
          </button>
          <Link
            to="/"
            className="w-[150px] border-2 py-2 p-3 rounded-md bg-fuchsia-900 hover:text-white text-center mt-3"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
