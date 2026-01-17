import Image from "next/image";
import Link from 'next/link';

import styles from './index.module.css';
import Category from "../category";


type News = {
    id: string;
    title: string;
    category:{
        name: string;
    };
    puplishedAt: string;
    crreatedAt: string;
}

type NewsListProps = {
    news: News[];
};

export default function NewsList({ news }: NewsListProps)  {
    if (news.length === 0) {
        return <p>記事がありません</p>;
    }
      return (
        <ul>
            {news.map((article) => (
                        <li key={article.id}>
                            <div className={styles.list}></div>
                            <Link href={`/news/${article.id}`} className={styles.link}>
                            <Image
                                className={styles.categoryIcon}
                                src='/no image.png'
                                alt='no image'
                                width={1200}
                                height={630}
                            />
                            <dl className={styles.category}>
                                <dt className={styles.categoryName}>{article.category.name}</dt>
                            </dl>
                            <p>{article.title}</p>
                            </Link>
                        </li>
            ))}
            </ul>
          );
    }
 