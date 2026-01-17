import styles from './not-fund.module.css';

export default function NotFund() {
    return (
        <div className={styles.container}>
            <dl>
                <dt className={styles.title}>ページが見つかりませんでした</dt>
                <dd className={styles.message}> あなたがアクセスしようとしたページは存在しませんでした
                    <br />
                    URLを確認してください。。
                </dd>
            </dl>
        </div>
    );
}