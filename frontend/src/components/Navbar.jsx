import styles from "./Navbar.module.css";
import Container from "./Container";
import {IconSearch} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { IconMenu2} from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

   return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navContent}>

          <div style={{fontSize: "larger", fontWeight: "900"}}>100<span style={{color: "red"}}>x</span>Devs</div>

          {isMenuOpen ? (
            <IconX onClick={toggleMenu} className={styles.menuIcon} />
          ) : (
            <IconMenu2 onClick={toggleMenu} className={styles.menuIcon} />
          )}

          {/* NavItems starts from here */}
          <ul className={isMenuOpen ? styles.menuOpen : styles.navItems}>

            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>Courses</li>
          </ul>

          {/* Input Container and logo start from here */}
          <div className={styles.navProfile}>
            <div className={styles.inputContainer}>
            <IconSearch className={styles.seachIcon} />
            <input
              type="text"
              placeholder="Type to search"
            />
          </div>
          <button>S</button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
