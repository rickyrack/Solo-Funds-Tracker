import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "./style.scss";

function Dashboard() {
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  
  return (
    <div className="dashboardPage">
      <main>
        <h1>Dashboard</h1>
        <section className="middle">
          <section className="loanList"></section>
          <section className="addLoan"></section>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
