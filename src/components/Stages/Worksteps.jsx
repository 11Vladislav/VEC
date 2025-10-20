import { motion } from "framer-motion";
import styles from './Worksteps.module.css';

import  phone  from "../../assets/phone-icon.svg";
import  contract from "../../assets/list-icon.svg";
import  flask from "../../assets/lab-icon.svg";
import  microscope from "../../assets/microscope-icon.svg";
import  report from "../../assets/check-icon.svg";
import  arrow  from "../../assets/green-arrow-right.svg";



export default function WorkSteps() {


const steps  = [
    { icon: phone, text: "Замовлення" },
    { icon: contract, text: "Договір" },
    { icon: flask, text: "Виїзд та відбір проб" },
    { icon: microscope, text: "Аналіз: від 3 днів" },
    { icon: report, text: "Протокол досліджень" },
]

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>ЯК МИ ПРАЦЮЄМО</h2>

      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepItem}>
            <motion.div
              className={styles.iconBlock}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={step.icon} alt={step.text} className={styles.icon} />
              <p className={styles.text}>{step.text}</p>
            </motion.div>

            {index < steps.length - 1 && (
              <img src={arrow} alt="arrow" className={styles.arrow} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}