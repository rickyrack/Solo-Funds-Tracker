import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home/index";
import Dashboard from "./pages/Dashboard/index";
import Login from "./pages/Login/index";

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
