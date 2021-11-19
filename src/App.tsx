import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import { APIContextProvider } from "./contexts/APIContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <APIContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="projects/:id" element={<Project />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </APIContextProvider>
  );
}

export default App;
