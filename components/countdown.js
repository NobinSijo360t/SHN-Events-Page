import PropTypes from "prop-types";
import styles from "./countdown.module.css";

const Countdown = ({ className = "" }) => {
  return (
    <div className={[styles.countdown, className].join(" ")}>
      <div className={styles.seeYouThereWrapper}>
        <div className={styles.seeYouThere}>See You There</div>
      </div>
      <div className={styles.countdown1}>
        <div className={styles.countdownNumbers}>
          <div className={styles.days}>
            <div className={styles.timeUnitPlaceholderWrapper}>
              <div className={styles.timeUnitPlaceholder}>10</div>
            </div>
            <div className={styles.days1}>days</div>
          </div>
          <div className={styles.hours}>
            <div className={styles.wrapper}>
              <div className={styles.div}>02</div>
            </div>
            <div className={styles.hours1}>hours</div>
          </div>
          <div className={styles.minutes}>
            <div className={styles.container}>
              <div className={styles.div1}>15</div>
            </div>
            <div className={styles.minutes1}>minutes</div>
          </div>
          <div className={styles.seconds}>
            <div className={styles.secondsPlaceholder}>45</div>
            <div className={styles.seconds1}>seconds</div>
          </div>
        </div>
        <div className={styles.countdownSeperatorWrapper}>
          <div className={styles.countdownSeperator}>
            <img
              className={styles.countdownSeperatorChild}
              alt=""
              src="/group-10-1@2x.png"
            />
            <img
              className={styles.countdownSeperatorChild}
              alt=""
              src="/group-36-1@2x.png"
            />
            <img
              className={styles.countdownSeperatorChild}
              alt=""
              src="/group-37-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Countdown.propTypes = {
  className: PropTypes.string,
};

export default Countdown;
