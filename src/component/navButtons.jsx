import ReviewPage from "./reviewpage";  
import "./navButtons.css";

export default function NavButtons({ page, setPage }) {
    const reviewPages = ["RefrigerationCycle", "fireSafety", "generator", "UPS"];

    if (reviewPages.includes(page)) {
    return <ReviewPage page={page} />;
    }

  return (
    <div className="navBtn">
      <button onClick={() => setPage("RefrigerationCycle")}>Refrigeration Cycle</button>
      <button onClick={() => setPage("fireSafety")}>Fire Life Safety</button>
      <button onClick={() => setPage("generator")}>Generator</button>
      <button onClick={() => setPage("UPS")}>UPS</button>
    </div>
  );
}