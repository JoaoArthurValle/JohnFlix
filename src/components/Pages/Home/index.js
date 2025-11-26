// src/App.jsx

import React, { useState } from 'react';   // <-- IMPORTAR useState
import styles from './Home.module.css'; // agora está sendo usado
import Banner from '../../Banner';
import Header from '../../Header';
import Contanner from '../../Contanner';
import Footer from '../../Footer';


function AppHome() {
  // Estado da busca
  const [busca, setBusca] = useState('');

  return (
    <div className={styles.container}>
      {/* Header recebe a função para atualizar a busca */}
      <Header onSearch={setBusca} />

      <Banner />

      {/* Contanner recebe o valor da busca */}
      <Contanner busca={busca} />

      <Footer />
    </div>
  );
}

export default AppHome;
