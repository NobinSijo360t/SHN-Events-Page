import Hero from "./hero";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.heroContainer, className].join(" ")}>
      <div className={styles.overlay} />
      <Hero />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
