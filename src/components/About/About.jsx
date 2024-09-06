import React from "react";
import styles from "./About.module.css";
import { Btn } from "../Form/Button/Btn";
function About() {
  const handleClick = () => {};

  return (
    <section id="about" className={`side-padding ${styles.about_container}`} style={{paddingTop: "40px"}}>
      <article className={styles.about_text}>
        Creative and detail-oriented graphic designer and Video Editor with 6
        years of experience in visual design, branding, and marketing. Proven
        ability to create compelling designs and Video that engage and inform
        audiences, meet clients' needs and exceed expectations. Seeking a
        challenging position where I can continue to grow and expand my
        skillset.
        <br />
        <br />
        Proficient in Adobe Creative Suite (Photoshop, Illustrator, Premier Pro),
        Strong understanding of color theory, typography, Video and design,
        principles Experience in branding and identity design Knowledge of print,
        production processes and techniques Ability to work under tight,
        deadlines and manage multiple projects simultaneously Excellent,
        communication and interpersonal skills.
      </article>
      <div className={`flex item-center justify-center ${styles.detail}`}>
        <div>Check out my videos and get inspired.</div>
        <Btn text="Youtube" handleClick={handleClick} />
      </div>
      <hr className={styles.hr_line} />
    </section>
  );
}

export default About;
