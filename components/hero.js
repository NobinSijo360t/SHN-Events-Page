import PropTypes from "prop-types";
import styles from "./hero.module.css";

const Hero = ({ className = "" }) => {
  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.heroContent}>
        <div className={styles.heroContent1}>
          <div className={styles.card}>
            <div className={styles.cardBackground} />
          </div>
          <div className={styles.countdownContainer}>
            <div className={styles.countdownWrapper}>
              <div className={styles.countdown}>
                <div className={styles.seeYou}>
                  <div className={styles.seeYouThere}>See You There</div>
                </div>
                <div className={styles.countdown1}>
                  <div className={styles.countdownNumbers}>
                    <div className={styles.days}>
                      <div className={styles.unitValue}>
                        <div className={styles.valuePlaceholder}>10</div>
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
                      <div className={styles.div1}>15</div>
                      <div className={styles.minutes1}>minutes</div>
                    </div>
                    <div className={styles.seconds}>
                      <div className={styles.div2}>45</div>
                      <div className={styles.seconds1}>seconds</div>
                    </div>
                  </div>
                  <div className={styles.separatorContainer}>
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
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.eventInfo}>
              <div className={styles.heroContent2}>
                <div className={styles.heading}>
                  <h1 className={styles.prisma}>Prisma</h1>
                  <div className={styles.eventDateContainer}>
                    <img
                      className={styles.dateIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className={styles.satMay18}>Sat May 18 2024</div>
                  </div>
                </div>
                <div className={styles.buttons} />
              </div>
              <div className={styles.buttonGroup}>
                <div className={styles.registrationButton}>
                  <button className={styles.figmaButton}>
                    <div className={styles.text}>REGISTER</div>
                  </button>
                  <button className={styles.moreInfoButton}>
                    <div className={styles.moreInfo}>More Info</div>
                  </button>
                </div>
                <div className={styles.overlay}>
                  <div className={styles.teamCountBackground}>
                    <div className={styles.variantshadowColorsuccess} />
                  </div>
                  <div className={styles.teamsRegistered}>
                    14 Teams Registered
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.streamlitContainer}>
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
