import PropTypes from "prop-types";
import styles from "./h-e-a-d-e-r.module.css";

const HEADER = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.header1}>
        <div className={styles.shnLogoWrapper}>
          <img
            className={styles.shnLogoIcon}
            loading="lazy"
            alt=""
            src="/shn-logo@2x.png"
          />
        </div>
        <div className={styles.navContent}>
          <div className={styles.menuButtonWrapper}>
            <div className={styles.menuButton}>
              <div className={styles.menuButton}>
                <div className={styles.button1}>About</div>
              </div>
            </div>
          </div>
          <div className={styles.projectHubWrapper}>
            <div className={styles.projectHub}>
              <div className={styles.menuButton}>
                <div className={styles.projectHub1}>PROJECT HUB</div>
              </div>
              <div className={styles.highlight} />
            </div>
          </div>
          <button className={styles.loginButton}>
            <a className={styles.login}>LOGIN</a>
          </button>
        </div>
      </div>
    </div>
  );
};

HEADER.propTypes = {
  className: PropTypes.string,
};

export default HEADER;
