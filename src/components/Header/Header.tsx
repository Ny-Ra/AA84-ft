import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>AA84</h1>
        </div>
        <nav className={styles.nav}>
          {/* Navigation items can be added here */}
        </nav>
      </div>
    </header>
  );
}