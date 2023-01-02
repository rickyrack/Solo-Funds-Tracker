import "./style.scss";

function Dashboard() {
  return (
    <container className="dashboardPage">
      <main>
        <h1>Dashboard</h1>
        <section className="middle">
          <section className="loanList"></section>
          <section className="addLoan"></section>
        </section>
      </main>
    </container>
  );
}

export default Dashboard;
