import "./App.css";
import { skills } from "./data/skills";

function App() {
  const list = skills.map((skill) => (
    <li key={skills.id}>
      {skill.name}: {skill.level} --- {convertDate(skill.created)}
    </li>
  ));

  function convertDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = day + "." + month + "." + year;

    return formattedDate;
  }

  return (
    <>
      <h1>dev skill tracker</h1>
      <ul>{list}</ul>
    </>
  );
}

export default App;
