import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineLogin,
} from "react-icons/ai";
import "./style.scss";

function Navbar() {
  return (
    <header>
      <nav className="title">
        Solo-Tracker
      </nav>
      <nav className="links">
        <Link to="/" className="link">
          <AiOutlineHome />
        </Link>
        <Link to="/dashboard" className="link">
          <AiOutlineDashboard />
        </Link>
        <Link to="/login" className="link">
          <AiOutlineLogin />
        </Link>
      </nav>
      <nav></nav>
    </header>
  );
}

export default Navbar;
