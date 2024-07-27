import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email address.";
  };

  const validatePassword = (password) => {
    return password.length >= 6
      ? ""
      : "Password must be at least 6 characters.";
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError(validateEmail(emailValue));
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setPasswordError(validatePassword(passwordValue));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("User registered successfully!");
      navigate("/lastdesign");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-[90%] md:w-[46%]">
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg"
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                emailError
                  ? "border-red-500"
                  : email
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                passwordError
                  ? "border-red-500"
                  : password
                  ? "border-green-500"
                  : "border-gray-300"
              }`}
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 py-3 px-4 bg-blue-500 text-white rounded-lg shadow-md w-full text-center text-lg transition-transform duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
