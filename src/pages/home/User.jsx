import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("hello this is useEffect")
  }); 
  const filtred = users.filter((user) =>
    user.firstName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="search with firstname"
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1>
        user page
      </h1>
      <h2>second</h2>
      <Link to='/'>go to home page</Link>
    </div>
  );
}