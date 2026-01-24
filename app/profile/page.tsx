import Image from 'next/image';
import styles from './page.module.css';
import { getProfile } from '@/app/_libs/microcms';

export default async function ProfilePage() {
  const profile = await getProfile().catch(() => null);

  if (!profile) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.backRow}>
          <a className={styles.backLink} href="/">ページに戻る</a>
        </div>
        <p>プロフィールを読み込めませんでした。</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.backRow}>
        <a className={styles.backLink} href="/">ページに戻る</a>
      </div>
      <div className={styles.inner}>
        {profile.image && (
          <div className={styles.avatarWrapper}>
            <Image
              src={profile.image.url}
              alt={profile.name}
              width={220}
              height={220}
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        )}
        <div>
          <h1 className={styles.name}>{profile.name}</h1>
          <div className={styles.role}>{profile.title}</div>
          <div 
            className={styles.bio}
            dangerouslySetInnerHTML={{ __html: profile.bio }}
          />
          {profile.skills && (
            <div className={styles.skills}>
              <strong>技術スタック:</strong>
              <div dangerouslySetInnerHTML={{ __html: profile.skills.replace(/\n/g, '<br />') }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
