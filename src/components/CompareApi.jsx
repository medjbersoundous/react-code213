import { useEffect, useState } from "react";
import axios from "axios";

function CompareApi() {
  // this is the api endpoint (a public fake api for testing)
  const URL = "https://jsonplaceholder.typicode.com/users";
  
  // state to store users after fetching them
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async vs sync: 

    // javascript is single threaded (one thing at a time)
    // but api calls are async (asynchronous), meaning:
    // they take time and don't block the rest of the code
    // so js continues executing while waiting for the response

    // fetch example
    console.log("fetch example");

    // fetch returns a promise
    fetch(URL)
      .then((response) => {
        // this .then runs when we got a response from the server (but we don't have the data yet)

        console.log("fetch response:", response);

        // fetch does not throw error automatically for bad status 
        // so we must check manually
        if (!response.ok) {
          throw new Error("fetch error");
        }

        // response is not directly usable
        // we must convert it to json 
        return response.json();
      })
      .then((data) => {
        // this runs after json conversion is done

        console.log("fetch data:", data);

        // we save data in state
        setUsers(data);
      })
      .catch((error) => {
        // this runs if any error happens in the chain
        console.error("fetch error:", error);
      });

    //
    // axios example
    console.log("axios example");

    // axios is a library that simplifies http requests, it should be installed first with npm install axios

    axios
      .get(URL)
      .then((response) => {
        // axios automatically parses json
        // so data is directly inside response.data

        console.log("axios response:", response);
        console.log("axios data:", response.data);

        // difference with fetch:
        // axios already throws error for bad status and also automatically converts to json without doing response.json() 

        // setUsers(response.data);
      })
      .catch((error) => {
        console.error("axios error:", error);
      });

  }, []); // runs once

  return (
    <div style={{ padding: "20px" }}>
      <h1>users list</h1>

      <ul>
        {/* map = loop in javascript */}
        {users.map((user) => (
          <li key={user.id}>
            {/* key is important for react to track elements */}
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompareApi;