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
        {profile.avatar && (
          <div className={styles.avatarWrapper}>
            <Image
              src={profile.avatar.url}
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
          <p className={styles.bio}>{profile.bio}</p>
        </div>
      </div>
    </div>
  );
}
