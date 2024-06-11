import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import TestPage from "./pages/TestPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<ProtectedRoute><Index /></ProtectedRoute>} />
        <Route exact path="/test" element={<ProtectedRoute><TestPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;