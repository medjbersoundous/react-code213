export default function Counter({counter}) {
  return (
    <div>
      <button onClick={() => setIsLog(true)}>login</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>reset</button>
    </div>
  );
}
