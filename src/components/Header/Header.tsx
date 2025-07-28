"use client";

import styles from '@/styles/Header.module.scss';
import Image from 'next/image';
import UserIcon from './UserIcon';
import { usePathname } from 'next/navigation';
import { sampleProducts } from '@/data/products';

export default function Header() {
  const pathname = usePathname();
  
  const clientCategories = [
    'Tableau de bord',
    'Mes commandes',
    'Mes favoris',
    'Historique',
    'Support',
    'Notifications'
  ];
  
  const productCategories = [...new Set(sampleProducts.map(product => product.category))];
  
  const categories = pathname === '/profile' ? clientCategories : productCategories;

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
          <UserIcon />
        </div>
      </div>
    </header>
  );
}