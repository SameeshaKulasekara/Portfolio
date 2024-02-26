import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/programmer.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <hr></hr>
              <br></br>
              <p>
              I have great experience in building user interface and user experience of websites and 
              web applications using languages like HTML, CSS, and JavaScript along with frameworks/libraries like React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <hr></hr>
              <br></br>
              <p>
              This will include the server-side logic of web applications, handling databases, 
              user authentication, and server configuration. I have very good experience with Node.js 
              and Express.js which are common technologies for backend development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <hr></hr>
              <br></br>
              <p>
              I specialize in creating visually appealing and user-friendly interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/database.png")} alt="Database icon" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <div className={styles.aboutItemText}>
              <h3>Database Management</h3>
              <hr></hr>
              <br></br>
              <p>
                Understanding and working with databases is very important for web development. 
                This includes designing database schemas, writing SQL queries, and integrating databases 
                with back-end systems. I have very good experience with common databases MySQL and 
                MongoDB for this.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
