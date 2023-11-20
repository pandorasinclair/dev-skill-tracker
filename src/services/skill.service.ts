import { Skill } from "../types/skill";

/**
 * Diese Funktion gibt eine Liste der aktuellen Skills zurück. Wenn keine Skills vorhanden sind, dann ist die Liste leer.
 */
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
