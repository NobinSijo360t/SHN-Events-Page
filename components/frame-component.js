import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.innerContentWrapper, className].join(" ")}>
      <div className={styles.innerContent}>
        <header className={styles.headerWrapper}>
          <div className={styles.header}>
            <div className={styles.screenshot20240702At934Wrapper}>
              <img
                className={styles.screenshot20240702At934Icon}
                loading="lazy"
                alt=""
                src="/screenshot-20240702-at-93438-amremovebgpreview-1-4@2x.png"
              />
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.buttonWrapper}>
                <div className={styles.button}>About</div>
              </div>
            </div>
            <div className={styles.cardImageWrapper}>
              <div className={styles.cardImage}>
                <div className={styles.projectHub}>PROJECT HUB</div>
                <div className={styles.highlight} />
              </div>
            </div>
            <button className={styles.figmaButton}>
              <a className={styles.text}>LOGIN</a>
            </button>
          </div>
        </header>
        <div className={styles.content}>
          <h1 className={styles.saturdayHacknightThisContainer}>
            <span>{`Saturday HackNight `}</span>
            <span className={styles.thisWeek}>this week</span>
          </h1>
          <div className={styles.contentChild} />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
