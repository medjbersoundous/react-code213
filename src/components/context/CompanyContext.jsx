import { useState } from "react";
import React, { useContext } from "react";

// create a context object
// context is like a global storage accessible by components
const ThemeContext = React.createContext();

export default function CompanyContext() {
  const [budget, setBudget] = useState(1000000);

  return (
    // provider wraps components and shares the value
    <ThemeContext.Provider value={budget}>
      <Department />
    </ThemeContext.Provider>
  );
}

function Department() {
  // no props needed anymore
  return (
    <div>
      <Team />
    </div>
  );
}

function Team() {
  return (
    <div>
      <Employee />
    </div>
  );
}

function Employee() {
  // usecontext allows us to read the value directly
  // no need to pass props step by step
  const budget = useContext(ThemeContext);

  return (
    <div>
      this is my paycheck using context: ${budget / 100}
    </div>
  );
}