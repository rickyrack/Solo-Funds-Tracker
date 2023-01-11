import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";



function Login(props) {
  return (
    <Link to="/login" className={props.className}><AiOutlineLogin /></Link>
  )
}

export default Login