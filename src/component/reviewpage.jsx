import reviewInfo from "./reviewinfo";

export default function ReviewPage({ page }) {
  // Find the matching entry by id
  const info = reviewInfo.find(item => item.id === page);

  if (!info) return null;

  return (
    <div className="refripage">

      {/* First image + link — always shown */}
      <a href={info.videoLink} target="_blank" rel="noreferrer">
        <img src={info.img} alt="diagram" />
      </a>

      {/* Second image + link — only shown if they exist */}
      {info.img2 && (
        <a href={info.videoLink2} target="_blank" rel="noreferrer">
          <img src={info.img2} alt="diagram 2" />
        </a>
      )}

      <h3>Click Image to see Video</h3>
    </div>
  );
}