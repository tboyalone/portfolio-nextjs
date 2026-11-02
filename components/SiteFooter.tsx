import Link from "next/link";
import { navigation, profile, socialLinks } from "@/content/portfolio";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.footIntro}>
            <span className="eyebrow">Have a good one in mind?</span>
            <h2>Let&apos;s make it<br />mean something.</h2>
            <a className={styles.email} href={`mailto:${profile.email}`}>
              {profile.email} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.footLinks}>
            <div>
              <p className={styles.label}>Explore</p>
              <ul>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={styles.label}>Elsewhere</p>
              <ul>
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} rel="noreferrer" target="_blank">
                      {item.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {profile.name}. Replace this placeholder content anytime.</span>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
