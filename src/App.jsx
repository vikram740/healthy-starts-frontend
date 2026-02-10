import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/login/login";

function App() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Fallback */}
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
