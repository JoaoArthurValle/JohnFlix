import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  // Atualiza busca em tempo real
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value); // envia direto para AppHome
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            John<span className={styles.logoAccent}>flix</span>
          </span>
        </div>

        <nav className={styles.nav}>
          <Link to="/" className={styles.navBtn}>Home</Link>
          <Link to="/assistir" className={styles.navBtn}>Assistir</Link>
        </nav>

        {/* Barra de busca dinâmica */}
        <div className={styles.searchForm}>
          <input
            type="text"
            placeholder="Buscar vídeo..."
            value={inputValue}
            onChange={handleChange}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>
      </div>
    </header>
  );
}
