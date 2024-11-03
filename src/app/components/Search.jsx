'use client';
import styles from './Search.module.css';

export default function Search() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search"
        className={styles.search__input}
      />
    </form>
  );
}
