import { Skill } from "../types/skill";
import { v4 as uuidv4 } from "uuid";

export function getCurrentSkills(): Skill[] {
  const updatedSkillList: string | null = window.localStorage.getItem("skills");
  let skills: Skill[] = [];

  if (updatedSkillList !== null) {
    const parsedSkills = JSON.parse(updatedSkillList);
    if (Array.isArray(parsedSkills)) {
      skills = parsedSkills;
    } else {
      console.error("Skills data is not an array.");
    }
  }
  return skills;
}
export function addSkill(skillname: string): void {
  const newSkill: Skill = {
    id: uuidv4(),
    name: skillname,
    level: 0,
    created: new Date(),
  };

  const localSkills: Skill[] = getCurrentSkills();
  const updatedSkillList = [...localSkills, newSkill];
  window.localStorage.setItem("skills", JSON.stringify(updatedSkillList));
}
