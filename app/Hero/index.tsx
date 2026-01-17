import Image from 'next/image';
import styles from './index.module.css';

type Props = {
    title: string;
    subtitle: string;
};

export default function Hero({ title, subtitle }: Props) {
    return (
        <section className={styles.container}>
            <div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <Image
                className={styles.bgimmg}
                src='/img-mv.jpg'
                alt=''
                width={4000}
                height={3000}
            />
        </section>
    );
}