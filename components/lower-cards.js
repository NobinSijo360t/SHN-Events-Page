import EVENTCARD2 from "./e-v-e-n-t-c-a-r-d2";
import EventCard from "./event-card";
import PropTypes from "prop-types";
import styles from "./lower-cards.module.css";

const LowerCards = ({ className = "" }) => {
  return (
    <div className={[styles.lowerCards, className].join(" ")}>
      <div className={styles.lowerCardsContainer}>
        <div className={styles.cardRow}>
          <EVENTCARD2
            propFlex="unset"
            propMinWidth="unset"
            propHeight="440px"
            propWidth="312px"
            propHeight1="unset"
            propFlex1="1"
            eventLogo="/event-logo@2x.png"
            eventLogo1="/event-logo-1@2x.png"
            checkmark="/checkmark@2x.png"
            checkmark1="/checkmark-1@2x.png"
            groupOfProjects="/group-of-projects@2x.png"
            more="/more@2x.png"
          />
          <EVENTCARD2
            propFlex="unset"
            propMinWidth="unset"
            propHeight="440px"
            propWidth="312px"
            propHeight1="unset"
            propFlex1="1"
            eventLogo="/event-logo-2@2x.png"
            eventLogo1="/event-logo-3@2x.png"
            checkmark="/checkmark-2@2x.png"
            checkmark1="/checkmark-3@2x.png"
            groupOfProjects="/group-of-projects-1@2x.png"
            more="/more-1@2x.png"
          />
          <EVENTCARD2
            propFlex="unset"
            propMinWidth="unset"
            propHeight="440px"
            propWidth="312px"
            propHeight1="unset"
            propFlex1="1"
            eventLogo="/event-logo-4@2x.png"
            eventLogo1="/event-logo-5@2x.png"
            checkmark="/checkmark1@2x.png"
            checkmark1="/checkmark-5@2x.png"
            groupOfProjects="/group-of-projects-2@2x.png"
            more="/more-2@2x.png"
          />
          <EVENTCARD2
            propFlex="unset"
            propMinWidth="unset"
            propHeight="440px"
            propWidth="312px"
            propHeight1="unset"
            propFlex1="1"
            eventLogo="/event-logo-6@2x.png"
            eventLogo1="/event-logo-7@2x.png"
            checkmark="/checkmark2@2x.png"
            checkmark1="/checkmark-7@2x.png"
            groupOfProjects="/group-of-projects-3@2x.png"
            more="/more-3@2x.png"
          />
          <EVENTCARD2
            propFlex="unset"
            propMinWidth="unset"
            propHeight="440px"
            propWidth="312px"
            propHeight1="unset"
            propFlex1="1"
            eventLogo="/event-logo@2x.png"
            eventLogo1="/event-logo-1@2x.png"
            checkmark="/checkmark@2x.png"
            checkmark1="/checkmark-1@2x.png"
            groupOfProjects="/group-of-projects@2x.png"
            more="/more@2x.png"
          />
          <EVENTCARD2
            propFlex="unset"
            propMinWidth="unset"
            propHeight="440px"
            propWidth="312px"
            propHeight1="unset"
            propFlex1="1"
            eventLogo="/event-logo-2@2x.png"
            eventLogo1="/event-logo-3@2x.png"
            checkmark="/checkmark-2@2x.png"
            checkmark1="/checkmark-3@2x.png"
            groupOfProjects="/group-of-projects-1@2x.png"
            more="/more-1@2x.png"
          />
          <EVENTCARD2
            propFlex="unset"
            propMinWidth="unset"
            propHeight="440px"
            propWidth="312px"
            propHeight1="unset"
            propFlex1="1"
            eventLogo="/event-logo-4@2x.png"
            eventLogo1="/event-logo-5@2x.png"
            checkmark="/checkmark1@2x.png"
            checkmark1="/checkmark-5@2x.png"
            groupOfProjects="/group-of-projects-2@2x.png"
            more="/more-2@2x.png"
          />
          <EVENTCARD2
            propFlex="unset"
            propMinWidth="unset"
            propHeight="440px"
            propWidth="312px"
            propHeight1="unset"
            propFlex1="1"
            eventLogo="/event-logo-6@2x.png"
            eventLogo1="/event-logo-7@2x.png"
            checkmark="/checkmark2@2x.png"
            checkmark1="/checkmark-7@2x.png"
            groupOfProjects="/group-of-projects-3@2x.png"
            more="/more-3@2x.png"
          />
        </div>
        <div className={styles.singleCardContainer}>
          <EventCard />
        </div>
      </div>
    </div>
  );
};

LowerCards.propTypes = {
  className: PropTypes.string,
};

export default LowerCards;
