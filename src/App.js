import "./App.css";
import { skills } from "./data/skills";

function App() {
  console.log(skills);
  const list = skills.map((skill) => (
    <li>
      {skill.name}
      {skill.level}
    </li>
  ));
  return (
    <>
      <h1>dev skill tracker</h1>
      <ul>{list}</ul>
    </>
  );
}

export default App;
