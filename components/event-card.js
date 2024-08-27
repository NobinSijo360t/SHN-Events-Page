import PropTypes from "prop-types";
import styles from "./event-card.module.css";

const EventCard = ({ className = "" }) => {
  return (
    <div className={[styles.eventCard, className].join(" ")}>
      <div className={styles.cardContentWrapper}>
        <div className={styles.background}>
          <div className={styles.background1} />
        </div>
        <div className={styles.buttons}>
          <div className={styles.seeProjectButton}>
            <div className={styles.eventCardbuttondefaultprop}>
              <div className={styles.instancePrimaryButton}>
                <div className={styles.groupOfProjectsParent}>
                  <img
                    className={styles.groupOfProjects}
                    alt=""
                    src="/group-of-projects-28@2x.png"
                  />
                  <div className={styles.seeProjects}>See Projects</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eventCardbuttondefaultprop1}>
            <div className={styles.eventCardbuttondefaultpropInner}>
              <div className={styles.moreParent}>
                <img
                  className={styles.groupOfProjects}
                  alt=""
                  src="/more-28@2x.png"
                />
                <a className={styles.moreInfo}>More Info</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.eventCardstate6}>
          <div className={styles.stateContent}>
            <div className={styles.imageContainer}>
              <img
                className={styles.events2fp4ogektuvpad4fs9erfgIcon}
                alt=""
                src="/event-logo-1@2x.png"
              />
            </div>
            <div className={styles.completion}>
              <img
                className={styles.checkmarkIcon}
                alt=""
                src="/checkmark-56@2x.png"
              />
              <div className={styles.completedProjects}>
                <span className={styles.span}>{`19  `}</span>
                <span>completed projects</span>
              </div>
            </div>
          </div>
          <div className={styles.eventDetails}>
            <div className={styles.container}>
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
};

export default EventCard;
