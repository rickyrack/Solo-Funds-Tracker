import { useAuth } from "../../context/AuthContext";

import DashNav from "./DashNav";
import LoanCard from "../../components/LoanCard";

import { GiHamburgerMenu } from "react-icons/gi";

import "./style.scss";

function Dashboard() {
  return (
    <div className="dashboardPage">
      <DashNav />
      <main>
        <h1>Dashboard</h1>
        <section className="middle">
          <section className="loanList">
            <LoanCard />
          </section>

          <section className="addLoan"></section>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
