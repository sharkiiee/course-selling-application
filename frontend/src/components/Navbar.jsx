import styles from "./Navbar.module.css";
import Container from "./Container";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navContent}>
          <div className={styles.navItems}>
            <div style={{fontSize: "larger", fontWeight: "900"}}>100xDevs</div>
            <div>Home</div>
            <div>Courses</div>
          </div>
          <div className={styles.navProfile}>
            <div>Search</div>
            <div>Profile</div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
