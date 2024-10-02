import youtubeStyle from "../styles/Youtube.module.css";
import func from "../public/js/rounder.js";

const Youtube = ({ other }) => {
  return (
    <div className={youtubeStyle.container}>
      <div className={youtubeStyle.header}>
        <h3>LinkedIn</h3>
        <div className={youtubeStyle.buttonContainer}>
          <button className={youtubeStyle.myButton}>
            <a href="https://www.linkedin.com/in/kanstantsinkalenik/" target="blanck">
              My LinkedIn
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
