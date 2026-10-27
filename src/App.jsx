import { useState } from "react";
import "./App.css";
function Welcome() {
  return <h2>Welcome to React!</h2>;
}

function Student(props) {
  return <li>{props.name}</li>;
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const students = ["Sravani", "Ravi", "Priya"];

  function increase() {
    setCount(count + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Hello " + name);
  }

  return (
    <div>
      <Welcome />

      <h3>Students List</h3>
      <ul>
        {students.map((student) => (
          <Student key={student} name={student} />
        ))}
      </ul>

      <h3>Counter: {count}</h3>
      <button onClick={increase}>Increase</button>

      <h3>Student Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>

      <p>Your name: {name}</p>
    </div>
  );
}

export default App;