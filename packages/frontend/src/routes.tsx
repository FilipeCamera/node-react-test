import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Dashboard, Home, Registrar } from "./pages";
import { PrivateRoute } from "./routes/private-routes";

function Initial() {
  const [user, setUser] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute user={user}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default Initial;
