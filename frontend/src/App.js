import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterNew from "@/components/FooterNew";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import CompanyOverviewPage from "@/pages/CompanyOverviewPage";
import FocusAreasPage from "@/pages/FocusAreasPage";
import VenturesPage from "@/pages/VenturesPage";
import LeadershipPage from "@/pages/LeadershipPage";
import AwardsPage from "@/pages/AwardsPage";
import PortfolioPage from "@/pages/PortfolioPage";
import ContactPage from "@/pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/company-overview" element={<CompanyOverviewPage />} />
          <Route path="/focus-areas" element={<FocusAreasPage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FooterNew />
      </BrowserRouter>
    </div>
  );
}

export default App;
