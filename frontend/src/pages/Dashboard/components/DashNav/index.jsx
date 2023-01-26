import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import "./style.scss";

function DashNav() {
  const [toggleNav, setToggleNav] = useState(true);
  const handleNavToggle = () => {
    setToggleNav((prev) => !prev);
    console.log(toggleNav);
  };

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
            <button>General</button>
            <button>Loans</button>
          </main>
          <footer>Email: profile@gmail.com</footer>
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
