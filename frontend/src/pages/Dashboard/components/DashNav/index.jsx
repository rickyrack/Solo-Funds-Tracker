import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import "./style.scss";

function DashNav(props) {
  const { email } = props.userData;

  const [toggleNav, setToggleNav] = useState(true);
  const handleNavToggle = () => {
    setToggleNav((prev) => !prev);
    console.log(toggleNav);
  };

  const handleChangePage = (newPage) => {
    props.changePage(newPage);
  }

  const showNav = () => {
    if (toggleNav) {
      return (
        <nav className="DashNavComp">
          <header>
            <button className="hamburger" onClick={handleNavToggle}>
              <GiHamburgerMenu />
            </button>
            <button className="title" onClick={handleNavToggle}>
              <h2>Dashboard</h2>
            </button>
          </header>
          <main style={{ paddingTop: "0" }}>
            <button onClick={() => handleChangePage("General")}>General</button>
            <button onClick={() => handleChangePage("Loans")}>Loans</button>
          </main>
          <footer>Email: {email}</footer>
        </nav>
      );
    } else {
      return (
        <nav className="DashNavCompClosed">
          <header>
            <button className="hamburger" onClick={handleNavToggle}>
              <GiHamburgerMenu />
            </button>
            <button className="title" onClick={handleNavToggle}>
              <h2>Dashboard</h2>
            </button>
          </header>
        </nav>
      );
    }
  };

  return showNav();
}

export default DashNav;
