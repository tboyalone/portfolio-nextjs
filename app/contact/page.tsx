import type { Metadata } from "next";
import Link from "next/link";
import { profile, socialLinks } from "@/content/portfolio";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Alex Morgan about a project, collaboration, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.heading}>
        <span className="eyebrow">A good place to start</span>
        <h1>
          Have a thing<br />
          <em>in mind?</em>
        </h1>
        <p>
          Whether you have a clear brief or just the beginning of an idea, I&apos;d
          love to hear what you&apos;re thinking. The best projects start with a conversation.
        </p>
      </header>

      <section aria-label="Contact details" className={styles.contactGrid}>
        <div className={styles.emailCard}>
          <span className={styles.cardLabel}>THE DIRECT ROUTE</span>
          <h2>Say hello.</h2>
          <p>For project enquiries, collaborations, or a friendly wave.</p>
          <a className={styles.emailLink} href={`mailto:${profile.email}`}>
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.detailsCard}>
          <div>
            <span className={styles.cardLabel}>CURRENTLY</span>
            <p className={styles.status}><span aria-hidden="true" />{profile.availability}</p>
          </div>
          <div>
            <span className={styles.cardLabel}>LOCATION</span>
            <p>{profile.location}<br /><span className={styles.secondary}>Open to working across time zones</span></p>
          </div>
          <div>
            <span className={styles.cardLabel}>ELSEWHERE</span>
            <div className={styles.socials}>
              {socialLinks.map((item) => (
                <a href={item.href} key={item.label} rel="noreferrer" target="_blank">
                  {item.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <aside className={styles.note}>
        <span aria-hidden="true">✳</span>
        <p>
          This is a placeholder portfolio. Update the email and social URLs in{" "}
          <code>content/portfolio.ts</code> before publishing.
        </p>
      </aside>

      <div className={styles.backLink}>
        <Link className="text-link" href="/projects">
          Browse selected work <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
