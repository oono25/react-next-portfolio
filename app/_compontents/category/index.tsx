import type { Category } from '@/app/_libs/microcms';
import styles from './index.module.css';

type Pops = {
    category: Category;
};
export default function Category({ category }: Pops) {
    return <span className={styles.category}>{category.name}</span>;
}
