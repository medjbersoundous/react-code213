import { useState } from "react";

export default function Test() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIN, setIsLoggedIN] = useState(false);
  const [error, setError] = useState("");

  function handleLogin() {
    if (username === "admin" && password === "1234") {
      setIsLoggedIN(true);
    } else {
      setError("Wrong username or password");
    }
  }
  return (
    <div>
      {isLoggedIN ? (
        <div>
          <h2>Welcome {username}</h2>
          <button onClick={() => setIsLoggedIN(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
