import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/index";
import Dashboard from "./pages/Dashboard/index";

function App() {
  return (
    <div>
      <Router>
        <div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
