import FrameComponent from "../components/frame-component";
import Hero1 from "../components/hero1";
import Content from "../components/content";
import FrameComponent1 from "../components/frame-component1";
import LowerCards from "../components/lower-cards";
import FourCardRow from "../components/four-card-row";
import EVENTCARD2 from "../components/e-v-e-n-t-c-a-r-d2";
import styles from "./index.module.css";

const EventsSection = () => {
  return (
    <div className={styles.eventsSection}>
      <div className={styles.buttons} />
      <div className={styles.eventsSectionChild} />
      <div className={styles.shape} />
      <main className={styles.frameParent}>
        <FrameComponent />
        <div className={styles.hackNightContentWrapper}>
          <div className={styles.hackNightContent}>
            <h1 className={styles.saturdayHacknightThisContainer}>
              <span>{`Saturday HackNight `}</span>
              <span className={styles.thisWeek}>this week</span>
            </h1>
            <div className={styles.hackNightContentChild} />
          </div>
        </div>
        <section className={styles.exploredAreasContainerParent}>
          <div className={styles.exploredAreasContainer}>
            <Hero1 />
            <Content />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.exploredAreasParent}>
              <h1 className={styles.exploredAreas}>Explored Areas</h1>
              <img
                className={styles.radarIcon}
                loading="lazy"
                alt=""
                src="/radar@2x.png"
              />
            </div>
          </div>
          <FrameComponent1 />
          <LowerCards />
          <FourCardRow />
          <div className={styles.twoCardContainer}>
            <div className={styles.twoCardRow}>
              <EVENTCARD2
                propFlex="1"
                propMinWidth="203px"
                propHeight="unset"
                propWidth="unset"
                propHeight1="264px"
                propFlex1="unset"
                eventLogo="/event-logo@2x.png"
                eventLogo1="/event-logo-1@2x.png"
                checkmark="/checkmark@2x.png"
                checkmark1="/checkmark-1@2x.png"
                groupOfProjects="/group-of-projects@2x.png"
                more="/more@2x.png"
              />
              <EVENTCARD2
                eventLogo="/event-logo-2@2x.png"
                eventLogo1="/event-logo-3@2x.png"
                checkmark="/checkmark-2@2x.png"
                checkmark1="/checkmark-3@2x.png"
                groupOfProjects="/group-of-projects-1@2x.png"
                more="/more-1@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footerWrapper}>
        <div className={styles.footer}>
          <div className={styles.logoArea}>
            <div className={styles.shnLogo}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
              <img className={styles.vectorIcon1} alt="" src="/vector-3.svg" />
            </div>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.tinkerhubLinkArea}>
              <img
                className={styles.thsvgIcon}
                loading="lazy"
                alt=""
                src="/thsvg.svg"
              />
            </div>
            <div className={styles.separator} />
            <div className={styles.linkTinkerhuborgWrapper}>
              <h2 className={styles.linkTinkerhuborg}>tinkerhub.org</h2>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventsSection;
