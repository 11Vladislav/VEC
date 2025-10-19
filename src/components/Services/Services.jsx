import styles from "./Services.module.css";
import AnimatedCircles from "./AnimatedCircles";

import service1 from "../../assets/service01.jpg";
import service2 from "../../assets/service02.jpg";
import service3 from "../../assets/service03.jpg";
import service4 from "../../assets/service04.jpg";
import service5 from "../../assets/service05.jpg";
import service6 from "../../assets/service06.jpg";
import serviceBig from "../../assets/service-big.jpg";

import { ReactComponent as AccIcon } from "../../assets/acc-icon.svg";
import { ReactComponent as BagIcon } from "../../assets/bag-icon.svg";
import { ReactComponent as ClockIcon } from "../../assets/clock-icon.svg";
import { ReactComponent as ProtIcon } from "../../assets/prot-icon.svg";
import { ReactComponent as RoundIcon } from "../../assets/round-icon.svg";
import { ReactComponent as ServIcon } from "../../assets/serv-icon.svg";



export default function Services() {
  
    const topServices = [
        {img: service1, title: "Аналіз повітря"},
        {img: service2, title: "Аналіз води"},
        {img: service3, title: "Аналіз ґрунту"},
        {img: service4, title: "Радіологія"},
        {img: service5, title: "Аналіз робочої зони"},
        {img: service6, title: "Аналіз небезпечності відходів"},

    ]
const bottomFeatures = [
    { icon: <AccIcon />, title: "Акредитація" },
    { icon: <ProtIcon />, title: "Офіційний протокол" },
    { icon: <ServIcon />, title: "Сучасне обладнання" },
    { icon: <BagIcon />, title: "10+ років досвіду" },
    { icon: <ClockIcon/>, title: "Швидкість" },
    { icon: <RoundIcon />, title: "Комплексні рішення" },
];
     return (
    <section className={styles.services}>
      <h2 className={styles.servicesTitle}>Послуги ТОВ “Всеукраїнська екологічна компанія” для Бізнесу:</h2>
      {/* верхние иконки */}
      <div className={styles.topRow}>
        {topServices.map((s, i) => (
          <div key={i} className={styles.serviceItem}>
            <img src={s.img} alt={s.title} />
            <p>{s.title}</p>
          </div>
        ))}
      </div>

      {/* большое фото + текст */}
      <div className={styles.contentRow}>
        <div className={styles.imageWrapper}>
          <img src={serviceBig} alt="Лабораторія" />
        </div>
        <div className={styles.textWrapper}>
          <p>Наша лабораторія ТОВ “Всеукраїнська екологічна компанія” — має свідоцтво підтвердження компетенції ДП «ЖИТОМИРСТАНДАРТМЕТРОЛОГІЯ» Міністерства економіки України від 01.09.2023р. № 032/2023, 
            що засвідчує її технічну компетентність, надійність та відповідність вимогам національних стандартів для проведення вимірювань.
             Тому її виміри вважаються чинними всіма інстанціями, включаючи держоргани.</p>
            <p>Сучасне обладнання дозволяє робити точні вимірювання за короткі терміни.</p>
           <p> Вже понад 10 років ми робимо заміри й аналізи та маємо досвід роботи з різними сферами бізнесу: промислові підприємства, агросектор, будівельна сфера, ритейл та ін.</p>
           <p> У своїй роботі ми використовуємо комплексний підхід, адже також надаємо послуги з розробки еколого-технічної документації для підприємств. 
            Це  зменшує кількість підрядників, навантаження бюрократичними документами та дозволяє одразу зосередитися на виконанні завдань.</p>
        </div>
      </div>

      {/* анимированные круги + преимущества */}
      <div className={styles.bottomBlock}>
         <AnimatedCircles /> 
        <div className={styles.bottomRow}>
          {bottomFeatures.map((f, i) => (
            <div key={i} className={styles.featureItem}>
              <div className={styles.icon}>{f.icon}</div>
              <p>{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}