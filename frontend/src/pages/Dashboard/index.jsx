import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { getUser } from "../../api/userService";

import DashNav from "./components/DashNav";
import General from "./components/General";
import Loans from "./components/Loans"

import "./style.scss";

function Dashboard() {
  const [dashPage, setDashPage] = useState("General");
  const changePage = (newPage) => {
    setDashPage(newPage);
  }

  const [userData, setUserData] = useState({
    displayName: "...",
    invest: {
      total: "...",
      current: "..."
    },
    email: "..."
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
          invest: res.data.invest,
          email: res.data.email
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [authUser]);

  const [currentPage, setCurrentPage] = useState(<General userData={userData} />);
  useEffect(() => {
      switch (dashPage) {
        case "General":
          setCurrentPage(<General userData={userData} />);
          break;
        case "Loans":
          setCurrentPage(<Loans />);
          break;
      }
  }, [dashPage, userData])

  return (
    <div className="dashboardPage">
      <DashNav userData={userData} changePage={changePage} />
      <main>
        <h1>Dashboard</h1>
        <section className="middle">
          {currentPage}
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
