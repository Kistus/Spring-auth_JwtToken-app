import styles from '../styles/Home.module.css'


const Header = () => {
  return (
    <header className="banner">
      <div className={styles.mainHeader}>
        <h1 className={styles.title}>Kanstantsin Kalenik</h1>
        <h3 className={styles.description}>
          IT enjoyer, who loves to create and share
        </h3>
      </div>
    </header>
  );
};
export default Header