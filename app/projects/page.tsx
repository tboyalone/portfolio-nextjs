import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/portfolio";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected frontend and digital experience projects by Alex Morgan.",
};

export default function ProjectsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.heading}>
        <div>
          <span className="eyebrow">Selected work · 2022—2025</span>
          <h1>A few things<br /><em>made with care.</em></h1>
        </div>
        <p>
          A collection of explorations, collaborations, and ideas brought to life
          on the web. These are editable project placeholders, ready for your own work.
        </p>
      </header>
      <div aria-label="Portfolio projects" className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
      <p className={styles.note}>
        <span aria-hidden="true">✳</span> Project descriptions, links, and images are sample content—swap in your own.
      </p>
    </div>
  );
}
