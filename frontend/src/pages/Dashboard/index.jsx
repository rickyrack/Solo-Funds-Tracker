import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { getUser } from "../../api/userService";

import DashNav from "./components/DashNav";
import LoanCard from "../../components/LoanCard";
import General from "./components/General";

import "./style.scss";

function Dashboard() {
  const [dashPage, setDashPage] = useState("General");
  const [userData, setUserData] = useState({
    displayName: "...",
    invest: {
      total: "...",
      current: "..."
    }
  });

  const { authUser } = useAuth();

  useEffect(() => {
    console.log("fetch effect");
    const fetchData = async () => {
      const res = await getUser();
      try {
        console.log(res);
        setUserData((data) => ({
          ...data,
          displayName: res.data.displayName,
          invest: res.data.invest
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [authUser]);

  return (
    <div className="dashboardPage">
      <DashNav />
      <main>
        <h1>Dashboard</h1>
        <section className="middle">
          <General userData={userData} />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
