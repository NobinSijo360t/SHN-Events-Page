import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./e-v-e-n-t-c-a-r-d2.module.css";

const EVENTCARD2 = ({
  className = "",
  propFlex,
  propMinWidth,
  propHeight,
  propWidth,
  propHeight1,
  propFlex1,
  eventLogo,
  eventLogo1,
  checkmark,
  checkmark1,
  groupOfProjects,
  more,
}) => {
  const eVENTCARDStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      height: propHeight,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propHeight, propWidth]);

  const frameDiv5Style = useMemo(() => {
    return {
      height: propHeight1,
      flex: propFlex1,
    };
  }, [propHeight1, propFlex1]);

  return (
    <div
      className={[styles.eventCard, className].join(" ")}
      style={eVENTCARDStyle}
    >
      <div className={styles.background} />
      <div className={styles.frameParent} style={frameDiv5Style}>
        <div className={styles.eventLogoParent}>
          <img className={styles.eventLogoIcon} alt="" src={eventLogo} />
          <div className={styles.background1}>
            <img
              className={styles.eventLogoIcon1}
              loading="lazy"
              alt=""
              src={eventLogo1}
            />
            <div className={styles.completedProjectsWrapper}>
              <div className={styles.completedProjects}>
                <div className={styles.checkmarkWrapper}>
                  <img
                    className={styles.checkmarkIcon}
                    alt=""
                    src={checkmark}
                  />
                </div>
                <div className={styles.completedProjects1}>
                  <span className={styles.span}>{`19  `}</span>
                  <span>completed projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.completedProjectsContainer}>
          <div className={styles.completedProjects}>
            <div className={styles.checkmarkWrapper}>
              <img className={styles.checkmarkIcon} alt="" src={checkmark1} />
            </div>
            <div className={styles.completedProjects1}>
              <span className={styles.span}>{`19  `}</span>
              <span>completed projects</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.djangoIsAHighLevelPythonParent}>
        <div className={styles.djangoIsAContainer}>
          <p className={styles.djangoIsA}>
            Django is a high-level Python web framework
          </p>
          <p
            className={styles.djangoIsA}
          >{`that encourages rapid development `}</p>
        </div>
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttons}>
            <div className={styles.eventCardbuttondefaultprop}>
              <div className={styles.buttonBg}>
                <div className={styles.groupOfProjectsParent}>
                  <img
                    className={styles.groupOfProjects}
                    alt=""
                    src={groupOfProjects}
                  />
                  <div className={styles.seeProjects}>See Projects</div>
                </div>
              </div>
            </div>
            <button className={styles.eventCardbuttondefaultprop1}>
              <div className={styles.moreInfoWrapper}>
                <div className={styles.moreInfo}>
                  <img className={styles.groupOfProjects} alt="" src={more} />
                  <div className={styles.moreInfo1}>More Info</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

EVENTCARD2.propTypes = {
  className: PropTypes.string,
  eventLogo: PropTypes.string,
  eventLogo1: PropTypes.string,
  checkmark: PropTypes.string,
  checkmark1: PropTypes.string,
  groupOfProjects: PropTypes.string,
  more: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight1: PropTypes.any,
  propFlex1: PropTypes.any,
};

export default EVENTCARD2;
