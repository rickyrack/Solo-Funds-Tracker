import { GiHamburgerMenu } from "react-icons/gi";

import "./style.scss";

function DashNav() {
  return (
    <nav className="DashNavComp">
      <header>
        <button className="hamburger">
          <GiHamburgerMenu />
        </button>
        <button className="title">
          <h2>Dashboard</h2>
        </button>
      </header>
      <main style={{paddingTop: '0'}}>
        <button>General</button>
        <button>Loans</button>
      </main>
    </nav>
  );
}

export default DashNav;
