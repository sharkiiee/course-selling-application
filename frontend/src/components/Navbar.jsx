import styles from "./Navbar.module.css";
import Container from "./Container";
import {IconSearch} from "@tabler/icons-react";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navContent}>
          <div className={styles.navItems}>
            <div style={{fontSize: "larger", fontWeight: "900"}}>100<span style={{color: "red"}}>x</span>Devs</div>
            <div>Home</div>
            <div>Courses</div>
          </div>
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
