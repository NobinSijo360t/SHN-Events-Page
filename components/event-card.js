import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./event-card.module.css";

const EventCard = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
  eventsFPoGektuVpADfSerfgFima,
  seeProjectsTextDecoration,
}) => {
  const eventCardStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const seeProjectsStyle = useMemo(() => {
    return {
      textDecoration: seeProjectsTextDecoration,
    };
  }, [seeProjectsTextDecoration]);

  return (
    <div
      className={[styles.eventCard, className].join(" ")}
      style={eventCardStyle}
    >
      <div className={styles.background}>
        <div className={styles.background1} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.eventCardbuttondefaultpropParent}>
          <div className={styles.eventCardbuttondefaultprop}>
            <div className={styles.eventCardbuttondefaultpropInner}>
              <div className={styles.groupOfProjectsParent}>
                <img
                  className={styles.groupOfProjects}
                  alt=""
                  src="/group-of-projects@2x.png"
                />
                <div className={styles.seeProjects} style={seeProjectsStyle}>
                  See Projects
                </div>
              </div>
            </div>
          </div>
          <button className={styles.eventCardbuttondefaultprop1}>
            <div className={styles.eventCardbuttondefaultpropChild}>
              <div className={styles.moreParent}>
                <img
                  className={styles.groupOfProjects}
                  alt=""
                  src="/more@2x.png"
                />
                <a className={styles.moreInfo}>More Info</a>
              </div>
            </div>
          </button>
        </div>
        <div className={styles.eventCardstate6}>
          <div className={styles.events2fp4ogektuvpad4fs9erfgWrapper}>
            <img
              className={styles.events2fp4ogektuvpad4fs9erfgIcon}
              loading="lazy"
              alt=""
              src={eventsFPoGektuVpADfSerfgFima}
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.checkmarkWrapper}>
              <img
                className={styles.checkmarkIcon}
                alt=""
                src="/checkmark@2x.png"
              />
            </div>
            <div className={styles.completedProjects}>
              <span className={styles.span}>{`19  `}</span>
              <span>completed projects</span>
            </div>
          </div>
          <div className={styles.eventCardstate6Inner}>
            <div className={styles.headingParent}>
              <div className={styles.heading}>
                <b className={styles.django}>Django</b>
              </div>
              <div className={styles.djangoIsAContainer}>
                <p className={styles.djangoIsA}>
                  Django is a high-level Python web framework
                </p>
                <p
                  className={styles.djangoIsA}
                >{`that encourages rapid development `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  className: PropTypes.string,
  eventsFPoGektuVpADfSerfgFima: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  seeProjectsTextDecoration: PropTypes.any,
};

export default EventCard;
