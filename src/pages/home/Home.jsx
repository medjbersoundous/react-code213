import NavBar from "../../components/NavBar";
import "./Home.css";
import Card from "../../components/Card";
import { useState } from "react";
import Counter from "../../components/Counter";
export default function Home() {
  const coaches = [
    { id: 1, name: "medjber", prenom: "soundous", age: "23" },
    { id: 2, name: "ghalem", prenom: "salim", age: "23" },
    { id: 2, name: "ghalem", prenom: "salim", age: "23" },
  ];
  const [isLoggedIN, setIsLog] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar />
      {isLoggedIN ? (
        <div id="boxes">
          {coaches.map((coach) => (
            <Card
              key={coach.id}
              name={coach.name}
              prenom={coach.prenom}
              age={coach.age}
            />
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => setIsLog(true)}>login</button>
          <h1>{counter}</h1>
          <button onClick={()=> setCounter(counter+1)}>+</button>
          <button onClick={()=> setCounter(counter-1)}>-</button>
          <button onClick={()=>setCounter(0)}>reset</button>
        </div>
      )}
    </div>
  );
}
