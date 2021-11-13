import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import { APIContextProvider } from "./contexts/APIContext";
import Home from "./pages/Home";

function App() {
  return (
    <APIContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </APIContextProvider>
  );
}

export default App;
