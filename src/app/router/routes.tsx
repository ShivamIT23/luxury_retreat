import { Routes, Route, Navigate } from "react-router-dom";

// Import pages
import Home from "./routes/Home";
import About from "./routes/About";
import Destination from "./routes/Destination";
import Contact from "./routes/Contact";
import Wellness from "./routes/Wellness";
import Maldives from "./routes/Maldives";
import Bahrain from "./routes/Bahrain";
import China from "./routes/China";
import France from "./routes/France";
import Greece from "./routes/Greece";
import Italy from "./routes/Italy";
import Japan from "./routes/Japan";
import Kenya from "./routes/Kenya";
import Kuwait from "./routes/Kuwait";
import Mauritius from "./routes/Mauritius";
import Morocco from "./routes/Morocco";
import Oman from "./routes/Oman";
import Qatar from "./routes/Qatar";
import SaudiArabia from "./routes/SaudiArabia";
import Seychelles from "./routes/Seychelles";
import SouthAfrica from "./routes/SouthAfrica";
import SouthKorea from "./routes/SouthKorea";
import Tanzania from "./routes/Tanzania";
import Turkey from "./routes/Turkey";
import UAE from "./routes/UAE";
import Vietnam from "./routes/Vietnam";
import Zimbabwe from "./routes/Zimbabwe";
import Austria from "./routes/Austria";
import UK from "./routes/UK";
import Philippines from "./routes/Philippines";
import Spain from "./routes/Spain";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/maldives" element={<Maldives />} />
      <Route path="/bahrain" element={<Bahrain />} />
      <Route path="/china" element={<China />} />
      <Route path="/france" element={<France />} />
      <Route path="/greece" element={<Greece />} />
      <Route path="/italy" element={<Italy />} />
      <Route path="/japan" element={<Japan />} />
      <Route path="/kenya" element={<Kenya />} />
      <Route path="/kuwait" element={<Kuwait />} />
      <Route path="/mauritius" element={<Mauritius />} />
      <Route path="/morocco" element={<Morocco />} />
      <Route path="/oman" element={<Oman />} />
      <Route path="/qatar" element={<Qatar />} />
      <Route path="/saudi-arabia" element={<SaudiArabia />} />
      <Route path="/seychelles" element={<Seychelles />} />
      <Route path="/south-africa" element={<SouthAfrica />} />
      <Route path="/south-korea" element={<SouthKorea />} />
      <Route path="/tanzania" element={<Tanzania />} />
      <Route path="/turkey" element={<Turkey />} />
      <Route path="/austria" element={<Austria />} />
      <Route path="/uk" element={<UK />} />
      <Route path="/spain" element={<Spain />} />
      <Route path="/philippines" element={<Philippines />} />
      <Route path="/uae" element={<UAE />} />
      <Route path="/vietnam" element={<Vietnam />} />
      <Route path="/zimbabwe" element={<Zimbabwe />} />
      <Route path="/wellness" element={<Wellness />} />
      {/* Redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
