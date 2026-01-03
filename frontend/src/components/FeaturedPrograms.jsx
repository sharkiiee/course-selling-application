import Container from "./Container";

import styles from "./FeaturedPrograms.module.css";

import nodejs from "/nodejs.png";

export default function FeaturedPrograms() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <div>
      <div className={styles.featuredHeading}>
          <h2>Featured Programs</h2>
          <p>Our most comprehensive and impactful learning experiences</p>
        </div>
        <div className={styles.coursesGrid}>
          <div className={styles.courseCard}>
            <img src={nodejs} alt="Node.js" />
            <div className={styles.courseInfo}>
              <h3>100xSchool Combined Bootcamp</h3>
              <p>
                Web dev (Every Friday) Devops (Every Friday) Machine Learning
                and AI (Every Saturday) Web3 (Every Sunday) DSA (Every Thursday)
              </p>
              <h4>
                ₹5,999{" "}
                <span style={{ textDecoration: "line-through" }}>₹8,999</span>
              </h4>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
