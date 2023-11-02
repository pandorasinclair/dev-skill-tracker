import "./App.css";
import { skills } from "./data/skills";

function App() {
  const list = skills.map((skill) => (
    <li key={skills.id}>
      {skill.name}: {skill.level} --- {skill.created}
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
