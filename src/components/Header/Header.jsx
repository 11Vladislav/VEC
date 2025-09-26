import { useState } from "react";
import styles from "./Header.module.css";
import logo from '../../assets/logo.png';
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt='logo'/>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#analiz">АНАЛІЗИ</a></li>
          <li><a href="#docs">РОЗРОБКА ДОКУМЕНТІВ</a></li>
          <li><a href="#green">"ЗЕЛЕНИЙ" КОНСУЛЬТАНТ"</a></li>
          <li><a href="#lic">ЛІЦЕНЗІЇ</a></li>
          <li><a href="#contacts">КОНТАКТИ</a></li>
        </ul>
      </nav>
 <div className={styles.rightBlock}>
        {/* Телефон */}
        <a href="tel:+380988080928" className={styles.phone}>
          +380 (98) 808-09-28
        </a>

        {/* Поиск */}
        <div className={styles.searchWrapper}>
          <button
            className={styles.searchBtn}
            onClick={() => setShowSearch(!showSearch)}
          >
            <SearchIcon />
          </button>
          {showSearch && (
            <input
              type="text"
              placeholder="Пошук..."
              className={styles.searchInput}
              autoFocus
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;