import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./BrandsSlider.module.css";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

// логотипы клиентов
import amic1 from "../../assets/Amic1.png";
import amsz from "../../assets/amsz.png";
import birdFabric from "../../assets/bird-fabric.png";
import henkel from "../../assets/henkel.png";
import newProducts from "../../assets/new-products.png";
import tbg from "../../assets/tbg.png";
import wog from "../../assets/WOG1.png";
import cdm from "../../assets/cdm-costumer.jpg";
import mCostumer from "../../assets/m-costumer.jpg";
import petrik from "../../assets/petrik-costumer.jpg";
import pgp from "../../assets/pgp-costumer.jpg";
import rivne from "../../assets/rivne-costumer.jpg";
import veralia from "../../assets/verallia-costumer.jpg";
import vipcem from "../../assets/vipcem-costumer.jpg";


export default function BrandsSlider() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const { current } = containerRef;
    if (!current) return;
    const scrollAmount = 300; // px за один клик
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const brands = [amic1, amsz, birdFabric, henkel, newProducts, tbg, wog, cdm, mCostumer, petrik, pgp, rivne, veralia, vipcem];

  return (
    <section className={styles.sliderSection}>

      <div className={styles.sliderWrapper}>
        <button className={styles.arrowBtn} onClick={() => scroll("left")}>
          <img src={arrowLeft} alt="Влево" />
        </button>

        <motion.div
          className={styles.slider}
          ref={containerRef}
          whileTap={{ cursor: "grabbing" }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className={styles.slide}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={brand} alt={`Brand ${index}`} />
            </motion.div>
          ))}
        </motion.div>

        <button className={styles.arrowBtn} onClick={() => scroll("right")}>
          <img src={arrowRight} alt="Вправо" />
        </button>
      </div>
    </section>
  );
}
