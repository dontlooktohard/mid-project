import React, { useState, useEffect } from "react";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userStats, setUserStats] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserStats(user);
    }
  }, []);

  return (
    <div>
      <h1>Login</h1>
      {isLoggedIn ? (
        <div>
          <p>Logged in as {userStats.name}</p>
          <p>Email: {userStats.email}</p>
          <p>Password: {userStats.password}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default LogIn;
