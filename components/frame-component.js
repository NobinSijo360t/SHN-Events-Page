import HEADER from "./h-e-a-d-e-r";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={[styles.headerWrapper, className].join(" ")}>
      <HEADER />
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
