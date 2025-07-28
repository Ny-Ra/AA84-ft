"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '@/styles/Header.module.scss';

export default function UserIcon() {
  const router = useRouter();

  const handleUserClick = () => {
    router.push('/profile');
  };

  return (
    <button className={styles.icon_button} onClick={handleUserClick}>
      <Image 
        src="/user-icon.svg" 
        alt="Compte utilisateur" 
        width={24} 
        height={24}
        className={styles.icon}
      />
    </button>
  );
}