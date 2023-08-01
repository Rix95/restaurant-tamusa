import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            WE PUT THE <em>HAM</em> IN YOUR BURGERS. <br></br>TRY OUR WEEKLY
            SPECIALS!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR LOCATIONS</h1>
          <p className={styles.text}>
            1234 Culebra Rd.
            <br /> San Antonio, 78205
            <br /> (210) 123-4567
          </p>
          <p className={styles.text}>
            1234 Happy Avenue #C
            <br /> New Braunfels, 78130
            <br /> (830) 867-1011
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 10:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 10:00 – 00:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
