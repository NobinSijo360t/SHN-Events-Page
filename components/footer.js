import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.shnLogo}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
        </div>
      </div>
      <div className={styles.tinkerhub}>
        <div className={styles.organizationLogo}>
          <img
            className={styles.thsvgIcon}
            loading="lazy"
            alt=""
            src="/thsvg.svg"
          />
        </div>
        <div className={styles.separator} />
        <div className={styles.organizationLink}>
          <h2 className={styles.linkTinkerhuborg}>tinkerhub.org</h2>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
