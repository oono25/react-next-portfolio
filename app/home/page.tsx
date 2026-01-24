import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            こんにちは！👋
          </h1>
          <p className={styles.subtitle}>
            まだ学びの途中ですが、毎日少しずつ手を動かして成長を目指しています
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/skills" className={styles.primaryButton}>
              自己紹介
            </Link>
            <Link href="/blogs" className={styles.secondaryButton}>
              書いた記事
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.icon}>�</div>
          <h3>自己紹介</h3>
          <p>自分のプロフィールと経歴についてご紹介します</p>
          <Link href="/profile" className={styles.link}>詳しく見る →</Link>
        </div>
        
        <div className={styles.featureCard}>
          <div className={styles.icon}>📝</div>
          <h3>ブログ</h3>
          <p>技術記事や開発に関する情報を発信しています</p>
          <Link href="/blogs" className={styles.link}>詳しく見る →</Link>
        </div>
        
        <div className={styles.featureCard}>
          <div className={styles.icon}>🏆</div>
          <h3>資格</h3>
          <p>取得した資格や認定情報を掲載しています</p>
          <Link href="/certifications" className={styles.link}>詳しく見る →</Link>
        </div>
        
        <div className={styles.featureCard}>
          <div className={styles.icon}>✉️</div>
          <h3>お問い合わせ</h3>
          <p>お仕事のご依頼やご質問はこちらから</p>
          <Link href="/contact" className={styles.link}>詳しく見る →</Link>
        </div>
      </section>
    </div>
  );
}
