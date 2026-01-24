import styles from './page.module.css';
import { getAllSkillsList } from '@/app/_libs/microcms';

export default async function SkillsPage() {
  const certifications = await getAllSkillsList().catch(() => []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.backRow}>
        <a className={styles.backLink} href="/">ページに戻る</a>
      </div>
      <div className={styles.heading}>
        <h1 className={styles.title}>プロフィール</h1>
        <p className={styles.subtitle}>取得した資格と認定情報</p>
      </div>

      <div className={styles.grid}>
        {certifications.map((skill) => (
          <div key={skill.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{skill.category}</h2>
            <div className={styles.items}>{skill.items}</div>
            <div className={styles.level}>レベル: {skill.level}</div>
            {skill.description && (
              <div className={styles.desc} dangerouslySetInnerHTML={{ __html: skill.description }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
