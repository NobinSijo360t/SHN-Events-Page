import Countdown from "./countdown";
import PropTypes from "prop-types";
import styles from "./hero.module.css";

const Hero = ({ className = "" }) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.heroContent}>
        <div className={styles.heroContent1}>
          <div className={styles.card}>
            <div className={styles.heroCardBackground} />
          </div>
          <div className={styles.countdownParent}>
            <Countdown />
            <div className={styles.frameWrapper}>
              <div className={styles.heroContentParent}>
                <div className={styles.heroContent2}>
                  <div className={styles.heading}>
                    <h1 className={styles.prisma}>Prisma</h1>
                    <div className={styles.date}>
                      <img
                        className={styles.vectorIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <div className={styles.satMay18}>Sat May 18 2024</div>
                    </div>
                  </div>
                  <div className={styles.buttons} />
                </div>
                <div className={styles.buttonGroup}>
                  <div className={styles.registerButtonParent}>
                    <button className={styles.registerButton}>
                      <div className={styles.text}>REGISTER</div>
                    </button>
                    <button className={styles.moreButton}>
                      <div className={styles.text1}>More Info</div>
                    </button>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.variantshadowColorsuccessWrapper}>
                      <div className={styles.variantshadowColorsuccess} />
                    </div>
                    <input
                      className={styles.teamsRegistered}
                      placeholder="14 Teams Registered"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroContentWrapper}>
            <div className={styles.heroContent3}>
              <img
                className={styles.events2fwfcxg8scu1e3vb6oikejIcon}
                loading="lazy"
                alt=""
                src="/events2fwfcxg8scu1e3vb6oikej2fprismawhitepng@2x.png"
              />
              <div className={styles.streamlitIsAnOpenSourceContainer}>
                <p className={styles.streamlitIsAnOpenSource}>
                  Streamlit is an open-source Python framework to deliver
                  dynamic
                </p>
                <p className={styles.streamlitIsAnOpenSource}>
                  data with only a few lines of code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
