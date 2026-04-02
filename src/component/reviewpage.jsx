import reviewInfo from "./reviewinfo";
import "./reviewpage.css";

export default function ReviewPage({ page }) {
  const info = reviewInfo.find(item => item.id === page);
  if (!info) return null;

  return (
    <div className="reviewPage-Container">
      <div className={info.classname}>

        {/* If there's a Google Slides link, show the iframe */}
        {info.link && (
            <iframe
              src={info.link}
              frameBorder="0"
              allowFullScreen
              title="presentation"
            />
        )}

        {/* First image + video link — only if they exist */}
        {info.img && (
          <a href={info.videoLink} target="_blank" rel="noreferrer">
            <img src={info.img} alt="diagram" />
          </a>
        )}

        {/* Second image + video link — only if they exist */}
        {info.img2 && (
          <a href={info.videoLink2} target="_blank" rel="noreferrer">
            <img src={info.img2} alt="diagram 2" />
          </a>
        )}

      </div>
      {!info.link && (<h3>Click Image to see Video</h3>
      )}
      </div>
  );
}