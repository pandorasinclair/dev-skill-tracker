import React from "react";
import { Skill } from "../types/skill";
import { Link } from "react-router-dom";
import { createSkillsPath } from "../app-paths";
import { getCurrentSkills } from "../services/skill.service";

function SkillsOverview() {
  const skills:Skill[] = getCurrentSkills();
  /**/
  console.log(skills);
  const tablerows = skills.map((skill: Skill) => (
    <tr key={skill.id}>
      <td>{skill.name}</td>
      <td>{skill.level}</td>
      <td>{convertDate(new Date(skill.created))}</td>
    </tr>
  ));

  function convertDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = day + "." + month + "." + year;

    return formattedDate;
  }

  return (
    <div>
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
      <Link to={createSkillsPath}>
        <button>Create Skill</button>
      </Link>
    </div>
  );
}

export default SkillsOverview;
