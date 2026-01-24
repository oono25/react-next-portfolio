import Image from 'next/image';
import Link from 'next/link' ;
import styles from './index.module.css';
import Menu from '../Menu';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logoLink}>
                <Image 
                    src ='/logo.svg' 
                    alt='SIMPLE' 
                    width={348} 
                    height={133}
                    priority
                />
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <Link href='/profile'>profile</Link>
                    </li>
                    <li>
                        <Link href='/skills'>sukils</Link>
                    </li>
                    <li>
                        <Link href='/blogs'>blogs</Link>
                    </li>
                </ul>
            </nav>
            <Menu />
        </header>
    );
}