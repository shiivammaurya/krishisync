import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FarmerGroups from "./pages/FarmerGroups";
import About from "./pages/About";

import ComponentShowcase from "./pages/ComponentShowcase";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/farmers" element={<FarmerGroups />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/components"
            element={<ComponentShowcase />}
          />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;