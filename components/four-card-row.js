import EVENTCARD2 from "./e-v-e-n-t-c-a-r-d2";
import PropTypes from "prop-types";
import styles from "./four-card-row.module.css";

const FourCardRow = ({ className = "" }) => {
  return (
    <div className={[styles.fourCardRow, className].join(" ")}>
      <div className={styles.container}>
        <EVENTCARD2
          propFlex="1"
          propMinWidth="287px"
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
          propFlex="1"
          propMinWidth="287px"
          propHeight="unset"
          propWidth="unset"
          propHeight1="264px"
          propFlex1="unset"
          eventLogo="/event-logo-2@2x.png"
          eventLogo1="/event-logo-3@2x.png"
          checkmark="/checkmark-2@2x.png"
          checkmark1="/checkmark-3@2x.png"
          groupOfProjects="/group-of-projects-1@2x.png"
          more="/more-1@2x.png"
        />
        <EVENTCARD2
          propFlex="1"
          propMinWidth="287px"
          propHeight="unset"
          propWidth="unset"
          propHeight1="264px"
          propFlex1="unset"
          eventLogo="/event-logo-4@2x.png"
          eventLogo1="/event-logo-5@2x.png"
          checkmark="/checkmark1@2x.png"
          checkmark1="/checkmark-5@2x.png"
          groupOfProjects="/group-of-projects-2@2x.png"
          more="/more-2@2x.png"
        />
        <EVENTCARD2
          propFlex="1"
          propMinWidth="287px"
          propHeight="unset"
          propWidth="unset"
          propHeight1="264px"
          propFlex1="unset"
          eventLogo="/event-logo-6@2x.png"
          eventLogo1="/event-logo-7@2x.png"
          checkmark="/checkmark2@2x.png"
          checkmark1="/checkmark-7@2x.png"
          groupOfProjects="/group-of-projects-3@2x.png"
          more="/more-3@2x.png"
        />
      </div>
    </div>
  );
};

FourCardRow.propTypes = {
  className: PropTypes.string,
};

export default FourCardRow;
