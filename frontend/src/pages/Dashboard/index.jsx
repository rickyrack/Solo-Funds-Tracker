import "./style.scss";

function Dashboard() {
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
