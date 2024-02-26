import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sameesha</h1>
        <p className={styles.description}>
        I'm a <b>web developer</b> experienced in React, Node.js and other advanced tools, 
        I am dedicated to delivering exceptional solutions that exceed users' expectations. 
        With 3 years of expertise, I strive to fulfill demands and create innovative web applications.
        </p>
        <div>
          <a href="mailto:rashani991021@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>   &nbsp;&nbsp;&nbsp;&nbsp;
          <a href='assets/cv/Resume Sameesha Rashani Kulasekara.pdf' className={styles.contactBtn} download>
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/my.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
