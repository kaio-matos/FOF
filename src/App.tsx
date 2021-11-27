import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Error404 from "./pages/Error404";
import { APIContextProvider } from "./contexts/APIContext";

function App() {
  return (
    <APIContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/FOF/">
            <Route path="about" element={<About />} />
            <Route path="projects/:id" element={<Project />} />
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </APIContextProvider>
  );
}

export default App;
