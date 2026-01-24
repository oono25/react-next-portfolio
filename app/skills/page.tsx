import styles from './page.module.css';
import { getCertificationsList } from '@/app/_libs/microcms';

export default async function SkillsPage() {
  const certifications = await getCertificationsList().then((res) => res.contents).catch(() => []);

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
        {certifications.map((cert) => (
          <div key={cert.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{cert.name}</h2>
            <div className={styles.issuer}>発行: {cert.issuer}</div>
            <div className={styles.date}>{new Date(cert.issuedDate).toLocaleDateString('ja-JP')}</div>
            {cert.description && (
              <p className={styles.desc}>{cert.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
