import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

import DashNav from "./components/DashNav";
import LoanCard from "../../components/LoanCard";
import General from "./components/General";

import "./style.scss";

function Dashboard() {
  const [dashPage, setDashPage] = useState('General');
  return (
    <div className="dashboardPage">
      <DashNav />
      <main>
        <h1>Dashboard</h1>
        <section className="middle">
          <General />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
