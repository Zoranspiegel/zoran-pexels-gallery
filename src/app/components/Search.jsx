'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Search.module.css';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
        className={styles.search__input}
      />
    </form>
  );
}
