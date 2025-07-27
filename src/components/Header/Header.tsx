import styles from '@/styles/Header.module.scss';
import { sampleProducts } from '@/data/products';

export default function Header() {
  const categories = [...new Set(sampleProducts.map(product => product.category))];

  return (
    <header className={styles.header}>
      <div className={styles.header_branding}></div>
      <div className={styles.header_product_categories}>
        {categories.map((category) => (
          <span key={category} className={styles.category}>
            {category}
          </span>
        ))}
      </div>
    </header>
  );
}