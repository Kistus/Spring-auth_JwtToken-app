import styles from "../styles/About.module.css";
import Head from "next/head";
import Image from "next/image";


const About = () => {
  return (
    <>
      <Head>
        <title>Resources</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Kanstantsin</h1>
          <div className={styles.containerImage}>
            <Image
              src="../public/kist.jpg"
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </div>
          <div className={styles.footContainer}>
            <div className={styles.block}>
              <h5>Eduaction</h5>
              <ul>
                <li>Gdansk University of Technology</li>
                <li>4th year</li>
                <li>Bachelour of Engeneering</li>
                <li>Computer Science</li>
                <li>2021 - 2025</li>
                <li>GPA 4.3\5</li>
              </ul>
            </div>
            <div className={styles.block}>
              <h5>Biography</h5>
              <ul>
                <li>Born in Belarus</li>
                <li>At age 18 moved to Poland</li>
                <li>Currently in Gdansk</li>
                <li>Student</li>
              </ul>
            </div>
            <div className={styles.block}>
              <h5>Hobbies</h5>
              <ul>
                <li>Gym</li>
                <li>Calistenics</li>
                <li>Football</li>
                <li>Swimming</li>
                <li>RasberryPI</li>
                <li>Software development</li>
                <li>Travelling</li>
                <li>Nature</li>
                <li>Active relax</li>
              </ul>
            </div>
            <div className={styles.block}>
              <h5>Symbol</h5>
              <ul>
                <li>Boar</li>

              </ul>
            </div>
            <div className={styles.block}>
              <h5>Music</h5>
              <ul>
                <li>Rap/hip-hop</li>
                <li>Pop-punk</li>
                <li>lofi</li>
                <li>EDM</li>
                <li>Classic pop and not only...</li>
              </ul>
            </div>
          </div>

          {/* <div className={styles.buttonContainerAbout}>
            <button className={styles.myButtonAbout}>
              <a href="/api/show">На сервер</a>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
