
import styles from "./page.module.css";
import Image from "next/image";

import ButtonLink from "@/app/_components/ButtonLink";
import { getSkillsList, getProfile, getBlogsList } from "@/app/_libs/microcms";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string; 
  createdAt: string;
};

const data: {
  contents: News[] } = {
    contents: [
      {
        id: "1",
        title: "React + Next.jsでSPA開発",
        category: {
          name: "フロントエンド",
        },
        publishedAt: "2024/01/15",
        createdAt: "2024/01/15",
      },
      {id: "2",
        title: "TypeScriptを用いた型安全なコード",
        category: {
          name: "スキル",
        },
        publishedAt: "2024/01/10",
        createdAt: "2024/01/10",
      },
      {
        id: "3",
        title: "Tailwind CSSでレスポンシブデザイン実装",
        category: {
          name: "デザイン",
        },
        publishedAt: "2023/12/20",
        createdAt: "2023/12/20",
      }
    ]
  };

export default async function Home() {
  let skills: any[] = [];
  let profile: any = null;
  let blogs: any[] = [];
  
  try {
    const skillsData = await getSkillsList();
    skills = skillsData.contents || [];
  } catch (error) {
    console.error('Failed to fetch skills:', error);
  }

  try {
    profile = await getProfile();
  } catch (error) {
    console.error('Failed to fetch profile:', error);
  }

  try {
    const blogsData = await getBlogsList({ limit: 6 });
    blogs = blogsData.contents || [];
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
  }

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className="title">{profile?.name || '私のポートフォリオへようこそ'}</h1>
          <p className="description">{profile?.bio || 'フロントエンド開発とWeb設計に情熱を持つエンジニアです。最新のテクノロジーを活用して、ユーザー体験に優れたアプリケーションを創造します。'}</p>
          {profile?.email && <p className={styles.profileEmail}>メール: {profile.email}</p>}
        </div>
        <img className={styles.bgimg} src="/img-mv.jpg" alt="ポートフォリオ" width={4000} height={1200}/>
      </section>

      {profile && (
        <section className={styles.profileSection}>
          <h2 className="subtitle">プロフィール</h2>
          <div className={styles.profileCard}>
            <h3>{profile.name}</h3>
            <p className={styles.profileTitle}>{profile.title}</p>
            <p className={styles.profileBio}>{profile.bio}</p>
            {(profile.github || profile.linkedin) && (
              <div className={styles.socialLinks}>
                {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              </div>
            )}
          </div>
        </section>
      )}
      {skills.length > 0 && (
        <section className={styles.skills}>
          <h2 className="subtitle">スキル</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill: any) => (
              <div key={skill.id} className={styles.skillCard}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <div className={styles.skillBar}>
                  <div 
                    className={styles.skillBarFill}
                    style={{ width: `${skill.proficiency || 0}%` }}
                  />
                </div>
                <p className={styles.skillLevel}>{skill.proficiency || 0}%</p>
                {skill.description && <p className={styles.skillDescription}>{skill.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
      {blogs.length > 0 && (
        <section className={styles.blogs}>
          <h2 className="subtitle">ブログ</h2>
          <div className={styles.blogsGrid}>
            {blogs.map((blog: any) => (
              <article key={blog.id} className={styles.blogCard}>
                {blog.thumbnail && (
                  <img 
                    src={blog.thumbnail.url} 
                    alt={blog.title}
                    className={styles.blogThumbnail}
                  />
                )}
                <div className={styles.blogContent}>
                  <time className={styles.blogDate} dateTime={blog.publishedAt}>
                    {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
                  </time>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                  <p className={styles.blogDescription}>{blog.description}</p>
                  {blog.tags && blog.tags.length > 0 && (
                    <div className={styles.blogTags}>
                      {blog.tags.map((tag: string) => (
                        <span key={tag} className={styles.blogTag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className={styles.buttonWrapper}>
            <ButtonLink href="/blogs">ブログ一覧を見る</ButtonLink>
          </div>
        </section>
      )}
      <section className={styles.news}>
        <h2 className="subtitle">プロジェクト紹介</h2>
        <ul className={styles.newslist}>
          {data.contents.map((news) => (
            <li key={news.id} className={styles.newsitem}>
              <time className={styles.newstime} dateTime={news.publishedAt}>
                {news.publishedAt}
              </time>
              <p className={styles.newstitle}>{news.title}</p>
            </li>
          ))}
        </ul>
        <div className={styles.buttonWrapper}>
          <ButtonLink href="/news">プロジェクト一覧を見る</ButtonLink>
        </div>
      </section>
    </>
  );
}