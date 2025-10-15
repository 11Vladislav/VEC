import { motion } from "framer-motion";
import styles from "./Services.module.css";

const circles = [
  { size: 6, x: "5%", y: "10%", delay: 0 },
  { size: 12, x: "15%", y: "40%", delay: 1 },
  { size: 20, x: "35%", y: "80%", delay: 2 },
  { size: 30, x: "45%", y: "5%", delay: 0.5 },
  { size: 10, x: "65%", y: "85%", delay: 1.5 },
  { size: 18, x: "85%", y: "110%", delay: 0.8 },
];

export default function AnimatedCircles() {
  return (
    <div className={styles.circlesWrapper}>
      {circles.map((c, i) => (
        <motion.div
          key={i}
          className={styles.circle}
          style={{
            width: c.size,
            height: c.size,
            left: c.x,
            top: c.y,
          }}
          animate={{
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: c.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
