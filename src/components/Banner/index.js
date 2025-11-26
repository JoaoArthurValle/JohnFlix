import React from 'react';
import styles from './Banner.module.css';

export default function Banner(){
  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>Bem-vindo ao <span>Johnflix</span></h1>
        <p className={styles.subtitle}>Séries, cursos e histórias — tudo reunido em um só lugar.</p>
        <div className={styles.ctas}>
          <button className={styles.ctaPrimary}>Assista Agora</button>
          <button className={styles.ctaGhost}>Saiba Mais</button>
        </div>
      </div>
    </section>
  );
}
