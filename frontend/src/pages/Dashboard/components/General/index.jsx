import { useAuth } from "../../../../context/AuthContext";
import { useState } from "react";
import "./style.scss";
import { useEffect } from "react";
import { getUser } from "../../../../api/userService";

function General() {
  const [currentAmt, setCurrentAmt] = useState('...');

  const { user } = useAuth();

    useEffect(() => {
      getUser(user.email)
        .then((res) => {
          console.log(res);
          setCurrentAmt(res.data[0].displayName)
        })
        .catch((error) => console.log(error));
    }, [user])

  return (
    <div className="generalPage">
      <h2>Hello, { currentAmt }</h2>
      <p>Currently Invested</p>
    </div>
  )
}

export default General