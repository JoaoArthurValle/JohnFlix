import React from 'react';
import styles from './Footer.module.css';

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div>
            <div className={styles.brand}>John<span className={styles.brandAccent}>flix</span></div>
            <p className={styles.copy}>© {new Date().getFullYear()} Johnflix. Todos os direitos reservados.</p>
          </div>
          <div className={styles.links}>
            <a href="#contado">Contado</a>
            <a href="#Privacidade">Privada</a>
            <a href="#termos">Termos</a>            
          </div>
        </div>
      </div>
    </footer>
  );
}
