import "./App.css";
import SkillForm from "./components/skillformular";
import TestTypeScript from "./TestTypeScript";
import Diary from "./components/Diary";
import { Routes, Route, Link } from "react-router-dom";
import SkillsOverview from "./components/SkillsOverview";
import { createSkillsPath, diaryPath, skillsPath } from "./config";

function App() {
  return (
    <>
      <div className="App">
        <nav className="nav">
          <Link to={skillsPath} className="nav-item">
            Skills Overview
          </Link>
          <Link to={diaryPath} className="nav-item">
            Diary
          </Link>
        </nav>
        <Routes>
          <Route
            path={skillsPath}
            element={
              <>
                <SkillsOverview />
                <TestTypeScript />
              </>
            }
          />
          <Route path={createSkillsPath} element={<SkillForm />} />
          <Route path={diaryPath} element={<Diary />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
