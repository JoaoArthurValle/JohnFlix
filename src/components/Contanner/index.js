import React, { useRef, useEffect } from 'react';
import styles from './Contanner.module.css';
import Card from '../Card/card';

export default function Contanner({ filtro, busca }) {
  const scrollRef = useRef(null);
  const speed = 1;

  // =============================
  //  NOVOS VÍDEOS (VIDEOCLIPES)
  // =============================
  const categorias = [
  {
    titulo: 'Pop',
    chave: 'pop',
    videos: [
      { id: 'kJQP7kiw5Fk', title: 'Luis Fonsi - Despacito ft. Daddy Yankee' },
      { id: 'fRh_vgS2dFE', title: 'Justin Bieber - Sorry' },
      { id: 'papuvlVeZg8', title: 'Dua Lipa - New Rules' },
      { id: 'UceaB4D0jpo', title: 'Billie Eilish - bad guy' },
      { id: 'rJXYC4eMirE', title: 'Olivia Rodrigo - vampire' },
      { id: 'PmYypVozQW8', title: 'Tate McRae - greedy' },
      { id: 'RgKAFK5djSk', title: 'Wiz Khalifa - See You Again (Pop Mix)' },
      { id: 'HgzGwKwLmgM', title: 'Queen - Don’t Stop Me Now (Pop/Rock)' }
    ]
  },

  {
    titulo: 'Rock',
    chave: 'rock',
    videos: [
      { id: 'PpZ2kKp_YW0', title: 'Foo Fighters - The Pretender' },
      { id: 'l482T0yNkeo', title: 'Metallica - Master of Puppets' },
      { id: 'gGdGFtwCNBE', title: 'The Killers - Mr. Brightside' },
      { id: 'Axl4N2dAslc', title: 'Arctic Monkeys - Do I Wanna Know?' },
      { id: 'SkgTxQm9DWM', title: 'Rage Against The Machine - Killing In The Name' },
      { id: 'v2AC41dglnM', title: 'AC/DC - Thunderstruck' },
      { id: 'hTWKbfoikeg', title: 'Nirvana - Smells Like Teen Spirit' },
      { id: 'rO3gg2UOU9w', title: 'Imagine Dragons - Enemy (Rock/Alt)' }
    ]
  },

  {
    titulo: 'Hip-Hop / Rap',
    chave: 'rap',
    videos: [
      { id: 'Hip8p8tP5w8', title: 'Travis Scott - FE!N' },
      { id: 'gGdGFtwCNBE', title: 'Drake - God\'s Plan' },
      { id: 'ioNng23DkIM', title: 'Doja Cat - Paint The Town Red' },
      { id: 'e--A9yY3j6Q', title: '21 Savage - a lot (ft. J. Cole)' },
      { id: 'MM0lWsv6rjY', title: 'Lil Nas X - MONTERO (Call Me By Your Name)' },
      { id: 'VYOjWnS4cMY', title: 'Childish Gambino - This Is America' },
      { id: 'mWRsgZuwf_8', title: 'NF - Let You Down' },
      { id: 'xvZqHgFz51I', title: 'Kendrick Lamar - DNA.' }
    ]
  }
];


  // =============================
  //  CARROSSEL AUTOMÁTICO
  // =============================
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId;
    let paused = false;

    const step = () => {
      if (!paused) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    el.addEventListener('mouseenter', () => (paused = true));
    el.addEventListener('mouseleave', () => (paused = false));

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <main className={styles.main}>
      {categorias
        .filter(cat => !filtro || cat.chave === filtro)
        .map(cat => {
          const listaFiltrada = cat.videos.filter(v =>
            !busca || v.title.toLowerCase().includes(busca.toLowerCase())
          );

          if (listaFiltrada.length === 0) return null;

          return (
            <section key={cat.chave} className={styles.section}>
              <div className="container">
                <h2 className={styles.sectionTitle}>{cat.titulo}</h2>

                <div className={styles.carouselWrap}>
                  <div className={styles.carousel} ref={scrollRef}>
                    {listaFiltrada.map(video => (
                      <Card key={video.id} youtubeId={video.id} title={video.title} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

      <section className={styles.storySection}>
        <div className="container">
          <h3 className={styles.storyTitle}>A história do Johnflix</h3>
          <p className={styles.storyText}>
            O Johnflix agora apresenta uma seleção musical incrível, com clipes famosos de Pop, Rock e Rap.
          </p>
        </div>
      </section>
    </main>
  );
}
