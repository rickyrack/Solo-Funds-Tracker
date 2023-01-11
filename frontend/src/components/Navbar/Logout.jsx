import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Logout(props) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    console.log("logging out");
    await logout();
    navigate("/");
  };

  return (
    <button className={props.className}>
      <AiOutlineLogout onClick={handleLogout} />
    </button>
  );
}

export default Logout;
