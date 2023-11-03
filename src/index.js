import ReactDOM from "react-dom/client";
import TestTypeScript from "./TestTypeScript";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import "./index.css";
import App from "./App";
import SkillForm from "./components/skillformular";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <TestTypeScript />
    <SkillForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
