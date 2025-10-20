import { motion } from "framer-motion";
import styles from "./Clients.module.css";

import plantCostumer from "../../assets/plant-costumer.png";
import machineCostumer from "../../assets/machine-costumer.png";
import carreerCostumer from "../../assets/carreer-costumer.png";
import oatCostumer from "../../assets/oat-costumer.png";
import buildCostumer from "../../assets/build-costumer.png";
import greenCostumer from "../../assets/green-costumer.png";

export default function Clients() {
  const circles = [
    { size: 10, left: "10%", top: "25%", delay: 0 },
    { size: 16, left: "25%", top: "60%", delay: 1 },
    { size: 12, left: "50%", top: "40%", delay: 2 },
    { size: 14, left: "70%", top: "55%", delay: 0.5 },
    { size: 20, left: "85%", top: "30%", delay: 1.5 },
    { size: 30, left: "55%", top: "60%", delay: 1.7 },
    { size: 15, left: "45%", top: "70%", delay: 1.5 },
    { size: 45, left: "65%", top: "80%", delay: 1.5 },
  ];

  const clients = [
    { src: plantCostumer, className: 'circle1' },
    { src: machineCostumer, className: 'circle2' },
    { src: carreerCostumer, className: 'circle3' },
    { src: oatCostumer, className: 'circle4' },
    { src: buildCostumer, className: 'circle5' },
    { src: greenCostumer, className: 'circle6' },
  ];

  return (
    <section className={styles["clients-section"]}>
      <h2 className={styles["clients-title"]}>НАШІ ЗАМОВНИКИ</h2>
      <div className={styles["clients-container"]}>
        
        {/* Плавающие кружки */}
        {circles.map((c, i) => (
          <motion.div
            key={i}
            className={styles.floatingCircle}
            style={{
              width: `${c.size}px`,
              height: `${c.size}px`,
              left: c.left,
              top: c.top,
            }}
            animate={{
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: c.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Фото клиентов */}
        {clients.map((client, index) => (
          <motion.img
            key={index}
            src={client.src}
            alt={`Client ${index}`}
            className={`${styles["client-circle"]} ${styles[client.className]}`}
            animate={{
              y: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
