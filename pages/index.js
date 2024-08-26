import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import EventCard from "../components/event-card";
import FrameComponent2 from "../components/frame-component2";
import InnerCardContainer from "../components/inner-card-container";
import FrameComponent3 from "../components/frame-component3";
import styles from "./index.module.css";

const EventsSection = () => {
  return (
    <div className={styles.eventsSection}>
      <div className={styles.buttons} />
      <div className={styles.eventsSectionChild} />
      <div className={styles.shape} />
      <section className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          <FrameComponent />
          <FrameComponent1 />
          <div className={styles.exploredAreasWrapper}>
            <h1 className={styles.exploredAreas}>Explored Areas</h1>
          </div>
        </div>
      </section>
      <section className={styles.containerWrapper}>
        <div className={styles.container}>
          <EventCard
            propFlex="unset"
            propMinWidth="unset"
            propWidth="358px"
            eventsFPoGektuVpADfSerfgFima="/events2fp4ogektuvpad4fs9erfg2fimagepng@2x.png"
            seeProjectsTextDecoration="unset"
          />
          <EventCard
            propFlex="unset"
            propMinWidth="unset"
            propWidth="358px"
            eventsFPoGektuVpADfSerfgFima="/events2fp4ogektuvpad4fs9erfg2fimagepng@2x.png"
            seeProjectsTextDecoration="unset"
          />
          <EventCard
            propFlex="unset"
            propMinWidth="unset"
            propWidth="358px"
            eventsFPoGektuVpADfSerfgFima="/events2fp4ogektuvpad4fs9erfg2fimagepng@2x.png"
            seeProjectsTextDecoration="unset"
          />
        </div>
      </section>
      <section className={styles.containerWrapper}>
        <div className={styles.container1}>
          <EventCard
            propFlex="unset"
            propMinWidth="unset"
            propWidth="358px"
            eventsFPoGektuVpADfSerfgFima="/events2fp4ogektuvpad4fs9erfg2fimagepng@2x.png"
            seeProjectsTextDecoration="unset"
          />
          <EventCard
            propFlex="unset"
            propMinWidth="unset"
            propWidth="358px"
            eventsFPoGektuVpADfSerfgFima="/events2fp4ogektuvpad4fs9erfg2fimagepng@2x.png"
            seeProjectsTextDecoration="unset"
          />
          <EventCard
            propFlex="unset"
            propMinWidth="unset"
            propWidth="358px"
            eventsFPoGektuVpADfSerfgFima="/events2fp4ogektuvpad4fs9erfg2fimagepng@2x.png"
            seeProjectsTextDecoration="unset"
          />
        </div>
      </section>
      <FrameComponent2 />
      <InnerCardContainer />
      <FrameComponent3 />
    </div>
  );
};

export default EventsSection;
