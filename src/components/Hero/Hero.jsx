import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.jpg"; // фото вынести в папку src/assets

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={heroImg} alt="Лабораторія" className={styles.image} />
      <div className={styles.circle}>
        <h1 className={styles.title}>Акредитована екологічна<br/> лабораторія для підприємств</h1>
        
        <p className={styles.text}>Аналіз води, ґрунтів, повітря, радіологія та ін.</p>
        <button className={styles.btn}>БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ</button>
      </div>
        <div className={styles.decor}>
          <span className={`${styles.round} ${styles.c1}`}></span>
          <span className={`${styles.round} ${styles.c2}`}></span>
          <span className={`${styles.round} ${styles.c3}`}></span>
          <span className={`${styles.round} ${styles.c4}`}></span>
          <span className={`${styles.round} ${styles.c5}`}></span>
        </div>
    </section>
  );
};

export default Hero;
