import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home/index";
import Dashboard from "./pages/Dashboard/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <div>
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </AuthProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
