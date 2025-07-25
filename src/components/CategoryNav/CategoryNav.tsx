import styles from './CategoryNav.module.scss';

const categories = [
  'Électronique',
  'Mode',
  'Maison & Jardin',
  'Sport & Loisirs',
  'Livres',
  'Beauté & Santé',
  'Automobile',
  'Jouets & Enfants'
];

export default function CategoryNav() {
  return (
    <nav className={styles.categoryNav}>
      <div className={styles.container}>
        <ul className={styles.categoryList}>
          {categories.map((category, index) => (
            <li key={index} className={styles.categoryItem}>
              <a href="#" className={styles.categoryLink}>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}