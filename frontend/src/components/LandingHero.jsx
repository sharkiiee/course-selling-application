import drop from "/world.mp4";
import styles from "./LandingHero.module.css";
import logo from "/logo.png";
import Container from "./Container";
import {IconSearch} from "@tabler/icons-react";
export default function LandingHero() {
  return (
    <div style={{position:"relative"}}>
      <Container>
        <div className={styles.textOverlay}>
          <div
            style={{
              display: "flex",
              textTransform: "none",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", borderRadius: "50%" }}
            />
            Mentored by Sarthak Agrawal
          </div>
          <h1 className={`lato-font ${styles.textHeading}`}>
            Choose your learning path
          </h1>
          <p className="lato-font">
            Master real engineering skills with hands-on mentorship. From
            full-stack development to DevOps — get job-ready with structured,
            industry-focused programs.
          </p>
          <div className={styles.inputContainer}>
            <IconSearch className={styles.seachIcon} />
            <input
              type="text"
              placeholder="Search for courses, topics, technologies..."
            />
          </div>
        </div>
      </Container>
        
      {/* //////////////////////////////////////////////////// */}
      <div className={styles.videoContainer}>
        <video
          src={drop}
          width="100%"
          height="600"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className={styles.dimOverlay}></div>
      </div>
    </div>
  );
}
