import PropTypes from "prop-types";
import styles from "./hero1.module.css";

const Hero1 = ({ className = "" }) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.heroContent}>
        <div className={styles.heroContent1}>
          <div className={styles.card}>
            <div className={styles.rectangle} />
          </div>
          <div className={styles.heroContent2}>
            <div className={styles.heading}>
              <div className={styles.prisma}>Prisma</div>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.satMay18}>Sat May 18 2024</div>
              </div>
            </div>
            <div className={styles.buttons} />
          </div>
          <div className={styles.heroContent3}>
            <img
              className={styles.events2fwfcxg8scu1e3vb6oikejIcon}
              alt=""
              src="/events2fwfcxg8scu1e3vb6oikej2fprismawhitepng@2x.png"
            />
            <div className={styles.streamlitIsAnOpenSourceContainer}>
              <span>
                <p className={styles.streamlitIsAnOpenSource}>
                  Streamlit is an open-source Python framework to deliver
                  dynamic
                </p>
                <p className={styles.streamlitIsAnOpenSource}>
                  data with only a few lines of code.
                </p>
              </span>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <div className={styles.figmaButton}>
              <div className={styles.text}>REGISTER</div>
            </div>
            <div className={styles.moreInfoWrapper}>
              <div className={styles.moreInfo}>More Info</div>
            </div>
            <div className={styles.overlay}>
              <div className={styles.variantshadowColorsuccess} />
              <div className={styles.teamsRegistered}>14 Teams Registered</div>
            </div>
          </div>
          <div className={styles.countdown}>
            <div className={styles.seeYouThere}>See You There</div>
            <div className={styles.countdown1}>
              <div className={styles.countdownSeperator}>
                <img
                  className={styles.countdownSeperatorChild}
                  alt=""
                  src="/group-10@2x.png"
                />
                <img
                  className={styles.countdownSeperatorChild}
                  alt=""
                  src="/group-36@2x.png"
                />
                <img
                  className={styles.countdownSeperatorChild}
                  alt=""
                  src="/group-37@2x.png"
                />
              </div>
              <div className={styles.countdownNumbers}>
                <div className={styles.days}>
                  <div className={styles.div}>10</div>
                  <div className={styles.days1}>days</div>
                </div>
                <div className={styles.hours}>
                  <div className={styles.div1}>02</div>
                  <div className={styles.days1}>hours</div>
                </div>
                <div className={styles.minutes}>
                  <div className={styles.div2}>15</div>
                  <div className={styles.minutes1}>minutes</div>
                </div>
                <div className={styles.seconds}>
                  <div className={styles.div2}>45</div>
                  <div className={styles.days1}>seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero1.propTypes = {
  className: PropTypes.string,
};

export default Hero1;
