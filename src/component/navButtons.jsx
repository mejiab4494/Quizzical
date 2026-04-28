import { useState } from "react";
import ReviewPage from "./reviewpage";
import "./navButtons.css";

export default function NavButtons({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reviewPages = ["RefrigerationCycle", "fireSafety", "generator", "UPS", "preActionCabinet"];

  if (reviewPages.includes(page)) {
    return <ReviewPage page={page} navTo={setPage} />;
  }

  const handleNav = (p) => {
    setPage(p);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger toggle - only visible on small screens */}
      <button className="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Overlay to close menu on outside click */}
      {menuOpen && (
        <div className="menuOverlay" onClick={() => setMenuOpen(false)} />
      )}

      <div className={`navBtn ${menuOpen ? "open" : ""}`}>
        {/* Home button inside mobile menu */}
    
        <button onClick={() => handleNav("RefrigerationCycle")}>Refrigeration Cycle</button>
        <button onClick={() => handleNav("fireSafety")}>Fire Life Safety</button>
        <button onClick={() => handleNav("generator")}>Generator</button>
        <button onClick={() => handleNav("UPS")}>UPS</button>
        <button onClick={() => handleNav("preActionCabinet")}>Pre-Action Cabinet</button>
      </div>
    </>
  );
}