import Image from "next/image";
import type { Project } from "@/content/portfolio";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <Image
          alt={project.imageAlt}
          className={styles.image}
          height={800}
          src={project.image}
          width={1200}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.cardMeta}>
          <span>{project.category}</span>
          <span>{project.number}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul aria-label={`${project.title} technologies`} className={styles.tags}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
