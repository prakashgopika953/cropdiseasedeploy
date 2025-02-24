import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppPage from "./pages/AppPage";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Library from "./pages/Library";
import "./styles.css"; // Import styles

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
};

export default App;
