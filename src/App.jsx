import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import TestPage from "./pages/TestPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Index />} />
        <Route exact path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;