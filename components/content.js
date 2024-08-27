import Hero from "./hero";
import PropTypes from "prop-types";
import styles from "./content.module.css";

const Content = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.overlay} />
      <Hero />
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
