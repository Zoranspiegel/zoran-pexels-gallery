import Link from 'next/link';
import styles from './Navbar.module.css';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className={styles.navbar__nav}>
      <Link href="/">
        <h1>Pexels Next.js Gallery</h1>
      </Link>
      <Search />
    </nav>
  );
}
