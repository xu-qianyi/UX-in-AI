import { useState } from "react";
import "./GlobalNav.css";
import menu from "./menu";
import hamburgerIcon from "./assets/hamburger-icon.png";

function GlobalNav({ className, gotoPage }) {
  const [showMenu, setShowMenu] = useState(false);

  const list = menu.map((item) => {
    return (
      <li key={item.name} className="global-nav__item">
        <a
          className="global-nav__link"
          href={item.path}
          onClick={(e) => {
            e.preventDefault();
            gotoPage(item.path);
          }}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <nav className={`global-nav ${className}`}>
      <div className="global-nav__hamburger">
        <img
          onClick={() => setShowMenu(!showMenu)}
          src={hamburgerIcon}
          alt="Menu-Icon"
          className="global-nav__hamburger-icon"
        />
      </div>

      <ul
        className={`global-nav__list ${
          !showMenu ? "global-nav__list--hamburgered" : ""
        }`}
      >
        {list}
      </ul>
    </nav>
  );
}

export default GlobalNav;
