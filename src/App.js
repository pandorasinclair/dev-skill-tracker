import "./App.css";
import { skills } from "./data/skills";

function App() {
  const tablerows = skills.map((skill) => (
    <tr>
      <td>{skill.name}</td>
      <td>{skill.level}</td>
      <td>{convertDate(skill.created)}</td>
    </tr>
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
      <table>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Level</th>
            <th>Started</th>
          </tr>
        </thead>
        <tbody>{tablerows}</tbody>
      </table>
    </>
  );
}

export default App;
