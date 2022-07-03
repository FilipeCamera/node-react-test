import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Dashboard, Home, Registrar } from "./pages";
import { CreateBook } from "./pages/Books";
import { PrivateRoute } from "./routes/private-routes";

function Initial() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/livros/cadastrar"
          element={
            <PrivateRoute>
              <CreateBook />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default Initial;
