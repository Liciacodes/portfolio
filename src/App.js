import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Resume from "./components/Resume";
import { Home } from "./components/Home";
import { Error } from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
