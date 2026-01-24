import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import { getBlogsList } from '@/app/_libs/microcms';

export default async function BlogsPage() {
  const blogs = await getBlogsList().then((res) => res.contents).catch(() => []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.backRow}>
        <ButtonLink href="/">ページに戻る</ButtonLink>
      </div>
      <div className={styles.heading}>
        <h1 className={styles.title}>ブログ一覧</h1>
        <p className={styles.subtitle}>書いた記事のまとめです</p>
      </div>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <article key={blog.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{blog.title}</h2>
            <p className={styles.desc}>{blog.description}</p>
            <div className={styles.meta}>
              {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
            </div>
            <ButtonLink href={`/blogs/${blog.id}`}>詳しく見る</ButtonLink>
          </article>
        ))}
      </div>
    </div>
  );
}
