import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { profile, projects } from "@/content/portfolio";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <div className={styles.heroCopy}>
          <span className="eyebrow">{profile.availability}</span>
          <h1>
            Thoughtful<br />
            websites for<br />
            <em>real people.</em>
          </h1>
          <p className={styles.intro}>
            I&apos;m {profile.name.split(" ")[0]}, a frontend developer making digital experiences feel
            a little more human, useful, and considered.
          </p>
          <div className={styles.actions}>
            <Link className="button" href="/projects">
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/contact">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className={styles.heroNote}>
            <span className={styles.noteLine} />
            <span>Independent by nature. Collaborative by choice.</span>
          </div>
        </div>

        <div aria-label="Abstract illustration of a creative workspace" className={styles.heroArt} role="img">
          <div className={styles.artOrb} />
          <div className={styles.artRing} />
          <div className={styles.artPanel}>
            <div className={styles.panelTop}>
              <span><i /> <i /> <i /></span>
              <span>made with intention</span>
            </div>
            <div className={styles.panelBody}>
              <span className={styles.panelLabel}>A little about my work</span>
              <span className={styles.panelTitle}>Good ideas<br />deserve good<br /><em>interfaces.</em></span>
              <span className={styles.panelRule} />
              <span className={styles.panelCaption}>DESIGN — DEVELOPMENT — DETAILS</span>
            </div>
          </div>
          <span className={styles.artIndex}>01 / 04</span>
          <span className={styles.artCaption}>A thoughtful thing, made for the web.</span>
          <span aria-hidden="true" className={styles.artStar}>✳</span>
        </div>
      </section>

      <section aria-label="A few quick facts" className={styles.facts}>
        <div className={`container ${styles.factsInner}`}>
          <div><span>01</span><p>Curious by default</p></div>
          <div><span>02</span><p>Built for real life</p></div>
          <div><span>03</span><p>Always room to grow</p></div>
          <div className={styles.location}><span>BASED IN</span><p>{profile.location}</p></div>
        </div>
      </section>

      <section className={`container ${styles.workSection}`}>
        <div className={styles.sectionHeading}>
          <div>
            <span className="eyebrow">A few things I&apos;ve made</span>
            <h2>Selected <em>work.</em></h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={styles.projectGrid}>
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section className={styles.aboutBand}>
        <div className={`container ${styles.aboutInner}`}>
          <div>
            <span className="eyebrow">The person behind the pixels</span>
            <h2>Good work starts with <em>good questions.</em></h2>
          </div>
          <div className={styles.aboutAside}>
            <p>{profile.intro}</p>
            <Link className="text-link" href="/about">
              A little more about me <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.contactStrip}`}>
        <div>
          <span className="eyebrow">Have something in mind?</span>
          <h2>Let&apos;s make it <em>matter.</em></h2>
        </div>
        <Link className="button button--quiet" href="/contact">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
