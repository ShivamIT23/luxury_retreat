import { Routes, Route, Navigate } from "react-router-dom";

// Import pages
import Home from "./routes/Home";
import About from "./routes/About";
import Destination from "./routes/Destination";
import Maldives from "./routes/Maldives";
import Contact from "./routes/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/maldives" element={<Maldives />} />
      {/* Redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
