import logo from "/logo.png";
import styles from "./Navbar.module.css";
import Container from "./Container";
import LandingHero from "./LandingHero";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container style={{display: "flex", alignItems: "center", gap: "20px"}}>
        <div>Home</div>
        <div>Courses</div>
      </Container>
      <LandingHero/>
    </nav>
  );
}
