import styles from './ProductList.module.scss';
import { sampleProducts } from '@/data/products';

export default function ProductList() {
  return (
    <div className={styles.productList}>
      <div className={styles.container}>
        {sampleProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productInfo}>
              <div className={styles.productHeader}>
                <h3 className={styles.productName}>{product.name}</h3>
                <span className={styles.productPrice}>{product.price.toFixed(2)} €</span>
              </div>
              <p className={styles.productDescription}>{product.description}</p>
              <span className={styles.productCategory}>{product.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}