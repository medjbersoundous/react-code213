import { useState } from "react";

export default function Company() {
  // this is a global value (budget)
  const [budget, setBudget] = useState(1000000);

  return (
    <div>
      {/* here we start passing the data manually */}
      <Department budget={budget} />
    </div>
  );
}

function Department({ budget }) {
  // this component receives budget but does NOT use it
  // it just passes it down
  return (
    <div>
      <Team budget={budget} />
    </div>
  );
}

function Team({ budget }) {
  // same problem here: still not using it
  return (
    <div>
      <Employee budget={budget} />
    </div>
  );
}

function Employee({ budget }) {
  // finally we use the data here

  // this is called "prop drilling"
  // passing props through many components that don't need it, from parent to child to grandchild, etc
  // we can't pass the budget directly to Employee, because it's not a direct child of Company, so we have to pass it through Department and Team first, even though they don't use it

  return (
    <div>
      this is my paycheck without using context: ${budget / 100}
    </div>
  );
}