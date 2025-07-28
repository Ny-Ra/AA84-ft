"use client";

import { useState } from 'react';
import styles from '@/styles/ProductList.module.scss';
import { sampleProducts } from '@/data/products';
import { Product } from '@/types/product';
import { Popup } from '@/components';

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };
  
  return (
    <div className={styles.productList}>
      <div className={styles.container}>
        {sampleProducts.map((product) => (
          <div 
            key={product.id} 
            className={styles.productCard}
            onClick={() => handleProductClick(product)}
          >
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
      
      <Popup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup}
        title={selectedProduct?.name}
      >
        {selectedProduct && (
          <div>
            <p><strong>Prix :</strong> {selectedProduct.price.toFixed(2)} €</p>
            <p><strong>Catégorie :</strong> {selectedProduct.category}</p>
            <p><strong>Description :</strong></p>
            <p>{selectedProduct.description}</p>
          </div>
        )}
      </Popup>
    </div>
  );
}