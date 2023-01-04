import { Link } from "react-router-dom";
import "./style.scss";

function Navbar() {
  return (
    <header>
    <nav></nav>
      <nav className="middle">
        <Link to="/" className="link">Home</Link>
        <Link to="/dashboard" className="link">Dashboard</Link>
        <Link to="/login" className="link">Login</Link>
      </nav>
    <nav></nav>
    </header>
  );
}

export default Navbar;
