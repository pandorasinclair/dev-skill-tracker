import { Skill } from './types/skill';

export default function TestTypeScript() {
  const mySkill: Skill = {
    id: 1,
    name: 'TypeScript',
    level: 1,
  };

  console.log('TypeScript: skill:', mySkill);

  return (
    <div>
      <h1>TypeScript Test</h1>
    </div>
  );
}
