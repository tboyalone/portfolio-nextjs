import type { Metadata } from "next";
import { experience, focusAreas, profile, skills } from "@/content/portfolio";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "A little about Alex Morgan's approach, experience, and frontend development skills.",
};

export default function AboutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.intro}>
        <span className="eyebrow">A little context</span>
        <h1>
          Developer by trade.<br />
          <em>Curious by nature.</em>
        </h1>
        <p>{profile.biography}</p>
      </header>

      <section aria-labelledby="approach-heading" className={styles.approach}>
        <div className={styles.sectionLead}>
          <span className="eyebrow">How I like to work</span>
          <h2 id="approach-heading">Care about the details.<br /><em>Keep sight of the whole.</em></h2>
        </div>
        <div className={styles.focusList}>
          {focusAreas.map((item) => (
            <article className={styles.focusItem} key={item.number}>
              <span className={styles.number}>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <span aria-hidden="true" className={styles.plus}>↗</span>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="skills-heading" className={styles.skillsSection}>
        <div>
          <span className="eyebrow">The toolkit</span>
          <h2 id="skills-heading">Tools I reach for.</h2>
          <p>A living list, not a checklist. I enjoy learning the right tool for the job.</p>
        </div>
        <ul className={styles.skillList}>
          {skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </section>

      <section aria-labelledby="experience-heading" className={styles.experienceSection}>
        <div className={styles.experienceLead}>
          <span className="eyebrow">A few chapters</span>
          <h2 id="experience-heading">The short version.</h2>
        </div>
        <ol className={styles.timeline}>
          {experience.map((item) => (
            <li className={styles.timelineItem} key={item.period}>
              <span className={styles.period}>{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <p>{item.detail}</p>
              </div>
              <span aria-hidden="true" className={styles.timelineDot} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
