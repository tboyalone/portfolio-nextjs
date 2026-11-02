"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, profile } from "@/content/portfolio";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link
          aria-label={`${profile.name}, home`}
          className={styles.brand}
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <span aria-hidden="true" className={styles.brandMark}>
            to
          </span>
          <span className={styles.brandName}>{profile.name}</span>
        </Link>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>

        <nav
          aria-label="Main navigation"
          className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`}
          id="primary-navigation"
        >
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                href={item.href}
                key={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className={styles.headerCta} href="/contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
