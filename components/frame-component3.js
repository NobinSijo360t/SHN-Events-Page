import EventCard from "./event-card";
import Footer from "./footer";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.cardListWrapper, className].join(" ")}>
      <div className={styles.cardList}>
        <div className={styles.cardContainer}>
          <EventCard
            propFlex="1"
            propMinWidth="233px"
            propWidth="unset"
            eventsFPoGektuVpADfSerfgFima="/events2fp4ogektuvpad4fs9erfg2fimagepng@2x.png"
            seeProjectsTextDecoration="unset"
          />
          <EventCard eventsFPoGektuVpADfSerfgFima="/events2fp4ogektuvpad4fs9erfg2fimagepng@2x.png" />
        </div>
        <Footer />
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
