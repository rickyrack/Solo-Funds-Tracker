import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineDashboard
} from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";
import Login from "./Login";
import Logout from "./Logout";

import "./style.scss";

function Navbar() {
  const { user } = useAuth();
  if(user) {
    console.log(user);
    console.log('user true');
  }
  const statusSymbol = user
  ? <Logout className="link"/>
  : <Login className="link"/>

  return (
    <header>
      <nav className="title">
        <Link to="/" className="link">Solo-Tracker</Link>
      </nav>
      <nav className="links">
        <Link to="/" className="link">
          <AiOutlineHome />
        </Link>
        <Link to="/dashboard" className="link">
          <AiOutlineDashboard />
        </Link>
        {statusSymbol}
      </nav>
      <nav></nav>
    </header>
  );
}

export default Navbar;
