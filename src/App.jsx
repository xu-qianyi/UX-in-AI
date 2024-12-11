import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import MainArea from "./MainArea";
import AIArts from "./AIArts";
import About from "./About";

function App() {
  const [page, setPage] = useState("#home");

  function gotoPage(hash) {
    console.log("Navigating to:", hash);
    setPage(hash);
  }

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header gotoPage={gotoPage} />
      <main id="main-content">
        {page === "#home" && <MainArea navigateToPage={gotoPage} />}
        {page === "#about" && <About />}

        {page === "#aiarts" && <AIArts />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
