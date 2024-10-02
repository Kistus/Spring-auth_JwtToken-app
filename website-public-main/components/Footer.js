import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailchimp,
  faInstagram,
  faWhatsappSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.socialContainer}>
            <div className={styles.social}>
              <a href="mailto:kostakalenik2002.09k@gmail.com" target="blanck">
                <FontAwesomeIcon
                  className={styles.youtube}
                  icon={faMailchimp}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.social}>
              <a href="https://instagram.com/klencost"target="blanck">
                <FontAwesomeIcon
                  className={styles.instagram}
                  icon={faInstagram}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.social}>
              <a href="https://api.whatsapp.com/send?phone=48578356200"target="blanck">
                <FontAwesomeIcon
                  className={styles.github}
                  icon={faWhatsappSquare}
                  size="2x"
                />
              </a>
            </div>
            <div className={styles.social}>
              <a href="https://www.facebook.com/kasta.klon"target="blanck">
                <FontAwesomeIcon
                  className={styles.patreon}
                  icon={faFacebook}
                  size="2x"
                />
              </a>
            </div>
          </div>
          <div className={styles.desc}>
            <p>You can find me here</p>
          </div>
        </div>
        <div className={styles.rights}>
          <p> &copy;All rights reserved.</p>
        </div>
      </div>
    
  );
};

export default Footer;
