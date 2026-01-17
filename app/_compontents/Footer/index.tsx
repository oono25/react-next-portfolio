import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href='/news'>ニュース</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='/members'>メンバー</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='/contact'>お問合せ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.crt}>© SIMPE. All RRights Reserved 2024</p>
        </footer>
    )
}