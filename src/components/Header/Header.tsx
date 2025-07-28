import styles from '@/styles/Header.module.scss';
import { sampleProducts } from '@/data/products';
import Image from 'next/image';

export default function Header() {
  const categories = [...new Set(sampleProducts.map(product => product.category))];

  return (
    <header className={styles.header}>
      <div className={styles.header_branding}></div>
      <div className={styles.header_product_categories}>
        <div className={styles.categories_container}>
          {categories.map((category) => (
            <span key={category} className={styles.category}>
              {category}
            </span>
          ))}
        </div>
        <div className={styles.header_icons}>
          <button className={styles.icon_button}>
            <Image 
              src="/basket.svg" 
              alt="Panier" 
              width={24} 
              height={24}
              className={styles.icon}
            />
          </button>
          <button className={styles.icon_button}>
            <Image 
              src="/user-icon.svg" 
              alt="Compte utilisateur" 
              width={24} 
              height={24}
              className={styles.icon}
            />
          </button>
        </div>
      </div>
    </header>
  );
}