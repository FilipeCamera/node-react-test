import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages";
import { Registrar } from "./pages/Registrar";

function Initial() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
      </Routes>
    </Router>
  );
}

export default Initial;
