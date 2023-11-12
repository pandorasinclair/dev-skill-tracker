import "./App.css";
import SkillForm from "./components/skillformular";
import TestTypeScript from "./TestTypeScript";
import Diary from "./components/Diary";
import { Routes, Route, Link } from "react-router-dom";
import SkillsOverview from "./components/SkillsOverview";

function App() {
  return (
    <>
      <div className="App">
        <nav className="nav">
          <Link to="/skills" className="nav-item">
            Skills Overview
          </Link>
          <Link to="/diary" className="nav-item">
            Diary
          </Link>
        </nav>
        <Routes>
          <Route
            path="/skills"
            element={
              <>
                <SkillsOverview />
                <TestTypeScript />
              </>
            }
          />
          <Route path="/skills/create" element={<SkillForm />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
