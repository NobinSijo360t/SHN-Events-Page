import EventCard from "./event-card";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.cardContainerWrapper, className].join(" ")}>
      <div className={styles.cardContainer}>
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
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
