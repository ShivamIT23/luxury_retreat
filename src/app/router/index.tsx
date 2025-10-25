import { Routes, Route, Navigate } from "react-router-dom";

// Import pages
import Home from "./routes/Home";
import About from "./routes/About";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
