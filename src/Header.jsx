import "./Header.css";
import GlobalNav from "./GlobalNav";
import logo from "./assets/logo.svg";

function Header({ gotoPage }) {
  return (
    <header className="header">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          gotoPage("#home");
        }}
      >
        <img src={logo} className="header__logo" alt="page-logo" />
      </a>

      <GlobalNav className="header__nav" gotoPage={gotoPage} />
    </header>
  );
}

export default Header;
